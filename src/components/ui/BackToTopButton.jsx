// components/ui/BackToTopButton.jsx
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BackToTopButton = () => {
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
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
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
              <ArrowUp size={24} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
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
      )}
    </AnimatePresence>
  );
};