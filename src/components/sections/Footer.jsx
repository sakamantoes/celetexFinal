// components/footer/Footer.jsx
import React from 'react';
import images from '../../assets/image';

export function Footer() {
  return (
    <footer className="bg-black text-white/60 px-6 md:px-12 lg:px-16 pt-16 pb-8 border-t border-white/6">
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr,1fr,1fr,1fr] gap-10 mb-14">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="w-[42px] h-[42px] rounded-lg bg-gradient-gold flex items-center justify-center 
                overflow-hidden border-2 border-gold/30 shadow-gold transition-transform duration-300 
                hover:scale-110 hover:-rotate-5">
                <img src={images.main} alt="Celetex Group Logo" className="w-full h-full object-cover" />
              </span>
              <span className="font-display font-semibold text-lg tracking-wide text-white">
                Celetex <span className="text-gold">Group</span>
              </span>
            </div>
            <p className="text-[13.5px] leading-relaxed max-w-[280px] mt-4">
              A diversified business conglomerate delivering innovative solutions across media, real estate, travel, and digital commerce.
            </p>
            <p className="text-xs mt-3 text-white/40">RC: <span className="text-gold-bright">9341015</span></p>
          </div>

          <div>
            <h4 className="text-[13.5px] text-white font-mono uppercase tracking-wider mb-4.5">Our Brands</h4>
            <a href="#brands" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">Celetex Multimedia</a>
            <a href="#brands" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">Celetex Signature Homes</a>
            <a href="#brands" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">Celetex Travels and Tours</a>
            <a href="#cybermall-app" className="block text-sm text-white/60 transition-colors duration-250 hover:text-gold-bright">Cybermall</a>
          </div>

          <div>
            <h4 className="text-[13.5px] text-white font-mono uppercase tracking-wider mb-4.5">Contact</h4>
            <a href="mailto:Celetexgroup@gmail.com" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">Celetexgroup@gmail.com</a>
            <a href="tel:08140784286" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">0814 078 4286</a>
            <a href="tel:08123676517" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">0812 367 6517</a>
            <a href="#" className="block text-sm text-white/60 transition-colors duration-250 hover:text-gold-bright">@Celetex_group (FB/IG)</a>
          </div>

          <div>
            <h4 className="text-[13.5px] text-white font-mono uppercase tracking-wider mb-4.5">Quick Links</h4>
            <a href="#about" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">About Us</a>
            <a href="#brands" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">Our Brands</a>
            <a href="#cybermall-app" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">Cybermall App</a>
            <a href="#process" className="block text-sm mb-3 text-white/60 transition-colors duration-250 hover:text-gold-bright">Our Process</a>
            <a href="#contact" className="block text-sm text-white/60 transition-colors duration-250 hover:text-gold-bright">Contact</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/6 pt-7 text-[12.5px]">
          <span>© 2026 Celetex Group of Company Limited. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}