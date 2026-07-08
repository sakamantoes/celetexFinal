// components/ui/Eyebrow.jsx
import React from 'react';

export function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.12em] uppercase text-gold">
      <span className="inline-block w-2 h-2 bg-gold rounded-sm" />
      {children}
    </div>
  );
}