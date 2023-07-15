import React, { useEffect, useState } from 'react';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { BasicTableRow, LessonStatus, Pagination, StudentLessonStatus, StudentTableRow } from '@app/api/table.api.ts';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { ColumnsType } from 'antd/es/table';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
// import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from '@app/controllers/notificationController';
import { useMounted } from '@app/hooks/useMounted';
import { BaseSpace } from '@app/components/common/BaseSpace/BaseSpace';
import { LessonsTableRow } from '@app/api/lessons.api';
import { PageType } from '@app/pages/CoursePage';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { doGetLessonStudents, doGetLessonsByCourseId, doGetLessonsStudentDataByCourseId, doRemoveLesson, doUpdateStudentsLesson } from '@app/store/slices/lessonSlice';
import { BaseButtonsForm } from '@app/components/common/forms/BaseButtonsForm/BaseButtonsForm';
import { CheckOutlined, EditOutlined, EyeInvisibleOutlined, EyeOutlined, LockOutlined, PlusOutlined, QuestionOutlined, UnlockOutlined } from '@ant-design/icons';
import { doGetCourseStudents } from '@app/store/slices/courseSlice';
import { useNavigate } from 'react-router-dom';
import { Role } from '@app/api/auth.api';
import { doRemoveStudent } from '@app/store/slices/userSlice';
import { nanoid } from '@reduxjs/toolkit';

interface CourseTableProps {
  courseId: string | undefined;
  lessonId?: string | undefined;
  type: PageType | undefined;
  setModalOpen?: any;
  setEditableStudent?: any;
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
            const dataWithKey = res.data.map((row: any) => ({key: nanoid(), ...row}))
            setTableData({ data: dataWithKey, pagination: res.pagination, loading: false });
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
            const dataWithKey = res.data.map((row: any) => ({key: nanoid(), ...row}))
            setTableData({ data: dataWithKey, pagination: res.pagination, loading: false });
          }
        })
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nepovedlo se získat studenty lekce' });
          setTableData((oldData) => ({ ...oldData, loading: false }));
        });
    }

    // PageType.LESSONS - get course lessons
    if (type === PageType.LESSONS) {
      if (user!.role === Role.teacher) {
        dispatch(doGetLessonsByCourseId(courseId!))
        .unwrap()
        .then((res) => {
          if (isMounted.current) {
            const dataWithKey = res.data.map((row: any) => ({key: nanoid(), ...row}))
            setTableData({ data: dataWithKey, pagination: res.pagination, loading: false });
          }
        })
        .catch((_err: { message: any }) => {
          notificationController.error({ message: 'Nepovedlo se získat lekce podle kurzu' });
          setTableData((oldData) => ({ ...oldData, loading: false }));
        });
      }

      if (user!.role === Role.student) {
        dispatch(doGetLessonsStudentDataByCourseId(user!.id))
          .unwrap()
          .then((res) => {
            if (isMounted.current) {
              const dataWithKey = res.data.map((row: any) => ({key: nanoid(), ...row}))
              setTableData({ data: dataWithKey, pagination: res.pagination, loading: false });
            }
          })
          .catch((_err: { message: any }) => {
            notificationController.error({ message: 'Nepovedlo se získat lekce podle kurzu' });
            setTableData((oldData) => ({ ...oldData, loading: false }));
          });
      }
    }
  };

  useEffect(() => {
    fetch();
  }, [courseId, lessonId, type]);

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
    const newVisibility = data.visibility ? 0 : 1;
    
    dispatch(doUpdateStudentsLesson({id: lessonId, visibility: newVisibility}))
      .unwrap()
      .then((_res) => {
        notificationController.success({ message: 'Lekci byla změněna viditelnost' });
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nešlo aktualizovat stav lekce' });
      });
  }

  const handleEditability = (data: any) => {
    const newEditable = data.editable ? 0 : 1;

    dispatch(doUpdateStudentsLesson({id: lessonId, editable: newEditable}))
      .unwrap()
      .then((_res) => {
        notificationController.success({ message: 'Lekci byla změněca editovatelnost' });
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nešlo aktualizovat stav lekce' });
      });
  }

  const addNew = (pageType?: PageType) => {
    if (pageType === PageType.LESSON || pageType === PageType.STUDENTS) {
      setEditableStudent(null);
      setModalOpen(true);
    }
  };

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
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (_text: string, record: any) => {
        return (
          <BaseSpace>
              <BaseButton
                type="ghost"
                severity='success'
                onClick={() => {
                    const eUser = {...record};
                    eUser.password = '';
                    setEditableStudent(eUser);
                    setModalOpen(true);
                }}
              >
                {type === PageType.LESSON ? 'Zobrazit' : 'Upravit'}
              </BaseButton>
              <BaseButton type="default" danger onClick={() => handleDeleteStudent(record.id!)}>
                {t('tables.delete')}
              </BaseButton>
          </BaseSpace>
        );
      },
    },
  ];

  const lessonsColumns: ColumnsType<LessonsTableRow> = [
    {
      title: 'Stav',
      dataIndex: 'status',
      render: (_text: string, record) => {
        if (user!.role === Role.teacher) {
          return (
            <BaseSpace style={{fontSize: '1.5rem'}}>
              {record.status === LessonStatus.SEED ? <EditOutlined /> : <CheckOutlined />}              
            </BaseSpace>
          );          
        }

        if (user!.role === Role.student) {
          return (
            <BaseSpace style={{fontSize: '1.5rem'}}>
              {!record.editable && <LockOutlined />} 

              {record.progress === StudentLessonStatus.CREATED &&  <QuestionOutlined />}
              {record.progress === StudentLessonStatus.DRAFTED &&  <EditOutlined />}
              {record.progress === StudentLessonStatus.FINISHED &&  <CheckOutlined />}  
            </BaseSpace>
          );          
        }

      },
    },
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
      render: (_text: string, record) => {
        return (
          <BaseSpace>
            {(record.editable || user?.role === Role.teacher) && <BaseButton
              type="ghost"
              severity={(user?.role === Role.teacher || record.progress !== StudentLessonStatus.FINISHED) ? 'success' : 'info'}
              onClick={() => {
                // notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
                navigate(`/lesson/${record.id}`);
              }}
            >
              {user?.role === Role.teacher ? 'Upravit' : 'Otevřít'}
            </BaseButton>}
            { user?.role === Role.teacher &&
              <BaseButton type="default" danger onClick={() => handleDeleteLesson(record.id!)}>
                {t('tables.delete')}
              </BaseButton>
            }
          </BaseSpace>
        );
      },
    },
  ];

  const lessonColumns: ColumnsType<LessonsTableRow> = [
    {
      title: 'Stav',
      dataIndex: 'status',
      width: '15%',
      render: (_text: string, record: any) => {
        return (
          <BaseSpace style={{fontSize: '1.5rem'}}>
            {  user?.role === Role.teacher && <>
                {record.editable ? <UnlockOutlined /> : <LockOutlined />}
                {record.visibility ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </>
            }


            {record.progress === StudentLessonStatus.CREATED &&  <QuestionOutlined />}
            {record.progress === StudentLessonStatus.DRAFTED &&  <EditOutlined />}
            {record.progress === StudentLessonStatus.FINISHED &&  <CheckOutlined />}
          </BaseSpace>
        )
      }
    },
    {
      title: t('common.name'),
      dataIndex: 'name',
      render: (_text, record: any) => (
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
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (_text: string, record: any) => {
        return (
          <BaseSpace>
            <BaseButton
              severity={'info'}
              onClick={() => {
                // notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) })
                navigate(`/student/${record.id}/lesson/${lessonId}`);
              }}
            >
              {type === PageType.LESSON ? 'Zobrazit' : 'Upravit'}
            </BaseButton>
            {
              (user!.role === Role.teacher ) && <>
                  <BaseButton type="default" severity={record.editable ? 'warning' : 'info'} onClick={() => handleEditability(record)}>
                    {record.editable ? 'Znepřístupnit' : 'Zpřístupnit'}
                  </BaseButton>
                  <BaseButton type="default" severity={record.visibility ? 'warning' : 'info'}  onClick={() => handleVisibility(record)}>
                    {record.visibility ? 'Zneviditelnit' : 'Zviditelnit'}
                  </BaseButton>
              </>
            }
          </BaseSpace>
        );
      },
    },
  ];


  return (
    <>
      <BaseTable
        columns={type === PageType.LESSONS ? lessonsColumns : (type === PageType.STUDENTS ? studentColumns: lessonColumns)}
        dataSource={tableData.data}
        pagination={false}
        loading={tableData.loading}
        onChange={handleTableChange}
        scroll={{ x: 800 }}
        bordered
      />
      <BaseButtonsForm.Item>
        {(user!.role === Role.teacher && type !== PageType.LESSON) && (
          <BaseButton type="dashed" onClick={() => addNew(type)} icon={<PlusOutlined />}>
            {type === PageType.LESSONS ? 'Přidat lekci' : 'Přidat studenta'}
          </BaseButton>
        )}
      </BaseButtonsForm.Item>
    </>
  );
};
