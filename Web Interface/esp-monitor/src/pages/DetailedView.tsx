import { FC, Suspense, useEffect, useState } from 'react'

// charts
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CircularProgress } from '@mui/material';

// Firebase
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';


type detailedProps = {
  chartData?: any,
}

// Temperature chart data
let tempData:   any[] = [];
let humData:    any[] = [];
let waterData:  any[] = [];
let groundData: any[] = [];
let airData:    any[] = [];
let soilData:   any[] = [];

const DetailedView:FC<detailedProps> = ({chartData}) => {
  const chartDataLimit = 10;
  let currentDate = new Date();
  let date = currentDate.getMonth() + 1 + "/" + currentDate.getDate() + "/" + currentDate.getFullYear(); 
  let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();  
  
  // TODO: try to get all the chart data individually

  const [sensors, setSensors]: any = useState({});

  // Getting sensor readings
  useEffect(() => 
    onSnapshot(
    (collection(db,"Sensors")), 
        (snapshot) => 
        setSensors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ), []);

  // put in a for loop to get each update for each sensor and put it in the respective array
  // Temperature data
  useEffect(() => {
      if(tempData.length <= chartDataLimit){
        tempData.push(
          {"date": date + " - " + time, "temperature": Math.random() * 100} //sensors[4].reading
        )
      }
      else{
        tempData.shift();
      }
      console.log(tempData)
    }, [currentDate.getSeconds()])

  return (
    <div className="gap-6 mt-16 w-full h-full flex justify-center flex-wrap items-center pb-36 sm:px-0 px-2">
      {/* TODO:figure out how to do this better */}
      {Array.isArray(sensors) && sensors.map(
          (sensor: any) => (
            <div key={sensor.id} className="h-[500px] max-w-[650px] w-full rounded-xl bg-slate-300 dark:bg-secondary-dark-bg p-10">
              <p className="mb-5 capitalize text-xl text-slate-700 dark:text-slate-400">{sensor.name} chart</p>
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
                        <XAxis dataKey="date" />
                        <YAxis dataKey="temperature"/>
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