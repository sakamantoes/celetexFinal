// components/sections/BrandsSection.jsx
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';
import { useTilt } from '../hooks/useTilt';
import { usePointerFine } from '../hooks/usePointerFine';
import { GalleryArt } from './GalleryArt';
import images from '../../assets/image';

const brands = [
  { 
    icon: images.celetexMedia, 
    title: 'Celetex Multimedia', 
    desc: 'Full-service multimedia and creative agency specializing in branding, graphic design, website development, cinematography, photography, digital marketing, content creation, and strategic communications.', 
    variant: 'media' 
  },
  { 
    icon: images.celetexTravelsTours, 
    title: 'Celetex Travels and Tours', 
    desc: 'Travel solutions company providing reliable travel consultancy, tour planning, visa assistance, vacation packages, and corporate travel management for local and international destinations.', 
    variant: 'travels' 
  },
  { 
    icon: images.celetexSignature, 
    title: 'Celetex Signature Homes', 
    desc: 'Premium real estate brand focused on property development, real estate consultancy, construction, property management, interior design, and investment advisory services.', 
    variant: 'homes' 
  },
  { 
    icon: images.cyberMall, 
    title: 'Cybermall', 
    desc: 'Innovative digital commerce platform connecting buyers and sellers through a seamless online marketplace experience, integrating e-commerce, logistics, and product discovery.', 
    variant: 'cybermall' 
  },
];

export function BrandsSection() {
  const pointerFine = usePointerFine();
  const tiltA = useTilt(8, pointerFine);
  const tiltB = useTilt(8, pointerFine);
  const tiltC = useTilt(8, pointerFine);
  const tiltD = useTilt(8, pointerFine);
  
  const tiltMap = [tiltA, tiltB, tiltC, tiltD];

  return (
    <section className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-28" id="brands">
      <Reveal>
        <Eyebrow>Our Brands</Eyebrow>
      </Reveal>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-14">
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] text-white font-display">
          Diverse Ventures, Unified Vision.
        </h2>
        <p className="text-[15px] text-white/55 max-w-[340px] leading-relaxed">
          From creative media to real estate, travel, and digital commerce — our brands deliver innovative solutions across multiple sectors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
        {brands.map((b, i) => (
          <Reveal key={b.title} delay={i * 100} className={i === 0 ? 'lg:col-span-2' : ''}>
            <div 
              className="bg-charcoal border border-white/6 rounded-2xl overflow-hidden 
                transition-all duration-400 shadow-lg hover:shadow-2xl hover:border-gold hover:-translate-y-1.5"
              ref={tiltMap[i].ref} 
              onMouseMove={tiltMap[i].onMouseMove} 
              onMouseLeave={tiltMap[i].onMouseLeave}
            >
              <div className={`relative h-[180px] md:h-[200px] overflow-hidden bg-charcoal
                ${i === 0 ? 'md:h-[240px]' : ''}`}>
                <img src={b.icon} alt={b.title} className="w-full h-full object-cover transition-transform duration-600 hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-black/40 pointer-events-none" />
                <span className="absolute top-4 right-4 bg-black/85 px-3.5 py-1.5 rounded-full 
                  text-[10px] font-semibold text-gold-bright border border-gold/15 tracking-wider uppercase">
                  {b.title.split(' ')[0]}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <h3 className="text-xl font-bold mb-2.5 font-display tracking-[-0.02em] text-white">
                  <span className="text-gold">{b.title.split(' ')[0]}</span> {b.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-[14.5px] text-white/60 leading-relaxed mb-5">{b.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-bright 
                  transition-all duration-300 hover:gap-3">
                  Learn More <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}