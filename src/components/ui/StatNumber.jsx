// components/ui/StatNumber.jsx
import React, { useState, useEffect } from 'react';
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

export function StatNumber({ value, suffix = '', decimals = 0, delay = 0 }) {
  const [ref, visible] = useReveal(0.5);
  const count = useCountUp(value, visible);
  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-600 ease-[cubic-bezier(.22,.61,.36,1)]
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}