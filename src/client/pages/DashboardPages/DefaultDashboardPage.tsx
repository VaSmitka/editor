import React, { useEffect, useState } from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { CourseTable } from '@app/components/tables/CourseTable/CourseTable';
import { PageType } from '../CoursePage';
import { doGetCoursesByStudent } from '@app/store/slices/courseSlice';
import { CourseCreatorData } from '@app/api/course.api';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import { Role } from '@app/api/auth.api';


const DefaultDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const [studentCourses, setStudentCourses] = useState<any>([]);

  useEffect(() => {
    if (user!.role === Role.student) {
      dispatch(doGetCoursesByStudent(user!.id.toString()))
        .unwrap()
        .then((result: CourseCreatorData[]) => {
          setStudentCourses(result);
        })
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nepovedlo se načíst kurzy podle uživatel' });
        });
    }

  }, [])

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <BaseRow gutter={[60, 60]}>
          { user!.role === Role.student &&
            studentCourses.map((course:any) => <BaseCol span={24}>
              <S.Card id="basic-table" title={course.name} >
                <CourseTable courseId={course.id} type={PageType.LESSONS} />
              </S.Card>
            </BaseCol>)
          }
        </BaseRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>
      <BaseCol span={24}>
        { user!.role === Role.student &&
            studentCourses.map((course:any) => <BaseCol span={24}>
              <S.Card id="basic-table" title={course.name} >
                <CourseTable courseId={course.id} type={PageType.LESSONS} />
              </S.Card>
            </BaseCol>)
          }
      </BaseCol>

      <BaseCol span={24}>

      </BaseCol>

      <BaseCol span={24}>

      </BaseCol>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>Přehled</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default DefaultDashboardPage;
