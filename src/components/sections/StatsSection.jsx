// components/sections/StatsSection.jsx
import React from 'react';
import { Building2, Award } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';
import { StatNumber } from '../ui/StatNumber';

export function StatsSection() {
  const [statsRef, statsVisible] = [null, true]; // Simplified for example

  return (
    <section className="bg-charcoal" id="about">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-28">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-14">
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] text-white font-display">
            About Celetex Group
          </h2>
          <p className="text-[15px] text-white/55 max-w-[340px] leading-relaxed">
            Founded on 9th March 2022 by Rtr. Onyekachi Uchechukwu Celestine,
            a visionary entrepreneur committed to innovation, excellence, and
            sustainable business growth.
            <a href="#contact" className="inline-flex items-center gap-2 mt-3 text-xs font-semibold 
              border border-white/15 text-white px-4 py-1.5 rounded-full transition-all duration-300 
              hover:border-gold hover:text-gold-bright">
              RC: 9341015
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr,1fr,1fr] gap-5">
          <div className="md:row-span-2 bg-gradient-to-br from-charcoal to-black text-white 
            rounded-2xl p-8 border border-white/6 transition-all duration-400 hover:-translate-y-1.5 
            hover:shadow-xl">
            <div className="flex items-center gap-2.5 font-display font-semibold text-base text-gold-bright">
              <span className="w-[30px] h-[30px] rounded-lg bg-gradient-gold flex items-center justify-center 
                text-black font-bold text-sm">C</span>
              Celetex Group
            </div>
            <div>
              <StatNumber value={2022} suffix="" decimals={0} delay={200} />
              <div className="text-sm text-white/60 leading-relaxed max-w-[260px]">
                Founded with a vision to create impactful solutions across multiple industries.
              </div>
            </div>
          </div>

          <div className="bg-black text-white rounded-2xl p-8 border border-white/6 
            transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-[38px] h-[38px] rounded-lg bg-gold/8 flex items-center justify-center text-gold">
                <Building2 size={18} />
              </div>
            </div>
            <div className="text-[13px] text-white/50">Portfolio</div>
            <p className="text-[13.5px] text-white/55 mt-2 leading-relaxed">
              4 distinct brands delivering value across media, real estate, travel, and e-commerce.
            </p>
          </div>

          <div className="bg-charcoal text-white rounded-2xl p-8 border border-white/6 
            transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl">
            <StatNumber value={100} suffix="+" delay={400} />
            <div className="text-[13px] text-white/60">Clients Served</div>
          </div>

          <div className="bg-charcoal text-white rounded-2xl p-8 border border-white/6 
            transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl">
            <StatNumber value={5} suffix="+" delay={600} />
            <div className="text-[13px] text-white/60">Industry Sectors</div>
          </div>

          <div className="bg-black text-white rounded-2xl p-8 border border-white/6 
            transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl">
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-[38px] h-[38px] rounded-lg bg-gold/8 flex items-center justify-center text-gold">
                <Award size={18} />
              </div>
            </div>
            <div className="text-[13px] text-white/50">Recognition</div>
            <p className="text-[13.5px] text-white/55 mt-2 leading-relaxed">
              Award-winning entrepreneur with merit honors from various organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}