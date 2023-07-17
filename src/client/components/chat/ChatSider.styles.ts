import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '@app/styles/themes/constants';
import { LAYOUT } from '@app/styles/themes/constants';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { BaseLayout } from '@app/components/common/BaseLayout/BaseLayout';
import { BaseRow } from '../common/BaseRow/BaseRow';
import { BaseCard } from '../common/BaseCard/BaseCard';
import { BaseInput } from '../common/inputs/BaseInput/BaseInput';

export const Sider = styled(BaseLayout.Sider)`
  position: fixed;
  overflow: visible;
  right: 0;
  z-index: 5;

  background: var(--layout-sider-bg-color) !important;
  color: var(--text-secondary-color);
  
  min-height: calc(100vh - ${LAYOUT.mobile.headerHeight});
  max-height: calc(100vh - ${LAYOUT.mobile.headerHeight});

  @media only screen and ${media.md} {
    min-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
    max-height: calc(100vh - ${LAYOUT.desktop.headerHeight});
  }

  @media only screen and ${media.md} {
    right: unset;
    left: 0;
  }

  @media only screen and ${media.xl} {
    position: unset;
  }
`;

export const CollapseButton = styled(BaseButton)<{ $isCollapsed: boolean }>`
  background: var(--collapse-background-color);

  border: 1px solid var(--border-color);
  transition: all 0.2s ease;
  position: absolute;
  left: 0.5rem;

  ${(props) =>
    props.$isCollapsed &&
    css`
      left: -1rem;
    `}

  color: var(--text-secondary-color);

  &:hover {
    color: var(--text-secondary-color);
    background: var(--primary-color);
    border: 1px solid var(--border-color);
  }

  &:focus {
    color: var(--text-secondary-color);
    background: var(--primary-color);
    border: 1px solid var(--border-color);
  }
`;

export const SiderContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 1rem;
  height: calc(100vh - 2*${LAYOUT.mobile.headerHeight});

  @media only screen and ${media.md} {
    height: calc(100vh - 2*${LAYOUT.desktop.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)<{ $isCollapsed: boolean }>`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  font-size: 40px;
  ${(props) =>
    props.$isCollapsed &&
    css`
        flex-direction: row-reverse;
        padding-left: 1rem;
    `}
`;

export const SiderLogoDiv = styled.div`
  height: ${LAYOUT.mobile.headerHeight};
  padding: ${LAYOUT.mobile.headerPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and ${media.md} {
    height: ${LAYOUT.desktop.headerHeight};
    padding-top: ${LAYOUT.desktop.paddingVertical};
    padding-bottom: ${LAYOUT.desktop.paddingVertical};
  }
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--white);
`;


export const ChatBox = styled(BaseRow)`
  flex-grow: 1;
`

export const ChatToolbox = styled(BaseRow)`
  column-gap: 1rem;
  margin: 1rem 0;
`

export const Card = styled(BaseCard)`
  width: 100%;

  .ant-card-body {
    padding: 1rem;
    padding-top: 0;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
  }
`

export const Textarea = styled(BaseInput.TextArea)`
  margin-bottom: 1rem;
  background-color: var(--background-color) !important; 
`

export const ModifyButton = styled(BaseButton)`
    height: 2rem;
`

export const Submit = styled(BaseButton)`
    height: calc(100% - 3rem);
`