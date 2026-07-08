import React from 'react'
import { NavBar } from './components/navigation/NavBar'
import { HeroSection } from './components/hero/HeroSection'
import { StatsSection } from './components/sections/StatsSection'
import { VideoSection } from './components/sections/VideoSection'
import { CybermallSection } from './components/sections/CybermallSection'
import { BrandsSection } from './components/sections/BrandsSection'
import { GallerySection } from './components/sections/GallerySection'

const App = () => {
  return (
   <>
    <NavBar />
    <HeroSection />
    <StatsSection />
    <VideoSection />
    <CybermallSection />
    <BrandsSection />
    <GallerySection />
   </>
  )
}

export default App