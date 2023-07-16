import React from 'react';
import { Overlay } from '@app/components/common/Overlay/Overlay';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ChatSider.styles';
import { ChatSiderHeader } from './ChatSiderHeader';
import TaskChat from './TaskChat';
// import { useTranslation } from 'react-i18next';

interface ChatSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const ChatSider: React.FC<ChatSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { mobileOnly } = useResponsive();

  // const { t } = useTranslation();

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider trigger={null} collapsed={isCollapsed} collapsedWidth={80} collapsible={false} width={450} {...props}>
        <ChatSiderHeader isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <TaskChat isCollapsed={isCollapsed} />
        </S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default ChatSider;
