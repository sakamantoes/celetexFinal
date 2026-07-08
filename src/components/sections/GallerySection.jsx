// components/sections/GallerySection.jsx
import React from 'react';
import { Reveal } from '../ui/Reveal';
import { GalleryArt } from './GalleryArt';

const galleryItems = [
  { title: 'Celetex Multimedia', desc: 'Full-service multimedia and creative agency specializing in branding...', variant: 'media' },
  { title: 'Celetex Travels and Tours', desc: 'Travel solutions company providing reliable travel consultancy...', variant: 'travels' },
  { title: 'Celetex Signature Homes', desc: 'Premium real estate brand focused on property development...', variant: 'homes' },
  { title: 'Cybermall', desc: 'Innovative digital commerce platform connecting buyers and sellers...', variant: 'cybermall' },
];

export function GallerySection() {
  return (
    <section className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-28">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, i) => (
          <Reveal key={i} delay={i * 90}>
            <div className="bg-charcoal rounded-2xl overflow-hidden border border-white/6 
              transition-all duration-300 hover:-translate-y-1.5">
              <div className="overflow-hidden h-[180px]">
                <GalleryArt variant={item.variant} />
              </div>
              <div className="p-5.5">
                <h4 className="text-[15px] font-semibold text-white mb-1.5">{item.title}</h4>
                <p className="text-[13px] text-white/60 leading-relaxed">{item.desc.slice(0, 70)}...</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}