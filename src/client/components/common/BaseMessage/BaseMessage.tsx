import React from 'react';
import { BaseHashTag, IHashTag } from '../BaseHashTag/BaseHashTag';
import * as S from './BaseMessage.styles';

export enum PositionType {
  left='left',
  right='right'
}

export interface BaseBaseMessageProps {
  author?: React.ReactNode;
  date: Date;
  description: string;
  tags?: IHashTag[];
  className?: string;
  type: PositionType;
}

export const BaseMessage: React.FC<BaseBaseMessageProps> = ({
  date,
  description,
  author,
  tags,
  className,
  type
}) => {
  return (
    <S.Wrapper className={className} $type={type}>
      <S.Header>
        <S.AuthorWrapper>
          <S.Author>{author}</S.Author>
          <S.DateTime>{date.toDateString()}</S.DateTime>
        </S.AuthorWrapper>
      </S.Header>
      <S.InfoWrapper>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>

      {!!tags?.length && (
        <S.TagsWrapper>
          {tags.map((tag) => (
            <BaseHashTag key={tag.bgColor} title={tag.title} bgColor={tag.bgColor} />
          ))}
        </S.TagsWrapper>
      )}
    </S.Wrapper>
  );
};
