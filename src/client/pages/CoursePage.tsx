import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { OrderedListOutlined, UserOutlined } from '@ant-design/icons';
import * as S from '@app/components/tables/Tables/Tables.styles';
import { notificationController } from '@app/controllers/notificationController';
import { CourseTable } from '@app/components/tables/CourseTable/CourseTable';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doGetLesson } from '@app/store/slices/lessonSlice';
import { Lesson } from '@app/api/lessons.api';
import { doGetCourse } from '@app/store/slices/courseSlice';
import { Course } from '@app/api/course.api';
import { BaseModal } from '@app/components/common/BaseModal/BaseModal';
import RegisterStudentModal from './RegisterStudentModal';

enum ButtonType {
  ACTIVE = 'primary',
  NONACTIVE = 'text',
}

export enum PageType {
  LESSONS = 'LESSONS',
  STUDENTS = 'STUDENTS',
  LESSON = 'LESSON',
  UNKNOWN = 'UNKNOWN',
}

const CoursePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { courseId, lessonId } = useParams();

  const [pageType, setPageType] = useState<PageType>();
  const [info, setInfo] = useState<Course | Lesson>();
  // const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setModalOpen] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  useEffect(() => {
    // setIsLoading(true);
    const pageType = detectPage();

    if (pageType !== PageType.LESSON) {
      dispatch(doGetCourse(courseId!))
        .unwrap()
        .then((result) => {
          setInfo(result);
          // setIsLoading(false);
        })
        .catch((err: { message: any }) => {
          notificationController.error({ message: err.message });
          // setIsLoading(false);
        });
    } else {
      dispatch(doGetLesson(lessonId!))
        .unwrap()
        .then((result) => {
          setInfo(result);
          // setIsLoading(false);
        })
        .catch((err: { message: any }) => {
          notificationController.error({ message: err.message });
          // setIsLoading(false);
        });
    }

    setPageType(pageType);
  }, [pathname]);

  // const { t } = useTranslation();
  // primary - active

  const detectPage = (): PageType => {
    if (lessonId) return PageType.LESSON;
    if (pathname.includes('lessons')) return PageType.LESSONS;
    if (pathname.includes('students')) return PageType.STUDENTS;
    console.error('UNKNOWN PageType', pathname);
    return PageType.UNKNOWN;
  };

  const getBtnType = (btnTo: PageType): ButtonType => {
    return btnTo === pageType ? ButtonType.ACTIVE : ButtonType.NONACTIVE;
  };

  return (
    <>
      <PageTitle>Kurz</PageTitle>
      {pageType !== PageType.LESSON && (
        <BaseRow gutter={{ xs: 10, md: 15, xl: 30 }}>
          <BaseCol xs={24} md={12}>
            <BaseButton
              type={getBtnType(PageType.LESSONS)}
              onClick={() => navigate(`/course/${courseId}/lessons`)}
              size="large"
            >
              <OrderedListOutlined />
              Lekce
            </BaseButton>
          </BaseCol>

          <BaseCol xs={24} md={12}>
            <BaseButton
              type={getBtnType(PageType.STUDENTS)}
              onClick={() => navigate(`/course/${courseId}/students`)}
              size="large"
            >
              <UserOutlined />
              Studenti
            </BaseButton>
          </BaseCol>
        </BaseRow>
      )}

      <S.TablesWrapper>
        <S.Card id="basic-table" title={info?.name} padding="1.25rem 1.25rem 0">
          <CourseTable courseId={courseId} lessonId={lessonId} type={pageType} setModalOpen={setModalOpen} setEditableStudent={setEditableStudent} />
        </S.Card>
      </S.TablesWrapper>

      {pageType !== PageType.STUDENTS && (
        <BaseModal
          title="Registrace studenta"
          centered
          open={isOpen}
          onCancel={() => setModalOpen(false)}
          size="medium"
          footer={false}
        >
          <RegisterStudentModal courseId={courseId} lessonId={lessonId} type={pageType} setModalOpen={setModalOpen} editableStudent={editableStudent} setEditableStudent={setEditableStudent}/>
        </BaseModal>
      )}
    </>
  );
};

export default CoursePage;
