import { getLessonsDataByCourseId, getLesson, getLessonStudents, getLessonTask } from '@app/api/lessons.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface LessonSlice {
}

const initialState: LessonSlice = {
};


export const doGetLesson = createAsyncThunk('lesson/getOne', async (id: string) =>
    getLesson(id).then((res: any) => {
    console.log('Get lesson', res)
    return res;
  }),
);

export const doGetLessonTask = createAsyncThunk('lesson/task', async ({lessonId, studentId}: {lessonId:string, studentId:number}) =>
  getLessonTask(lessonId, studentId).then((res: any) => {
    console.log('Get lesson task', res)
    return res;
  }),
);


export const doGetLessonsByCourseId = createAsyncThunk('lesson/getAll', async (courseId: string) =>
  getLessonsDataByCourseId(courseId, {}).then((res: any) => {
    console.log('Get lessons by course id', res)
    return res;
  }),
);

export const doGetLessonStudents = createAsyncThunk('lesson/students', async (lessonId: string) =>
  getLessonStudents(lessonId).then((res: any) => {
    console.log('Get lesson students by lesson id', res)
    return res;
  }),
);

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
});

export default lessonSlice.reducer;
