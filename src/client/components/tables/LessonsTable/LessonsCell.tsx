import React from 'react';
import { BasicTableRow } from '@app/api/table.api';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';

interface LessonsCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: string;
  inputType: string;
  record: BasicTableRow;
  index: number;
  remove: any,
  children: React.ReactNode;
}

export const LessonsCell: React.FC<LessonsCellProps> = ({
  record,
  editing,
  dataIndex,
  title,
  inputType,
  children,
  remove,
  ...restProps
}) => {
  const getContent = () => {
    if (record) {
      if (editing) {
        return (
          <BaseForm.Item
            name={[record.name, dataIndex]}
            style={{ margin: 0 }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            <BaseInput />
          </BaseForm.Item>
        );
      } else {
        return (
          <BaseButton type="default" danger onClick={() => remove(record.name)}>
            Delete
          </BaseButton>
        );
      }
    } else {
      return children;
    }
  }

  return (
    <td {...restProps}>
      {getContent()}
    </td>
  );
};
