// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        gold: '#C9A227',
        'gold-bright': '#F3D27A',
        'gold-deep': '#8C6A22',
        charcoal: '#1a1a1a',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #F3D27A, #C9A227)',
        'gradient-gold-deep': 'linear-gradient(135deg, #C9A227, #8C6A22)',
      },
      boxShadow: {
        gold: '0 8px 30px rgba(201, 162, 39, 0.35)',
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        1400: '1400ms',
      },
      spacing: {
        4.5: '18px',
        5.5: '22px',
        7.5: '30px',
        15: '60px',
        25: '100px',
      },
      scale: {
        85: '0.85',
        92: '0.92',
        94: '0.94',
        97: '0.97',
        98: '0.98',
        108: '1.08',
      },
    },
  },
  plugins: [],
};