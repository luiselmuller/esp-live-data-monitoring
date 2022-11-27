import { FC } from 'react'

type ntcProps = {
    message?: any,
    time?: any,
    id?: any,

}

const NotificationCard:FC<ntcProps> = ({message, time, id}) => {

  return (
    <div className="w-full h-20 shadow-lg my-1 border-1 border-black dark:border-slate-200 border-opacity-30 rounded-lg">
        <div className="font-bold italic w-full h-5 flex text-xs px-2 mb-2 dark:text-gray-300  border-b border-black dark:border-slate-200 border-opacity-30">
            {id} Alert
        </div>
        <div className="w-full h-10 px-2">
            {message}
        </div>
        <div className="h-fit w-full flex justify-end px-2 -translate-y-2 -translate-x-1 text-xs dark:text-gray-300">
            {time}
        </div>
    </div>
  )
}

export default NotificationCard