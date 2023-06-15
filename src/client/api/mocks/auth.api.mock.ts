import { httpApiMock } from '@app/api/mocks/http.api.mock';
import { AuthData } from '@app/api/auth.api';
import { initValues } from '@app/components/auth/LoginForm/LoginForm';

const avatarImg = import.meta.env.VITE_REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

httpApiMock.onPost('login').reply((config) => {
  const data: AuthData = JSON.parse(config.data || '');
  if (data.password === initValues.password) {
    return [
      200,
      {
        token: 'bearerToken',
        user: {
          id: 1,
          firstName: 'Chris',
          lastName: 'Johnson',
          imgUrl: avatarImg,
          userName: '@john1989',
          email: {
            name: 'chris.johnson@altence.com',
            verified: false,
          },
          sex: 'male',
          lang: 'en',
          country: 'GB',
          city: 'London',
          address1: '14 London Road',
          zipcode: 5211,
        },
      },
    ];
  } else return [401, { message: 'Invalid Credentials' }];
});

httpApiMock.onPost('signUp').reply(200);

httpApiMock.onPost('forgotPassword').reply(200);

httpApiMock.onPost('verifySecurityCode').reply(200);

httpApiMock.onPost('setNewPassword').reply(200);
