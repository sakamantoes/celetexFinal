// components/sections/GalleryArt.jsx
import React from 'react';

export function GalleryArt({ variant }) {
  const palette = { 
    media: { a: '#C9A227', b: '#8C6A22' }, 
    travels: { a: '#C9A227', b: '#8C6A22' }, 
    homes: { a: '#C9A227', b: '#8C6A22' }, 
    cybermall: { a: '#C9A227', b: '#8C6A22' } 
  }[variant] || { a: '#C9A227', b: '#8C6A22' };

  return (
    <svg viewBox="0 0 400 260" className="w-full h-full transition-transform duration-600 hover:scale-108" aria-hidden="true">
      <defs>
        <linearGradient id={`grad-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.a} />
          <stop offset="100%" stopColor={palette.b} />
        </linearGradient>
      </defs>
      <rect width="400" height="260" fill="#1a1a1a" />
      {variant === 'media' && (
        <g>
          <rect x="50" y="40" width="300" height="180" rx="8" fill="#222" stroke={`url(#grad-${variant})`} strokeWidth="1.4" />
          <circle cx="100" cy="130" r="36" fill="#2a2a2a" stroke={`url(#grad-${variant})`} strokeWidth="1.2" />
          <circle cx="100" cy="130" r="18" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="150" y="90" width="30" height="80" rx="2" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="190" y="70" width="30" height="100" rx="2" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="230" y="100" width="30" height="70" rx="2" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="270" y="85" width="30" height="85" rx="2" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <path d="M60 220 L340 220" stroke={`url(#grad-${variant})`} strokeWidth="1.5" strokeDasharray="4 6" opacity="0.3" />
        </g>
      )}
      {variant === 'travels' && (
        <g>
          <path d="M60 140 L140 60 L280 60 L340 140 L280 220 L140 220 Z" fill="#222" stroke={`url(#grad-${variant})`} strokeWidth="1.4" />
          <circle cx="170" cy="140" r="30" fill="none" stroke={`url(#grad-${variant})`} strokeWidth="1.2" />
          <circle cx="230" cy="140" r="30" fill="none" stroke={`url(#grad-${variant})`} strokeWidth="1.2" />
          <path d="M170 110 L230 110 L230 170 L170 170 Z" fill="none" stroke={`url(#grad-${variant})`} strokeWidth="1.2" />
          <line x1="200" y1="90" x2="200" y2="60" stroke={`url(#grad-${variant})`} strokeWidth="1.2" />
          <line x1="185" y1="60" x2="215" y2="60" stroke={`url(#grad-${variant})`} strokeWidth="1.2" />
          <line x1="140" y1="80" x2="140" y2="120" stroke={`url(#grad-${variant})`} strokeWidth="1" opacity="0.4" />
        </g>
      )}
      {variant === 'homes' && (
        <g>
          <rect x="60" y="100" width="280" height="130" fill="#222" stroke={`url(#grad-${variant})`} strokeWidth="1.4" rx="4" />
          <polygon points="60,100 200,40 340,100" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1.4" />
          <rect x="120" y="150" width="40" height="80" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="240" y="150" width="40" height="80" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="175" y="140" width="50" height="40" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="185" y="150" width="30" height="30" fill="#2a2a2a" stroke={`url(#grad-${variant})`} strokeWidth="0.8" />
        </g>
      )}
      {variant === 'cybermall' && (
        <g>
          <rect x="60" y="50" width="280" height="160" rx="8" fill="#222" stroke={`url(#grad-${variant})`} strokeWidth="1.4" />
          <rect x="80" y="70" width="60" height="40" rx="4" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="155" y="70" width="60" height="40" rx="4" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="230" y="70" width="60" height="40" rx="4" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="80" y="125" width="60" height="40" rx="4" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="155" y="125" width="60" height="40" rx="4" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <rect x="230" y="125" width="60" height="40" rx="4" fill="#333" stroke={`url(#grad-${variant})`} strokeWidth="1" />
          <circle cx="310" cy="90" r="12" fill="none" stroke={`url(#grad-${variant})`} strokeWidth="1.5" />
          <circle cx="310" cy="150" r="12" fill="none" stroke={`url(#grad-${variant})`} strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}