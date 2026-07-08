// components/hero/HeroArt.jsx
import React from 'react';
import { motion } from 'framer-motion';

export function HeroArtPrimary() {
  return (
    <motion.svg 
      viewBox="0 0 520 620" 
      className="w-full h-full" 
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <defs>
        <linearGradient id="gGoldA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#B8862F" />
        </linearGradient>
        <radialGradient id="gGlow" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="rgba(201,162,39,0.15)" />
          <stop offset="100%" stopColor="rgba(201,162,39,0)" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="520" height="620" rx="18" fill="#0a0a0a" />
      <rect x="0" y="0" width="520" height="620" rx="18" fill="url(#gGlow)" />
      <g opacity="0.6">
        <rect x="60" y="330" width="60" height="220" fill="#1a1a1a" stroke="url(#gGoldA)" strokeWidth="1.2" />
        <rect x="130" y="260" width="70" height="290" fill="#1a1a1a" stroke="url(#gGoldA)" strokeWidth="1.2" />
        <rect x="210" y="180" width="90" height="370" fill="#1a1a1a" stroke="url(#gGoldA)" strokeWidth="1.4" />
        <rect x="310" y="240" width="66" height="310" fill="#1a1a1a" stroke="url(#gGoldA)" strokeWidth="1.2" />
        <rect x="386" y="300" width="56" height="250" fill="#1a1a1a" stroke="url(#gGoldA)" strokeWidth="1.2" />
      </g>
      <g stroke="rgba(201,162,39,0.2)" strokeWidth="1">
        {Array.from({ length: 9 }).map((_, r) =>
          Array.from({ length: 4 }).map((_, c) => (
            <rect
              key={`${r}-${c}`}
              x={222 + c * 18}
              y={200 + r * 36}
              width="10"
              height="18"
              fill={(r + c) % 3 === 0 ? 'rgba(201,162,39,0.3)' : 'rgba(255,255,255,0.02)'}
            />
          )),
        )}
      </g>
      <g stroke="url(#gGoldA)" strokeWidth="2.2" fill="none" strokeLinecap="round">
        <line x1="150" y1="560" x2="150" y2="120" />
        <line x1="150" y1="130" x2="330" y2="130" />
        <line x1="150" y1="130" x2="90" y2="160" />
        <line x1="150" y1="150" x2="215" y2="185" />
        <line x1="300" y1="130" x2="300" y2="175" />
        <circle cx="150" cy="120" r="4" fill="url(#gGoldA)" />
      </g>
      <motion.polyline
        points="40,560 110,520 175,540 235,470 300,495 365,410 430,440 470,360"
        fill="none"
        stroke="#C9A227"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.4, ease: "easeInOut" }}
      />
      {[
        [40, 560], [110, 520], [175, 540], [235, 470],
        [300, 495], [365, 410], [430, 440], [470, 360],
      ].map(([cx, cy], i) => (
        <motion.circle 
          key={i} 
          cx={cx} 
          cy={cy} 
          r="4" 
          fill="#0a0a0a" 
          stroke="#C9A227" 
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
        />
      ))}
    </motion.svg>
  );
}

export function HeroArtSecondary() {
  return (
    <motion.svg 
      viewBox="0 0 360 300" 
      className="w-full h-full" 
      aria-hidden="true"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <defs>
        <linearGradient id="gGoldB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9A227" />
          <stop offset="100%" stopColor="#8C6A22" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="360" height="300" rx="16" fill="#1a1a1a" />
      <circle cx="120" cy="130" r="46" fill="none" stroke="url(#gGoldB)" strokeWidth="2" />
      <motion.circle
        cx="120" cy="130" r="46" fill="none" stroke="url(#gGoldB)" strokeWidth="2"
        strokeDasharray="290" strokeDashoffset="70"
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: '120px 130px' }}
      />
      <circle cx="120" cy="130" r="18" fill="#0a0a0a" stroke="url(#gGoldB)" strokeWidth="1.5" />
      <g stroke="url(#gGoldB)" strokeWidth="1.6" fill="none">
        <line x1="166" y1="130" x2="230" y2="90" />
        <line x1="166" y1="130" x2="230" y2="170" />
        <line x1="166" y1="112" x2="230" y2="60" />
      </g>
      <motion.circle 
        cx="230" cy="90" r="6" fill="#C9A227"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.circle 
        cx="230" cy="170" r="6" fill="#C9A227"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      <motion.circle 
        cx="230" cy="60" r="6" fill="#C9A227"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />
      <motion.text 
        x="30" y="250" 
        fill="rgba(255,255,255,0.7)" 
        fontFamily="IBM Plex Mono, monospace" 
        fontSize="11" 
        letterSpacing="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        CELETEX / EST. 2022
      </motion.text>
      <motion.text 
        x="30" y="268" 
        fill="rgba(255,255,255,0.3)" 
        fontFamily="IBM Plex Mono, monospace" 
        fontSize="11"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      >
        DIVERSE VENTURES, UNIFIED VISION
      </motion.text>
    </motion.svg>
  );
}