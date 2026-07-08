import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavBar } from './components/navigation/NavBar';
import { HeroSection } from './components/hero/HeroSection';
import { StatsSection } from './components/sections/StatsSection';
import { VideoSection } from './components/sections/VideoSection';
import { CybermallSection } from './components/sections/CybermallSection';
import { BrandsSection } from './components/sections/BrandsSection';
import { GallerySection } from './components/sections/GallerySection';
import { FounderSection } from './components/sections/FounderSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { CTABanner } from './components/sections/CTABanner';
import { Footer } from './components/sections/Footer';
import images from './assets/image';

// Onboarding Splash Screen
const OnboardingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000; // 20 seconds

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        setTimeout(onComplete, 500);
      }
    };

    const animationFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrame);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)] opacity-20" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,162,39,0.1) 0%, transparent 50%)',
        }} />
      </div>

      {/* Logo Container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-24 bg-gold/5 blur-3xl rounded-full" />
        
        {/* Logo */}
        <div className="relative">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl  
            flex items-center justify-center shadow-[0_20px_60px_rgba(201,162,39,0.3)]
            border-2 border-gold/30">
            <span className="text-4xl md:text-5xl font-display font-bold text-black"><img src={images.main} alt='celetex compony' className='rounded-2xl'/></span>
          </div>
          
          {/* Pulsing Ring */}
          <motion.div
            className="absolute -inset-4 rounded-2xl border-2 border-gold/20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Brand Name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white">
            Celetex <span className="text-gold">Group</span>
          </h1>
          <p className="text-white/50 text-sm font-mono tracking-wider mt-2">
            Diverse Ventures, Unified Vision
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-64 md:w-80 mt-10"
        >
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-gold rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between mt-2 text-xs text-white/30 font-mono">
            <span>Initializing</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-2 mt-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 rounded-full bg-gold/40"
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{ 
                duration: 1.5, 
                delay: i * 0.3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Version Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 text-white/20 text-xs font-mono tracking-wider"
      >
        v2.0.0 · EST. 2022
      </motion.div>
    </motion.div>
  );
};

// Back to Top Button Component
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        {/* Main Button */}
        <div className="p-4 rounded-full bg-gradient-gold text-black shadow-gold 
          transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,162,39,0.5)]">
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>

        {/* Ripple Effect */}
        <span className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-0 
          group-hover:opacity-100 transition-opacity duration-300" />

        {/* Tooltip */}
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 
          bg-black/90 text-white text-xs font-medium px-3 py-1.5 rounded-lg 
          whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 
          group-hover:opacity-100 group-hover:mr-6
          border border-white/10 backdrop-blur-sm">
          Back to Top
        </span>
      </div>
    </motion.button>
  );
};

// Progress Bar Component
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-transparent">
      <motion.div 
        className="h-full bg-gradient-to-r from-gold-bright via-gold to-gold-deep"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

// Main App Component
const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  return (
    <>
      {/* Onboarding Splash Screen */}
      <AnimatePresence>
        {showOnboarding && (
          <OnboardingScreen onComplete={handleOnboardingComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showOnboarding ? 0 : 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={showOnboarding ? 'pointer-events-none' : ''}
      >
        <ProgressBar />
        <NavBar />
        <HeroSection />
        <StatsSection />
        <VideoSection />
        <CybermallSection />
        <BrandsSection />
        <GallerySection />
        <FounderSection />
        <ProcessSection />
        <CTABanner />
        <Footer />
        <BackToTopButton />
      </motion.div>
    </>
  );
};

export default App;