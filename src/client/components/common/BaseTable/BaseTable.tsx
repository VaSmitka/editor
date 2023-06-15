/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TableProps } from 'antd';
import * as S from './BaseTable.styles';

export type BaseTableProps<T> = TableProps<T>;

// TODO make generic!
export const BaseTable: React.FC<BaseTableProps<any>> = (props) => {
  // @ts-ignore: TODO
  return <S.Table {...props} />;
};
