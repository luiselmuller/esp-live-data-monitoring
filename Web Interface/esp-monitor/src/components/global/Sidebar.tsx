import React from 'react'
import { NavLink } from 'react-router-dom'

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';

const Sidebar = () => {

  return (
    <div className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2">
        {/* Header */}
        <p className="text-xl p-4 font-semibold">Micro Dashboard</p>

        {/* Items */}
        <div className="flex flex-col gap-4">
        
          <div className="flex flex-col gap-2">
            {/* Section title */}
            <p className="ml-2 opacity-50">Data</p>
            {/* Temporary */}
            <NavLink to="/" 
            className="flex items-center gap-2 hover:bg-main-dark-bg p-2 rounded-lg text-lg">
              <CalendarViewMonthIcon />
              Overview
            </NavLink>
          </div>

          <div className="flex flex-col gap-2">
            {/* Section title */}
            <p className="ml-2 opacity-50">Device</p>
            {/* Temporary */}
            <NavLink to="/device-statistics"
            className="flex items-center gap-2 hover:bg-main-dark-bg p-2 rounded-lg text-lg">
              <MonitorHeartIcon />
              Device Statistics
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Sidebar