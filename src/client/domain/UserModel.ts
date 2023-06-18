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
  lang: 'en';
}
