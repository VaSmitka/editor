import { httpApi } from '@app/api/http.api';
import { Lesson } from './lessons.api';
import { User } from './auth.api';


export interface MessageCreateRequest {
  text: string,
  lesson_id: number,
}

export interface Message {
  author_id: number;
  created_at: number;
  id: number;
  lesson: Lesson;
  lesson_id: number;
  text: string;
  user: User;
}

export const createMessage = (messageData: MessageCreateRequest): Promise<any> =>
  httpApi.post('messages', messageData).then(({ data }) => data);


export const getMessagesByLessonId = (lesson_id: string): Promise<Message[]> =>
  httpApi.get(`messages?lesson_id=${lesson_id}&$sort[created_at]=1`).then(({ data }) => data.data);