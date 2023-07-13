import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useLocation, useParams } from 'react-router-dom';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetLesson, doGetLessonTask, doGetLessonTaskCommit } from '@app/store/slices/lessonSlice';
import { Lesson } from '@app/api/lessons.api';
import { BaseTabs } from '@app/components/common/BaseTabs/BaseTabs';
import * as S from './LessonPage.styles';
import { CodeEditor } from './CodeEditor';
import { randomId } from '../../../randomId';
import { json1Presence } from '../../../ot';
// @ts-ignore
import ShareDBClient from 'sharedb-client-browser/dist/sharedb-client-umd.cjs';
import { Loading } from '@app/components/common/Loading/Loading';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseTooltip } from '@app/components/common/BaseTooltip/BaseTooltip';
import { LessonStatus } from '@app/api/table.api';
import { Placeholder } from '@app/components/Error/Placeholder';

import error404 from '@app/assets/images/error404.svg';
import { Role } from '@app/api/auth.api';

interface FilesData {
  htmlFileId: string;
  cssFileId: string;
  jsFileId: string;
}

// Register our custom JSON1 OT type that supports presence.
// See https://github.com/vizhub-core/json1-presence
ShareDBClient.types.register(json1Presence.type);

// Establish the singleton ShareDB connection over WebSockets.
// TODO consider using reconnecting WebSocket
const { Connection } = ShareDBClient;
const socket = new WebSocket('ws://localhost:3030/ws');
const connection = new Connection(socket);

const previewBaseUrl = `${import.meta.env.VITE_REACT_APP_BASE_URL}/studentDirectory/`

