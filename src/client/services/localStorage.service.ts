import { UserModel } from '@app/domain/UserModel';
const avatarImg = import.meta.env.VITE_REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

const testUser = {
  id: 1,
  firstName: 'Chris',
  lastName: 'Johnson',
  imgUrl: avatarImg,
  userName: '@john1989',
  email: {
    name: 'chris.johnson@altence.com',
    verified: true,
  },
};

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const readToken = (): string => {
  return localStorage.getItem('accessToken') || '';
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');

  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
