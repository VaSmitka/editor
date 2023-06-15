import React from 'react';
import { PickerProps } from 'antd/lib/date-picker/generatePicker';
import { DayjsDatePicker } from './DayjsDatePicker';
import { AppDate } from '@app/constants/Dates';

export type BaseDatePickerProps = PickerProps<AppDate>;

export const BaseDatePicker = React.forwardRef<React.Component<BaseDatePickerProps>, BaseDatePickerProps>(
  ({ className, ...props }, ref) => <DayjsDatePicker 
    ref={ref} 
    className={className}
    style={{padding: '11.4px 11px', background: 'transparent', border: '1px solid var(--border-base-color)'}} 
    {...props} 
  />,
);
