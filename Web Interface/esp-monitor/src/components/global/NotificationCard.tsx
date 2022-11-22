import React, { FC } from 'react'

type ntcProps = {
    message?: any,
    time?: any,
    id?: any,

}

const NotificationCard:FC<ntcProps> = ({message, time, id}) => {

  return (
    <div className="w-full h-20 bg-gray-600 rounded-xl">
        <div className="w-full h-5 flex text-xs px-2 py-1 mb-2 text-gray-300">
            {id} Alert
        </div>
        <div className="w-full h-10 px-2">
            {message}
        </div>
        <div className="h-fit w-full flex justify-end px-2 -translate-y-2 -translate-x-1 text-xs text-gray-300">
            {time}
        </div>
    </div>
  )
}

export default NotificationCard