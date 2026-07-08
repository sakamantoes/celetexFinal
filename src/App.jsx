import React from 'react'
import { NavBar } from './components/navigation/NavBar'
import { HeroSection } from './components/hero/HeroSection'
import { StatsSection } from './components/sections/StatsSection'

const App = () => {
  return (
   <>
    <NavBar />
    <HeroSection />
    <StatsSection />
   </>
  )
}

export default App