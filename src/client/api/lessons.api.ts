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

export const getLesson = (id: number): Promise<Lesson> =>
  httpApi.get(`lessons/${id}`).then(({ data }) => data);

export const getCourseLessonsData = (courseId: number, pagination: Pagination): Promise<LessonsResponse> =>
  httpApi.get(`lessons?course_id=${courseId}`).then(({ data }) => data.data);
