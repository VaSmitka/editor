import { httpApi } from '@app/api/http.api';
import { LessonStatus, StudentLessonStatus } from './table.api';
import { User } from './auth.api';

export interface Pagination {
  current?: number;
  pageSize?: number;
  total?: number;
}

export interface Lesson {
  id?: number;
  name: string;
  description: string;
  status?: LessonStatus | StudentLessonStatus;
  task?: string;
  creator?: number;
  created_at?: string;
  editable?: number;
  visibility?: number;
}

export interface UserHasLesson {
  progress: StudentLessonStatus;
  editable: number;
  visibility: number;
}

export interface LessonsResponse {
  data: Lesson[];
}

export type LessonsTableRow = Lesson & User & UserHasLesson;

export const getLesson = (id: string): Promise<Lesson> => httpApi.get(`lessons/${id}`).then(({ data }) => data);

export const getLessonTaskCommit = (collectionId: string, userId: number, lessonName: string): Promise<Lesson> =>
  httpApi.post('lesson/task/', {collectionId, userId, lessonName}).then(({ data }) => data);

export const getLessonTask = (collectionId: string | undefined): Promise<Lesson> =>
  httpApi.get(`lesson/task/${collectionId}`).then(({ data }) => data);

export const getLessonsDataByCourseId = (courseId: string, _pagination: Pagination): Promise<LessonsResponse> =>
  httpApi.get(`lessons?course_id=${courseId}`).then(({ data }) => data);

  export const getLessonsStudentDataByCourseId = (studentId: number): Promise<any> =>
  httpApi.get(`lesson/users?student_id=${studentId}`).then(({ data }) => data);

export const getLessonStudents = (id: string): Promise<any> =>
  httpApi.get(`lesson/users?lesson_id=${id}`).then((data) => data.data);

export const updateLesson = (lessonId: number, lessonData: any): Promise<Lesson> =>
  httpApi.patch(`lessons/${lessonId}`, lessonData).then(({ data }) => data);

export const updateStudentsLesson = (lessonData: any): Promise<Lesson> =>
  httpApi.patch(`lesson/users/`, lessonData).then(({ data }) => data);

export const removeLesson = (lessonId: number): Promise<Lesson> =>
  httpApi.delete(`lessons/${lessonId}`).then(({ data }) => data);
