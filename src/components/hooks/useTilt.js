// components/hooks/useTilt.js
import { useRef, useCallback } from 'react';

export function useTilt(strength = 8, enabled = true) {
  const ref = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      if (!enabled || !ref.current) return;
      const el = ref.current;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${
        -y * strength
      }deg) translateZ(4px)`;
    },
    [strength, enabled],
  );

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}