import React, { FC, Suspense } from 'react'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

// charts
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CircularProgress } from '@mui/material';

type detailedProps = {
  sensorData?: any,
}


const DetailedView:FC<detailedProps> = ({sensorData}) => {
  let tempData: any[] = [{"date": 10, "temperature": 30},{"date": 10, "temperature": 57},{"date": 10, "temperature": 23},{"date": 10, "temperature": 96}];


  return (
    <div className="gap-5 mt-36 w-full h-full flex justify-center flex-wrap items-center">
      {/* TODO:figure out how to do this better */}
      {Array.isArray(sensorData) && sensorData.map(
          (sensor: any) => (
            <div key={sensor.id} className="h-[500px] max-w-[700px] w-full">
              <Suspense fallback={<CircularProgress />}>
                {
                  sensor.id === "Temperature" ?
                    <ResponsiveContainer height={400} width="100%">
                      <LineChart
                        data={tempData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 10,
                          bottom: 5,
                        }}
                      >  
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  :
                  sensor.id === "Humidity" ?
                    <ResponsiveContainer height={400} width="100%">
                      <LineChart
                        data={tempData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 10,
                          bottom: 5,
                        }}
                      >  
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  :
                  sensor.id === "AirQuality" ?
                    <ResponsiveContainer height={400} width="100%">
                      <LineChart
                        data={tempData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 10,
                          bottom: 5,
                        }}
                      >  
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  :
                  sensor.id === "WaterLevel" ?
                  <ResponsiveContainer height={400} width="100%">
                      <LineChart
                        data={tempData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 10,
                          bottom: 5,
                        }}
                      >  
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  :
                  sensor.id === "SoilMoisture" ? 
                  <ResponsiveContainer height={400} width="100%">
                      <LineChart
                        data={tempData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 10,
                          bottom: 5,
                        }}
                      >  
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  :
                  sensor.id === "GroundMovements" ?
                  <ResponsiveContainer height={400} width="100%">
                      <LineChart
                        data={tempData}
                        margin={{
                          top: 5,
                          right: 30,
                          left: 10,
                          bottom: 5,
                        }}
                      >  
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="temperature" stroke="#82ca9d" />
                      </LineChart>
                    </ResponsiveContainer>
                  :
                  " "
                        
                }
              </Suspense>
            </div>
          )
        )}
    </div>
  )
}

export default DetailedView