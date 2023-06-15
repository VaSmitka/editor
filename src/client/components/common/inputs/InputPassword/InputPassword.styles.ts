import styled from 'styled-components';
import { BaseInput } from '../BaseInput/BaseInput';

export const InputPassword = styled(BaseInput.Password)`
  padding: 11.4px 11px;
  height: 50px;
  border: 1px solid var(--border-base-color);
  background: transparent;

  .ant-input-password-icon.anticon {
    color: var(--disabled-color);
    &:hover {
      color: var(--text-main-color);
    }
  }
`;
