import React, { FC } from 'react'

type widgetProps = {
    widTitle?: any,
    widIcon?: any,
    widWidth?: any,
    widHeight?: any,
    widType?: any, // there will be 2 widget types for now earthquate and weather
    // in the future the widget type can be changed for something else or make it more customizable and easier
    // to pick the kind of widget
  }

const Widget:FC<widgetProps> = ({widWidth="w-2/4", widHeight="h-96", widType="", widIcon, widTitle="Weather"}) => {
  return (
    <div className={`${widWidth} ${widHeight} bg-secondary-dark-bg rounded-xl`}>
        
    </div>
  )
}

export default Widget