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

// Onboarding Splash Screen - Responsive
const OnboardingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 2000;

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
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-4"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--gold)_0%,_transparent_70%)] opacity-20" />
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,162,39,0.1) 0%, transparent 50%)',
        }} />
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1.2, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
        className="relative z-10 flex flex-col items-center w-full max-w-sm"
      >
        <div className="absolute -inset-16 sm:-inset-20 md:-inset-24 bg-gold/5 blur-3xl rounded-full" />
        
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl  
            flex items-center justify-center shadow-[0_20px_60px_rgba(201,162,39,0.3)]
            border-2 border-gold/30 overflow-hidden">
            <img src={images.main} alt='celetex company' className='w-full h-full object-cover'/>
          </div>
          
          <motion.div
            className="absolute -inset-3 sm:-inset-4 rounded-2xl border-2 border-gold/20"
            animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 sm:mt-8 text-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">
            Celetex <span className="text-gold">Group</span>
          </h1>
          <p className="text-white/40 sm:text-white/50 text-xs sm:text-sm font-mono tracking-wider mt-1 sm:mt-2">
            Diverse Ventures, Unified Vision
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-48 sm:w-56 md:w-64 lg:w-80 mt-6 sm:mt-8 md:mt-10"
        >
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-gold rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
          <div className="flex justify-between mt-1 sm:mt-2 text-[10px] sm:text-xs text-white/30 font-mono">
            <span>Initializing</span>
            <span className="text-gold/60">{Math.round(progress)}%</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-1.5 sm:gap-2 mt-4 sm:mt-6"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold/40"
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 text-white/20 text-[10px] sm:text-xs font-mono tracking-wider"
      >
        v2.0.0 · EST. 2022
      </motion.div>
    </motion.div>
  );
};

// Back to Top Button Component - Responsive
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
      className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <div className="p-3 sm:p-4 rounded-full bg-gradient-gold text-black shadow-gold 
          transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,162,39,0.5)]">
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <span className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-0 
          group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tooltip - Hidden on mobile */}
        <span className="absolute right-full mr-3 md:mr-4 top-1/2 -translate-y-1/2 
          bg-black/90 text-white text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg 
          whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300 
          group-hover:opacity-100 group-hover:mr-4 md:group-hover:mr-6
          border border-white/10 backdrop-blur-sm hidden sm:block">
          Back to Top
        </span>
      </div>
    </motion.button>
  );
};

// Progress Bar Component - Responsive
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
    <div className="fixed top-0 left-0 right-0 h-[2px] sm:h-[3px] z-[60] bg-transparent">
      <motion.div 
        className="h-full bg-gradient-to-r from-gold-bright via-gold to-gold-deep"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
      <motion.div 
        className="absolute top-0 right-0 w-10 sm:w-16 md:w-20 h-full blur-md bg-gold/30"
        style={{ width: `${Math.min(progress + 10, 100)}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

// Mouse Follower Effect - Responsive (Hidden on mobile/tablet)
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998] hidden xl:block"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1 : 0.5,
        opacity: isHovering ? 0.4 : 0,
      }}
      transition={{
        x: { type: "spring", stiffness: 100, damping: 30, mass: 0.5 },
        y: { type: "spring", stiffness: 100, damping: 30, mass: 0.5 },
        scale: { duration: 0.2 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-gold/40 bg-gold/10 shadow-[0_0_30px_rgba(201,162,39,0.15)]" />
    </motion.div>
  );
};

// Scroll Progress Indicator - Responsive (Side indicator)
const ScrollProgressIndicator = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(newProgress);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-50 hidden md:block"
    >
      <div className="relative h-[150px] sm:h-[180px] md:h-[200px] w-[2px] sm:w-[3px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold-bright via-gold to-gold-deep"
          style={{ height: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
        <div className="absolute inset-0 flex flex-col justify-between items-center py-1 sm:py-2">
          {[0, 25, 50, 75, 100].map((value) => (
            <div
              key={value}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
                ${progress >= value ? 'bg-gold shadow-gold' : 'bg-white/20'}`}
              style={{ 
                transform: 'translateX(-1px)',
                boxShadow: progress >= value ? '0 0 8px rgba(201,162,39,0.5)' : 'none'
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gold/20 blur-xl rounded-full pointer-events-none" />
      </div>
      <div className="mt-1 sm:mt-2 text-center">
        <span className="text-[10px] sm:text-xs font-mono text-gold/60">
          {Math.round(progress)}%
        </span>
      </div>
    </motion.div>
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
      {/* Mouse Follower */}
      <MouseFollower />

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
        <ScrollProgressIndicator />
        <NavBar />
        
        {/* All sections - no scroll animations */}
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