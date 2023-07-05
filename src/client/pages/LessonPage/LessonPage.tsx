import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { notificationController } from '@app/controllers/notificationController';
import { CourseTable } from '@app/components/tables/CourseTable/CourseTable';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doGetLesson, doGetLessonsByCourseId } from '@app/store/slices/lessonSlice';
import { Lesson } from '@app/api/lessons.api';
import { doGetCourse } from '@app/store/slices/courseSlice';
import { Course } from '@app/api/course.api';
import { BaseModal } from '@app/components/common/BaseModal/BaseModal';
import RegisterStudentPage from '../RegisterStudentModal';
import RegisterStudentModal from '../RegisterStudentModal';
import { BaseFormTitle } from '@app/components/common/forms/components/BaseFormTitle/BaseFormTitle';
import { BaseTabs } from '@app/components/common/BaseTabs/BaseTabs';
import { useTranslation } from 'react-i18next';
import * as S from './LessonPage.styles';
import { CodeEditor } from './CodeEditor';
import { randomId } from '../../../randomId';
import { diff } from './diff';
import { json1Presence } from '../../../ot';
// @ts-ignore
import ShareDBClient from 'sharedb-client-browser/dist/sharedb-client-umd.cjs';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';

interface FilesData {
    htmlFileId: string,
    cssFileId: string,
    jsFileId: string
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
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    let { courseId, lessonId } = useParams();

    const [pageData, setPageData] = useState<Lesson>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        
        dispatch(doGetLesson(lessonId!))
        .unwrap()
        .then((result) => {
            console.log(result)
            setPageData(result);
            setIsLoading(false);
        })
        .catch((err: { message: any; }) => {
            notificationController.error({ message: err.message });
            setIsLoading(false);
        });
        

    }, [pathname])


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
        jsFileId: ''
    });

    // Set up the connection to ShareDB.
    useEffect(() => {
        // Since there is only ever a single document,
        // these things are pretty arbitrary.
        //  * `collection` - the ShareDB collection to use
        //  * `id` - the id of the ShareDB document to use
        const collection = 'documents';
        const id = '1';

        // Initialize the ShareDB document.
        const shareDBDoc = connection.get(collection, id);

        // Subscribe to the document to get updates.
        // This callback gets called once only.
        shareDBDoc.subscribe(() => {
            // Expose ShareDB doc to downstream logic.
            setShareDBDoc(shareDBDoc);

            const fileStructure = {
                htmlFileId: '',
                cssFileId: '',
                jsFileId: ''
            }

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

            // Listen for all changes and update `data`.
            // This decouples rendering logic from ShareDB.
            // This callback gets called on each change.
            shareDBDoc.on('op', (op: any) => {
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
            });

            // Set up presence.
            // See https://github.com/share/sharedb/blob/master/examples/rich-text-presence/client.js#L53
            const docPresence = shareDBDoc.connection.getDocPresence(collection, id);

            // Subscribe to receive remote presence updates.
            docPresence.subscribe(function (error: any) {
                if (error) throw error;
            });

            // Set up our local presence for broadcasting this client's presence.
            setLocalPresence(docPresence.create(randomId()));

            // Store docPresence so child components can listen for changes.
            setDocPresence(docPresence);
        });

        // TODO unsubscribe from presence
        // TODO unsubscribe from doc
    }, []);

    const commonTabs = useMemo(
        () => [
          {
            key: '1',
            label: 'HTML',
            children: <>{data && data.htmlFileId ? (
                <CodeEditor
                    shareDBDoc={shareDBDoc}
                    localPresence={localPresence}
                    docPresence={docPresence}
                    activeFileId={data.htmlFileId}
                />
            ) : null}</>,
          },
          {
            key: '2',
            label: 'CSS',
            children: <>{data && data.cssFileId ? (
                <CodeEditor
                    shareDBDoc={shareDBDoc}
                    localPresence={localPresence}
                    docPresence={docPresence}
                    activeFileId={data.cssFileId}
                />
            ) : null}</>,
          },
          {
            key: '3',
            label: 'JS',
            children: <>{data && data.jsFileId ? (
                <CodeEditor
                    shareDBDoc={shareDBDoc}
                    localPresence={localPresence}
                    docPresence={docPresence}
                    activeFileId={data.jsFileId}
                />
            ) : null}</>,
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
