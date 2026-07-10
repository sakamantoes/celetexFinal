// components/navigation/NavBar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ArrowUpRight, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import images from '../../assets/image';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Our Brands', href: '#brands' },
  { label: 'Cybermall', href: '#cybermall-app' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

// Animation variants
const navVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.6
    }
  }
};

const mobileMenuVariants = {
  hidden: { 
    opacity: 0,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeInOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

const mobileLinkVariants = {
  hidden: (index) => ({
    opacity: 0,
    x: -20,
    transition: { delay: index * 0.05 }
  }),
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: { 
      delay: index * 0.05,
      duration: 0.4,
      ease: 'easeOut'
    }
  }),
  exit: (index) => ({
    opacity: 0,
    x: -20,
    transition: { delay: index * 0.03, duration: 0.2 }
  })
};

const navLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: index * 0.05,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
};

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
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`top-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-16 
          transition-all duration-400 border-b border-transparent relative
          ${scrolled ? 'bg-[rgba(8,8,8,0.98)] border-white/6 py-3.5' : 'bg-transparent py-5'}`}
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="max-w-[1360px] w-full mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2.5 flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.span 
              className="inline-block w-[200px] h-[150px]  rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.05, rotate: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <img src={images.main1} alt="Celetex Group Logo" className="w-full h-full object-contain" />
            </motion.span>
          </motion.div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.label} 
                href={link.href}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
                className="text-white/65 text-sm font-medium relative py-1 transition-colors duration-250 hover:text-white
                  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-gold 
                  after:transition-all after:duration-300 hover:after:w-full"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.a 
              href="#contact" 
              className="hidden lg:inline-flex items-center bg-amber-400 gap-2 px-6 py-4 rounded-full 
                text-xs font-semibold bg-gradient-gold text-white transition-all duration-300"
              whileHover={{ 
                y: -2, 
                scale: 1.02,
                boxShadow: '0 8px 30px rgba(201, 162, 39, 0.35)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              Get in Touch <ArrowRight size={16} />
            </motion.a>
            <motion.button
              className="lg:hidden text-white p-1 flex items-center justify-center"
              whileTap={{ scale: 0.85 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black z-[100] flex flex-col overflow-y-auto"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            role="dialog" 
            aria-modal="true" 
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/6 flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <motion.span 
                  className="w-[42px] h-[42px] rounded-lg bg-gradient-gold flex items-center justify-center overflow-hidden 
                    border-2 border-gold/30 shadow-gold flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <img src={images.main} alt="Celetex Group Logo" className="w-full h-full object-cover" />
                </motion.span>
                <motion.span 
                  className="font-display font-semibold text-lg tracking-wide whitespace-nowrap text-white"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  Celetex <span className="text-gold">Group</span>
                </motion.span>
              </div>
              <motion.button 
                className="text-white p-2 flex items-center justify-center rounded-lg"
                whileHover={{ 
                  backgroundColor: 'rgba(255,255,255,0.06)',
                  rotate: 90 
                }}
                whileTap={{ scale: 0.85 }}
                onClick={() => setMenuOpen(false)} 
                aria-label="Close menu"
              >
                <X size={28} />
              </motion.button>
            </div>

            <div className="flex-1 flex flex-col justify-between px-6 py-10 pb-8 md:px-8">
              <div>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    custom={index}
                    variants={mobileLinkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex items-center gap-4 px-5 py-4 rounded-xl text-white text-lg 
                      font-medium font-display tracking-[-0.02em] relative border border-transparent
                      transition-colors duration-300 hover:bg-white/4 hover:border-gold/20"
                    whileHover={{ 
                      x: 4,
                      borderColor: 'rgba(201, 162, 39, 0.2)',
                      backgroundColor: 'rgba(255,255,255,0.04)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="font-mono text-xs text-gold font-normal tracking-wider opacity-60 min-w-[28px]">
                      0{index + 1}
                    </span>
                    <span className="flex-1">{link.label}</span>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowUpRight size={20} className="text-gold" />
                    </motion.div>
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  custom={navLinks.length}
                  variants={mobileLinkVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex items-center justify-between px-6 py-4 mt-2 rounded-xl 
                    bg-gradient-gold text-black font-display text-lg font-semibold"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 8px 24px rgba(201, 162, 39, 0.25)'
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={20} />
                </motion.a>
              </div>

              <motion.div 
                className="pt-6 mt-8 border-t border-white/6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="space-y-2">
                  <motion.a 
                    href="mailto:Celetexgroup@gmail.com" 
                    className="flex items-center gap-3 text-white/70 text-sm 
                      transition-colors duration-300 hover:text-gold-bright py-2"
                    whileHover={{ x: 4, color: '#F3D27A' }}
                  >
                    <Mail size={18} /> Celetexgroup@gmail.com
                  </motion.a>
                  <motion.a 
                    href="tel:08140784286" 
                    className="flex items-center gap-3 text-white/70 text-sm 
                      transition-colors duration-300 hover:text-gold-bright py-2"
                    whileHover={{ x: 4, color: '#F3D27A' }}
                  >
                    <Phone size={18} /> 0814 078 4286
                  </motion.a>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-mono text-xs text-gold tracking-wider">RC: 9341015</span>
                  <div className="flex gap-2">
                    {['FB', 'IG', 'TW'].map((social, i) => (
                      <motion.a 
                        key={social}
                        href="#"
                        className="text-white/50 text-xs font-medium px-3 py-1.5 rounded-md 
                          border border-white/6 bg-white/2 transition-colors duration-300"
                        whileHover={{ 
                          color: '#F3D27A',
                          borderColor: '#C9A227',
                          backgroundColor: 'rgba(201, 162, 39, 0.08)',
                          y: -2
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.05 }}
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}