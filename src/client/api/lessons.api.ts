import { httpApi } from '@app/api/http.api';

export interface Pagination {
    current?: number;
    pageSize?: number;
    total?: number;
  }

export interface Lesson {
    id: number,
    name: string,
    description: string,
    creator?: number
}

export interface LessonsResponse {
    data: Lesson[]
}

export interface LessonTableRow extends Lesson {}

export const getLesson = (id: string): Promise<Lesson> =>
  httpApi.get(`lessons/${id}`).then(({ data }) => data);

export const getLessonsDataByCourseId = (courseId: string, pagination: Pagination): Promise<LessonsResponse> =>
  httpApi.get(`lessons?course_id=${courseId}`).then(({ data }) => data);

export const getLessonStudents = (id: string): Promise<any> =>
  httpApi.get(`lesson/users?lesson_id=${id}`).then((data) => data.data);