import { InputNumber as AntInputNumber } from 'antd';
import styled from 'styled-components';

interface InputNumberProps {
  $block?: boolean;
}

export const InputNumber = styled(AntInputNumber)<InputNumberProps>`
  padding: 11.4px 11px;
  height: 50px;
  border: 1px solid var(--border-base-color);
  background: transparent;

  ${(props) => props.$block && 'display: block; width: 100%'};
`;
