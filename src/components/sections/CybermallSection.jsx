// components/sections/CybermallSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Download,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
} from 'lucide-react';
import images from '../../assets/image';

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.2, 0.7, 0.2, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const featureVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

const mockupVariants = {
  hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { duration: 0.8, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const features = [
  { icon: ShoppingCart, label: 'Easy Shopping' },
  { icon: CreditCard, label: 'Secure Payments' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: Package, label: 'Tracking Logistics' },
];

export function CybermallSection() {
  return (
    <motion.section
      className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24"
      id="cybermall-app"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-charcoal to-black">
        {/* TEXT */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full text-white/70 text-xs font-medium tracking-wide uppercase font-mono mb-6"
            variants={itemVariants}
            whileHover={{ borderColor: '#C9A227', scale: 1.02 }}
          >
            <Smartphone size={14} />
            <span>Coming Soon</span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-4"
            variants={itemVariants}
          >
            Cybermall App
          </motion.h2>

          <motion.p
            className="text-[15px] leading-relaxed text-white/55 mb-8 max-w-[440px]"
            variants={itemVariants}
          >
            Shop, pay, and track deliveries from one place. Cybermall brings the
            marketplace to your pocket — simple, secure, and built for everyday use.
          </motion.p>

          <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
            {features.map((feature, i) => (
              <motion.li
                key={feature.label}
                custom={i}
                variants={featureVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-2.5 text-sm text-white/80 list-none"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <feature.icon size={16} className="text-[#C9A227] flex-shrink-0" />
                </motion.div>
                {feature.label}
              </motion.li>
            ))}
          </div>

          <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              Get Notified
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white border border-white/15 rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={15} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* MOCKUP */}
        <motion.div
          className="flex justify-center"
          variants={mockupVariants}
        >
          <motion.img
            src={images.mockup}
            alt="Cybermall App Mockup"
            loading="lazy"
            className="w-full max-w-[420px] rounded-xl border border-white/10 shadow-xl"
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: '0 30px 80px rgba(0,0,0,0.5)',
              transition: { duration: 0.3, ease: 'easeOut' },
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}