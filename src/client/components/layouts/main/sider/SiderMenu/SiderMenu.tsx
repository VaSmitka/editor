import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import * as S from './SiderMenu.styles';
import { sidebarNavigation, SidebarNavigationItem } from '../sidebarNavigation';
import { doGetCoursesByCreator, doGetCoursesByStudent } from '@app/store/slices/courseSlice';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import { CourseCreatorData } from '@app/api/course.api';
import { ProfileOutlined } from '@ant-design/icons';
import { Role } from '@app/api/auth.api';

interface SiderContentProps {
  setCollapsed: (isCollapsed: boolean) => void;
}

const sidebarNavFlat = sidebarNavigation.reduce(
  (result: SidebarNavigationItem[], current) =>
    result.concat(current.children && current.children.length > 0 ? current.children : current),
  [],
);

const SiderMenu: React.FC<SiderContentProps> = ({ setCollapsed }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const userId = user!.id.toString();
  const [sidebarNavigation, setSidebarNavigation] = useState<any[]>([]);
  const currentMenuItem = sidebarNavFlat.find(({ url }) => url === location.pathname);
  const defaultSelectedKeys = currentMenuItem ? [currentMenuItem.key] : [];

  const openedSubmenu = sidebarNavigation.find(({ children }) =>
    children?.some((menu: { url: string }) => menu.url === location.pathname),
  );
  const defaultOpenKeys = openedSubmenu ? [openedSubmenu.key] : [];

  useEffect(() => {
    dispatch(user?.role === Role.teacher ? doGetCoursesByCreator(userId) : doGetCoursesByStudent(userId))
      .unwrap()
      .then((result: CourseCreatorData[]) => {
        setSidebarNavigation(generateMenuByRole(result, user!.role));
      })
      .catch((_err: { message: any }) => {
        notificationController.error({ message: 'Nepovedlo se načíst kurzy podle uživatel' });
      });
  }, []);

  const generateMenuByRole = (result: CourseCreatorData[], role: Role): any[] => {
    if (role === Role.teacher) {
      return result
        .map((elm) => ({
          title: elm.name,
          key: `course-${elm.id}`,
          icon: <ProfileOutlined />,
          children: elm.lessons
            .map((les) => ({
              title: les.name,
              key: `lesson-${les.id}`,
              url: `/course/${elm.id}/lesson/${les.id}`,
            }))
            .reduce(
              function (acc: any[], obj: any) {
                acc.push(obj);
                return acc;
              },
              [
                {
                  title: '-- Administrace --',
                  key: `course-${elm.id}`,
                  url: `/course/${elm.id}/lessons`,
                },
              ],
            ),
        }))
    } else if (role === Role.student) {
      return result.map((elm) => ({
        title: elm.name,
        key: `course-${elm.id}`,
        icon: <ProfileOutlined />,
        children: elm.lessons.filter(elm => elm.editable).map((les) => ({
          title: les.name,
          key: `lesson-${les.id}`,
          url: `/student/${userId}/lesson/${les.id}`,
        })),
      }));
    } else {
      console.error('unknown role', role);
      return [];
    }
  };

  return (
    <S.Menu
      mode="inline"
      defaultSelectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      onClick={() => setCollapsed(true)}
      items={sidebarNavigation.map((nav) => {
        const isSubMenu = nav.children?.length;

        return {
          key: nav.key,
          title: t(nav.title),
          label: isSubMenu ? t(nav.title) : <Link to={nav.url || ''}>{t(nav.title)}</Link>,
          icon: nav.icon,
          children:
            isSubMenu &&
            nav.children &&
            nav.children.map((childNav: { key: any; url: any; title: any }) => ({
              key: childNav.key,
              label: <Link to={childNav.url || ''}>{t(childNav.title)}</Link>,
              title: t(childNav.title),
            })),
        };
      })}
    />
  );
};

export default SiderMenu;
