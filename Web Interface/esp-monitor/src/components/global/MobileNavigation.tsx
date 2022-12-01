import { FC, lazy } from 'react'
import { NavLink } from 'react-router-dom'

const MonitorHeartIcon = lazy(() => import('@mui/icons-material/MonitorHeart'))
const CalendarViewMonthIcon = lazy(() => import('@mui/icons-material/CalendarViewMonth'))
const GridViewOutlinedIcon = lazy(() => import('@mui/icons-material/GridViewOutlined'))


type mobileNavProps = {
  handleMobileNavOpen?: any,
  mobileNavOpen?: any,
}

const MobileNavigation:FC<mobileNavProps> = ({handleMobileNavOpen, mobileNavOpen}) => {
  const navStyle = "outline-none flex items-center gap-2 hover:bg-main-bg dark:hover:bg-main-dark-bg px-2 py-4 rounded-lg text-xl transition-all duration-100 ease-in-out"

  return (
    <div className="h-screen w-screen pb-10">
        {/* Items */}
        <div className="flex flex-col gap-5 mt-20 px-5">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {/* Section title */}
              <p className="ml-2 dark:opacity-50 opacity-90">Data</p>
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
              <p className="ml-2 dark:opacity-50 opacity-90">Device</p>
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