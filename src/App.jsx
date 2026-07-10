import React, { useState, useEffect, useRef, useCallback } from 'react';
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

// Onboarding Splash Screen - Responsive + lighter compositing load
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
        setTimeout(onComplete, 400);
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
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-4"
    >
      {/* Single lightweight background accent instead of stacked blurred gradients */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 40%, rgba(201,162,39,0.12) 0%, transparent 60%)',
        }}
      />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="relative z-10 flex flex-col items-center w-full max-w-sm"
      >
        <div className="relative">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-2xl
            flex items-center justify-center shadow-[0_20px_60px_rgba(201,162,39,0.3)]
            border-2 border-gold/30 overflow-hidden"
          >
            <img
              src={images.main}
              alt="celetex company"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* One static ring instead of an infinitely animating scale/opacity loop */}
          <div className="absolute -inset-3 sm:-inset-4 rounded-2xl border-2 border-gold/20" />
        </div>

        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="w-48 sm:w-56 md:w-64 lg:w-80 mt-6 sm:mt-8 md:mt-10"
        >
          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-gold rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 sm:mt-2 text-[10px] sm:text-xs text-white/30 font-mono">
            <span>Initializing</span>
            <span className="text-gold/60">{Math.round(progress)}%</span>
          </div>
        </motion.div>

        {/* Static dots instead of 3 concurrent infinite keyframe loops */}
        <div className="flex gap-1.5 sm:gap-2 mt-4 sm:mt-6 opacity-70">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold/50"
            />
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 text-white/20 text-[10px] sm:text-xs font-mono tracking-wider">
        v2.0.0 · EST. 2022
      </div>
    </motion.div>
  );
};

// Back to Top Button Component - Responsive
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        y: isVisible ? 0 : 20,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      onClick={scrollToTop}
      className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50 group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="relative">
        <div
          className="p-3 sm:p-4 rounded-full bg-gradient-gold text-black shadow-gold
          transition-all duration-300 hover:shadow-[0_8px_40px_rgba(201,162,39,0.5)]"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </div>
        <span
          className="absolute inset-0 rounded-full bg-gold/20 animate-ping opacity-0
          group-hover:opacity-100 transition-opacity duration-300"
        />

        <span
          className="absolute right-full mr-3 md:mr-4 top-1/2 -translate-y-1/2
          bg-black/90 text-white text-[10px] sm:text-xs font-medium px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg
          whitespace-nowrap opacity-0 pointer-events-none transition-all duration-300
          group-hover:opacity-100 group-hover:mr-4 md:group-hover:mr-6
          border border-white/10 backdrop-blur-sm hidden sm:block"
        >
          Back to Top
        </span>
      </div>
    </motion.button>
  );
};

// Progress Bar Component - rAF-throttled, no per-scroll re-render churn beyond one frame
const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] sm:h-[3px] z-[60] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gold-bright via-gold to-gold-deep"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-0 right-0 h-full blur-md bg-gold/30"
        style={{ width: `${Math.min(progress + 10, 100)}%` }}
      />
    </div>
  );
};

// Mouse Follower Effect - only mounts its listener on pointer-fine (mouse) devices,
// and throttles state updates to one per animation frame so it never blocks touch input.
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const frame = useRef(null);
  const latestPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Bail out entirely on touch/coarse-pointer devices - no listeners, no work.
    if (!window.matchMedia || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const flush = () => {
      setMousePosition(latestPos.current);
      frame.current = null;
    };

    const updateMousePosition = (e) => {
      latestPos.current = { x: e.clientX, y: e.clientY };
      if (frame.current === null) {
        frame.current = requestAnimationFrame(flush);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
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
        x: { type: 'spring', stiffness: 100, damping: 30, mass: 0.5 },
        y: { type: 'spring', stiffness: 100, damping: 30, mass: 0.5 },
        scale: { duration: 0.2 },
        opacity: { duration: 0.2 },
      }}
    >
      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-gold/40 bg-gold/10 shadow-[0_0_30px_rgba(201,162,39,0.15)]" />
    </motion.div>
  );
};

// Scroll Progress Indicator - Fixed to work on mobile
const ScrollProgressIndicator = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const newProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(newProgress);
      setIsVisible(scrollTop > 100);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20,
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="relative h-[150px] sm:h-[180px] md:h-[200px] w-[2px] sm:w-[3px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gold-bright via-gold to-gold-deep"
          style={{ height: `${progress}%` }}
        />
        <div className="absolute inset-0 flex flex-col justify-between items-center py-1 sm:py-2">
          {[0, 25, 50, 75, 100].map((value) => (
            <div
              key={value}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300
                ${progress >= value ? 'bg-gold shadow-gold' : 'bg-white/20'}`}
              style={{
                transform: 'translateX(-1px)',
                boxShadow: progress >= value ? '0 0 8px rgba(201,162,39,0.5)' : 'none',
              }}
            />
          ))}
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gold/20 blur-xl rounded-full pointer-events-none" />
      </div>
      <div className="mt-1 sm:mt-2 text-center">
        <span className="text-[10px] sm:text-xs font-mono text-gold/60">{Math.round(progress)}%</span>
      </div>
    </motion.div>
  );
};

// Main App Component
const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  // Content only mounts once the splash has actually finished — nothing below
  // the splash does any work (animations, IO observers, image decode) until
  // the browser has spare main-thread time to give it.
  const [contentMounted, setContentMounted] = useState(false);

  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false);
    setContentMounted(true);
  }, []);

  return (
    <>
      {/* Mouse follower is safe to mount immediately - it no-ops on touch devices
          and does nothing until the pointer actually moves */}
      <MouseFollower />

      <AnimatePresence>
        {showOnboarding && <OnboardingScreen onComplete={handleOnboardingComplete} />}
      </AnimatePresence>

      {contentMounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <ProgressBar />
          <ScrollProgressIndicator />
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
      )}
    </>
  );
};

export default App;