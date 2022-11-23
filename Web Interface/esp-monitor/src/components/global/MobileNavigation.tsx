import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';


type mobileNavProps = {
  handleMobileNavOpen?: any,
  mobileNavOpen?: any,
}

const MobileNavigation:FC<mobileNavProps> = ({handleMobileNavOpen, mobileNavOpen}) => {
  const navStyle = "outline-none  flex items-center gap-2 hover:bg-main-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-xl transition-all duration-100 ease-in-out"

  return (
    <div className="w-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        {/* Items */}
        <div className="flex flex-col gap-5 mt-20 px-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {/* Section title */}
              <p className="ml-2 opacity-50">Data</p>
              {/* Temporary */}
              <NavLink to="/" onClick={handleMobileNavOpen}
              className={navStyle}>
                <CalendarViewMonthIcon fontSize="large"/>
                Overview
              </NavLink>

              <NavLink to="/detailed-view" onClick={handleMobileNavOpen}
              className={navStyle}>
                <GridViewOutlinedIcon fontSize="large"/>
                Detailed View
              </NavLink>
            </div>

            <div className="flex flex-col gap-2">
              {/* Section title */}
              <p className="ml-2 opacity-50">Device</p>
              {/* Temporary */}
              <NavLink to="/device-statistics" onClick={handleMobileNavOpen}
              className={navStyle}>
                <MonitorHeartIcon fontSize="large"/>
                Device Statistics
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default MobileNavigation