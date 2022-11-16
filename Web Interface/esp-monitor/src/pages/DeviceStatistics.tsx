import React, { FC, Suspense } from 'react'

import EngineeringIcon from '@mui/icons-material/Engineering'; //temporary
import { CircularProgress } from '@mui/material';

type deviceProps = {
  deviceData?: any,
}

const DeviceStatistics:FC<deviceProps> = (deviceData) => {
  return (
    <div className="mt-20">
      {/* Temporary */}
      <div className="px-32 flex flex-col justify-center items-center h-full w-full gap-4 text-2xl">
        {Array.isArray(deviceData) && deviceData.map(
          (device: any) => (
            <div key={device.id}>
              <div className={`${device.isOnline ? "bg-green-400" : "bg-red-400"} h-3 w-3 ml-5 rounded-full`}></div>
              <p>{device.isOnline ? "Online" : "Offline"}</p>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default DeviceStatistics