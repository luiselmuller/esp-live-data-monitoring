import { ClickAwayListener} from '@mui/material'
import { FC } from 'react'

type settingProps = {
  menuFunc?: any
}

const Settings:FC<settingProps> = ({menuFunc}) => {

  return (
    <ClickAwayListener onClickAway={() => {menuFunc('none')}}>
      <div className={`z-[1000] absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72 sm:-translate-x-[70px] -translate-x-[25px] -translate-y-[40px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`}>
        <div className="p-2 flex gap-10 items-center">
          <h2 className="w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500">Settings</h2>
          <div className="w-full flex items-center">
            
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center px-1">
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Configure Microcontroller
          </button>
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Configure Database
          </button>
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Manage Data
          </button>
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Edit Theme
          </button>
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Change Layout
          </button>
          <p className="text-xs text-red-400 mt-10">*for demonstration purposes</p>
          
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Settings