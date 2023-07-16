import styled, { css }  from 'styled-components';
import { BORDER_RADIUS, FONT_SIZE, FONT_WEIGHT, media } from '@app/styles/themes/constants';
import { BaseTypography } from '../BaseTypography/BaseTypography';
import { PositionType } from './BaseMessage';

export const Header = styled.div`
  display: flex;
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

export const Wrapper = styled.div<{ $type: PositionType }>`
  display: flex;
  flex-direction: column;
  /* flex: 1 1 21.25rem; */ 
  position: relative;
  row-gap: 1rem;
  padding: 1rem;
  padding-bottom: 1.5rem;
  width: 80%;
  box-shadow: var(--box-shadow);
  border-radius: ${BORDER_RADIUS};
  transition: 0.3s;
  
  ${(props) =>
    props.$type === PositionType.left ?
    css`
      margin-right: 20%;
    ` : css`
      margin-left: 20%;
    `}

  [data-theme='dark'] & {
    background: var(--secondary-background-color);
  }

  &:hover {
    box-shadow: var(--box-shadow-hover);
  }
`;

export const Author = styled.div`
  font-size: ${FONT_SIZE.xs};
  line-height: 1.25rem;
  color: var(--text-sider-primary-color);
`;

export const InfoWrapper = styled.div`
`;

export const InfoHeader = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media only screen and ${media.md} {
    margin-bottom: 0.625rem;
  }

  @media only screen and ${media.xxl} {
    margin-bottom: 1.25rem;
  }
`;

export const Title = styled.div`
  font-size: ${FONT_SIZE.xl};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 80%;
  line-height: 1.375rem;

  color: var(--text-main-color);

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xxl};
  }
`;

export const DateTime = styled(BaseTypography.Text)`
  font-size: ${FONT_SIZE.xs};
  color: var(--subtext-color);
  line-height: 1.25rem;
`;

export const Description = styled.div`
  font-size: ${FONT_SIZE.xs};
  color: var(--text-main-color);

  @media only screen and ${media.xxl} {
    font-size: 1rem;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.625rem;
  padding: 0 1.25rem 1.25rem;
`;
