import { GuardSpinner } from "react-spinners-kit"

const LoadingScreen = () => {
  return (
    <div className="h-screen w-screen bg-main-bg dark:bg-main-dark-bg flex justify-center items-center">
      <GuardSpinner />
    </div>
  )
}

export default LoadingScreen