// components/sections/CTABanner.jsx
import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { useReveal } from '../ui/Reveal';

export function CTABanner() {
  const [ref, visible] = useReveal(0.2);

  return (
    <div 
      ref={ref}
      className={`max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 mb-24 md:mb-28
        transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)]
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-94'}`}
      id="contact"
    >
      <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 
        bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] border border-white/6">
        <div className="absolute w-[400px] h-[400px] rounded-full 
          bg-[radial-gradient(circle,rgba(201,162,39,0.08),transparent_70%)] 
          -top-40 -right-25" />
        
        <div className="relative z-[1] flex flex-col md:flex-row items-start md:items-center 
          justify-between gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-display max-w-[460px] mb-2">
              Ready to partner with Celetex Group?
            </h2>
            <p className="text-white/60 max-w-[420px]">
              Connect with us today and let's build something extraordinary together.
            </p>
          </div>
          <div className="flex flex-wrap gap-3.5 flex-shrink-0">
            <a href="mailto:Celetexgroup@gmail.com" className="inline-flex items-center gap-2 px-5 py-2.5 
              rounded-full text-xs font-semibold bg-gradient-gold text-black transition-all duration-300 
              hover:-translate-y-0.5 hover:shadow-gold active:scale-97">
              <Mail size={16} /> Email Us
            </a>
            <a href="tel:08140784286" className="inline-flex items-center gap-2 px-5 py-2.5 
              rounded-full text-xs font-semibold border border-white/15 text-white transition-all duration-300 
              hover:border-gold hover:text-gold-bright active:scale-97">
              <Phone size={16} /> Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}