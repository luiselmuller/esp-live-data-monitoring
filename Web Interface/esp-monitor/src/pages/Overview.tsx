import React, { FC, lazy, useEffect, useState } from 'react'

import WifiIcon from '@mui/icons-material/Wifi';

const SimpleCard = lazy(() => import('../components/SimpleCard'));

type overviewProps = {
  sensorData?: any,
}

// Simplified view of the data
const Overview:FC<overviewProps> = ({sensorData}) => {
  
  

  return (
    <div className="mt-16 md:mt-5">
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 sm:px-4">
        {/* TODO: Make the cards render according to the sensor data
            fields received from firebase. Also give the icons an id somehow so they correspond to 
            a certain data reading. */}
        {/* TODO: Decide on ground movement severity categories, could use
            none, minor, dangerous/medium, severe */}
  
        {Array.isArray(sensorData) && sensorData.map(
          (sensor: any) => (
            <div key={sensor.id}>
              <SimpleCard
                title={sensor.name}
                data={<p>
                  {sensor.reading}
                </p>}
                icon={sensor.id}
              />
            </div>
          )
        )}
      </div>
      {/* TODO: Make the widgets also optional somehow and render them according to options 
      checked in the settings */}
      {/* Widgets */}
      <div className="flex flex-wrap justify-center gap-4 px-4 bg-white">

      </div>
    </div>
  )
}

export default Overview