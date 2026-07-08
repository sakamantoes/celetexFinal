// components/hooks/useScrollState.js
import { useState, useEffect } from 'react';

export function useScrollState() {
  const [y, setY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrollTop = h.scrollTop || document.body.scrollTop;
        const scrollHeight = h.scrollHeight - h.clientHeight;
        setY(scrollTop);
        setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
        ticking = false;
      });
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { y, progress, scrolled: y > 24 };
}