import { getLessonsDataByCourseId, getLesson, getLessonStudents, getLessonTask, getLessonTaskCommit, updateStudentsLesson, removeLesson, updateLesson, getLessonsStudentDataByCourseId } from '@app/api/lessons.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface LessonSlice {}

const initialState: LessonSlice = {};

export const doGetLesson = createAsyncThunk('lesson/getOne', async (id: string) =>
  getLesson(id).then((res: any) => {
    console.log('Get lesson', res);
    return res;
  }),
);


export const doGetLessonTaskCommit= createAsyncThunk(
  'lesson/taskCommit',
  async ({ collectionId, userId, lessonName }: { collectionId: string, userId: number, lessonName: string }) =>
  getLessonTaskCommit(collectionId, userId, lessonName).then((res: any) => {
      console.log('Do commit', res);
      return res;
    }),
);

export const doGetLessonTask = createAsyncThunk(
  'lesson/task',
  async ({ collectionId }: { collectionId: string }) =>
    getLessonTask(collectionId).then((res: any) => {
      console.log('Get lesson task', res);
      return res;
    }),
);

export const doGetLessonsByCourseId = createAsyncThunk('lesson/getAll', async (courseId: string) =>
  getLessonsDataByCourseId(courseId, {}).then((res: any) => {
    console.log('Get lessons by course id', res);
    return res;
  }),
);

export const doGetLessonStudents = createAsyncThunk('lesson/students', async (lessonId: string) =>
  getLessonStudents(lessonId).then((res: any) => {
    console.log('Get lesson students by lesson id', res);
    return res;
  }),
);

export const doGetLessonsStudentDataByCourseId = createAsyncThunk('lesson/studentsLessons', async (studentId:number) =>
  getLessonsStudentDataByCourseId(studentId).then((res: any) => {
    console.log('Get lessons and students data by course id and student id', res);
    return res;
  }),
);

export const doUpdateLesson = createAsyncThunk('lesson/Update', async ({id,...lessonData}: any) =>
  updateLesson(id, lessonData).then((res: any) => {
    console.log('Update lesson by lesson id', res);
    return res;
  }),
);

export const doRemoveLesson = createAsyncThunk('course/Remove', async (lessonId: number) =>
  removeLesson(lessonId).then((res: any) => {
    console.log('Remove lesson by lesson id', res);
    return res;
  }),
);


export const doUpdateStudentsLesson = createAsyncThunk('course/updateStudent', async (lessonData: any) =>
  updateStudentsLesson(lessonData).then((res: any) => {
    console.log('Remove lesson by lesson id', res);
    return res;
  }),
);

const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {},
});

export default lessonSlice.reducer;
