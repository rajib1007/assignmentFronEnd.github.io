import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdIcons.MdDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Assets',
    path: '/assets',
    icon: <AiIcons.AiFillPieChart />,
    cName: 'nav-text'
  },
  {
    title: 'Tracker',
    path: '/tracker',
    icon: <FiIcons.FiBarChart2 />,
    cName: 'nav-text'
  },
  {
    title: 'Planning & Advisory',
    path: '/planning',
    icon: <BsIcons.BsCalendar />,
    cName: 'nav-text'
  }
];