import React from 'react';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './DashboardPage.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

const DefaultDashboardPage: React.FC = () => {
  const { isDesktop } = useResponsive();

  const desktopLayout = (
    <BaseRow>
      <S.LeftSideCol xl={16} xxl={17} id="desktop-content">
        <BaseRow gutter={[60, 60]}>
          <BaseCol span={24}>

          </BaseCol>

          <BaseCol span={24}>

          </BaseCol>

          <BaseCol span={24}>

          </BaseCol>
        </BaseRow>
        <References />
      </S.LeftSideCol>

      <S.RightSideCol xl={8} xxl={7}>
        <S.Space />
        <div id="total-earning">

        </div>
        <S.Space />
        <S.ScrollWrapper id="activity-story">

        </S.ScrollWrapper>
      </S.RightSideCol>
    </BaseRow>
  );

  const mobileAndTabletLayout = (
    <BaseRow gutter={[20, 24]}>
      <BaseCol span={24}>

      </BaseCol>

      <BaseCol span={24}>

      </BaseCol>

      <BaseCol span={24}>

      </BaseCol>
    </BaseRow>
  );

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
      {isDesktop ? desktopLayout : mobileAndTabletLayout}
    </>
  );
};

export default DefaultDashboardPage;
