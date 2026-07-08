// components/navigation/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowUpRight, Mail, Phone } from 'lucide-react';
import images from '../../assets/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Brands', href: '#brands' },
  { label: 'Cybermall', href: '#cybermall-app' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export function NavBar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav 
        className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 
          transition-all duration-400 border-b border-transparent
          ${scrolled ? 'bg-[rgba(8,8,8,0.98)] border-white/6 py-3.5' : 'bg-transparent py-5'}`}
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="max-w-[1360px] w-full mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="inline-block w-[150px] h-[100px] bg-white rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:-rotate-3">
              <img src={images.main} alt="Celetex Group Logo" className="w-full h-full object-contain" />
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-white/65 text-sm font-medium relative py-1 transition-colors duration-250 hover:text-white
                  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gold 
                  after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden lg:inline-flex items-center bg-amber-400 gap-2 px-6 py-4 rounded-full 
              text-xs font-semibold bg-gradient-gold text-white transition-all duration-300 
              hover:-translate-y-0.5 hover:shadow-gold">
              Get in Touch <ArrowRight size={16} />
            </a>
            <button
              className="lg:hidden text-white p-1 flex items-center justify-center transition-transform duration-150 active:scale-90"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black z-[100] flex flex-col overflow-y-auto
          transition-opacity duration-350 ease-in-out
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        role="dialog" 
        aria-modal="true" 
        aria-label="Mobile navigation menu"
        aria-hidden={!menuOpen}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/6 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-[42px] h-[42px] rounded-lg bg-gradient-gold flex items-center justify-center overflow-hidden 
              border-2 border-gold/30 shadow-gold transition-transform duration-300 flex-shrink-0">
              <img src={images.main} alt="Celetex Group Logo" className="w-full h-full object-cover" />
            </span>
            <span className="font-display font-semibold text-lg tracking-wide whitespace-nowrap text-white">
              Celetex <span className="text-gold">Group</span>
            </span>
          </div>
          <button 
            className="text-white p-2 flex items-center justify-center rounded-lg transition-all duration-300 
              hover:bg-white/6 active:rotate-90"
            onClick={() => setMenuOpen(false)} 
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-between px-6 py-10 pb-8 md:px-8">
          <div>
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl text-white text-lg 
                  font-medium font-display tracking-[-0.02em] relative border border-transparent
                  transition-all duration-300 hover:bg-white/4 hover:border-gold/20
                  ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: menuOpen ? `${80 + index * 60}ms` : '0ms' }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-mono text-xs text-gold font-normal tracking-wider opacity-60 min-w-[28px]">
                  0{index + 1}
                </span>
                <span className="flex-1">{link.label}</span>
                <ArrowUpRight size={20} className="text-gold opacity-0 transition-all duration-300 -translate-x-2.5 
                  group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            ))}

            <a
              href="#contact"
              className={`flex items-center justify-between px-6 py-4 mt-2 rounded-xl 
                bg-gradient-gold text-black font-display text-lg font-semibold
                transition-shadow duration-300 hover:shadow-gold/25
                ${menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              style={{ transitionDelay: menuOpen ? `${80 + navLinks.length * 60}ms` : '0ms' }}
              onClick={() => setMenuOpen(false)}
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="pt-6 mt-8 border-t border-white/6">
            <div className="space-y-2">
              <a href="mailto:Celetexgroup@gmail.com" className="flex items-center gap-3 text-white/70 text-sm 
                transition-colors duration-300 hover:text-gold-bright py-2">
                <Mail size={18} /> Celetexgroup@gmail.com
              </a>
              <a href="tel:08140784286" className="flex items-center gap-3 text-white/70 text-sm 
                transition-colors duration-300 hover:text-gold-bright py-2">
                <Phone size={18} /> 0814 078 4286
              </a>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="font-mono text-xs text-gold tracking-wider">RC: 9341015</span>
              <div className="flex gap-2">
                <a href="#" className="text-white/50 text-xs font-medium px-3 py-1.5 rounded-md 
                  border border-white/6 bg-white/2 transition-all duration-300 hover:text-gold-bright 
                  hover:border-gold hover:bg-gold/8">FB</a>
                <a href="#" className="text-white/50 text-xs font-medium px-3 py-1.5 rounded-md 
                  border border-white/6 bg-white/2 transition-all duration-300 hover:text-gold-bright 
                  hover:border-gold hover:bg-gold/8">IG</a>
                <a href="#" className="text-white/50 text-xs font-medium px-3 py-1.5 rounded-md 
                  border border-white/6 bg-white/2 transition-all duration-300 hover:text-gold-bright 
                  hover:border-gold hover:bg-gold/8">TW</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}