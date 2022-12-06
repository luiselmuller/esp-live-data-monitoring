import { FC, lazy } from 'react'

const ThermostatIcon = lazy(() => import('@mui/icons-material/Thermostat'));
const GrassIcon = lazy(() => import('@mui/icons-material/Grass'));
const OpacityTwoToneIcon = lazy(() => import('@mui/icons-material/OpacityTwoTone'));
const AirIcon = lazy(() => import('@mui/icons-material/Air'));
const TerrainOutlinedIcon = lazy(() => import('@mui/icons-material/TerrainOutlined'));
const StraightenOutlinedIcon = lazy(() => import('@mui/icons-material/StraightenOutlined'));
const EmojiObjectsOutlinedIcon = lazy(() => import('@mui/icons-material/EmojiObjectsOutlined'));
const LocalFireDepartmentIcon = lazy(() => import('@mui/icons-material/LocalFireDepartment'));
const WaterIcon = lazy(() => import('@mui/icons-material/Water'));

// Icons (they use the collection id to link to the data)
const GroundMovementsIcon = <TerrainOutlinedIcon fontSize="large"/>;
const TemperatureIcon = <ThermostatIcon fontSize="large"/>;
const HumidityIcon = <OpacityTwoToneIcon fontSize="large"/>;
const AirQualityIcon = <AirIcon fontSize="large"/>;
const WaterLevelIcon = <WaterIcon fontSize="large"/>;
const SoilMoistureIcon = <GrassIcon fontSize="large"/>;
const PhotoresistorIcon = <EmojiObjectsOutlinedIcon fontSize="large"/>;
const FireSensor = <LocalFireDepartmentIcon fontSize="large"/>;
const DefaultIcon = <StraightenOutlinedIcon fontSize="large" className="rotate-45" />;


type cardProps = {
    title?: string,
    width?: string,
    height?: string,
    icon?: any,
    bg?: string,
    iconColor?: string,
    iconBg?: string,
    data?: any

}

const SimpleCard:FC<cardProps> = ({title=" ", width="w-80", height="h-28", icon=" ",
 bg="bg-slate-300 dark:bg-secondary-dark-bg", iconColor="dark:text-[#e4e5f1] text-main-dark-bg", iconBg="dark:bg-main-dark-bg bg-main-bg", data=0}) => {
  
  let tempType = "℉";
  
  return (
    <div className={`${width} ${height} ${bg} rounded-3xl flex items-center`}>
      <div className="ml-8">
        <div className={`scale-125 p-2 ${iconBg} rounded-xl ${iconColor}`}>
          {
            icon === "Temperature" ? TemperatureIcon :
            icon === "ProbeTemperature" ? TemperatureIcon :
            icon === "Humidity" ? HumidityIcon :
            icon === "GroundMovements" ? GroundMovementsIcon :
            icon === "AirQuality" ? AirQualityIcon :
            icon === "SoilMoisture" ? SoilMoistureIcon :
            icon === "WaterLevel" ? WaterLevelIcon :
            icon === "Photoresistor" ? PhotoresistorIcon :
            icon === "FireSensor" ? FireSensor :
            DefaultIcon
          }
        </div>
      </div>
      <div className="ml-8 ">
        <p className="dark:text-slate-300 opacity-50 text-sm mb-2 capitalize">{title}</p>
        <p className="text-2xl flex gap-2 dark:text-[#e4e5f1]">
          {
            data
          }
          {
            title === "temperature" ? tempType :
            title === "probe temperature" ? tempType :
            title === "photoresistor" ? "fc" :
            title === "humidity" ? "%" :
            title === "soil moisture" ? "%" :
            title === "air quality" ? "PPM" :
            title === "water level" ? "cm" :
            title === "ground movements" ? "G" :
            " "
          }  
        </p>
      </div>
    </div>
  )
}

export default SimpleCard