import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  buildCourse,
  getCourse,
  getCourseStudents,
  getCourses,
  getCoursesByCreator,
  getCoursesByStudent,
  removeCourse,
  updateCourse,
} from '@app/api/course.api';

export interface CourseSlice {}

const initialState: CourseSlice = {};

export const doGetCourse = createAsyncThunk('course/getOne', async (id: string) =>
  getCourse(id).then((res: any) => {
    console.log('Get course', res);
    return res;
  }),
);

export const doGetCourses = createAsyncThunk('course/getAll', async () =>
  getCourses().then((res: any) => {
    console.log('Get courses', res);
    return res;
  }),
);

export const doGetCoursesByCreator = createAsyncThunk('course/getByCreator', async (userId: string) =>
  getCoursesByCreator(userId).then((res: any) => {
    console.log('Get courses by creator', res);
    return res;
  }),
);

export const doCreateCourse = createAsyncThunk('course/create', async (formData: any) =>
  buildCourse(formData).then((res: any) => {
    console.log('course is created', res);
    return res;
  }),
);

export const doGetCoursesByStudent = createAsyncThunk('course/getByStudent', async (userId: string) =>
  getCoursesByStudent(userId).then((res: any) => {
    console.log('Courses by student', res);
    return res;
  }),
);

export const doGetCourseStudents = createAsyncThunk('course/students', async (courseId: string) =>
  getCourseStudents(courseId).then((res: any) => {
    console.log('Get course students by course id', res);
    return res;
  }),
);

export const doUpdateCourse = createAsyncThunk('course/Update', async (courseId: string, courseData) =>
  updateCourse(courseId, courseData).then((res: any) => {
    console.log('Update course by course id', res);
    return res;
  }),
);

export const doRemoveCourse = createAsyncThunk('course/Remove', async (courseId: string) =>
  removeCourse(courseId).then((res: any) => {
    console.log('Remove course by course id', res);
    return res;
  }),
);

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
});

export default courseSlice.reducer;
