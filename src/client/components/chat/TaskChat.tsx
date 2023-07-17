import React from 'react'
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ChatSider.styles';
import { BaseCol } from '../common/BaseCol/BaseCol';
import { BaseMessage, PositionType } from '../common/BaseMessage/BaseMessage';
// import { useTranslation } from 'react-i18next';

interface TaskChatProps {
  isCollapsed: boolean;
}

const TaskChat: React.FC<TaskChatProps> = ({ isCollapsed, ...props }) => {
  const { mobileOnly } = useResponsive();

  // const { t } = useTranslation();

  return (
    <>
        <S.ChatBox>
            <S.Card>
                <BaseMessage 
                      author='Josef Hlaviška'
                      description='Dobrý den, chtěl bych se zeptat co mi tady nefunguje? Mám v tom celkem pěkný zmatek :/'
                      date={new Date()}
                      type={PositionType.left}
                />
                <BaseMessage 
                      author='Petr Omáčka'
                      description='To je úplně vpo řádku, rád poradím.'
                      date={new Date()}
                      type={PositionType.right}
                />
            </S.Card>
        </S.ChatBox>
        { !isCollapsed && <S.ChatToolbox>
            <BaseCol style={{flexGrow:1}}>
                <S.Textarea rows={4} />
                <S.ModifyButton>Přilož odkaz na kód</S.ModifyButton>            
            </BaseCol>
            <BaseCol>
                <S.Submit type='primary'>Odeslat</S.Submit>
            </BaseCol>
        </S.ChatToolbox> }
    </>
  );
};

export default TaskChat;
