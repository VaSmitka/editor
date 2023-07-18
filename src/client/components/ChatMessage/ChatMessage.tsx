import React, { useContext, useEffect, useRef } from 'react';
import { BaseHashTag, IHashTag } from '../common/BaseHashTag/BaseHashTag';
import * as S from './ChatMessage.styles';
import { Moment } from 'moment';
import parse from 'html-react-parser';
import { EditorContext } from '@app/store/editorContect';
import { EditorSelection } from '@codemirror/state';

export enum PositionType {
  left='left',
  right='right'
}

export interface BaseBaseMessageProps {
  author?: React.ReactNode;
  date: Moment;
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
  const ref = useRef<HTMLDivElement>(null);
  const {editorViews} = useContext(EditorContext)
  
  useEffect(() => {
    const handleClick = (e:any) => {
      e.preventDefault();

      if (e.target.nodeName === 'A') {
        const coord = e.target.getAttribute('href');
        const info = coord.split(';')

        editorViews[info[0]].dispatch({
          selection: EditorSelection.create([
            EditorSelection.range(info[1], info[2]),
            EditorSelection.cursor(info[2])
          ], 1)
        })
      }
    };

    const element = ref.current!;

    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <S.Wrapper className={className} $type={type}>
      <S.Header>
        <S.AuthorWrapper>
          <S.Author>{author}</S.Author>
          <S.DateTime>{date.format('D.M.YYYY HH:m')}</S.DateTime>
        </S.AuthorWrapper>
      </S.Header>
      <S.InfoWrapper>
        <S.Description ref={ref}>{parse(description)}</S.Description>
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
