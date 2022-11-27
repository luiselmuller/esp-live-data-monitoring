import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';

type sidebarProps = {
  sideIsOpen: any,
}

const Sidebar:FC<sidebarProps> = ({sideIsOpen}) => {
  const activeLink = "outline-none flex items-center gap-2 bg-main-bg hover:bg-main-bg dark:bg-main-dark-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out"
  const normalLink = "outline-none flex items-center gap-2 hover:bg-main-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out"

  return (
    <div className="h-screen w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2 dark:text-[#e4e5f1]">
      {/* Header */}
      <div className="flex justify-center items-center border-b-1 dark:border-slate-300 border-slate-900 mb-4 py-4 gap-4">
        <p className="text-xl font-semibold">Micro Dashboard</p>
        <Tooltip title="Github repository">
          <button type="button" className="active:scale-100 hover:scale-110 transition-all duration-100 ease-in-out
          ">
            <a href="https://github.com/luiselmuller/microcontroller-dashboard" target="_blank">
              <GitHubIcon fontSize="large"/>
            </a>
          </button>
        </Tooltip>
      </div>
      {/* Items */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          {/* Section title */}
          <p className="ml-2 dark:opacity-50 opacity-90">Data</p>
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
          <p className="ml-2 dark:opacity-50 opacity-90">Device</p>
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