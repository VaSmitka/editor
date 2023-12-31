import React from 'react';
import * as S from './MainSider/MainSider.styles';
import { RightOutlined } from '@ant-design/icons';
import logo from '@app/assets/logo.png';
import logoDark from '@app/assets/logo-dark.png';
import { useAppSelector } from '@app/hooks/reduxHooks';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const theme = useAppSelector((state) => state.theme.theme);

  const img = theme === 'dark' ? logoDark : logo;

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/">
        <img src={img} alt="Vzdělávací platforma" width={48} height={48} />
        <S.BrandSpan>Vzdělávací platforma</S.BrandSpan>
      </S.SiderLogoLink>
      <S.CollapseButton
        shape="circle"
        size="small"
        $isCollapsed={isSiderCollapsed}
        icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
        onClick={toggleSider}
      />
    </S.SiderLogoDiv>
  );
};
