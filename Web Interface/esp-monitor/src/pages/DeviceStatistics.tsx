import React, { FC, Suspense } from 'react'

import EngineeringIcon from '@mui/icons-material/Engineering'; //temporary
import { CircularProgress } from '@mui/material';
import WifiIcon from '@mui/icons-material/Wifi'

type deviceProps = {
  deviceData?: any,
}

const DeviceStatistics:FC<deviceProps> = (deviceData) => {
  return (
    <div className="mt-16 md:mt-5 px-7">
      <h2 className="text-2xl opacity-80 mb-5">Microcontroller</h2>
      {/* Temporary */}
      <div className="flex flex-col gap-5 ">
        <div className="flex w-full bg-secondary-dark-bg p-7 rounded-xl">
          <p className="flex w-full">Name</p>
          <p className="flex w-full">ESP32 WROOM-32</p>
        </div>
        
        <div className="flex w-full bg-secondary-dark-bg p-7 rounded-xl">
          <p className="flex w-full">Status</p>
          <p className="flex w-full">Offline</p>
        </div>

        <div className="flex w-full bg-secondary-dark-bg p-7 rounded-xl">
          <p className="flex w-full">Uptime</p>
          <p className="flex w-full">20 days</p>
        </div>

        <div className="flex w-full bg-secondary-dark-bg p-7 rounded-xl">
          <p className="flex w-full">Last Online</p>
          <p className="flex w-full">11/15/2022</p>
        </div>

        <div className="flex w-full bg-secondary-dark-bg p-7 rounded-xl">
          <p className="flex w-full">Address</p>
          <p className="flex w-full">5C:BD:31:B6:51:B8</p>
        </div>

        <div className="flex w-full bg-secondary-dark-bg p-7 rounded-xl">
          <p className="flex w-full">Signal</p>
          <p className="flex w-full gap-2">
            -54
            <WifiIcon />  
            {/* Change wifi icon according to signal strength */}
          </p>
        </div>

        <div className="flex w-full bg-secondary-dark-bg p-7 rounded-xl">
          <p className="flex w-full">Database</p>
          <p className="flex w-full">Google Firestore</p>
        </div>
      </div>
    </div>
  )
}

export default DeviceStatistics