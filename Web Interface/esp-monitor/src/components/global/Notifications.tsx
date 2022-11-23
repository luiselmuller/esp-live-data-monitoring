import { CircularProgress, ClickAwayListener } from '@mui/material'
import { FC, lazy, Suspense } from 'react'

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const NotificationCard = lazy(() => import('./NotificationCard'))

type notifProps = {
  menuFunc?: any,
  notifs?: any
}

const Notifications:FC<notifProps> = ({menuFunc, notifs}) => {
  // Could save some notifications in some structure and delete them when mark all as read
  return (
    <ClickAwayListener onClickAway={() => {menuFunc('none')}}>
      <div className={`absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-96 w-[300px] sm:-translate-x-[210px] -translate-x-[142px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto`}>
        <div className="p-2 flex gap-10 items-center border-b-2 border-slate-100 border-opacity-30">
          <h2 className="w-full text-center font-bold -translate-x-7 text-sm">Alerts</h2>
          <div className="w-full flex items-center">
            <button type="button" className="outline-none text-xs flex items-center opacity-80 hover:opacity-100 transition-all duration-100 ease-in-out
            ">
              <CheckBoxOutlinedIcon fontSize="small" className="scale-90"/>
              Mark all as read
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-evenly gap-1 py-1 px-1">
          {Array.isArray(notifs) && notifs.map(
            (alert:any) => (
              <div key={alert.id}>
                <Suspense  fallback={<CircularProgress />}>
                  <NotificationCard 
                    message={alert.notification} 
                    time={alert.time}
                    id={alert.id}
                  />
                </Suspense>
              </div>
            )
          )}
          
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Notifications