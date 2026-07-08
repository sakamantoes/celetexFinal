// components/sections/FounderSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Eyebrow } from '../ui/Eyebrow';
import images from '../../assets/image';

const founderStats = [
  { num: '2022', lbl: 'Year Founded' },
  { num: '4', lbl: 'Group Companies' },
  { num: 'CS', lbl: 'Computer Science Degree' },
  { num: 'Imo', lbl: 'State of Origin' },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1],
      delay: 0.2
    } 
  }
};

const statItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 0.5, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  }
};

export function FounderSection() {
  return (
    <section className="max-w-[1360px] mx-auto px-3 md:px-12 lg:px-16 py-20 md:py-24">
      <div className="bg-charcoal rounded-3xl overflow-hidden border border-white/6 shadow-2xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center pt-12 md:pt-16 px-6"
        >
          <Eyebrow>Meet the Founder</Eyebrow>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl font-bold mt-2 text-white font-display"
          >
            Rtr. Onyekachi Uchechukwu Celestine
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-white/55 mt-1"
          >
            Visionary Entrepreneur · Founder, Celetex Group
          </motion.p>
        </motion.div>

        {/* Content - Flex Layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 p-6 md:p-10 lg:p-12">
          {/* Image - Left Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInLeft}
            className="lg:w-[45%] xl:w-[42%] flex-shrink-0"
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] shadow-2xl h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#2a2a2a]">
                <motion.img
                  src={images.Agu}
                  alt="Onyekachi Celestine - Founder of Celetex Group"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/95 via-[#1a1a1a]/40 to-transparent" />
                
                {/* Badge */}
                <motion.div 
                  className="absolute top-4 right-4 z-20 bg-[#1a1a1a]/90 border border-white/10 rounded-lg px-3 py-1.5 shadow-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                    <span className="text-white/70 text-[9px] font-mono tracking-[0.15em] uppercase">Celetex Group</span>
                  </div>
                </motion.div>

                {/* Bottom Content */}
                <motion.div 
                  className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-end pb-8 md:pb-10 pt-20 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/40 to-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="text-center space-y-3 w-full px-6">
                    <motion.div 
                      className="w-16 h-[2px] bg-gradient-to-r from-gold to-gold-bright mx-auto rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 64 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    />
                    <motion.span 
                      className="block text-gold-bright text-[11px] font-mono tracking-[0.2em] uppercase"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      Founder & CEO
                    </motion.span>
                    <motion.h3 
                      className="text-white text-2xl md:text-3xl font-display font-bold leading-tight"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      Onyekachi Celestine
                    </motion.h3>
                    <motion.div 
                      className="flex items-center justify-center gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                      <span className="text-white/60 text-[11px] font-mono tracking-wider">Diverse Ventures, Unified Vision</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
              
              {/* Bottom Accent Line */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </motion.div>

          {/* Text Content - Right Side */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInRight}
            className="lg:w-[55%] xl:w-[58%] flex flex-col justify-center"
          >
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h3 
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold text-white font-display"
              >
                Rtr. Onyekachi Uchechukwu Celestine
              </motion.h3>
              
              <motion.div 
                variants={fadeInUp}
                className="text-[15px] text-gold font-medium mb-4"
              >
                Founder, Celetex Group of Company Limited
              </motion.div>

              <motion.p 
                variants={fadeInUp}
                className="text-[15px] text-white/65 leading-relaxed mb-3.5"
              >
                Rtr. Onyekachi Uchechukwu Celestine is a visionary entrepreneur, media professional, technology
                enthusiast, and business strategist. He is the Founder of <strong className="text-white">Celetex Group</strong> — a growing
                conglomerate driven by the motto, <em className="text-gold-bright">"Diverse Ventures, Unified Vision."</em>
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-[15px] text-white/65 leading-relaxed mb-3.5"
              >
                A native of Odenkume, Obowo LGA, Imo State, he was raised in Anambra State, where he developed his
                entrepreneurial mindset and business network. He holds a degree in <strong className="text-white">Computer Science</strong> from
                Abia State University.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-[15px] text-white/65 leading-relaxed mb-3.5"
              >
                Through Celetex Group, he oversees brands including <strong className="text-white">Celetex Media</strong>,
                <strong className="text-white"> Celetex Travels and Tours</strong>, <strong className="text-white"> Celetex Signature Homes</strong>, and{" "}
                <strong className="text-white">Cybermall</strong>, delivering innovative solutions across media, technology, real estate,
                travel, and commerce.
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="text-[15px] text-white/65 leading-relaxed"
              >
                Recognized with several awards and merit honors from various organizations and institutions, he is
                also committed to youth development, mentorship, innovation, and entrepreneurship, inspiring others
                through leadership, resilience, and service.
              </motion.p>

              {/* Stats Grid */}
              <motion.div 
                variants={staggerContainer}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6"
              >
                {founderStats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    variants={statItem}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -4,
                      boxShadow: '0 8px 25px rgba(201, 162, 39, 0.15)'
                    }}
                    className="bg-black/50 p-3.5 rounded-xl border border-white/6 
                      transition-all duration-300 cursor-default group"
                  >
                    <motion.div 
                      className="font-display text-xl font-bold text-gold group-hover:text-gold-bright transition-colors duration-300"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                    >
                      {stat.num}
                    </motion.div>
                    <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-300">
                      {stat.lbl}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}