// components/ui/StatNumber.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useReveal } from './Reveal';

function useCountUp(target, visible, duration = 1400) {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    if (!visible) return;
    
    let start = null;
    let raf;
    
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };
    
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);
  
  return value;
}

export function StatNumber({ value, suffix = '', decimals = 0, delay = 0, className = '' }) {
  const [ref, visible] = useReveal(0.3);
  const count = useCountUp(value, visible);
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ 
        duration: 0.7, 
        delay: delay / 1000,
        ease: [0.22, 0.61, 0.36, 1]
      }}
      className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl text-gold-bright block ${className}`}
    >
      {count.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}