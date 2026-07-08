// components/sections/StatsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, TrophyIcon } from 'lucide-react';
import { StatNumber } from '../ui/StatNumber';

export function StatsSection() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };

  const statNumberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
        delay: 0.3,
      },
    },
  };

  return (
    <section className="bg-charcoal" id="about">
      <div className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-24 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-14"
        >
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
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr,1fr,1fr] gap-5"
        >
          {/* Main Stat Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="md:row-span-2 bg-gradient-to-br from-charcoal to-black text-white 
              rounded-2xl p-8 border border-white/6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-2.5 font-display font-semibold text-base text-gold-bright">
              <span className="w-[30px] h-[30px] rounded-lg bg-gradient-gold flex items-center justify-center 
                text-black font-bold text-sm">C</span>
              Celetex Group
            </div>
            <motion.div variants={statNumberVariants}>
              <StatNumber value={2022} suffix="" decimals={0} delay={200} />
            </motion.div>
            <div className="text-sm text-white/60 leading-relaxed max-w-[260px]">
              Founded with a vision to create impactful solutions across multiple industries.
            </div>
          </motion.div>

          {/* Portfolio Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="bg-black text-white rounded-2xl p-8 border border-white/6 
              shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-[38px] h-[38px] rounded-lg bg-gold/8 flex items-center justify-center text-gold">
                <Building2 size={18} />
              </div>
            </div>
            <div className="text-[13px] text-white/50">Portfolio</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gold-bright mt-2">
                4+
              </p>
            </motion.div>
            <p className="text-[13.5px] text-white/55 mt-1 leading-relaxed">
              distinct brands delivering value across media, real estate, travel, and e-commerce.
            </p>
          </motion.div>

          {/* Clients Served */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="bg-charcoal text-white rounded-2xl p-8 border border-white/6 
              shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div variants={statNumberVariants}>
              <StatNumber value={100} suffix="+" delay={400} />
            </motion.div>
            <div className="text-[13px] text-white/60">Clients Served</div>
          </motion.div>

          {/* Industry Sectors */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="bg-charcoal text-white rounded-2xl p-8 border border-white/6 
              shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.div variants={statNumberVariants}>
              <StatNumber value={5} suffix="+" delay={600} />
            </motion.div>
            <div className="text-[13px] text-white/60">Industry Sectors</div>
          </motion.div>

          {/* Recognition Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="bg-black text-white rounded-2xl p-8 border border-white/6 
              shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-[38px] h-[38px] rounded-lg bg-gold/8 flex items-center justify-center text-gold">
                <Award size={18} />
              </div>
            </div>
            <div className="text-[13px] text-white/50">Recognition</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gold-bright mt-2">
                <TrophyIcon size={26}/>
              </p>
            </motion.div>
            <p className="text-[13.5px] text-white/55 mt-1 leading-relaxed">
              Award-winning entrepreneur with merit honors from various organizations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}