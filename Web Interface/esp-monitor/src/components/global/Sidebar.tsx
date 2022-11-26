import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';

type sidebarProps = {
  sideIsOpen: any,
}

const Sidebar:FC<sidebarProps> = ({sideIsOpen}) => {
  const activeLink = "outline-none flex items-center gap-2 bg-main-bg hover:bg-main-bg dark:bg-main-dark-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out"
  const normalLink = "outline-none flex items-center gap-2 hover:bg-main-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out"

  return (
    <div className="h-screen w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2">
      {/* Header */}
      <p className="text-xl flex justify-center py-4 font-semibold mb-4 border-b-1">Micro Dashboard</p>
      {/* Items */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {/* Section title */}
          <p className="ml-2 opacity-50">Data</p>
          {/* Temporary */}
          <NavLink to="/" 
          className={({ isActive }) => isActive ? activeLink : normalLink}
          >
            <CalendarViewMonthIcon />
            Overview
          </NavLink>

          <NavLink to="/detailed-view" 
          className={({ isActive }) => isActive ? activeLink : normalLink}
          >
            <GridViewOutlinedIcon />
            Detailed View
          </NavLink>
        </div>

        <div className="flex flex-col gap-2">
          {/* Section title */}
          <p className="ml-2 opacity-50">Device</p>
          {/* Temporary */}
          <NavLink to="/device-statistics"
          className={({ isActive }) => isActive ? activeLink : normalLink}
          >
            <MonitorHeartIcon />
            Device Statistics
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Sidebar