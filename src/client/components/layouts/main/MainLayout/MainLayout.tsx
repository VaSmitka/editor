import React, { useEffect, useState } from 'react';
import { Header } from '../../../header/Header';
import MainSider from '../sider/MainSider/MainSider';
import MainContent from '../MainContent/MainContent';
import { MainHeader } from '../MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import { Outlet, useLocation } from 'react-router-dom';
import { DASHBOARD_PATH } from '@app/components/router/AppRouter';
import { useResponsive } from '@app/hooks/useResponsive';
import { References } from '@app/components/common/References/References';
import ChatSider from '@app/components/chat/ChatSider';

const MainLayout: React.FC = () => {
  const [isTwoColumnsLayout, setIsTwoColumnsLayout] = useState(true);
  const [isStudentLesson, setIsStudentLesson] = useState(true);
  const [siderCollapsed, setSiderCollapsed] = useState(false);
  const [chatSiderCollapsed, setChatSiderCollapsed] = useState(false);
  const { isDesktop } = useResponsive();
  const location = useLocation();

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  useEffect(() => {
    setIsTwoColumnsLayout([DASHBOARD_PATH].includes(location.pathname) && isDesktop);
    
    setIsStudentLesson(location.pathname.includes('student') && location.pathname.includes('lesson'))
  }, [location.pathname, isDesktop]);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} isTwoColumnsLayout={isTwoColumnsLayout} />
        </MainHeader>
        <S.LayoutMain>
          <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
            <div>
              <Outlet />
            </div>
            {!isTwoColumnsLayout && <References />}
          </MainContent>
          {isStudentLesson && <ChatSider isCollapsed={chatSiderCollapsed} setCollapsed={setChatSiderCollapsed}/>}
        </S.LayoutMain>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
