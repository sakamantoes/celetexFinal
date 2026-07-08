// components/sections/BrandsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { MotionReveal } from '../ui/Reveal';
import { Eyebrow } from '../ui/Eyebrow';
import { useTilt } from '../hooks/useTilt';
import { usePointerFine } from '../hooks/usePointerFine';
import images from '../../assets/image';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const brands = [
  {
    icon: images.celetexMedia,
    title: 'Celetex Multimedia',
    desc: 'Full-service multimedia and creative agency specializing in branding, graphic design, website development, cinematography, photography, digital marketing, content creation, and strategic communications.',
    variant: 'media',
  },
  {
    icon: images.celetexTravelsTours,
    title: 'Celetex Travels and Tours',
    desc: 'Travel solutions company providing reliable travel consultancy, tour planning, visa assistance, vacation packages, and corporate travel management for local and international destinations.',
    variant: 'travels',
  },
  {
    icon: images.celetexSignature,
    title: 'Celetex Signature Homes',
    desc: 'Premium real estate brand focused on property development, real estate consultancy, construction, property management, interior design, and investment advisory services.',
    variant: 'homes',
  },
  {
    icon: images.cyberMall,
    title: 'Cybermall',
    desc: 'Innovative digital commerce platform connecting buyers and sellers through a seamless online marketplace experience, integrating e-commerce, logistics, and product discovery.',
    variant: 'cybermall',
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
    <motion.section
      className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-28"
      id="brands"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <MotionReveal>
        <Eyebrow>Our Brands</Eyebrow>
      </MotionReveal>

      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-14"
        variants={cardVariants}
      >
        <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] text-white font-display">
          Diverse Ventures, Unified Vision.
        </h2>
        <p className="text-[15px] text-white/55 max-w-[340px] leading-relaxed">
          From creative media to real estate, travel, and digital commerce — our brands deliver innovative solutions across multiple sectors.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-7"
        variants={containerVariants}
      >
        {brands.map((b, i) => (
          <motion.div
            key={b.title}
            variants={cardVariants}
            className={i === 0 ? 'lg:col-span-2' : ''}
          >
            <motion.div
              className="bg-charcoal border border-white/6 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{
                y: -6,
                boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
                borderColor: '#C9A227',
                transition: { duration: 0.3, ease: 'easeOut' },
              }}
              ref={tiltMap[i].ref}
              onMouseMove={tiltMap[i].onMouseMove}
              onMouseLeave={tiltMap[i].onMouseLeave}
            >
              <motion.div
                className={`relative h-[180px] md:h-[200px] overflow-hidden bg-charcoal
                  ${i === 0 ? 'md:h-[240px]' : ''}`}
              >
                <motion.img
                  src={b.icon}
                  alt={b.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gold/8 via-transparent to-black/40 pointer-events-none" />
                <motion.span
                  className="absolute top-4 right-4 bg-black/85 px-3.5 py-1.5 rounded-full 
                    text-[10px] font-semibold text-gold-bright border border-gold/15 tracking-wider uppercase"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  {b.title.split(' ')[0]}
                </motion.span>
              </motion.div>
              <div className="p-6 md:p-7">
                <h3 className="text-xl font-bold mb-2.5 font-display tracking-[-0.02em] text-white">
                  <span className="text-gold">{b.title.split(' ')[0]}</span>{' '}
                  {b.title.split(' ').slice(1).join(' ')}
                </h3>
                <p className="text-[14.5px] text-white/60 leading-relaxed mb-5">{b.desc}</p>
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold-bright"
                  whileHover={{ gap: 12 }}
                >
                  Learn More
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowUpRight size={15} />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}