import { FC} from 'react'

type deviceProps = {
  deviceData?: any,
}

const DeviceStatistics:FC<deviceProps> = ({deviceData}) => {

  return (
    <div className="mt-16 md:mt-5 px-7">
      <h2 className="text-2xl opacity-80 mb-5">Microcontroller</h2>
      {/* Temporary */}
      <div className="flex flex-col gap-5">
        {Array.isArray(deviceData) && deviceData.map(
          (device: any) => (
            <div key={device.id}>
              <div className="flex w-full bg-slate-300 dark:bg-secondary-dark-bg p-7 rounded-xl">
                <p className="flex w-full">{device.id}</p>
                <p className="flex w-full">{
                  device.id === "Uptime" ? (
                    // TODO: change millis to human readable time
                    device.info
                  ) :
                  device.info

                }</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

export default DeviceStatistics