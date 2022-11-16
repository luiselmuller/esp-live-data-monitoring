import React, { FC, Suspense } from 'react'

import EngineeringIcon from '@mui/icons-material/Engineering'; //temporary
import { CircularProgress } from '@mui/material';

type deviceProps = {
  deviceData?: any,
}

const DeviceStatistics:FC<deviceProps> = (deviceData) => {
  return (
    <div className="mt-16 md:mt-5">
      {/* Temporary */}
      <div className="flex sm:flex-row flex-col justify-center items-center h-full w-full gap-10 text-2xl">
        <div className="flex flex-col gap-4 px-7 w-full sm:w-fit">
          <p>Microcontroller</p>
          <div className="flex flex-col gap-2">
            <p className="text-sm"><span className="opacity-70">Name: </span>ESP32 WROOM-32</p>
            <p className="text-sm"><span className="opacity-70">Status: </span>Offline</p>
            <p className="text-sm"><span className="opacity-60">Uptime: </span>1 hr</p>
            <p className="text-sm"><span className="opacity-60">Address: </span>FB:7D:AA:5A:45:B8</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 px-7 w-full sm:w-fit">
          <p>Sensors</p>
          <div className="flex flex-col gap-2">
            <p className="text-sm"><span className="opacity-70">Temperature: </span>Working</p>
            <p className="text-sm"><span className="opacity-70">Humidity: </span>Working</p>
            <p className="text-sm"><span className="opacity-60">Soil Moisture: </span>Working</p>
            <p className="text-sm"><span className="opacity-60">Air Quality: </span>Working</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceStatistics