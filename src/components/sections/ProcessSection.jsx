// components/sections/ProcessSection.jsx
import React from 'react';
import { Target, Layers, Rocket, HeartHandshake } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';

const process = [
  { n: '01', title: 'Discovery & Assessment', desc: 'We study your goals, constraints, and market to define what success looks like.', icon: Target },
  { n: '02', title: 'Strategy & Design', desc: 'Every plan is mapped in detail — budgets, timelines, and risk built in from day one.', icon: Layers },
  { n: '03', title: 'Execution & Delivery', desc: 'Our teams build, implement, and manage with precision and constant communication.', icon: Rocket },
  { n: '04', title: 'Support & Optimization', desc: 'We stay engaged after delivery, refining performance long after launch.', icon: HeartHandshake },
];

export function ProcessSection() {
  return (
    <section className="bg-charcoal" id="process">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr,1fr] gap-10 items-end mb-16">
          <div>
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-display">How We Build Brands That Last.</h2>
          </div>
          <p className="text-[15px] text-white/60 leading-relaxed">
            Every brand under the Celetex umbrella follows a proven framework — from vision to execution, we ensure excellence at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          <div className="absolute top-11 left-0 right-0 h-px bg-white/6 overflow-hidden hidden md:block">
            <div className="h-full bg-gradient-to-r from-gold-bright to-gold w-0 transition-all duration-1400 ease-[cubic-bezier(.2,.7,.2,1)]" />
          </div>
          
          {process.map((step, i) => (
            <Reveal key={step.n} delay={i * 100} className="pr-6 md:pr-0">
              <div className="relative">
                <div className="font-display text-4xl md:text-5xl font-bold text-white/6 mb-4.5">{step.n}</div>
                <div className="w-11 h-11 rounded-xl bg-gold/12 text-gold-bright flex items-center justify-center 
                  mb-4.5 relative z-[2] transition-transform duration-300 hover:scale-110 hover:-rotate-5">
                  <step.icon size={20} />
                </div>
                <h3 className="text-[17px] font-semibold text-white mb-2.5">{step.title}</h3>
                <p className="text-[13.5px] text-white/55 leading-relaxed max-w-[240px]">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}