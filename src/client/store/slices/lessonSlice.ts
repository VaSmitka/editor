import { getCourseLessonsData } from '@app/api/lessons.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface LessonSlice {
}

const initialState: LessonSlice = {
};


export const doGetLessonsByCourseId = createAsyncThunk('course/getAll', async (courseId: number) =>
    getCourseLessonsData(courseId, {}).then((res: any) => {
    console.log('Get courses', res)
    return res;
  }),
);

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
});

export default lessonSlice.reducer;
