import { httpApi } from "./http.api";

export enum NotificationTypes {
    STUDENT_CREATED='STUDENT_CREATED',
    TASK_DONE='TASK_DONE'
}

export interface EmailRequest {
    toId: number,
    type: NotificationTypes,
}

export const sendNotification = (emailData: EmailRequest): Promise<any> =>
  httpApi.post('notification', emailData).then(({ data }) => data);