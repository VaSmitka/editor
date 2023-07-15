import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseTypography } from '@app/components/common/BaseTypography/BaseTypography';
import { styled } from 'styled-components';

export const Title = styled(BaseTypography.Title)`
  flex-shrink: 0;
  display: block;
  margin-bottom: 2rem;
`;

export const Row = styled(BaseRow)`
  gap: 1rem;
`;


export const Col = styled(BaseCol)`
  margin-top: 2rem;  
  margin-bottom: 3rem;
`;

export const IFrame = styled.iframe`
  height: 600px;
  width: 100%;
  border-width: 0;
  margin-top: 1.5rem;
`

export const EditorBox = styled.div`
  height: 600px;
  background-color: #282c34;
  overflow: scroll;
`

export const TaskBox = styled.div`
  margin-top: 1rem;
  line-height: 1.5rem;

  ol {
    margin-left: 2rem;
  }
`
