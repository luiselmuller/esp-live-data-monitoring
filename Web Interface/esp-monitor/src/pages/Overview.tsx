import { FC, lazy, Suspense, useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const SimpleCard = lazy(() => import('../components/SimpleCard'));
const Widget = lazy(() => import('../components/Widget'));

// Firebase
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';


type overviewProps = {

}

// Simplified view of the data
const Overview:FC<overviewProps> = ({}) => {
  let tempData: any[] = [{"date": 10, "temperature": 30},{"date": 10, "temperature": 57},{"date": 10, "temperature": 23},{"date": 10, "temperature": 96}];

  //TODO: Try to only get temperature and humidity chart data on here

  const [sensors, setSensors] = useState({});

  // Getting sensor readings
  useEffect(() => 
    onSnapshot(
    (collection(db,"Sensors")), 
        (snapshot) => 
        setSensors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    ), []);

  return (
    <div className="mt-16 md:mt-12 flex flex-col gap-10">
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-6 sm:px-4">
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
  
        
      </div>
      
    </div>
  )
}

export default Overview