// components/ui/Reveal.jsx
import React, { useEffect, useRef, useState } from 'react';

export function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'} 
        ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function RevealScale({ children, delay = 0 }) {
  const [ref, visible] = useReveal(0.5);
  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-600 ease-[cubic-bezier(.22,.61,.36,1)]
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}