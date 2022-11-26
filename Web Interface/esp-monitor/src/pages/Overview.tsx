import { FC, lazy, Suspense, useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleCard = lazy(() => import('../components/SimpleCard'));
const Widget = lazy(() => import('../components/Widget'));
const RenderChart = lazy(() => import( '../components/RenderChart'));

// Firebase
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';


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
    <div className="mt-16 md:mt-12 flex flex-col gap-10 sm:px-4 sm:pb-28">
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
          <RenderChart 
            sensorName={"Temperature and Humidity"}
            sensorData={[...tempHumData]}
            lines={[
              ["temperature", "#05B5C6"], 
              ["humidity", "#4961E4"]
            ]}
          />
        </div>
        
      </div>
      
    </div>
  )
}

export default Overview