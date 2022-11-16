import React, { FC } from 'react'

// Icon imports
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import Tooltip from '@mui/material/Tooltip';
import { Badge } from '@mui/material';
import CancelOutlined from '@mui/icons-material/CancelOutlined';

type navProps = {
  customFuncOne?: any,
  disabledSide?: any,
  mobileNav?: any,
  customFuncTwo?: any,
  microStatus?: any
}

const Navbar:FC<navProps> =({customFuncOne, customFuncTwo, disabledSide, mobileNav, microStatus}) => {
  let notificationNumber = 0;
  let theme = 0;

  return (
    <div className={`flex justify-evenly items-center p-3 relative mx-3 z-[10000]`}>
        <button type="button" onClick={!disabledSide ? customFuncOne : customFuncTwo}
          className={`hover:scale-110 transition-all duration-150 ease-in-out`}>
          {mobileNav ? <CancelOutlined fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
        <div className="flex gap-2 items-center sm:text-lg text-md">
          <div className={`${microStatus[0] ? "bg-green-400" : "bg-red-400"} h-3 w-3 ml-5 rounded-full`}></div>
          {!disabledSide && <p>{microStatus[0] ? "Online" : "Offline"}</p>} 
        </div>

        <div className="w-full"></div>

        <div className="flex gap-2 sm:gap-4">
          <Tooltip title="Theme">
            <button type="button" onClick={() => {}}
              className={`hover:scale-110 transition-all duration-150 ease-in-out outline-none`}>
              {theme ? <LightModeIcon fontSize="large" /> : <DarkModeIcon fontSize="large" />}
            </button>
          </Tooltip>

          {!mobileNav && 
            <Tooltip title="Notifications"
            className="hover:scale-110 transition-all duration-150 ease-in-out">
              <button type="button" onClick={() => {}}>
                <Badge badgeContent={notificationNumber} color="info" overlap="circular">
                  {notificationNumber > 0 ? <NotificationImportantIcon fontSize="large" /> : <NotificationsNoneIcon fontSize="large" />}
                </Badge>
              </button>
            </Tooltip>
          }
          
          {/* Settings */}
          {!mobileNav && 
            <Tooltip title="Settings"
              className="hover:scale-110 transition-all duration-150 ease-in-out hover:rotate-180">
              <button type="button" onClick={() => {}}>
                <SettingsIcon fontSize="large" />
              </button>
            </Tooltip>
          }

          {/* Profile */}
          {!mobileNav && 
            <Tooltip title="Profile"
              className="hover:scale-110 transition-all duration-150 ease-in-out">
              <button type="button" onClick={() => {}}>
                <AccountCircleIcon fontSize="large" />
              </button>
            </Tooltip>
          }
        </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar