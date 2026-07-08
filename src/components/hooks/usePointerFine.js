// components/hooks/usePointerFine.js
import { useState, useEffect } from 'react';

export function usePointerFine() {
  const [isFine, setIsFine] = useState(true);
  
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFine(mq.matches);
    
    const listener = (e) => setIsFine(e.matches);
    if (mq.addEventListener) {
      mq.addEventListener('change', listener);
    } else {
      mq.addListener(listener);
    }
    
    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', listener);
      } else {
        mq.removeListener(listener);
      }
    };
  }, []);
  
  return isFine;
}