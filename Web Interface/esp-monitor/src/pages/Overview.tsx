import React, { FC, lazy, Suspense, useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleCard = lazy(() => import('../components/SimpleCard'));
const Widget = lazy(() => import('../components/Widget'));


type overviewProps = {
  sensorData?: any,
}

// Simplified view of the data
const Overview:FC<overviewProps> = ({sensorData}) => {
  let tempData: any[] = [{"date": 10, "temperature": 30},{"date": 10, "temperature": 57},{"date": 10, "temperature": 23},{"date": 10, "temperature": 96}];


  return (
    <div className="mt-16 md:mt-12 flex flex-col gap-10">
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:px-4">
        {/* TODO: Decide on notification severity categories, could use
            none, minor, dangerous/medium, severe */}
  
        {Array.isArray(sensorData) && sensorData.map(
          (sensor: any) => (
            <div key={sensor.id}>
              <Suspense fallback={<CircularProgress />}>
                <SimpleCard
                  title={sensor.name}
                  data={
                    <p>
                      {sensor.reading}
                    </p>
                  }
                  icon={sensor.id}
                />
              </Suspense>
            </div>
          )
        )}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 w-full h-fit">
  
        
      </div>
      
    </div>
  )
}

export default Overview