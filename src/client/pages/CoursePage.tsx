import React from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { CreatorForm } from '@app/components/forms/CourseCreator/CreatorForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { UserOutlined } from '@ant-design/icons';

const CoursePage: React.FC = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    let { courseId, lessonId } = useParams();

    console.log(pathname)

    // const { t } = useTranslation();
    return (
        <>
            <PageTitle>Course</PageTitle>
            <BaseRow gutter={{ xs: 10, md: 15, xl: 30 }}>
                    <BaseCol  xs={24} md={12}>
                    <BaseButton type="text" onClick={() => navigate(`/course/${courseId}/lessons`)} size="small">
                        <UserOutlined />Students
                    </BaseButton>
                </BaseCol>

                <BaseCol xs={24} md={12}>
                    <BaseButton type="text" onClick={() => navigate(`/course/${courseId}/students`)} size="small">
                        <UserOutlined /> Lectures
                    </BaseButton>
                </BaseCol>
            </BaseRow>
        </>
    );
};

export default CoursePage;
