import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doSignUp } from '@app/store/slices/authSlice';
import { notificationController } from '@app/controllers/notificationController';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import * as S from './SignUpForm.styles';
import { Role, SignUpRequest } from '@app/api/auth.api';

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termOfUse: boolean;
}

type SingUpProps = {
  role: Role;
};

const initValues = {
  firstName: 'Chris',
  lastName: 'Johnson',
  email: 'chris.johnson@altence.com',
  password: 'test-pass',
  confirmPassword: 'test-pass',
  termOfUse: true,
};

export const SignUpForm: React.FC<SingUpProps> = ({ role }: SingUpProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setLoading] = useState(false);

  const { t } = useTranslation();

  const handleSubmit = (values: SignUpFormData) => {
    const { confirmPassword, termOfUse, ...data } = values;

    const request: SignUpRequest = {
      ...data,
      role,
    };

    setLoading(true);
    dispatch(doSignUp(request))
      .unwrap()
      .then(() => {
        notificationController.success({
          message: t('auth.signUpSuccessMessage'),
          description: t('auth.signUpSuccessDescription'),
        });
        navigate('/auth/login');
      })
      .catch((_err) => {
        notificationController.error({ message: 'Nepovedlo se zaregistrovat' });
        setLoading(false);
      });
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional" initialValues={initValues}>
        <S.Title>{t('common.signUp')}</S.Title>
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
        <Auth.ActionsWrapper>
          <BaseForm.Item name="termOfUse" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <Auth.Text>
                {t('signup.agree')}{' '}
                <Link to="/" target={'_blank'}>
                  <Auth.LinkText>{t('signup.termOfUse')}</Auth.LinkText>
                </Link>{' '}
                and{' '}
                <Link to="/" target={'_blank'}>
                  <Auth.LinkText>{t('signup.privacyOPolicy')}</Auth.LinkText>
                </Link>
              </Auth.Text>
            </Auth.FormCheckbox>
          </BaseForm.Item>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.signUp')}
          </Auth.SubmitButton>
        </BaseForm.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t('signup.alreadyHaveAccount')}{' '}
            <Link to="/auth/login">
              <Auth.LinkText>{t('common.here')}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
