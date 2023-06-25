import { httpApi } from '@app/api/http.api';
import { Lesson } from './lessons.api';

export interface Course {
    id: number,
    name: string,
    description: string,
    creator: number
}

export interface CoursesResponse {
    total: number,
    limit: number,
    skip: number,
    data: Course[]
}

export interface CourseCreatorData {
    id?: number,
    name: string,
    description: string,
    template: number,
    creator: number,
    lessons: Lesson[]
}

export const getCourses = (): Promise<Course[]> =>
  httpApi.get('courses').then(({ data }) => data.data);

export const getCourse = (id: number): Promise<void> =>
  httpApi.get(`courses/${id}`).then((data) => data.data);

export const getCourseStudents = (id: string): Promise<void> =>
  httpApi.get(`courses/${id}/students`).then((data) => console.log(data));

export const getCoursesByCreator = (userId: number): Promise<any> =>
  httpApi.get(`courses?creator=${userId}`).then(({ data }) => data.data);

export const buildCourse = (data:CourseCreatorData): Promise<any> =>
  httpApi.post<CourseCreatorData>('courses', data).then((data) => data.data);