import React, { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Links } from './Links';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const sidebar = useRef<any>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState(
    localStorage.getItem('sidebar-expanded') === 'true',
  );

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
  }, [sidebarExpanded]);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || sidebar.current.contains(target)) return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // عرض جميع الروابط
  const showLinks = Links.map((link, key) => {
    return (
      <li key={key}>
        <NavLink
          to={link.link}
          className={`group relative flex items-center gap-2.5 rounded-xl px-4 py-2 text-sm text-graydark duration-300 ease-in-out hover:bg-gray dark:hover:bg-meta-4 ${
            pathname === link.link || pathname.includes(link.title)
              ? 'bg-blueligth dark:bg-meta-4'
              : ''
          }`}
        >
          <link.icon />
          {link.title}
        </NavLink>
      </li>
    );
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex w-[240px] flex-col bg-white duration-300 ease-linear lg:static lg:translate-x-0 min-h-full ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* SIDEBAR MENU */}
      <div className="flex flex-col py-4 px-4 lg:px-6 ">
        <ul className="flex flex-col gap-1.5 ">{showLinks}</ul>
      </div>
    </aside>
  );
};

export default Sidebar;
