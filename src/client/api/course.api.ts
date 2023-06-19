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
    name: string,
    description: string,
    template: string,
    lessons?: Lesson[]
  }

export const getCourses = (): Promise<Course[]> =>
  httpApi.get('courses').then(({ data }) => data.data);


