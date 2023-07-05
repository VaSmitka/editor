import { Response, httpApi } from '@app/api/http.api';
import { Lesson } from './lessons.api';
import { StudentInfo } from './auth.api';

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

export const getCourse = (id: string): Promise<void> =>
  httpApi.get(`courses/${id}`).then((data) => data.data);

export const getCourseStudents = (id: string): Promise<any> =>
  httpApi.get(`course/users?course_id=${id}`).then((data) => data.data);

export const getCoursesByCreator = (userId: string): Promise<any> =>
  httpApi.get(`courses?creator=${userId}`).then(({ data }) => data.data);

export const getCoursesByStudent = (userId: string): Promise<any> => 
  httpApi.get(`course/users?student_id=${userId}`).then(({ data }) => data.data);

export const buildCourse = (data:CourseCreatorData): Promise<any> =>
  httpApi.post<CourseCreatorData>('courses', data).then((data) => data.data);