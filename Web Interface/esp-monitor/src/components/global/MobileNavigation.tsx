import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

type mobileNavProps = {
  handleMobileSideOpen: any
}

const MobileNavigation:FC<mobileNavProps> = ({handleMobileSideOpen={}}) => {

  return (
    <div className="w-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      
        {/* Items */}
        <div className="flex flex-col gap-5 mt-16">
          {/* TODO: Make this into a loop that generates the links */}
        
          {/* Temporary */}
          <NavLink to="/" onClick={handleMobileSideOpen}
          className="flex items-center mx-4 text-2xl gap-1  px-2 py-4 rounded-lg">
            <CalendarViewMonthIcon fontSize="large"/>
            Overview
            
          </NavLink>

          <div className="mx-4 rounded-full opacity-25 h-1 bg-secondary-dark-bg"></div>

          {/* Temporary */}
          <NavLink to="/device-statistics" onClick={handleMobileSideOpen}
          className="flex items-center mx-4 text-2xl gap-1 px-2 py-4 rounded-lg">
            <MonitorHeartIcon fontSize="large"/>
            Device Statistics
            
          </NavLink>
          
            
        </div>
    </div>
  )
}

export default MobileNavigation