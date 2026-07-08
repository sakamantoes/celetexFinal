// components/sections/FounderSection.jsx
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';
import images from '../../assets/image';

const founderStats = [
  { num: '2022', lbl: 'Year Founded' },
  { num: '4', lbl: 'Group Companies' },
  { num: 'CS', lbl: 'Computer Science Degree' },
  { num: 'Imo', lbl: 'State of Origin' },
];

export function FounderSection() {
  return (
    <section className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-24 
      bg-charcoal rounded-3xl my-0">
      <div className="text-center mb-12">
        <Reveal>
          <Eyebrow>Meet the Founder</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white font-display">
            Rtr. Onyekachi Uchechukwu Celestine
          </h2>
          <p className="text-base text-white/55">Visionary Entrepreneur · Founder, Celetex Group</p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-15">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#2a2a2a]">
              <img
                src={images.Agu}
                alt="Onyekachi Celestine - Founder of Celetex Group"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/40 to-transparent" />
              <div className="absolute top-4 right-4 z-20 bg-[#1a1a1a]/90 border border-white/10 
                rounded-lg px-3 py-1.5 shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="text-white/70 text-[9px] font-mono tracking-[0.15em] uppercase">Celetex Group</span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end 
                pb-10 pt-20 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent">
                <div className="text-center space-y-3 w-full px-6">
                  <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-bright mx-auto rounded-full" />
                  <span className="block text-gold-bright text-[11px] font-mono tracking-[0.2em] uppercase">Founder & CEO</span>
                  <h3 className="text-white text-2xl md:text-3xl font-display font-bold leading-tight">Onyekachi Celestine</h3>
                  <div className="flex items-center justify-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    <span className="text-white/60 text-[11px] font-mono tracking-wider">Diverse Ventures, Unified Vision</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white font-display">Rtr. Onyekachi Uchechukwu Celestine</h3>
            <div className="text-[15px] text-gold font-medium mb-4">Founder, Celetex Group of Company Limited</div>
            <p className="text-[15px] text-white/65 leading-relaxed mb-3.5">
              Rtr. Onyekachi Uchechukwu Celestine is a visionary entrepreneur, media professional, technology
              enthusiast, and business strategist. He is the Founder of <strong>Celetex Group</strong> — a growing
              conglomerate driven by the motto, <em>"Diverse Ventures, Unified Vision."</em>
            </p>
            <p className="text-[15px] text-white/65 leading-relaxed mb-3.5">
              A native of Odenkume, Obowo LGA, Imo State, he was raised in Anambra State, where he developed his
              entrepreneurial mindset and business network. He holds a degree in <strong>Computer Science</strong> from
              Abia State University.
            </p>
            <p className="text-[15px] text-white/65 leading-relaxed mb-3.5">
              Through Celetex Group, he oversees brands including <strong>Celetex Media</strong>,
              <strong> Celetex Travels and Tours</strong>, <strong> Celetex Signature Homes</strong>, and{" "}
              <strong>Cybermall</strong>, delivering innovative solutions across media, technology, real estate,
              travel, and commerce.
            </p>
            <p className="text-[15px] text-white/65 leading-relaxed">
              Recognized with several awards and merit honors from various organizations and institutions, he is
              also committed to youth development, mentorship, innovation, and entrepreneurship, inspiring others
              through leadership, resilience, and service.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
              {founderStats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-black p-3.5 rounded-xl border border-white/6 transition-all 
                    duration-500 ease-in-out opacity-100 translate-y-0"
                  style={{ transitionDelay: `${600 + i * 100}ms` }}
                >
                  <div className="font-display text-xl font-bold text-gold">{stat.num}</div>
                  <div className="text-xs text-white/50">{stat.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}