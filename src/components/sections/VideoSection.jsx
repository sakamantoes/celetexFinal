// components/sections/VideoSection.jsx
import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import images from '../../assets/image';
import { MotionSlideRight } from '../ui/Reveal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.2, 0.7, 0.2, 1],
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const videoVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function VideoSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  }, [isMuted]);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  return (
    <motion.section
      className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-10 md:py-12 lg:py-15"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      style={{ 
        maxWidth: '1360px', 
        margin: '0 auto',
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.2s ease-in-out'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-black border border-white/6 shadow-2xl w-full"
          variants={videoVariants}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{ aspectRatio: '16/10' }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={images.videoPoster || 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1200'}
            onLoadedData={() => setIsLoaded(true)}
          >
            <source src={images.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30 
              flex items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: isHovering ? 0.3 : 1 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="text-center text-white p-5"
              initial={{ scale: 1 }}
              animate={{ scale: isHovering ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-xl bg-gradient-gold flex items-center justify-center 
                shadow-gold/30 overflow-hidden mx-auto">
                <img src={images.omoh} alt="Celetex Group" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 sm:gap-3 z-[2] pointer-events-none">
            <motion.button
              className="pointer-events-auto w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full border border-white/20 
                bg-[rgba(15,15,15,0.75)] text-white flex items-center justify-center hover:bg-[rgba(201,162,39,0.55)] 
                hover:border-[#F3D27A] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="sm:w-[20px] sm:h-[20px]">
                  <rect x="6" y="4" width="4" height="16" />
                  <rect x="14" y="4" width="4" height="16" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white" className="sm:w-[20px] sm:h-[20px]">
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </motion.button>

            <motion.button
              className="pointer-events-auto w-[34px] h-[34px] sm:w-[38px] sm:h-[38px] rounded-full border border-white/20 
                bg-[rgba(15,15,15,0.75)] text-white flex items-center justify-center hover:bg-[rgba(201,162,39,0.55)] 
                hover:border-[#F3D27A] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleMute}
              aria-label={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="sm:w-[20px] sm:h-[20px]">
                  <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" />
                  <line x1="23" y1="9" x2="17" y2="15" />
                  <line x1="17" y1="9" x2="23" y2="15" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="sm:w-[20px] sm:h-[20px]">
                  <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                </svg>
              )}
            </motion.button>

            <span className="pointer-events-none text-[10px] sm:text-[11px] text-white/50 font-mono tracking-wider 
              bg-black/60 px-2 sm:px-3 py-1 rounded-full border border-white/6 ml-auto whitespace-nowrap">
              ⟳ Loop
            </span>
          </div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-bright via-gold to-gold-deep opacity-60 z-[1]"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </motion.div>

        <div className="py-4 sm:py-5 md:py-0">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-gold mb-3 sm:mb-4">
              <motion.span
                className="w-2 h-2 bg-gold rounded-sm inline-block"
                animate={{ rotate: [0, 45, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              Celetex Group
            </div>
          </motion.div>

          <motion.h2
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-white mb-3 sm:mb-4"
            variants={itemVariants}
          >
            Building a Legacy of
            <span className="bg-gradient-gold bg-clip-text text-transparent"> Innovation</span>
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base leading-relaxed text-white/60 mb-4 sm:mb-6 max-w-[460px]"
            variants={itemVariants}
          >
            Celetex Group is a diversified business conglomerate delivering innovative
            solutions across media, real estate, travel, and digital commerce —
            empowering individuals, businesses, and communities.
          </motion.p>

          <motion.div
            className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-6 p-3 sm:p-4 bg-white/4 rounded-xl border border-white/6 flex-wrap"
            variants={itemVariants}
            whileHover={{ borderColor: 'rgba(201,162,39,0.3)', transition: { duration: 0.2 } }}
          >
            {[
              { value: '2022', label: 'Founded' },
              { value: '4+', label: 'Brands' },
              { value: '100+', label: 'Clients' },
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col flex-1 min-w-[60px]">
                  <motion.span
                    className="font-display text-lg sm:text-xl font-bold text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-[10px] sm:text-[11px] text-white/50 font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
                {i < 2 && <div className="w-px h-[30px] bg-white/6 hidden sm:block" />}
              </React.Fragment>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2 sm:gap-4 mb-5 sm:mb-7"
            variants={itemVariants}
          >
            {['100% Trusted', 'Certified', 'Excellence'].map((label, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-[13px] font-medium text-white"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.3 }}
              >
                <svg className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2.5">
                  {i === 0 && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                  {i === 1 && <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></>}
                  {i === 2 && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />}
                </svg>
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 
              bg-gradient-gold text-black rounded-full font-semibold text-xs sm:text-sm 
              transition-shadow duration-300 active:scale-98 hover:shadow-[0_12px_32px_rgba(201,162,39,0.35)] 
              hover:-translate-y-0.5"
            whileHover={{ y: -2, boxShadow: '0 12px 32px rgba(201,162,39,0.35)' }}
            whileTap={{ scale: 0.98 }}
            variants={itemVariants}
          >
            Learn More About Us
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </motion.span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}