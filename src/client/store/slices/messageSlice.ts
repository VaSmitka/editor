import { MessageCreateRequest, createMessage, getMessagesByLessonId } from '@app/api/messages.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface MessageSlice {}

const initialState: MessageSlice = {};

export const doCreateMessage = createAsyncThunk('message/send', async (messageData: MessageCreateRequest) =>
  createMessage(messageData).then((res: any) => {
    console.log('Message is send', res);
    return res;
  }),
);

export const doGetMessagesByLessonId = createAsyncThunk('message/getByLesson', async (lesson_id: string) =>
    getMessagesByLessonId(lesson_id).then((res: any) => {
        console.log('Get messages by lesson id', res);
        return res;
    }),
);

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
});

export default messageSlice.reducer;
