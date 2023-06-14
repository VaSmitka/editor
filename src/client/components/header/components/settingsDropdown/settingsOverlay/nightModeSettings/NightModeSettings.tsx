import React from 'react';
import { BaseSwitch } from '@app/components/common/BaseSwitch/BaseSwitch';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { setNightMode } from '@app/store/slices/nightModeSlice';

export const NightModeSettings: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  const nightModeState = useAppSelector((state) => state.nightMode);
  const isNightMode = nightModeState.isNightMode;

  const handleChange = (isNightMode: boolean) => {
    dispatch(setNightMode(isNightMode));
  };

  return (
    <>
      <SwitchContainer>
        <span>{t('common.auto')}</span>
        <BaseSwitch checkedChildren="On" unCheckedChildren="Off" checked={isNightMode} onChange={handleChange} />
      </SwitchContainer>
    </>
  );
};

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
