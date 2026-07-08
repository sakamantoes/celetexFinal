import React from 'react'
import { NavBar } from './components/navigation/NavBar'
import { HeroSection } from './components/hero/HeroSection'
import { StatsSection } from './components/sections/StatsSection'
import { VideoSection } from './components/sections/VideoSection'
import { CybermallSection } from './components/sections/CybermallSection'

const App = () => {
  return (
   <>
    <NavBar />
    <HeroSection />
    <StatsSection />
    <VideoSection />
    <CybermallSection />
   </>
  )
}

export default App