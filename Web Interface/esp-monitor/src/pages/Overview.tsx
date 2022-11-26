import { FC, lazy, Suspense, useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material';

const SimpleCard = lazy(() => import('../components/SimpleCard'));
const RenderChart = lazy(() => import( '../components/RenderChart'));

// Firebase
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Area, AreaChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


type overviewProps = {

}

let tempHumData: any[] = [];

// Simplified view of the data
const Overview:FC<overviewProps> = ({}) => {
  let tempData: any[] = [{"date": 10, "temperature": 30},{"date": 10, "temperature": 57},{"date": 10, "temperature": 23},{"date": 10, "temperature": 96}];

  //TODO: Try to only get temperature and humidity chart data on here

  const [sensors, setSensors]:any = useState({});

  // Getting sensor readings
  useEffect(() => 
    onSnapshot(
    (collection(db,"Sensors")), 
        (snapshot) => 
        setSensors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ), []);

  useEffect(() => {
    if(tempHumData.length <= 10){
      tempHumData.push(
        {"humidity": sensors[2]?.reading, "temperature": sensors[4]?.reading}
      )
    }
    else{
      tempHumData.shift();
    }
  }, [sensors[4]?.reading, sensors[2]?.reading])

  return (
    <div className="mt-16 md:mt-12 flex flex-col gap-10 px-4 pb-28">
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {/* TODO: Decide on notification severity categories, could use
            none, minor, dangerous/medium, severe */}
        {Array.isArray(sensors) && sensors.map(
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
        <div>
          <div className="h-[530px] min-w-fit w-full sm:w-full lg:w-[1000px] rounded-xl bg-slate-300 dark:bg-secondary-dark-bg p-10
          flex items-center justify-center flex-wrap">
            <p className="mb-5 capitalize text-xl text-slate-700 dark:text-slate-400 text-center">temperature and humidity chart</p>
            <ResponsiveContainer width="99%" height={400}>
              <AreaChart
                width={500}
                height={400}
                data={[...tempHumData]}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <XAxis />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="temperature" stackId="2" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="humidity" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default Overview