const LessonPage: React.FC = () => {
  // const { t } = useTranslation();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { studentId, lessonId } = useParams();
  const user = useAppSelector((state) => state.user.user);

  const [pageData, setPageData] = useState<Lesson>();
  const [loading, setIsLoading] = useState(false);

  const initialized = useRef(false);
  const [oldPathname, setPathname] = useState<string>(pathname)

  const [iframeKey, setiframeKey] = useState(0)

  // The ShareDB document.
  const [shareDBDoc, setShareDBDoc] = useState(null);

  // Local ShareDB presence, for broadcasting our cursor position
  // so other clients can see it.
  // See https://share.github.io/sharedb/api/local-presence
  const [localPresence, setLocalPresence] = useState(null);

  // The document-level presence object, which emits
  // changes in remote presence.
  const [docPresence, setDocPresence] = useState(null);

  // The `doc.data` part of the ShareDB document,
  // updated on each change to decouple rendering from ShareDB.
  const [data, setData] = useState<FilesData>({
    htmlFileId: '',
    cssFileId: '',
    jsFileId: '',
  });

  // Since there is only ever a single document,
  // these things are pretty arbitrary.
  //  * `collection` - the ShareDB collection to use
  //  * `id` - the id of the ShareDB document to use
  const collectionId = `${studentId || 'edit'}-${lessonId}`;
  const id = '1';

  useEffect(() => {  
    dispatch(doGetLesson(lessonId!))
      .unwrap()
      .then((result) => {
        setPageData(result);
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nelze získat lekci' });
      });

    if (!initialized.current || pathname !== oldPathname) {
      initialized.current = true;
      setIsLoading(true);
      setPathname(pathname);
      console.log('init code')

      // Initialize the ShareDB document.
      const shareDBDoc = connection.get(collectionId, id);

      // Subscribe to the document to get updates.
      // This callback gets called once only.
      shareDBDoc.subscribe(() => {
        // Expose ShareDB doc to downstream logic.
        setShareDBDoc(shareDBDoc);

        if (!shareDBDoc.type) {
          initialShareDb(collectionId);
        } else {
          actualizeDataStructure(shareDBDoc);
        }

        // Listen for all changes and update `data`.
        // This decouples rendering logic from ShareDB.
        // This callback gets called on each change.
        shareDBDoc.on('create', (_op: any) => {
          actualizeDataStructure(shareDBDoc);
        });
        shareDBDoc.on('op', (_op: any) => {
          // no real time because on backend files are saving each 800 ms
          // refreshPreview()
          actualizeDataStructure(shareDBDoc);
        });

        // Set up presence.
        // See https://github.com/share/sharedb/blob/master/examples/rich-text-presence/client.js#L53
        const docPresence = shareDBDoc.connection.getDocPresence(collectionId, id);

        // Subscribe to receive remote presence updates.
        docPresence.subscribe(function (error: any) {
          if (error) throw error;
        });

        // Set up our local presence for broadcasting this client's presence.
        setLocalPresence(docPresence.create(randomId()));

        // Store docPresence so child components can listen for changes.
        setDocPresence(docPresence);
      });
    }

    return () => {
      commitLesson(collectionId);
    }
  }, [pathname]);

  const initialShareDb = (collectionId:string) => {
    dispatch(doGetLessonTask({ collectionId }))
      .unwrap()
      .then((result) => {
        console.log('result', result);
        setIsLoading(false);
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nelze získat informace k lekci' });
        setIsLoading(false);
      });
  };

  const commitLesson = (collectionId: string) => {
    if (user?.id && pageData?.name) {
      dispatch(doGetLessonTaskCommit({ collectionId, userId: user?.id, lessonName: pageData?.name }))
        .unwrap()
        .then((result) => {
          console.log('commit result', result);
          setIsLoading(false);
        })
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nelze uložit data do githubu' });
          setIsLoading(false);
        });
    }
  }

  const actualizeDataStructure = (shareDBDoc: any) => {
    const fileStructure = {
      htmlFileId: '',
      cssFileId: '',
      jsFileId: '',
    };

    for (const [key, value] of Object.entries(shareDBDoc.data)) {
      // @ts-ignore
      if (value.name.includes('html')) fileStructure.htmlFileId = key;
      // @ts-ignore
      if (value.name.includes('css')) fileStructure.cssFileId = key;
      // @ts-ignore
      if (value.name.includes('js')) fileStructure.jsFileId = key;
    }

    // Set initial data.
    setData(fileStructure);
    setIsLoading(false);
  };

  const commonTabs = useMemo(
    () => [
      {
        key: '1',
        label: <BaseTooltip title="index.html">HTML</BaseTooltip>,
        children: (
          <S.EditorBox>
            {data && data.htmlFileId ? (
              <CodeEditor
                shareDBDoc={shareDBDoc}
                localPresence={localPresence}
                docPresence={docPresence}
                activeFileId={data.htmlFileId}
              />
            ) : null}
          </S.EditorBox>
        ),
      },
      {
        key: '2',
        label: <BaseTooltip title="style.css">CSS</BaseTooltip>,
        children: (
          <S.EditorBox>
            {data && data.cssFileId ? (
              <CodeEditor
                shareDBDoc={shareDBDoc}
                localPresence={localPresence}
                docPresence={docPresence}
                activeFileId={data.cssFileId}
              />
            ) : null}
          </S.EditorBox>
        ),
      },
      {
        key: '3',
        label: <BaseTooltip title="index.js">JavaScript</BaseTooltip>,
        children: (
          <S.EditorBox>
            {data && data.jsFileId ? (
              <CodeEditor
                shareDBDoc={shareDBDoc}
                localPresence={localPresence}
                docPresence={docPresence}
                activeFileId={data.jsFileId}
              />
            ) : null}
          </S.EditorBox>
        ),
      },
    ],
    [data],
  );

  const refreshPreview = () => {
    setiframeKey(oldValue => oldValue + 1)
  }

  console.log(loading, !pageData )
  return loading ? <Loading /> : (
        (user?.role === Role.student && pageData?.status === LessonStatus.SEED) ? (
      <Placeholder img={error404} msg="Cvičení není ještě připravené" />
    ) : (
    <>
      <PageTitle>{`Lekce ${pageData?.name}`}</PageTitle>


      <BaseRow>
        <S.Title level={2}>{pageData?.name}</S.Title>
        <BaseButton onClick={() => commitLesson(collectionId)}>Save to Github</BaseButton> 
      </BaseRow>       

      <BaseRow wrap={false}>
        <S.Title level={4}>Zadání</S.Title>
        <p>{pageData?.description}</p>
      </BaseRow>

      <S.Col>
        <BaseTabs defaultActiveKey="1" items={commonTabs} />
      </S.Col>

      <BaseRow>
        <S.Title className="mr-2" level={2}>Preview</S.Title>{' '}
        <BaseButton onClick={() => refreshPreview()}>Refresh</BaseButton>
      </BaseRow>

      <S.IFrame key={iframeKey} src={`${previewBaseUrl}${collectionId}/`}/>
    </>
  )

  

  );
};

export default LessonPage;
