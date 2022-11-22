import { Backdrop, Box, ClickAwayListener, Fade, Modal, Typography } from '@mui/material'
import React, { FC } from 'react'

type settingProps = {
  menuFunc?: any
}

const Settings:FC<settingProps> = ({menuFunc}) => {

  return (
    <ClickAwayListener onClickAway={() => {menuFunc('none')}}>
      <div className={`absolute mt-12 bg-secondary-dark-bg h-96 w-72 sm:-translate-x-[145px] -translate-x-[135px]
      shadow-xl rounded-xl border-2 border-slate-100 border-opacity-30 overflow-scroll`}>
        <div className="p-2 flex gap-10 items-center border-b-2 border-slate-100 border-opacity-30">
          <h2 className="w-full text-center font-bold -translate-x-7 text-sm">Settings</h2>
          <div className="w-full flex items-center">
            <button type="button" className="text-xs flex items-center opacity-80 hover:opacity-100 transition-all duration-100 ease-in-out
            ">
              
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          
          
        </div>
      </div>
    </ClickAwayListener>
  )
}

export default Settings