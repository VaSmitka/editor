import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import * as S from './ChatSider.styles';
import { BaseCol } from '../common/BaseCol/BaseCol';
import { BaseMessage, PositionType } from '../common/BaseMessage/BaseMessage';
import { BaseForm } from '../common/forms/BaseForm/BaseForm';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCreateMessage, doGetMessagesByLessonId } from '@app/store/slices/messageSlice';
import { notificationController } from '@app/controllers/notificationController';
import { useParams } from 'react-router-dom';
import { Message } from '@app/api/messages.api';
import { nanoid } from '@reduxjs/toolkit';
// import { useTranslation } from 'react-i18next';

interface TaskChatProps {
  isCollapsed: boolean;
}

interface FormData {
  text: string
}

interface MessageRender {
  author_id: number,
  author: string,
  lesson_id: number,
  description: string
  type: PositionType
  date: Moment
}

const TaskChat: React.FC<TaskChatProps> = ({ isCollapsed }) => {
  const dispatch = useAppDispatch();
  const [form] = BaseForm.useForm();
  const [messageRender, serMessageRender] = useState<MessageRender[]>([]);
  const user = useAppSelector((state) => state.user.user);
  const { lessonId } = useParams();
  // const { t } = useTranslation();
  const initialFromValue = { text: '' };


  useEffect(() => {
    if (lessonId) {
      dispatch(doGetMessagesByLessonId(lessonId))
        .unwrap()
        .then((results: Message[]) => {
          serMessageRender(results.map(elm => ({
            author_id: elm.author_id,
            author: `${elm.user.firstName} ${elm.user.lastName}`,
            lesson_id: elm.lesson_id,
            lesson: elm.lesson.name,
            description: elm.text,
            type: user?.id === elm.author_id ? PositionType.right : PositionType.left, 
            date: moment(elm.created_at)
          })))
        })
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nelze načíst zprávy ke cvičení' });
        });  
    }
  }, [lessonId])

  const handleSubmit = (value: FormData) => {
    const newMessage = {
      text: value.text,
      lesson_id: Number(lessonId),
    }

    dispatch(doCreateMessage(newMessage))
      .unwrap()
      .then((result) => {
        console.log('Message is sended', result);
        form.resetFields()
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nelze poslat zprávu' });
      });     
  }

  return (
    <>
        <S.ChatBox>
            <S.Card>
              { !isCollapsed && messageRender.map(elm => <BaseMessage
                  key={nanoid()} 
                  author={elm.author}
                  description={elm.description}
                  date={elm.date}
                  type={elm.type}
              />)}
            </S.Card>
        </S.ChatBox>
          { !isCollapsed && <S.ChatToolbox form={form} onFinish={handleSubmit} requiredMark="optional" initialValues={initialFromValue} >
            <BaseCol style={{flexGrow:1}}>
                <S.Item
                  name="text"
                  rules={[{ required: true, message: 'Zpráva nesmí být prždná' }]}
                >
                  <S.Textarea rows={4}/>
                </S.Item>
                <S.ModifyButton>Přilož odkaz na kód</S.ModifyButton>            
            </BaseCol>
            <BaseCol>
                <S.Submit type='primary' htmlType='submit'>Odeslat</S.Submit>
            </BaseCol>
        </S.ChatToolbox> }
    </>
  );
};

export default TaskChat;
