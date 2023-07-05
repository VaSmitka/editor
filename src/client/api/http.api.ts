import axios, { AxiosResponse } from 'axios';
import { AxiosError } from 'axios';
import { ApiError } from '@app/api/ApiError';
import { readToken } from '@app/services/localStorage.service';

export interface Response<T> {
  total: number;
  limit: number;
  skip: number;
  data: T[];
}

export const httpApi = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
});

httpApi.interceptors.request.use((config) => {
  // @ts-ignore: TODO
  config.headers = { ...config.headers, Authorization: `Bearer ${readToken()}` };

  return config;
});

httpApi.interceptors.response.use(undefined, (error: AxiosError) => {
  throw new ApiError<AxiosResponse>(error.message, error.response);
});
