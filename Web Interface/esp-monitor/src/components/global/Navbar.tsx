import { FC, lazy, useEffect, useState } from 'react'

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
import GitHubIcon from '@mui/icons-material/GitHub';

import Notifications from './Notifications';
import Settings from './Settings';
import Account from './Account';

// Firebase
import db from '../../firebase';
import { collection, onSnapshot } from 'firebase/firestore';



type navProps = {
  customFuncOne?: any,
  disabledSide?: any,
  mobileNav?: any,
  customFuncTwo?: any,
  microStatus?: any,
  clickedMenu?: any,
  setClickedMenu?: any,
  handleTheme?: any,
  theme? : any
}

const Navbar:FC<navProps> =({customFuncOne, customFuncTwo, disabledSide, mobileNav, microStatus, clickedMenu, setClickedMenu,
  handleTheme, theme}) => {
  const [notifications, setNotifications] = useState([{}]);

  // Getting notifications
  useEffect(() => 
    onSnapshot(
    (collection(db,"Notifications")), 
        (snapshot) => 
        setNotifications(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ), []);

  return (
    <div className={`flex justify-evenly items-center p-3 relative mx-3 z-[10000]`}>
        <button type="button" onClick={!disabledSide ? customFuncOne : customFuncTwo}
          className={`outline-none hover:scale-110 transition-all duration-150 ease-in-out active:scale-100`}>
          {mobileNav ? <CancelOutlined fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
        <div className={`flex gap-2 items-center sm:text-lg text-md lg:border border-secondary-dark-bg
        rounded-full py-1 px-4 ml-5`}>
          <div className={`${microStatus[0] ? "bg-green-400" : "bg-red-400"} h-3 w-3 rounded-full`}></div>
          {!disabledSide && <p>{microStatus[0] ? "Online" : "Offline"}</p>} 
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

          {/* Logic for the dropdown menus */}
          {!mobileNav && 
            clickedMenu === "notifications" ? <Notifications menuFunc={setClickedMenu} notifs={notifications}/> :
            clickedMenu === "settings" ? <Settings menuFunc={setClickedMenu}/> :
            clickedMenu === "account" ? <Account menuFunc={setClickedMenu}/> :" "
          }
        </div>
    </div>
  )
}

export default Navbar