import { ClickAwayListener } from '@mui/material'
import { FC } from 'react'

type accountProps = {
  menuFunc?: any
}


const Account:FC<accountProps> = ({menuFunc}) => {
  return (
    <ClickAwayListener onClickAway={() => {menuFunc('none')}}>
      <div className={`z-[1000] absolute mt-12 bg-slate-300 dark:bg-secondary-dark-bg h-fit w-72
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-auto py-1`}>
        <div className="p-2 flex gap-10 items-center">
          <h2 className="w-full text-center font-bold -translate-x-7 text-sm dark:text-slate-400 text-slate-500">Account</h2>
          <div className="w-full flex items-center text-xs">
          
          </div>
        </div>

        <div className="flex flex-col gap-1 justify-center items-center px-1">
          
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Edit Account
          </button>
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Privacy Settings
          </button>
          <button type="button" className="w-full rounded-lg p-2 dark:text-slate-400 text-slate-500 dark:hover:text-slate-100
          dark:hover:bg-main-dark-bg active:scale-95 shadow-lg transition-all duration-100 ease-in-out">
            Log Out
          </button>
          <p className="text-xs text-red-400 mt-6">*for demonstration purposes</p>
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Account