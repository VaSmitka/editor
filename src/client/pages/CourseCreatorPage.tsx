import React from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { CreatorForm } from '@app/components/forms/CourseCreator/CreatorForm';

const CourseCreator: React.FC = () => {
  // const { t } = useTranslation();
  return (
    <>
      <PageTitle>Tvorba kurzu</PageTitle>
      <CreatorForm />
    </>
  );
};

export default CourseCreator;
