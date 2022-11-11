import React from 'react'
import { NavLink } from 'react-router-dom'

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';

const Sidebar = () => {

  return (
    <div className="h-screen w-72 md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 px-2">
        {/* Header */}
        <p className="text-xl flex justify-center py-4 font-semibold mb-4 border-b-1">Micro Dashboard</p>

        {/* TODO: Make this into a loop that generates the links */}
        {/* Items */}
        <div className="flex flex-col gap-4">
        
          <div className="flex flex-col gap-2">
            {/* Section title */}
            <p className="ml-2 opacity-50">Data</p>
            {/* Temporary */}
            <NavLink to="/" 
            className="flex items-center gap-2 hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out">
              <CalendarViewMonthIcon />
              Overview
            </NavLink>
          </div>

          <div className="flex flex-col gap-2">
            {/* Section title */}
            <p className="ml-2 opacity-50">Device</p>
            {/* Temporary */}
            <NavLink to="/device-statistics"
            className="flex items-center gap-2 hover:bg-main-dark-bg px-2 py-4 rounded-lg text-lg transition-all duration-100 ease-in-out">
              <MonitorHeartIcon />
              Device Statistics
            </NavLink>
          </div>
        </div>
    </div>
  )
}

export default Sidebar