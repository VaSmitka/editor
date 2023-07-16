import { EmailRequest, sendNotification } from '@app/api/notification.api';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface NotificationSlice {}

const initialState: NotificationSlice = {};

export const doSendNotification = createAsyncThunk('notification/sendEmail', async (emailData: EmailRequest) =>
    sendNotification(emailData).then((res: any) => {
        console.log('Get lesson', res);
        return res;
    }),
);

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
});

export default notificationSlice.reducer;
