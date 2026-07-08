// components/sections/VideoSection.jsx
import React, { useRef, useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';
import images from '../../assets/image';
import { useReveal } from '../ui/Reveal';

export function VideoSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [ref, visible] = useReveal(0.3);

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
    <section className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-10 md:py-15" ref={ref}>
      <div className={`transition-all duration-800 ease-[cubic-bezier(.2,.7,.2,1)] 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden bg-black border border-white/6 
            shadow-2xl aspect-[16/10]">
            <video              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={images.videoPoster || 'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=1200'}
            >
              <source src={images.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30 
              flex items-center justify-center pointer-events-none">
              <div className="text-center text-white p-5">
                <div className="w-[60px] h-[60px] rounded-xl bg-gradient-gold flex items-center justify-center 
                  shadow-gold/30 overflow-hidden mx-auto">
                  <img src={images.Logo1} alt="Celetex Group" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 z-[2] pointer-events-none">
              <button 
                className="pointer-events-auto w-[38px] h-[38px] rounded-full border border-white/20 
                  bg-[rgba(15,15,15,0.75)] text-white flex items-center justify-center 
                  transition-all duration-300 hover:bg-gold/55 hover:border-gold-bright hover:scale-105 active:scale-95"
                onClick={togglePlay} 
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                )}
              </button>
              <button 
                className="pointer-events-auto w-[38px] h-[38px] rounded-full border border-white/20 
                  bg-[rgba(15,15,15,0.75)] text-white flex items-center justify-center 
                  transition-all duration-300 hover:bg-gold/55 hover:border-gold-bright hover:scale-105 active:scale-95"
                onClick={toggleMute} 
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" /><line x1="23" y1="9" x2="17" y2="15" /><line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>
              <span className="pointer-events-none text-[11px] text-white/50 font-mono tracking-wider 
                bg-black/60 px-3 py-1 rounded-full border border-white/6 ml-auto">
                ⟳ Loop
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-bright via-gold to-gold-deep opacity-60 z-[1]" />
          </div>

          <div className="py-5 md:py-0">
            <div className={`transition-all duration-700 ease-in-out 
              ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-7.5'}`}>
              <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.12em] uppercase text-gold mb-4">
                <span className="w-2 h-2 bg-gold rounded-sm inline-block" />
                Celetex Group
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-white mb-4">
                Building a Legacy of
                <span className="bg-gradient-gold bg-clip-text text-transparent"> Innovation</span>
              </h2>

              <p className="text-base leading-relaxed text-white/60 mb-6 max-w-[460px]">
                Celetex Group is a diversified business conglomerate delivering innovative
                solutions across media, real estate, travel, and digital commerce —
                empowering individuals, businesses, and communities.
              </p>

              <div className="flex items-center gap-5 mb-6 p-4 bg-white/4 rounded-xl border border-white/6">
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold text-white">2022</span>
                  <span className="text-[11px] text-white/50 font-medium uppercase tracking-wider">Founded</span>
                </div>
                <div className="w-px h-[30px] bg-white/6" />
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold text-white">4+</span>
                  <span className="text-[11px] text-white/50 font-medium uppercase tracking-wider">Brands</span>
                </div>
                <div className="w-px h-[30px] bg-white/6" />
                <div className="flex flex-col">
                  <span className="font-display text-xl font-bold text-white">100+</span>
                  <span className="text-[11px] text-white/50 font-medium uppercase tracking-wider">Clients</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-7">
                <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                  <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  <span>100% Trusted</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                  <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>
                  <span>Certified</span>
                </div>
                <div className="flex items-center gap-2 text-[13px] font-medium text-white">
                  <svg className="w-[18px] h-[18px] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  <span>Excellence</span>
                </div>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 
                bg-gradient-gold text-black rounded-full font-semibold text-sm 
                transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold 
                active:scale-98">
                Learn More About Us
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}