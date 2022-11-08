import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { ref, onValue, getDatabase } from 'firebase/database'
import { database, app } from './firebase'

function App() {
  const [espStatus, setEspStatus] = useState(false)
  
  const espStatusRef = ref(database, 'Device-Statistics');
  onValue(espStatusRef, (snapshot) => {
    const data = snapshot.val();
    setEspStatus(data);
    console.log(data);
  })

  return (
    <div className="App">
      <div className="flex justify-center scale-150 mb-10">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ESP32 Status</h1>
      <div className="card flex items-center justify-center gap-5 text-3xl font-bold tracking-wide">
        <div className={`rounded-full h-5 w-5 ${espStatus ? "bg-green-500" : "bg-red-500"}`}></div>   
        {!espStatus ? (<h2>Offline</h2>) : (<h2>Online</h2>)}
      </div>
      <p className="mb-10">
        Firebase and ESP32 communication example.
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
