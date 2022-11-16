import React, { FC } from 'react'
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';

type detailedProps = {
    sensorData?: any,
  }
  

const DetailedView:FC<detailedProps> = ({sensorData}) => {
  return (
    <div className="gap-5 mt-36 w-full h-full flex flex-col justify-center items-center">
        <p className="text-2xl">Page under construction...</p>
        <EngineeringOutlinedIcon className="scale-150 text-orange-400" fontSize="large"/>
    </div>
  )
}

export default DetailedView