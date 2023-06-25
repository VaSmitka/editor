import { getCourseLessonsData, getLesson } from '@app/api/lessons.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface LessonSlice {
}

const initialState: LessonSlice = {
};


export const doGetLesson = createAsyncThunk('course/getOne', async (id: number) =>
    getLesson(id).then((res: any) => {
    console.log('Get lesson', res)
    return res;
  }),
);

export const doGetLessonsByCourseId = createAsyncThunk('course/getAll', async (courseId: number) =>
    getCourseLessonsData(courseId, {}).then((res: any) => {
    console.log('Get lessons by course id', res)
    return res;
  }),
);

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
});

export default lessonSlice.reducer;
