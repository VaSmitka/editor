import { httpApi } from '@app/api/http.api';
import { TypeWorkStatus } from '@app/constants/enums/enums';
import { UserModel } from '@app/domain/UserModel';

export enum Role {
  teacher = 'teacher',
  student = 'student',
}

export interface AuthData {
  email: string;
  password: string;
}

export interface StudentSignUpRequest extends SignUpRequest {
  id?: number;
  course_id?: number;
  lesson_id?: number;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
}

export interface ResetPasswordRequest {
  email: string;
}

export interface SecurityCodePayload {
  code: string;
}

export interface NewPasswordData {
  newPassword: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  strategy: string;
}

export interface LoginResponse {
  accessToken: string;
  user: UserModel;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}

export interface StudentInfo extends User {
  status: TypeWorkStatus;
}

export const login = (loginPayload: LoginRequest): Promise<LoginResponse> =>
  httpApi.post<LoginResponse>('authentication', { ...loginPayload }).then(({ data }) => data);

export const signUp = (signUpData: SignUpRequest): Promise<undefined> =>
  httpApi.post<undefined>('users', { ...signUpData }).then(({ data }) => data);

export const updateUser = (userId: number, userData: any): Promise<undefined> =>
  httpApi.patch<undefined>(`users/${userId}`, userData).then(({ data }) => data);

export const removeStudent = (userId: number): Promise<undefined> =>
  httpApi.delete<undefined>(`users/${userId}`).then(({ data }) => data);

export const studentSignUpToLessons = (signUpData: StudentSignUpRequest): Promise<undefined> =>
  httpApi.post<undefined>('course/users', { ...signUpData }).then(({ data }) => data);

export const studentSignUpToLesson = (signUpData: StudentSignUpRequest): Promise<undefined> =>
  httpApi.post<undefined>('lesson/users', { ...signUpData }).then(({ data }) => data);

export const resetPassword = (resetPasswordPayload: ResetPasswordRequest): Promise<undefined> =>
  httpApi.post<undefined>('forgotPassword', { ...resetPasswordPayload }).then(({ data }) => data);

export const verifySecurityCode = (securityCodePayload: SecurityCodePayload): Promise<undefined> =>
  httpApi.post<undefined>('verifySecurityCode', { ...securityCodePayload }).then(({ data }) => data);

export const setNewPassword = (newPasswordData: NewPasswordData): Promise<undefined> =>
  httpApi.post<undefined>('setNewPassword', { ...newPasswordData }).then(({ data }) => data);
