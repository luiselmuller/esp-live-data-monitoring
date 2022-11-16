import React, { FC } from 'react'

import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterIcon from '@mui/icons-material/Water';
import GrassIcon from '@mui/icons-material/Grass'; // temporary
import OpacityTwoToneIcon from '@mui/icons-material/OpacityTwoTone'; // temporary
import AirIcon from '@mui/icons-material/Air';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';

// Icons (they use the collection id to link to the data)
const GroundMovementsIcon = <TerrainOutlinedIcon fontSize="large"/>;
const TemperatureIcon = <ThermostatIcon fontSize="large"/>;
const HumidityIcon = <OpacityTwoToneIcon fontSize="large"/>;
const AirQualityIcon = <AirIcon fontSize="large"/>;
const WaterLevelIcon = <WaterIcon fontSize="large"/>;
const SoilMoistureIcon = <GrassIcon fontSize="large"/>;
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

const SimpleCard:FC<cardProps> = ({title=" ", width="w-72", height="h-28", icon=" ",
 bg="bg-secondary-dark-bg", iconColor="text-white", iconBg="bg-main-dark-bg", data=0}) => {
  return (
    <div className={`${width} ${height} ${bg} rounded-3xl flex items-center`}>
      <div className="ml-8">
        <div className={`scale-125 p-2 ${iconBg} rounded-xl ${iconColor}`}>
          {
            icon === "Temperature" ? TemperatureIcon :
            icon === "Humidity" ? HumidityIcon :
            icon === "GroundMovements" ? GroundMovementsIcon :
            icon === "AirQuality" ? AirQualityIcon :
            icon === "SoilMoisture" ? SoilMoistureIcon :
            icon === "WaterLevel" ? WaterLevelIcon :
            DefaultIcon
          }
        </div>
      </div>
      <div className="ml-8">
        <p className="text-slate-200 opacity-50 text-sm mb-2 capitalize">{title}</p>
        <p className="text-2xl">{data}</p>
        {/* TODO: Add here the symbol conditionaly with the type of sensor */}
      </div>
    </div>
  )
}

export default SimpleCard