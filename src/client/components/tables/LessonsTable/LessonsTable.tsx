import React, { useState } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BasicTableRow } from '@app/api/table.api.ts';
import { LessonsCell } from './LessonsCell';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { FormListFieldData } from 'antd';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { PlusOutlined } from '@ant-design/icons';

interface LessonsTableProps {
  fields: FormListFieldData[];
  add: any;
  remove: any;
}

export const LessonsTable: React.FC<LessonsTableProps> = ({ fields, add, remove }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '40%',
      editable: true,
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (...a: any) => {
        return (
          <BaseButton type="default" danger onClick={() => remove()}>
            {t('tables.delete')}
          </BaseButton>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    return {
      ...col,
      onCell: (record: BasicTableRow) => ({
        record,
        inputType: col.dataIndex === 'actions' ? 'button' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: col.dataIndex !== 'actions',
        remove: remove,
      }),
    };
  });

  return (
    <>
      <BaseTable
        components={{
          body: {
            cell: LessonsCell,
          },
        }}
        bordered
        dataSource={fields}
        columns={mergedColumns}
        pagination={false}
        rowClassName="editable-row"
        loading={loading}
        scroll={{ x: 800 }}
      />
      <BaseButtonsForm.Item>
        <BaseButton type="dashed" block onClick={() => add()} icon={<PlusOutlined />}>
          Add lesson
        </BaseButton>
      </BaseButtonsForm.Item>
    </>
  );
};
