import { FC, lazy, useEffect, useState } from 'react'

// Icon imports
const MenuIcon = lazy(() => import('@mui/icons-material/Menu'))
const AccountCircleIcon = lazy(() => import('@mui/icons-material/AccountCircle'))
const SettingsIcon = lazy(() => import('@mui/icons-material/Settings'))
const NotificationsNoneIcon = lazy(() => import('@mui/icons-material/NotificationsNone'))
const NotificationImportantIcon = lazy(() => import('@mui/icons-material/NotificationImportant'))
const DarkModeIcon = lazy(() => import('@mui/icons-material/DarkMode'))
const LightModeIcon = lazy(() => import('@mui/icons-material/LightMode'))
const CancelOutlined = lazy(() => import('@mui/icons-material/CancelOutlined'))
const GitHubIcon = lazy(() => import('@mui/icons-material/GitHub'))

import Tooltip from '@mui/material/Tooltip';
import { Badge } from '@mui/material';


type navProps = {
  customFuncOne?: any,
  disabledSide?: any,
  mobileNav?: any,
  customFuncTwo?: any,
  microStatus?: any,
  setClickedMenu?: any,
  handleTheme?: any,
  theme?: any,
  notifications?: any,
}

const Navbar:FC<navProps> =({customFuncOne, customFuncTwo, disabledSide, mobileNav, microStatus, setClickedMenu,
  handleTheme, theme, notifications}) => {
  
  return (
    <div className={`flex justify-evenly items-center p-3 relative mx-3 dark:text-[#e4e5f1]`}>
        <button type="button" onClick={!disabledSide ? customFuncOne : customFuncTwo}
          className={`outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100`}>
          {mobileNav ? <CancelOutlined fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
        <div className={`flex gap-2 items-center sm:text-lg text-md lg:border dark:border-slate-300 border-slate-900
        rounded-full py-1 px-4 ml-5`}>
          <div className={`${microStatus.info === true ? "bg-green-400" : "bg-red-400"} h-3 w-3 rounded-full `}></div>
          {!disabledSide && <p>{microStatus.info === true ? "Online" : "Offline"}</p>} 
        </div>

        <div className="w-full"></div>

        {/* Theme */}
        <div className="flex gap-2 sm:gap-4">
          <Tooltip title="Theme">
            <button type="button" onClick={handleTheme}
              className={`hover:scale-110 transition-all duration-200 ease-in-out outline-none active:rotate-180
              active:scale-95`}>
              {theme === "light" ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
            </button>
          </Tooltip>
          {mobileNav &&
            <Tooltip title="Github repository">
              <button type="button" className="active:scale-100 hover:scale-110 transition-all duration-100 ease-in-out
              ">
                <a href="https://github.com/luiselmuller/microcontroller-dashboard" target="_blank">
                  <GitHubIcon fontSize="large"/>
                </a>
              </button>
            </Tooltip>
          } 
          
          {/* Notifications */}
          {!mobileNav && 
            <Tooltip title="Notifications"
            className="outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100">
              <button type="button" onClick={() => setClickedMenu('notifications')}>
                <Badge badgeContent={notifications.length} color="info" overlap="circular">
                  {notifications.length > 0 ? <NotificationImportantIcon fontSize="large" /> : <NotificationsNoneIcon fontSize="large" />}
                </Badge>
              </button>
            </Tooltip>
          }
          
          {/* Settings */}
          {!mobileNav && 
            <Tooltip title="Settings"
              className="outline-none hover:scale-110 transition-all duration-150 ease-in-out hover:rotate-180 active:scale-100">
              <button type="button" onClick={() => setClickedMenu('settings')}>
                <SettingsIcon fontSize="large" />
              </button>
            </Tooltip>
          }

          {/* Profile */}
          {!mobileNav && 
            <Tooltip title="Profile"
              className="outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100">
              <button type="button" onClick={() => setClickedMenu('account')}>
                <AccountCircleIcon fontSize="large" />
              </button>
            </Tooltip>
          }
        </div>
    </div>
  )
}

export default Navbar