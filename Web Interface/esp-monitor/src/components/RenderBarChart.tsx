import React, { FC, Suspense } from 'react'

import { XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { CircularProgress } from '@mui/material';

type chartProps = {
    sensorName?: any,
    sensorData?: any,
    lines?: any,
    xKey?: any,
    yKey?: any,
    width?: any,
    height?: any,
}

const RenderBarChart:FC<chartProps> = ({sensorName="Generic Sensor", sensorData, lines, xKey, yKey}) => {
  return (
    <Suspense fallback={<CircularProgress />}>
        <div className={`h-[530px] min-w-fit max-w-[800px] rounded-xl bg-slate-300 dark:bg-secondary-dark-bg p-10
        flex items-center justify-center flex-wrap`}>
        <p className="mb-5 capitalize text-xl text-slate-700 dark:text-slate-400">{sensorName} chart</p>
            <ResponsiveContainer height={400} width="99%" >
                <BarChart
                    data={sensorData}
                    margin={{
                    top: 5,
                    right: 0,
                    left: -25,
                    bottom: 5,
                    }}
                >  
                    <XAxis dataKey={xKey} />
                    <YAxis dataKey={yKey}/>
                    <Tooltip />
                    <Legend />
                    {
                        lines.map((val: any) => (
                            <Bar key="val" dataKey={val[0]} fill={val[1]}/>
                        ))
                    }
                    
                </BarChart>
            </ResponsiveContainer>
        </div>
    </Suspense>
  )
}

export default RenderBarChart