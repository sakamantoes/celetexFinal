// components/hero/HeroSection.jsx
import React from 'react';
import { ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';
import { HeroArtPrimary, HeroArtSecondary } from './HeroArt';

export function HeroSection() {
  return (
    <section className="bg-black text-white pt-16 pb-24 px-6 md:px-12 lg:px-16" id="home">
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <Eyebrow>Diverse Ventures, Unified Vision</Eyebrow>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 font-display">
            Celetex Group of Company Limited
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Building a legacy of innovation across Africa.
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-white/60 max-w-[480px] mb-9">
            Celetex Group is a diversified business conglomerate delivering innovative solutions across media,
            real estate, travel, and digital commerce — empowering individuals, businesses, and communities.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-14">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
              text-xs font-semibold bg-gradient-gold text-black transition-all duration-300 
              hover:-translate-y-0.5 hover:shadow-gold active:scale-97">
              Explore Our Brands <ArrowRight size={16} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
              text-xs font-semibold border border-white/15 text-white transition-all duration-300 
              hover:border-gold hover:text-gold-bright active:scale-97">
              About Us
            </a>
          </div>
          <div className="flex items-center gap-4.5">
            <div className="flex">
              <span className="w-[34px] h-[34px] rounded-full border-2 border-black bg-gradient-to-br from-[#333] to-[#222] 
                flex items-center justify-center text-xs text-gold font-semibold -ml-2.5 first:ml-0">CK</span>
              <span className="w-[34px] h-[34px] rounded-full border-2 border-black bg-gradient-to-br from-[#333] to-[#222] 
                flex items-center justify-center text-xs text-gold font-semibold -ml-2.5">CO</span>
              <span className="w-[34px] h-[34px] rounded-full border-2 border-black bg-gradient-to-br from-[#333] to-[#222] 
                flex items-center justify-center text-xs text-gold font-semibold -ml-2.5">CE</span>
            </div>
            <div className="text-sm text-white/50">
              Founded <b className="text-white">2022</b> · RC: <b className="text-white">9341015</b>
            </div>
          </div>
        </Reveal>

        <div className="relative h-[420px] md:h-[500px] lg:h-[560px] opacity-0 scale-92 
          transition-all duration-800 ease-[cubic-bezier(.22,.61,.36,1)] delay-200
          [&.reveal-visible]:opacity-100 [&.reveal-visible]:scale-100">
          <div className="absolute top-0 right-0 w-[78%] h-full rounded-2xl overflow-hidden 
            shadow-2xl border border-white/6">
            <HeroArtPrimary />
          </div>
          <div className="absolute -bottom-7.5 -left-2.5 w-[280px] rounded-2xl overflow-hidden 
            shadow-2xl border border-white/6 opacity-0 -translate-x-7.5 
            transition-all duration-600 ease-in-out delay-500
            [&.reveal-visible]:opacity-100 [&.reveal-visible]:translate-x-0">
            <HeroArtSecondary />
          </div>
          <div className="absolute top-10 -left-10 bg-[rgba(12,12,12,0.94)] border border-white/6 
            rounded-xl p-3.5 flex items-center gap-3 shadow-2xl opacity-0 -translate-x-10 
            transition-all duration-500 ease-in-out delay-600
            [&.reveal-visible]:opacity-100 [&.reveal-visible]:translate-x-0">
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white leading-tight">3+ Yrs</div>
              <div className="text-[11.5px] text-white/50">Building Excellence</div>
            </div>
          </div>
          <div className="absolute bottom-15 -right-5 bg-[rgba(12,12,12,0.94)] border border-white/6 
            rounded-xl p-3.5 flex items-center gap-3 shadow-2xl opacity-0 translate-x-10 
            transition-all duration-500 ease-in-out delay-700
            [&.reveal-visible]:opacity-100 [&.reveal-visible]:translate-x-0">
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
              <Users size={18} />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white leading-tight">4+</div>
              <div className="text-[11.5px] text-white/50">Brands Under One Roof</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}