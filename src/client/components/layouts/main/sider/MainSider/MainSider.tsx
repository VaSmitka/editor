import React from 'react';
import { Overlay } from '../../../../common/Overlay/Overlay';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './MainSider.styles';
import { SiderLogo } from '../SiderLogo';
import SiderMenu from '../SiderMenu/SiderMenu';
// import { useTranslation } from 'react-i18next';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { mobileOnly } = useResponsive();

  // const { t } = useTranslation();

  const toggleSider = () => setCollapsed(!isCollapsed);

  return (
    <>
      <S.Sider trigger={null} collapsed={isCollapsed} collapsedWidth={80} collapsible={false} width={260} {...props}>
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>
          <SiderMenu setCollapsed={setCollapsed} />
        </S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} show={!isCollapsed} />}
    </>
  );
};

export default MainSider;
