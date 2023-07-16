import React from 'react';
import * as S from './ChatSider.styles';
import { RightOutlined, WechatOutlined } from '@ant-design/icons';

interface ChatSiderHeaderProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const ChatSiderHeader: React.FC<ChatSiderHeaderProps> = ({ isSiderCollapsed, toggleSider }) => {

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to="/" $isCollapsed={!isSiderCollapsed}>
        <WechatOutlined />
        <S.BrandSpan>Zeptej se na cokoliv</S.BrandSpan>
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
