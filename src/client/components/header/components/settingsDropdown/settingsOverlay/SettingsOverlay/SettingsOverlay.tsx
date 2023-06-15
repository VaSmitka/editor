import React from 'react';
import { DropdownCollapse } from '@app/components/header/Header.styles';
import { BaseCollapse } from '@app/components/common/BaseCollapse/BaseCollapse';
import { useTranslation } from 'react-i18next';
import { NightModeSettings } from '../nightModeSettings/NightModeSettings';
import { ThemePicker } from '../ThemePicker/ThemePicker';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useAppSelector } from '@app/hooks/reduxHooks';
import * as S from './SettingsOverlay.styles';

export const SettingsOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();

  const { isPWASupported, event } = useAppSelector((state) => state.pwa);

  return (
    <S.SettingsOverlayMenu {...props}>
      <DropdownCollapse bordered={false} expandIconPosition="end" ghost defaultActiveKey="themePicker">
        <BaseCollapse.Panel header={t('header.changeTheme')} key="themePicker">
          <ThemePicker />
        </BaseCollapse.Panel>
        <BaseCollapse.Panel header={t('header.nightMode.title')} key="nightMode">
          <NightModeSettings />
        </BaseCollapse.Panel>
      </DropdownCollapse>
      {isPWASupported && (
        <S.PwaInstallWrapper>
          <BaseButton block type="primary" onClick={() => event && (event as BeforeInstallPromptEvent).prompt()}>
            {t('common.pwa')}
          </BaseButton>
        </S.PwaInstallWrapper>
      )}
    </S.SettingsOverlayMenu>
  );
};
