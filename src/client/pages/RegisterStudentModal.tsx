import React, { useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { SignUpFormData } from '@app/components/auth/SignUpForm/SignUpForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { useTranslation } from 'react-i18next';
import { notificationController } from '@app/controllers/notificationController';
import { Role, StudentSignUpRequest } from '@app/api/auth.api';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { PageType } from './CoursePage';
import { doStudentSignUpToLesson, doStudentSignUpToLessons } from '@app/store/slices/authSlice';
import { doUpdateUser } from '@app/store/slices/userSlice';

interface RegisterStudentModalProps {
  courseId: string | undefined;
  lessonId: string | undefined;
  type: PageType | undefined;
  editableStudent: any;
  setEditableStudent: any;
  setModalOpen: any;
}

const RegisterStudentModal: React.FC<RegisterStudentModalProps> = ({ courseId, lessonId, type, setModalOpen, editableStudent }) => {
  const [form] = BaseForm.useForm();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (editableStudent) {
      for (const [key, value] of Object.entries(editableStudent)) {
        form.setFieldValue(key, value);
      }
    } else {
      form.resetFields()
    }

  }, [editableStudent])


  const handleSubmit = (values: SignUpFormData) => {
    const { confirmPassword, termOfUse, ...data } = values;

    const request: StudentSignUpRequest = {
      ...data,
      role: Role.student,
      course_id: parseInt(courseId!),
      lesson_id: parseInt(lessonId || '-1'), // -1 as invalide value
    };
    console.log(request);

    setLoading(true);
    if (type === PageType.STUDENTS) {
      if (!editableStudent) {
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
          .catch((_err: { message: any }) => {
            notificationController.error({ message: 'Nelze vytvořit studenta'});
            setLoading(false);
          });
      } else {
        // add id for update
        request.id = editableStudent.id;

        dispatch(doUpdateUser(request))
          .unwrap()
          .then(() => {
            setLoading(false);
            notificationController.success({
              message: t('auth.signUpSuccessMessage'),
              description: t('auth.signUpSuccessDescription'),
            });
            setModalOpen(false);
          })
          .catch((_err: { message: any }) => {
            notificationController.error({ message: 'Nelze aktualizovat studenta'});
            setLoading(false);
          });
      }
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
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nelze zaregistrovat studenta' });
          setLoading(false);
        });
    }
  };

  return (
    <BaseCard>
      <PageTitle>Register Student</PageTitle>
      <BaseForm form={form} layout="vertical"  onFinish={handleSubmit} requiredMark="optional">
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
            ({ getFieldValue }: {getFieldValue:any}) => ({
              validator(_: any, value: any) {
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
        <Auth.ActionsWrapper></Auth.ActionsWrapper>
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
