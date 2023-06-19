import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { Step1 } from './Steps/Step1';
import { Step2 } from './Steps/Step2';
import { Step3 } from './Steps/Step3';
import { notificationController } from '@app/controllers/notificationController';
import * as S from './CreatorForm.styles';
import { Steps } from './CreatorForm.styles';
import { Course, CourseCreatorData, getCourses } from '@app/api/course.api';
import { mergeBy } from '@app/utils/utils';

interface FormValues {
  [key: string]: string | undefined;
}

interface FieldData {
  name: string | number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
}

export const CreatorForm: React.FC = () => {
  const { t } = useTranslation();
  const [form] = BaseForm.useForm();
  
  const [fromData, setFormData] = useState<CourseCreatorData>();
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    getCourses().then((result) => {
      setCourses(result);
    });
  }, []);

  const next = () => {
    form.validateFields().then(() => {
      setCurrent(current + 1);
    });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // kazdy step je rerender
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setFormData((oldValues) => ({...oldValues, ...values}))
    next()
  };

  const steps = [
    {
      title: 'General',
    },
    {
      title: 'Lessons',
    },
    {
      title: t('forms.stepFormLabels.confirm'),
    }
  ];

  const formFieldsUi = [
    <Step1 key="1" courses={courses} />,
    <Step2 key="2" />,
    <Step3 key="3" formValues={fromData} />
  ];

  return (
    <BaseForm
      name="creatorForm"
      form={form}
      onFinish={onFinish}
    >
      <Steps size="small" current={current} items={steps} />
      <div>{formFieldsUi[current]}</div>

      <S.Row>
        {current > 0 && (
          <S.PrevButton type="default" onClick={() => prev()}>
            {t('forms.stepFormLabels.previous')}
          </S.PrevButton>
        )}
        {current < steps.length - 1 && (
          <BaseButton type="primary" htmlType="submit">
            {t('forms.stepFormLabels.next')}
          </BaseButton>
        )}
        {current === steps.length - 1 && (
          <BaseButton type="primary" loading={isLoading} onClick={() => console.log(fromData)}>
            {t('forms.stepFormLabels.done')}
          </BaseButton>
        )}
      </S.Row>
    </BaseForm>
  );
};
