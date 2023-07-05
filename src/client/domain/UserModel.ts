import { Role } from '@app/api/auth.api';

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
  email: {
    name: string;
    verified: boolean;
  };
  role: Role;
  lang: 'en';
}
