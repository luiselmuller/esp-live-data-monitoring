import { FC, lazy, Suspense, useEffect, useState } from 'react'

// Firebase
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const RenderChart = lazy(() => import('../components/RenderChart'));


type detailedProps = {
  chartData?: any,
}

// Temperature chart data
let tempHumData: any[] = [];
let tempData:    any[] = [];
let humData:     any[] = [];
let waterData:   any[] = [];
let groundData:  any[] = [];
let airData:     any[] = [];
let soilData:    any[] = [];

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
    if(tempHumData.length <= chartDataLimit){
      tempHumData.push(
        {"temperature": sensors[4]?.reading, "humidity": sensors[2]?.reading} //sensors[4].reading
      )
    }
    else{
      tempHumData.shift();
    }
  }, [sensors[4]?.reading, sensors[2]?.reading])

  useEffect(() => {
    for(let i = 0; i < sensors.length; i++){
      switch(sensors[i].name){
        case 'temperature':
          if(tempData.length <= chartDataLimit){
            tempData.push(
              {"Temperature": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            tempData.shift();
          }
        break;
        case 'humidity':
          if(humData.length <= chartDataLimit){
            humData.push(
              {"Humidity": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            humData.shift();
          }
        break;
        case 'air quality':
          if(airData.length <= chartDataLimit){
            airData.push(
              {"Air PPM": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            airData.shift();
          }
        break;
        case 'soil moisture':
          if(soilData.length <= chartDataLimit){
            soilData.push(
              {"Soil Moisture": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            soilData.shift();
          }
        break;
        case 'ground movements':
          if(groundData.length <= chartDataLimit){
            groundData.push(
              {"Ground Movement": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            groundData.shift();
          }
        break;
        case 'water level':
          if(waterData.length <= chartDataLimit){
            waterData.push(
              {"Water Level": sensors[i]?.reading,} //sensors[4].reading
            )
          }
          else{
            waterData.shift();
          }
        break;


      }
    }
  }, [sensors])


  return (
    <div className="gap-6 mt-5 w-full h-full flex justify-center flex-wrap items-center pb-36 sm:px-5 px-2">
      <RenderChart 
        sensorName={"Temperature and Humidity"}
        sensorData={tempHumData}
        lines={[["temperature", "#05B5C6"], ["humidity", "#4961E4"]]}
      />

      <div  className="flex items-center justify-center flex-wrap gap-6 w-full h-fit">
        {Array.isArray(sensors) && sensors.map(
          (sensor: any) => (
            <div key={sensor.id}>
              {
                sensor.id === "Temperature" ? 
                  <RenderChart 
                    sensorName={sensor.name}
                    sensorData={tempData}
                    lines={[["Temperature", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "Humidity" ? 
                  <RenderChart 
                    sensorName={sensor.name}
                    sensorData={humData}
                    lines={[["Humidity", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "AirQuality" ? 
                  <RenderChart 
                    sensorName={sensor.name}
                    sensorData={airData}
                    lines={[["Air PPM", "#05B5C6"]]}
                    
                  /> 
                :
                sensor.id === "GroundMovements" ? 
                  <RenderChart 
                    sensorName={sensor.name}
                    sensorData={groundData}
                    lines={[["Ground Movement", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "WaterLevel" ? 
                  <RenderChart 
                    sensorName={sensor.name}
                    sensorData={waterData}
                    lines={[["Water Level", "#05B5C6"]]}
                  /> 
                :
                sensor.id === "SoilMoisture" ? 
                  <RenderChart 
                    sensorName={sensor.name}
                    sensorData={soilData}
                    lines={[["Soil Moisture", "#05B5C6"]]}
                  /> 
                : null
              }
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default DetailedView