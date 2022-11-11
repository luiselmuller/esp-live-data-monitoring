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
              {/* TODO: NEED TO CHANGE THIS TO RENDER JUST ONCE */}
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
              {mobileNavOpen ? (
              <div className="h-screen z-[1000] fixed bg-main-dark-bg transition-all duration-150 ease-in-out">
                <MobileNavigation 
                  handleMobileSideOpen={() => setMobileNavOpen(!mobileNavOpen)}
                />
              </div>
              ) : (
              <div className="h-0 hidden bg-secondary-dark-bg">
                <MobileNavigation handleMobileSideOpen={() => setMobileNavOpen(!mobileNavOpen)} />
              </div>
              )}

              <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${false} ? 'md:ml-72' : ' flex-2'`}>
                <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
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
