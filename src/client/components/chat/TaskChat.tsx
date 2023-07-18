import React, { useState, useCallback, useEffect, useRef } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import moment, { Moment } from 'moment';
import * as S from './ChatSider.styles';
import { BaseCol } from '../common/BaseCol/BaseCol';
import { BaseMessage, PositionType } from '../ChatMessage/ChatMessage';
import { BaseForm } from '../common/forms/BaseForm/BaseForm';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { doCreateMessage, doGetMessagesBySpaceId } from '@app/store/slices/messageSlice';
import { notificationController } from '@app/controllers/notificationController';
import { useParams } from 'react-router-dom';
import { Message } from '@app/api/messages.api';
import { nanoid } from '@reduxjs/toolkit';
import { EditorContext } from '@app/store/editorContect';
import TextEditor, { EditorType } from '../textEditor/TextEditor';
// import { useTranslation } from 'react-i18next';

interface TaskChatProps {
  isCollapsed: boolean;
}

interface MessageRender {
  author_id: number,
  author: string,
  lesson_id: number,
  description: string
  type: PositionType
  date: Moment
}

interface MessageText {
  value: string | undefined;
}

const TaskChat: React.FC<TaskChatProps> = ({ isCollapsed }) => {
  //Public API that will echo messages sent to it back to the client
  const dispatch = useAppDispatch();
  const [messageRender, setMessageRender] = useState<MessageRender[]>([]);
  const [messageText, setMessageText] = useState<MessageText>({ value: undefined });
  const user = useAppSelector((state) => state.user.user);
  const currentEditorId = useAppSelector((state) => state.editor.currentEditorId);
  const { studentId, lessonId } = useParams();
  const bottomRef = useRef(null);
  // const { t } = useTranslation();
  
  const socketUrl = `ws://localhost:3030/chat/?token=s${studentId}l${lessonId}`;
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const {editorViews} = React.useContext(EditorContext)
  

  useEffect(() => {
    if (lastMessage !== null) {
      const md: Message = JSON.parse(lastMessage.data);

      setMessageRender(prev => prev.concat({
        author_id: md.author_id,
        author: `${md.user.firstName} ${md.user.lastName}`,
        lesson_id: md.lesson_id,
        description: md.text,
        type: user?.id === md.author_id ? PositionType.right : PositionType.left, 
        date: moment(md.created_at)
      }))
    }
  }, [lastMessage]);

  useEffect(() => {
    if (lessonId) {
      dispatch(doGetMessagesBySpaceId(studentId+lessonId))
        .unwrap()
        .then((results: Message[]) => {
          setMessageRender(results.map(elm => ({
            author_id: elm.author_id,
            author: `${elm.user.firstName} ${elm.user.lastName}`,
            lesson_id: elm.lesson_id,
            lesson: elm.lesson.name,
            description: elm.text,
            type: user?.id === elm.author_id ? PositionType.right : PositionType.left, 
            date: moment(elm.created_at)
          })))

          // @ts-ignore
          bottomRef.current?.scrollIntoView({behavior: 'smooth'});
        })
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nelze načíst zprávy ke cvičení' });
        });  
    }
  }, [lessonId])

  const handleCodeSelection = () => {
    //console.log('currentEditorId', currentEditorId)
    //console.log(view.state.selection.main.from, view.state.selection.main.to);
    //console.log(
    //  view.state.sliceDoc(
    //    view.state.selection.main.from,
    //    view.state.selection.main.to
    //  )
    //);
        
    const view = editorViews[currentEditorId!];
    setMessageText(old => ({value: old.value + `
      <a href="${currentEditorId};${view.state.selection.main.from};${view.state.selection.main.to}">Odkaz na kód</a>
    `}))
  }

  const handleMessageChange = (value: any) => {
    setMessageText({ value });
  };

  const handleSubmit = () => {
    const newMessage = {
      space_id: Number(studentId!+lessonId!),
      text: messageText.value!,
      lesson_id: Number(lessonId),
    }

    dispatch(doCreateMessage(newMessage))
      .unwrap()
      .then((result) => {
        console.log('Message is sended', result);
        // send websocket info
        sendMessage(JSON.stringify(result))
        setMessageText({ value: undefined });
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
              <div ref={bottomRef} />
            </S.Card>
        </S.ChatBox>
          { !isCollapsed && <S.ChatToolbox>
            <BaseCol style={{flexGrow:1}}>
                <TextEditor text={messageText.value} changeHandler={handleMessageChange} type={EditorType.TEXTAREA}/>
                <S.ModifyButton onClick={handleCodeSelection}>Přilož odkaz na kód</S.ModifyButton>            
            </BaseCol>
            <BaseCol>
                <S.Submit type='primary' onClick={handleSubmit}>Odeslat</S.Submit>
            </BaseCol>
        </S.ChatToolbox> }
    </>
  );
};

export default TaskChat;
