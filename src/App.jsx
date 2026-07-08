import React from 'react'
import { NavBar } from './components/navigation/NavBar'
import { HeroSection } from './components/hero/HeroSection'
import { StatsSection } from './components/sections/StatsSection'
import { VideoSection } from './components/sections/VideoSection'

const App = () => {
  return (
   <>
    <NavBar />
    <HeroSection />
    <StatsSection />
    <VideoSection />
   </>
  )
}

export default App