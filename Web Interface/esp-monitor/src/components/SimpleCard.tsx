import React, { FC } from 'react'

type props = {
    title?: string,
    width?: string,
    height?: string,
    icon?: any,
    bg?: string,
    iconColor?: string,
    iconBg?: string,
    data?: any

}

const SimpleCard:FC<props> = ({title=" ", width="w-72", height="h-28", icon=" ",
 bg="bg-secondary-dark-bg", iconColor="text-white", iconBg="bg-main-dark-bg", data=0}) => {
  return (
    <div className={`${width} ${height} ${bg} rounded-3xl flex items-center`}>
      <div className="ml-8">
        <div className={`scale-125 p-2 ${iconBg} rounded-xl ${iconColor}`}>{icon}</div>
      </div>
      <div className="ml-8">
        <p className="text-slate-200 opacity-50 text-sm mb-2">{title}</p>
        <p className="text-2xl">{data}</p>
      </div>
    </div>
  )
}

export default SimpleCard