import { FC, lazy, useEffect, useRef } from 'react'
const CancelOutlined = lazy(() => import('@mui/icons-material/CancelOutlined'))

// Firebase
import db from '../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';


type ntcProps = {
    message?: any,
    time?: any,
    id?: any,

}

const NotificationCard:FC<ntcProps> = ({message, time, id}) => {
      
    return (
        <div className="max-w-[300px] h-fit shadow-lg my-1 border-1 border-black dark:border-slate-200 border-opacity-30 rounded-lg">
            <div className="font-bold italic w-full h-5 flex text-xs px-2 mb-2 rounded-t-md dark:text-main-dark-bg text-main-bg 
            dark:bg-main-dark-bg bg-main-bg  border-b border-black dark:border-slate-200 border-opacity-30 items-center">
                {id} Alert
                <button type="button" className="hover:opacity-50 transition-all duration-100 ease-in-out hover:cursor-pointer absolute translate-x-64"
                onClick={async () => await deleteDoc(doc(db,"Notifications", id))}>
                    <CancelOutlined fontSize="small"/>
                </button>
            </div>
            <div className="h-fit px-2 mb-2 overflow-hidden text-">
                {message}
            </div>
            <div className="h-fit w-full flex justify-end px-2 -translate-y-2 -translate-x-1 text-xs dark:text-gray-300">
                {time}
            </div>
        </div>
    )
}

export default NotificationCard