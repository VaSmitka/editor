import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { BasicTableRow, Pagination, StudentTableRow } from '@app/api/table.api.ts';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { ColumnsType } from 'antd/es/table';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
// import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from '@app/controllers/notificationController';
import { useMounted } from '@app/hooks/useMounted';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import { LessonTableRow } from '@app/api/lessons.api';
import { PageType } from '@app/pages/CoursePage';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doGetLessonStudents, doGetLessonsByCourseId, doRemoveLesson, doUpdateStudentsLesson } from '@app/store/slices/lessonSlice';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { PlusOutlined } from '@ant-design/icons';
import { doGetCourseStudents } from '@app/store/slices/courseSlice';
import { useNavigate } from 'react-router-dom';
import { Role } from '@app/api/auth.api';
import { doRemoveStudent } from '@app/store/slices/userSlice';

interface CourseTableProps {
  courseId: string | undefined;
  lessonId: string | undefined;
  type: PageType | undefined;
  setModalOpen: any;
  setEditableStudent: any;
}

const initialPagination: Pagination = {
  current: 1,
  pageSize: 5,
};

export const CourseTable: React.FC<CourseTableProps> = ({ courseId, lessonId, type, setModalOpen, setEditableStudent }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isMounted } = useMounted();
  const user = useAppSelector((state) => state.user.user);

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
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nepovedlo se získat studenty kurzu' });
          setTableData((oldData) => ({ ...oldData, loading: false }));
        });
    }

    // PageType.LESSON - get course students
    if (type === PageType.LESSON && lessonId) {
      dispatch(doGetLessonStudents(lessonId!))
        .unwrap()
        .then((res) => {
          if (isMounted.current) {
            setTableData({ data: res.data, pagination: res.pagination, loading: false });
          }
        })
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nepovedlo se získat studenty lekce' });
          setTableData((oldData) => ({ ...oldData, loading: false }));
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
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nepovedlo se získat lekce podle kurzu' });
          setTableData((oldData) => ({ ...oldData, loading: false }));
        });
    }
  };

  useEffect(() => {
    fetch();
  }, [type, lessonId]);

  const handleTableChange = () => {
    fetch();
  };

  const handleDeleteStudent = (itemId: number) => {
    dispatch(doRemoveStudent(itemId!))
      .unwrap()
      .then((_res) => {
        notificationController.success({ message: 'Student byl smazán' });
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Studenta nešlo smazat' });
      });
  };

  const handleDeleteLesson = (itemId: number) => {
    dispatch(doRemoveLesson(itemId!))
      .unwrap()
      .then((_res) => {
        notificationController.success({ message: 'Lekce byla smazána' });
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Lekci nešlo smazat' });
      });
  };

  const handleVisibility = (data: any) => {
    const {visibility, ...lessonData} = data;
    
    lessonData.visibility = visibility ? 0 : 1;
    
    dispatch(doUpdateStudentsLesson(lessonData))
      .unwrap()
      .then((_res) => {
        notificationController.success({ message: 'Lekci byla změněna viditelnost' });
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nešlo aktualizovat stav lekce' });
      });
  }

  const handleEditability = (data: any) => {
    const {editable, ...lessonData} = data;

    lessonData.editable = editable ? 0 : 1;

    dispatch(doUpdateStudentsLesson(lessonData))
      .unwrap()
      .then((_res) => {
        notificationController.success({ message: 'Lekci byla změněca editovatelnost' });
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nešlo aktualizovat stav lekce' });
      });
  }

  const getStudentTableButtons = (record: any) => {  
    return <BaseSpace>
      <BaseButton
        type="ghost"
        severity='success'
        onClick={() => {
          // notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
          if (type === PageType.LESSON) {
            navigate(`/student/${record.id}/lesson/${lessonId}`);
          } else {
            const eUser = {...record};
            eUser.password = '';
            setEditableStudent(eUser);
            setModalOpen(true);
          }
        }}
      >
        {type === PageType.LESSON ? 'Zobrazit' : 'Upravit'}
      </BaseButton>
      {
        (user!.role === Role.teacher && type === PageType.LESSON) && <>
            <BaseButton type="default" severity={record.visibility ? 'warning' : 'info'}  onClick={() => handleVisibility(record)}>
              {record.visibility ? 'Zneviditelnit' : 'Zviditelnit'}
            </BaseButton>
            <BaseButton type="default" severity={record.editable ? 'warning' : 'info'} onClick={() => handleEditability(record)}>
              {record.editable ? 'Znepřístupnit' : 'Zpřístupnit'}
            </BaseButton>
        </>
      }
      {
        (user!.role === Role.teacher && type === PageType.STUDENTS) && <>
            <BaseButton type="default" danger onClick={() => handleDeleteStudent(record.id)}>
              {t('tables.delete')}
            </BaseButton>
        </>
      }
    </BaseSpace>
  }

  const studentColumns: ColumnsType<StudentTableRow> = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      render: (_text, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
    },
    {
      title: 'Stav',
      dataIndex: 'status',
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (_text: string, record) => {
        return getStudentTableButtons(record);
      },
    },
  ];

  const lessonColumns: ColumnsType<LessonTableRow> = [
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
      render: (_text: string, record: { id?: number }) => {
        return (
          <BaseSpace>
            <BaseButton
              type="ghost"
              severity='success'
              onClick={() => {
                console.log(record);
                // notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
                navigate(`/lesson/${record.id}`);
              }}
            >
              Upravit
            </BaseButton>
            <BaseButton type="default" danger onClick={() => handleDeleteLesson(record.id!)}>
              {t('tables.delete')}
            </BaseButton>
          </BaseSpace>
        );
      },
    },
  ];

  const addNew = (pageType?: PageType) => {
    if (pageType === PageType.LESSON || pageType === PageType.STUDENTS) {
      setEditableStudent(null);
      setModalOpen(true);
    }
  };

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
        {type !== PageType.LESSON && (
          <BaseButton type="dashed" onClick={() => addNew(type)} icon={<PlusOutlined />}>
            {type === PageType.LESSONS ? 'Přidat lekci' : 'Přidat studenta'}
          </BaseButton>
        )}
      </BaseButtonsForm.Item>
    </>
  );
};
