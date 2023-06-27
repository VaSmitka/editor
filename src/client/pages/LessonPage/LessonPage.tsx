import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { OrderedListOutlined, UserOutlined } from '@ant-design/icons';
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

    return (
        <>
            <PageTitle>{`Lesson ${pageData?.name}`}</PageTitle>
            <S.Title>{pageData?.name}</S.Title>
            <BaseCol>
                <BaseTabs
                tabPosition="top"
                items={[
                    {
                    key: '1',
                    label: 'HTML',
                    children: <CodeEditor
                            shareDBDoc={null}
                            localPresence={null}
                            docPresence={null}
                            activeFileId={null}
                        />,
                    },
                    {
                    key: '2',
                    label: 'CSS',
                    children: `${t('tabs.tabContent')} 2`,
                    },
                    {
                    key: '3',
                    label: 'JavaScript',
                    children: `${t('tabs.tabContent')} 3`,
                    },
                ]}
                />
            </BaseCol>
        </>
    );
};

export default LessonPage;
