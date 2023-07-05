import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useLocation, useParams } from 'react-router-dom';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetLesson, doGetLessonTask } from '@app/store/slices/lessonSlice';
import { Lesson } from '@app/api/lessons.api';
import { BaseTabs } from '@app/components/common/BaseTabs/BaseTabs';
import * as S from './LessonPage.styles';
import { CodeEditor } from './CodeEditor';
import { randomId } from '../../../randomId';
import { json1Presence } from '../../../ot';
// @ts-ignore
import ShareDBClient from 'sharedb-client-browser/dist/sharedb-client-umd.cjs';

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

const LessonPage: React.FC = () => {
  // const { t } = useTranslation();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { studentId, lessonId } = useParams();
  const user = useAppSelector((state) => state.user.user);

  const [pageData, setPageData] = useState<Lesson>();
  const [, setIsLoading] = useState(false);

  const initialized = useRef(false);
  const [oldPathname, setPathname] = useState<string>(pathname)

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

  useEffect(() => {      
    dispatch(doGetLesson(lessonId!))
      .unwrap()
      .then((result) => {
        setPageData(result);
      })
      .catch((err: { message: any }) => {
        notificationController.error({ message: err.message });
      });

    // Since there is only ever a single document,
    // these things are pretty arbitrary.
    //  * `collection` - the ShareDB collection to use
    //  * `id` - the id of the ShareDB document to use
    const collectionId = `${studentId || 'edit'}-${lessonId}`;
    const id = '1';

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

        shareDBDoc
      });
    }

    return () => {

    }
  }, [pathname]);

  const initialShareDb = (collectionId:string) => {
    dispatch(doGetLessonTask({ collectionId }))
      .unwrap()
      .then((result) => {
        console.log('result', result);
        setIsLoading(false);
      })
      .catch((err: { message: any }) => {
        notificationController.error({ message: err.message });
        setIsLoading(false);
      });
  };

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
  };

  const commonTabs = useMemo(
    () => [
      {
        key: '1',
        label: 'HTML',
        children: (
          <>
            {data && data.htmlFileId ? (
              <CodeEditor
                shareDBDoc={shareDBDoc}
                localPresence={localPresence}
                docPresence={docPresence}
                activeFileId={data.htmlFileId}
              />
            ) : null}
          </>
        ),
      },
      {
        key: '2',
        label: 'CSS',
        children: (
          <>
            {data && data.cssFileId ? (
              <CodeEditor
                shareDBDoc={shareDBDoc}
                localPresence={localPresence}
                docPresence={docPresence}
                activeFileId={data.cssFileId}
              />
            ) : null}
          </>
        ),
      },
      {
        key: '3',
        label: 'JS',
        children: (
          <>
            {data && data.jsFileId ? (
              <CodeEditor
                shareDBDoc={shareDBDoc}
                localPresence={localPresence}
                docPresence={docPresence}
                activeFileId={data.jsFileId}
              />
            ) : null}
          </>
        ),
      },
    ],
    [data],
  );

  return (
    <>
      <PageTitle>{`Lesson ${pageData?.name}`}</PageTitle>
      <S.Title>{pageData?.name}</S.Title>
      <BaseCol>
        <BaseTabs defaultActiveKey="1" items={commonTabs} />
      </BaseCol>
    </>
  );
};

export default LessonPage;
