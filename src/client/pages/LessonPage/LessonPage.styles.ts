import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { styled } from 'styled-components';

export const Title = styled(BaseTypography.Title)`
  display: block;
  margin-bottom: 2rem;
`;

export const Col = styled(BaseCol)`
  margin-bottom: 2rem;
`;

export const IFrame = styled.iframe`
  height: 600px;
  width: 100%;
  border-width: 0;
  margin-top: 1.5rem;
`
