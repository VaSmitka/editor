import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { SignUpFormData } from '@app/components/auth/SignUpForm/SignUpForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { useTranslation } from 'react-i18next';
import { notificationController } from '@app/controllers/notificationController';
import { StudentSignUpRequest } from '@app/api/auth.api';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { PageType } from './CoursePage';
import { doStudentSignUpToLesson, doStudentSignUpToLessons } from '@app/store/slices/authSlice';

interface RegisterStudentModalProps {
  courseId: string | undefined,
  lessonId: string | undefined,
  type: PageType | undefined,
  setModalOpen: any
}

const RegisterStudentModal: React.FC<RegisterStudentModalProps> = ({ courseId, lessonId, type, setModalOpen }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: SignUpFormData) => {
    const {confirmPassword, termOfUse, ...data} = values;
    
    const request: StudentSignUpRequest = {
      ...data,
      role: 'student',
      course_id: parseInt(courseId!),
      lesson_id: parseInt(lessonId || '-1'), // -1 as invalide value
    }
    console.log(request)

    setLoading(true);
    if (type === PageType.STUDENTS) {
      dispatch(doStudentSignUpToLessons(request))
      .unwrap()
      .then(() => {
        setLoading(false);
        notificationController.success({
          message: t('auth.signUpSuccessMessage'),
          description: t('auth.signUpSuccessDescription'),
        });
        setModalOpen(false);
      })
      .catch((err: { message: any; }) => {
        notificationController.error({ message: err.message });
        setLoading(false);
      });
    }
    if (type === PageType.LESSON) {
      dispatch(doStudentSignUpToLesson(request))
      .unwrap()
      .then(() => {
        notificationController.success({
          message: t('auth.signUpSuccessMessage'),
          description: t('auth.signUpSuccessDescription'),
        });
        setModalOpen(false);
      })
      .catch((err: { message: any; }) => {
        notificationController.error({ message: err.message });
        setLoading(false);
      });
    }
  };

  return (
    <BaseCard>
      <PageTitle>Register Student</PageTitle>
        <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional">
            <Auth.FormItem
                name="firstName"
                label={t('common.firstName')}
                rules={[{ required: true, message: t('common.requiredField') }]}
                >
                <Auth.FormInput placeholder={t('common.firstName')} />
            </Auth.FormItem>
            <Auth.FormItem
                name="lastName"
                label={t('common.lastName')}
                rules={[{ required: true, message: t('common.requiredField') }]}
                >
                <Auth.FormInput placeholder={t('common.lastName')} />
            </Auth.FormItem>
            <Auth.FormItem
                name="email"
                label={t('common.email')}
                rules={[
                    { required: true, message: t('common.requiredField') },
                    {
                    type: 'email',
                    message: t('common.notValidEmail'),
                    },
                ]}
                >
                <Auth.FormInput placeholder={t('common.email')} />
            </Auth.FormItem>
            <Auth.FormItem
                label={t('common.password')}
                name="password"
                rules={[{ required: true, message: t('common.requiredField') }]}
                >
                <Auth.FormInputPassword placeholder={t('common.password')} />
            </Auth.FormItem>
            <Auth.FormItem
                label={t('common.confirmPassword')}
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                    { required: true, message: t('common.requiredField') },
                    ({ getFieldValue }) => ({
                    validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                        }
                        return Promise.reject(new Error(t('common.confirmPasswordError')));
                    },
                    }),
                ]}
                >
            <Auth.FormInputPassword placeholder={t('common.confirmPassword')} />
            </Auth.FormItem>
            <Auth.ActionsWrapper>
            </Auth.ActionsWrapper>
            <BaseForm.Item noStyle>
                <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
                    {t('common.signUp')}
                </Auth.SubmitButton>
            </BaseForm.Item>
        </BaseForm>
    </BaseCard>
  );
};

export default RegisterStudentModal;