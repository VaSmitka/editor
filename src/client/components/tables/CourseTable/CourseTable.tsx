import React, { useEffect, useState, useCallback } from 'react';
import { BasicTableRow, Pagination, StudentTableRow, Tag } from '@app/api/table.api.ts';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { ColumnsType } from 'antd/es/table';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
// import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from '@app/controllers/notificationController';
import { useMounted } from '@app/hooks/useMounted';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { BaseCol } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import { Lesson } from '@app/api/lessons.api';
import { PageType } from '@app/pages/CoursePage';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doGetLessonStudents, doGetLessonsByCourseId } from '@app/store/slices/lessonSlice';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { PlusOutlined } from '@ant-design/icons';
import { doGetCourseStudents } from '@app/store/slices/courseSlice';
import { useNavigate } from 'react-router-dom';

interface CourseTableProps {
  courseId: string | undefined,
  lessonId: string | undefined,
  type: PageType | undefined,
  setModalOpen: any
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

export const CourseTable: React.FC<CourseTableProps> = ({ courseId, lessonId, type, setModalOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isMounted } = useMounted();
  
  const [tableData, setTableData] = useState<{ data: BasicTableRow[]; pagination: Pagination; loading: boolean }>({
    data: [],
    pagination: initialPagination,
    loading: false,
  });
  
  const fetch = () => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      
      // PageType.STUDENTS - get course students
      if (type === PageType.STUDENTS) {
        dispatch(doGetCourseStudents(courseId!))
          .unwrap()
          .then((res) => {
              if (isMounted.current) {
                setTableData({ data: res.data, pagination: res.pagination, loading: false });
              }
          })
          .catch((err: { message: any; }) => {
              notificationController.error({ message: err.message });
              setTableData(oldData => ({...oldData, loading: false}));
          });
      }


      // PageType.LESSON - get course students
      if (type === PageType.LESSON && lessonId) {
        dispatch(doGetLessonStudents(lessonId!))
          .unwrap()
          .then((res) => {
              if (isMounted.current) {
                setTableData({ data: res.data, pagination: res.pagination, loading: false });
              }
          })
          .catch((err: { message: any; }) => {
              notificationController.error({ message: err.message });
              setTableData(oldData => ({...oldData, loading: false}));
          });
        }

      // PageType.LESSONS - get course lessons
      if (type === PageType.LESSONS) {
        dispatch(doGetLessonsByCourseId(courseId!))
          .unwrap()
          .then((res) => {
              if (isMounted.current) {
                setTableData({ data: res.data, pagination: res.pagination, loading: false });
              }
          })
          .catch((err: { message: any; }) => {
              notificationController.error({ message: err.message });
              setTableData(oldData => ({...oldData, loading: false}));
          });
        }
  };

  useEffect(() => {
    fetch();
  }, [type, lessonId]);

  const handleTableChange = () => {
    fetch();
  };

  const handleDeleteRow = (rowId: number) => {
    setTableData({
      ...tableData,
      data: tableData.data.filter((item) => item.key !== rowId),
      pagination: {
        ...tableData.pagination,
        total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total,
      },
    });
  };

  const studentColumns: ColumnsType<StudentTableRow> = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      render: (_text, record) => (
        <span>{record.firstName} {record.lastName}</span>
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (_text: string, record: { id: number }) => {
        return (
          <BaseSpace>
            <BaseButton
              type="ghost"
              onClick={() => {
                // notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
                console.log('jdeme na to')
              }}
            >
              {type === PageType.LESSON ? 'Show' : 'Edit' }
            </BaseButton>
            <BaseButton type="default" danger onClick={() => handleDeleteRow(record.id)}>
              {t('tables.delete')}
            </BaseButton>
          </BaseSpace>
        );
      },
    },
  ];

  const lessonColumns: ColumnsType<BasicTableRow> = [
    {
      title: 'Název',
      dataIndex: 'name',
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: 'Popis',
      dataIndex: 'description',
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (_text: string, record: { name: string; key: number }) => {
        return (
          <BaseSpace>
            <BaseButton
              type="ghost"
              onClick={() => {
                // notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
                console.log('jdeme na to')
              }}
            >
              Edit
            </BaseButton>
            <BaseButton type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('tables.delete')}
            </BaseButton>
          </BaseSpace>
        );
      },
    },
  ];

  const addNew = (pageType?: PageType) => {
    if (pageType === PageType.LESSON || pageType === PageType.STUDENTS) {
      setModalOpen(true)
    }
  }

  return (
    <>
      <BaseTable
        columns={type === PageType.LESSONS ? lessonColumns : studentColumns}
        dataSource={tableData.data}
        pagination={false}
        loading={tableData.loading}
        onChange={handleTableChange}
        scroll={{ x: 800 }}
        bordered
      />
      <BaseButtonsForm.Item>
        <BaseButton type="dashed" onClick={() => addNew(type)} icon={<PlusOutlined />}>
            { type === PageType.LESSONS ? 'Add lesson' : 'Add student'}
          </BaseButton>
      </BaseButtonsForm.Item>
    </>
  );
};
