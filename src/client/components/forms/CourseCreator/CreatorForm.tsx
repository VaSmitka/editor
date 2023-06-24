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
import { Course, CourseCreatorData } from '@app/api/course.api';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doGetCourses, doCreateCourse } from '@app/store/slices/courseSlice';
import { Lesson } from '@app/api/lessons.api';
import { doGetLessonsByCourseId } from '@app/store/slices/lessonSlice';


export const CreatorForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const user = useAppSelector((state) => state.user.user);

  const [form] = BaseForm.useForm();
  
  const [fromData, setFormData] = useState<CourseCreatorData>();
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setIsLoading(true);
    dispatch(doGetCourses())
      .unwrap()
      .then((result) => {
        setCourses(result);
        setIsLoading(false);
      })
      .catch((err: { message: any; }) => {
        notificationController.error({ message: err.message });
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (fromData?.template) {
      setIsLoading(true);
      dispatch(doGetLessonsByCourseId(fromData.template))
        .unwrap()
        .then((result: Lesson[]) => {
          form.setFieldValue('lessons', result)
          setIsLoading(false);
        })
        .catch((err: { message: any; }) => {
          notificationController.error({ message: err.message });
          setIsLoading(false);
        });
    }

  }, [fromData?.template]);

  const next = () => {
    form.validateFields().then(() => {
      setCurrent(current + 1);
    });
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  // kazdy step je rerender
  const onFinishPart = (values: any) => {
    setFormData((oldValues) => ({...oldValues, ...values}))
    next()
  };

  const onDone = () => {
    const {name, description, lessons, template} = fromData!;

    const request = {
      name,
      description,
      template,
      lessons,
      creator: user!.id
    }

    console.log(request)
    setIsLoading(true);
    dispatch(doCreateCourse(request))
      .unwrap()
      .then(() => navigate('/'))
      .catch((err: { message: any; }) => {
        notificationController.error({ message: err.message });
        setIsLoading(false);
      });
  }

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
      onFinish={onFinishPart}
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
          <BaseButton type="primary" loading={isLoading} onClick={() => onDone()}>
            {t('forms.stepFormLabels.done')}
          </BaseButton>
        )}
      </S.Row>
    </BaseForm>
  );
};
