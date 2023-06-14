import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { BaseCarousel } from '@app/components/common/BaseCarousel/Carousel';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { ViewAll } from '@app/components/nft-dashboard/common/ViewAll/ViewAll';
import { TrendingCreatorsStory } from '@app/components/nft-dashboard/trending-creators/story/TrendingCreatorsStory';
import { useResponsive } from '@app/hooks/useResponsive';
import { getTrendingCreators, TrendingCreator } from '@app/api/trendingCreators';
import * as S from './TrendingCreators.styles';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';

export const TrendingCreators: React.FC = () => {
  const [stories, setStories] = useState<TrendingCreator[]>([]);
  const [dragging, setDragging] = useState(false);

  const { isTablet: isTabletOrHigher } = useResponsive();
  const { t } = useTranslation();
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    getTrendingCreators().then((res) => setStories(res));
  }, []);

  return (
    <>
      <NFTCardHeader title={t('nft.trendingCreators')}>
        <BaseRow align="middle">
          <BaseCol>
            <ViewAll bordered={false} />
          </BaseCol>

          {isTabletOrHigher && (
            <>
              <BaseCol>
                <S.ArrowBtn type="text" size="small" onClick={() => sliderRef.current && sliderRef.current.slickPrev()}>
                  <LeftOutlined />
                </S.ArrowBtn>
              </BaseCol>

              <BaseCol>
                <S.ArrowBtn type="text" size="small" onClick={() => sliderRef.current && sliderRef.current.slickNext()}>
                  <RightOutlined />
                </S.ArrowBtn>
              </BaseCol>
            </>
          )}
        </BaseRow>
      </NFTCardHeader>

      {stories.length > 0 && (
        <BaseCarousel
          beforeChange={() => setDragging(true)}
          afterChange={() => setDragging(false)}
          slidesToShow={11}
          ref={sliderRef}
          centerMode={false}
          infinite={false}
          responsive={[
            {
              breakpoint: 1920,
              settings: {
                slidesToShow: 10,
              },
            },
            {
              breakpoint: 1870,
              settings: {
                slidesToShow: 9,
              },
            },
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
              },
            },
            {
              breakpoint: 1530,
              settings: {
                slidesToShow: 7,
              },
            },
            {
              breakpoint: 1370,
              settings: {
                slidesToShow: 6,
              },
            },
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 13,
              },
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 12,
              },
            },
            {
              breakpoint: 1120,
              settings: {
                slidesToShow: 11,
              },
            },
            {
              breakpoint: 1020,
              settings: {
                slidesToShow: 10,
              },
            },
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 9,
              },
            },
            {
              breakpoint: 820,
              settings: {
                slidesToShow: 8,
              },
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 9,
              },
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 8,
              },
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 7,
              },
            },
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 6,
              },
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 5,
              },
            },
          ]}
        >
          {stories.map((story, index) => (
            <div key={index}>
              <S.CardWrapper>
                <TrendingCreatorsStory
                  img={story.header.profileImage}
                  viewed={story.viewed}
                  onStoryOpen={() => {
                    if (!dragging) {
                      setStoryIndex(index);
                      setStoryOpened(true);
                    }
                  }}
                />
              </S.CardWrapper>
            </div>
          ))}
        </BaseCarousel>
      )}
    </>
  );
};
