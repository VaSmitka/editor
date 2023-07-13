import { httpApi } from '@app/api/http.api';
import { LessonStatus } from './table.api';

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface Lesson {
  id?: number;
  name: string;
  description: string;
  status?: LessonStatus;
  task?: string;
  creator?: number;
  created_at?: string;
}

export interface LessonsResponse {
  data: Lesson[];
}

export type LessonTableRow = Lesson;

export const getLesson = (id: string): Promise<Lesson> => httpApi.get(`lessons/${id}`).then(({ data }) => data);

export const getLessonTaskCommit = (collectionId: string, userId: number, lessonName: string): Promise<Lesson> =>
  httpApi.post('lesson/task/', {collectionId, userId, lessonName}).then(({ data }) => data);

export const getLessonTask = (collectionId: string | undefined): Promise<Lesson> =>
  httpApi.get(`lesson/task/${collectionId}`).then(({ data }) => data);

export const getLessonsDataByCourseId = (courseId: string, _pagination: Pagination): Promise<LessonsResponse> =>
  httpApi.get(`lessons?course_id=${courseId}`).then(({ data }) => data);

export const getLessonStudents = (id: string): Promise<any> =>
  httpApi.get(`lesson/users?lesson_id=${id}`).then((data) => data.data);

export const updateLesson = (lessonData: any): Promise<Lesson> =>
  httpApi.put(`lessons/${lessonData.id}`, lessonData).then(({ data }) => data);

export const updateStudentsLesson = (lessonData: any): Promise<Lesson> =>
  httpApi.put(`lesson/users/${lessonData.id}`, lessonData).then(({ data }) => data);

export const removeLesson = (lessonId: number): Promise<Lesson> =>
  httpApi.delete(`lessons/${lessonId}`).then(({ data }) => data);
