// components/hero/HeroSection.jsx
import React, { useRef } from 'react';
import { ArrowRight, ShieldCheck, Users } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Eyebrow } from '../ui/Eyebrow';
import { HeroArtPrimary, HeroArtSecondary } from './HeroArt';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      ease: [0.22, 0.61, 0.36, 1]
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }
  }
};

const badgeVariantsRight = {
  hidden: { opacity: 0, x: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }
  }
};

const visualVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay: 0.2,
      ease: [0.22, 0.61, 0.36, 1] 
    }
  }
};

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <section 
      ref={ref}
      className="bg-black text-white pt-16 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden" 
      id="home"
    >
      <motion.div 
        className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Left Content */}
        <div>
          <motion.div variants={itemVariants}>
            <Eyebrow>Diverse Ventures, Unified Vision</Eyebrow>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] mb-6 font-display"
            variants={itemVariants}
          >
            Celetex Group of Company Limited
            <br />
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Building a legacy of innovation across Africa.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg leading-relaxed text-white/60 max-w-[480px] mb-9"
            variants={itemVariants}
          >
            Celetex Group is a diversified business conglomerate delivering innovative solutions across media,
            real estate, travel, and digital commerce — empowering individuals, businesses, and communities.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-3.5 mb-14"
            variants={itemVariants}
          >
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                text-xs font-semibold bg-gradient-gold text-black transition-all duration-300 
                hover:-translate-y-0.5 hover:shadow-gold active:scale-97"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Brands <ArrowRight size={16} />
            </motion.a>
            <motion.a 
              href="#about" 
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                text-xs font-semibold border border-white/15 text-white transition-all duration-300 
                hover:border-gold hover:text-gold-bright active:scale-97"
              whileHover={{ y: -2, borderColor: "#C9A227", color: "#F3D27A" }}
              whileTap={{ scale: 0.97 }}
            >
              About Us
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-4.5"
            variants={itemVariants}
          >
            <div className="flex">
              <motion.span 
                className="w-[34px] h-[34px] rounded-full border-2 border-black bg-gradient-to-br from-[#333] to-[#222] 
                  flex items-center justify-center text-xs text-gold font-semibold -ml-2.5 first:ml-0"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                CK
              </motion.span>
              <motion.span 
                className="w-[34px] h-[34px] rounded-full border-2 border-black bg-gradient-to-br from-[#333] to-[#222] 
                  flex items-center justify-center text-xs text-gold font-semibold -ml-2.5"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                CO
              </motion.span>
              <motion.span 
                className="w-[34px] h-[34px] rounded-full border-2 border-black bg-gradient-to-br from-[#333] to-[#222] 
                  flex items-center justify-center text-xs text-gold font-semibold -ml-2.5"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                CE
              </motion.span>
            </div>
            <div className="text-sm text-white/50">
              Founded <b className="text-white">2022</b> · RC: <b className="text-white">9341015</b>
            </div>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div 
          className="relative h-[420px] md:h-[500px] lg:h-[560px]"
          variants={visualVariants}
          style={{ y, opacity }}
        >
          <div className="absolute top-0 right-0 w-[78%] h-full rounded-2xl overflow-hidden 
            shadow-2xl border border-white/6">
            <HeroArtPrimary />
          </div>
          
          <motion.div 
            className="absolute -bottom-7.5 -left-2.5 w-[280px] rounded-2xl overflow-hidden 
              shadow-2xl border border-white/6"
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.5 }}
          >
            <HeroArtSecondary />
          </motion.div>
          
          <motion.div 
            className="absolute top-10 -left-10 bg-[rgba(12,12,12,0.94)] border border-white/6 
              rounded-xl p-3.5 flex items-center gap-3 shadow-2xl"
            variants={badgeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
              <ShieldCheck size={18} />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white leading-tight">3+ Yrs</div>
              <div className="text-[11.5px] text-white/50">Building Excellence</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-15 -right-5 bg-[rgba(12,12,12,0.94)] border border-white/6 
              rounded-xl p-3.5 flex items-center gap-3 shadow-2xl"
            variants={badgeVariantsRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.7 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
              <Users size={18} />
            </div>
            <div>
              <div className="font-display font-bold text-lg text-white leading-tight">4+</div>
              <div className="text-[11.5px] text-white/50">Brands Under One Roof</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}