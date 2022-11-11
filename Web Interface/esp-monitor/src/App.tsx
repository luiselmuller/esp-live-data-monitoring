import { lazy, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/global/Navbar'
import { createTheme, Snackbar, ThemeProvider } from '@mui/material'

// Lazy load pages
const Overview = lazy(() => import('./pages/Overview'))
const DeviceStatistics = lazy(() => import('./pages/DeviceStatistics'))
const Sidebar = lazy(() => import('./components/global/Sidebar'))
const MobileSidebar = lazy(() => import('./components/global/MobileSidebar'))

// Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(1920);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarDisabled, setSidebarDisabled] = useState(false);
  const [mobileSideDisabled, setMobileSideDisabled] = useState(true);

  let disableSidebar = false;

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  })
  useEffect(() =>{
    if(screenSize <= 700){
      setSidebarOpen(false);
      setSidebarDisabled(true);
      setMobileSideDisabled(false);
    }
    else{
      setSidebarDisabled(false);
      setMobileSideDisabled(true);
      setMobileSidebarOpen(false);
    }
    
  }, [screenSize, setSidebarOpen])

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <BrowserRouter>
          <div className="flex relative bg-main-dark-bg text-slate-200">
            {/* Sidebar  */}
            {sidebarOpen ? (
            <div className="w-72 sidebar bg-secondary-dark-bg transition-all duration-150 ease-in-out">
              <Sidebar />
            </div>
            ) : (
            <div className="w-0 hidden fixed bg-secondary-dark-bg">
              <Sidebar />
            </div>
            )}

            {/* Mobile Sidebar */}
            {mobileSidebarOpen ? (
            <div className="h-screen z-[1000] fixed bg-main-dark-bg transition-all duration-150 ease-in-out">
              <MobileSidebar />
            </div>
            ) : (
            <div className="h-0 hidden bg-secondary-dark-bg">
              <MobileSidebar />
            </div>
            )}

            <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${false} ? 'md:ml-72' : ' flex-2'`}>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                {/* Navbar */}
                <Navbar 
                  customFuncOne={() => setSidebarOpen(!sidebarOpen)}
                  customFuncTwo={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                  disabledSide={sidebarDisabled}
                  mobileSide={mobileSideDisabled}
                />
              </div>

              {/* Routes */}
              <div>
                <Routes>
                  <Route path="/" element={<Overview />} />
                  <Route path="/overview" element={<Overview />} />
                  <Route path="/device-statistics" element={<DeviceStatistics />} />
                </Routes>
              </div>
            </div>
          </div>
          
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
