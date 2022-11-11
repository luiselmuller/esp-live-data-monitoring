import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/global/Navbar'
import { createTheme, Snackbar, ThemeProvider } from '@mui/material'

// Lazy load components
const Overview = lazy(() => import('./pages/Overview'))
const DeviceStatistics = lazy(() => import('./pages/DeviceStatistics'))
const Sidebar = lazy(() => import('./components/global/Sidebar'))
const MobileNavigation = lazy(() => import('./components/global/MobileNavigation'))

// Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// TODO: Make sidebar links be highlighted when on that page

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(1920);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [sidebarDisabled, setSidebarDisabled] = useState(false);
  const [mobileNavDisabled, setMobileNavDisabled] = useState(true);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  })
  useEffect(() =>{
    if(screenSize <= 750){
      setSidebarOpen(false);
      setSidebarDisabled(true);
      setMobileNavDisabled(false);
    }
    else{
      setSidebarDisabled(false);
      setMobileNavDisabled(true);
      setMobileNavOpen(false);
    }
    
  }, [screenSize, setSidebarOpen])

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ThemeProvider theme={darkTheme}>
        <div className="App">
          <Router>
            <div className="flex relative bg-main-dark-bg text-slate-200">
              {/* Sidebar  */}
              <div className={`${sidebarOpen ? "w-72 " : "w-0 overflow-hidden"} bg-secondary-dark-bg transition-all duration-150 ease-out`}>
                <Sidebar />
              </div>
              <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${false} ? 'md:ml-72' : ' flex-2'`}>
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                  {/* Mobile Sidebar */}
                  <div className={`${mobileNavOpen ? "h-screen" : "h-0  overflow-hidden w-0"} bg-main-dark-bg transition-all duration-150 ease-in-out`}>
                      <MobileNavigation 
                        handleMobileSideOpen={() => setMobileNavOpen(!mobileNavOpen)}
                      />
                  </div>
                  {/* Navbar */}
                  <Navbar 
                    customFuncOne={() => setSidebarOpen(!sidebarOpen)}
                    customFuncTwo={() => setMobileNavOpen(!mobileNavOpen)}
                    disabledSide={sidebarDisabled}
                    mobileSide={mobileNavDisabled}
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
            
          </Router>
        </div>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
