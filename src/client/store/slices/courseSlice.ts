import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { CourseCreatorData, buildCourse, getCourse, getCourses, getCoursesByCreator } from '@app/api/course.api';

export interface CourseSlice {
}

const initialState: CourseSlice = {
};


export const doGetCourse = createAsyncThunk('course/getOne', async (id: number) =>
  getCourse(id).then((res: any) => {
    console.log('Get course', res)
    return res;
  }),
);

export const doGetCourses = createAsyncThunk('course/getAll', async () =>
  getCourses().then((res: any) => {
    console.log('Get courses', res)
    return res;
  }),
);

export const doGetCoursesByCreator = createAsyncThunk('course/getByCreator', async (userId: number) =>
  getCoursesByCreator(userId).then((res: any) => {
    console.log('Get courses by creator', res)
    return res;
  }),
);

export const doCreateCourse = createAsyncThunk('course/create', async (formData: CourseCreatorData) =>
  buildCourse(formData).then((res: any) => {
    console.log('course is created', res)
    return res;
  }),
);

const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},
});

export default courseSlice.reducer;
