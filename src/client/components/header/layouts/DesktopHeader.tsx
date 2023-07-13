import React from 'react';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
// import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
// import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import { HeaderFullscreen } from '../components/HeaderFullscreen/HeaderFullscreen';
import * as S from '../Header.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useNavigate } from 'react-router-dom';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout }) => {
  const navigate = useNavigate();

  const leftSide = isTwoColumnsLayout ? (
    <S.SearchColumn xl={16} xxl={17}>
      <BaseRow justify="end">
          <BaseButton type="default" size="large" onClick={() => navigate('/cource-creator')}>
            Vytvořit kurz
          </BaseButton>

      </BaseRow>
    </S.SearchColumn>
  ) : (
    <>
        <BaseButton type="default" size="large" onClick={() => navigate('/cource-creator')}>
          Vytvořit kurz
        </BaseButton>
    </>
  );

  return (
    <BaseRow justify="space-between" align="middle">
      {leftSide}

      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <BaseRow align="middle" justify="end" gutter={[5, 5]}>
          <BaseCol>
            <BaseRow gutter={[{ xxl: 5 }, { xxl: 5 }]}>
              <BaseCol>
                <HeaderFullscreen />
              </BaseCol>

              <BaseCol>
                <NotificationsDropdown />
              </BaseCol>

              {/*<BaseCol>
                <SettingsDropdown />
              </BaseCol>*/}
            </BaseRow>
          </BaseCol>

          <BaseCol>
            <ProfileDropdown />
          </BaseCol>
        </BaseRow>
      </S.ProfileColumn>
    </BaseRow>
  );
};
