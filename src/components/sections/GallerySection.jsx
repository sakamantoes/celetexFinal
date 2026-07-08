// components/sections/GallerySection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { GalleryArt } from './GalleryArt';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const galleryItems = [
  { title: 'Celetex Multimedia', desc: 'Full-service multimedia and creative agency specializing in branding...', variant: 'media' },
  { title: 'Celetex Travels and Tours', desc: 'Travel solutions company providing reliable travel consultancy...', variant: 'travels' },
  { title: 'Celetex Signature Homes', desc: 'Premium real estate brand focused on property development...', variant: 'homes' },
  { title: 'Cybermall', desc: 'Innovative digital commerce platform connecting buyers and sellers...', variant: 'cybermall' },
];

export function GallerySection() {
  return (
    <motion.section
      className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 pb-24 md:pb-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.map((item, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="bg-charcoal rounded-2xl overflow-hidden border border-white/6">
              <div className="overflow-hidden h-[180px]">
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  className="h-full"
                >
                  <GalleryArt variant={item.variant} />
                </motion.div>
              </div>
              <div className="p-5.5">
                <motion.h4
                  className="text-[15px] font-semibold text-white mb-1.5"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                >
                  {item.title}
                </motion.h4>
                <p className="text-[13px] text-white/60 leading-relaxed">{item.desc.slice(0, 70)}...</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}