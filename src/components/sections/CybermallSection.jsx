// components/sections/CybermallSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone, Download, ArrowRight, ShoppingCart, CreditCard,
  Truck, Package, Home, Building2, MapPin, Calendar, Bell,
} from 'lucide-react';
import images from '../../assets/image';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: 'easeOut' },
  }),
};

const mockupVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1, scale: 1,
    transition: { duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const viewport = { once: true, amount: 0.1 };

const features = [
  { icon: ShoppingCart, label: 'Easy Shopping' },
  { icon: CreditCard,  label: 'Secure Payments' },
  { icon: Truck,       label: 'Fast Delivery' },
  { icon: Package,     label: 'Tracking Logistics' },
];

const estateImages = [
  images.estate1 || 'https://images.pexels.com/photos/38303664/pexels-photo-38303664.jpeg',
  images.estate2 || 'https://images.pexels.com/photos/36622005/pexels-photo-36622005.jpeg',
  images.estate3 || 'https://images.pexels.com/photos/34432716/pexels-photo-34432716.jpeg',
  images.estate4 || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJMw4BI-3iFmnkS3ceFYUc-9oGeTGjRG4j7sfFwikV_ATp3qj6raeH_Sc&s=10',
  images.estate5 || 'https://naijalandlord.com/wp-content/uploads/2023/10/IMG-20231001-WA0069.jpg',
  images.estate6 || 'https://landproperty.ng/wp-content/uploads/2025/07/new.jpeg',
  images.estate7 || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  images.estate8 || 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
];

export function CybermallSection() {
  const [flyerError, setFlyerError] = useState(false);

  return (
    <section
      className="max-w-[1360px] mx-auto px-3 md:px-12 lg:px-16 py-16 md:py-24"
      id="cybermall-app"
    >
      {/* ── Cybermall App ──────────────────────────────────────────────────── */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16 bg-gradient-to-br from-charcoal to-black"
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }}
      >
        {/* Text */}
        <div>
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full text-white/70 text-xs font-medium tracking-wide uppercase font-mono mb-6"
            variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={viewport}
            whileHover={{ borderColor: '#C9A227', scale: 1.02 }}
          >
            <Smartphone size={14} /><span>Coming Soon</span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-4"
            variants={fadeUp} custom={0.08} initial="hidden" whileInView="visible" viewport={viewport}
          >
            Cybermall App
          </motion.h2>

          <motion.p
            className="text-[15px] leading-relaxed text-white/55 mb-8 max-w-[440px]"
            variants={fadeUp} custom={0.14} initial="hidden" whileInView="visible" viewport={viewport}
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
                initial="hidden" whileInView="visible" viewport={viewport}
                className="flex items-center gap-2.5 text-sm text-white/80 list-none"
              >
                <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.2 }}>
                  <feature.icon size={16} className="text-[#C9A227] flex-shrink-0" />
                </motion.div>
                {feature.label}
              </motion.li>
            ))}
          </div>

          <motion.div className="flex flex-wrap gap-3" variants={fadeUp} custom={0.3} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 30px rgba(255,255,255,0.2)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />Get Notified
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white border border-white/15 rounded-full font-semibold text-sm"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
                <ArrowRight size={15} />
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div className="flex justify-center" variants={mockupVariants} initial="hidden" whileInView="visible" viewport={viewport}>
          <motion.img
            src={images.mockup}
            alt="Cybermall App Mockup"
            loading="lazy"
            className="w-full max-w-[420px] rounded-xl border border-white/10 shadow-xl"
            whileHover={{ y: -8, scale: 1.02, boxShadow: '0 30px 80px rgba(0,0,0,0.5)', transition: { duration: 0.3, ease: 'easeOut' } }}
          />
        </motion.div>
      </motion.div>

      {/* ── Estate Section ─────────────────────────────────────────────────── */}
      <motion.div
        className="mt-20 border border-white/10 rounded-2xl p-8 md:p-12 bg-gradient-to-br from-charcoal/80 to-black/80"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full text-white/70 text-xs font-medium tracking-wide uppercase font-mono">
            <Home size={14} /><span>Coming Soon</span>
          </div>
          <span className="text-white/30 text-sm">|</span>
          <span className="text-white/50 text-sm flex items-center gap-1">
            <MapPin size={14} className="text-[#C9A227]" />Nigeria
          </span>
        </div>

        <motion.h3
          className="font-display text-2xl md:text-3xl font-bold text-white mb-3"
          variants={fadeUp} custom={0} initial="hidden" whileInView="visible" viewport={viewport}
        >
          Celtex Grandville Estate
        </motion.h3>

        <motion.p
          className="text-[15px] leading-relaxed text-white/55 mb-8 max-w-2xl"
          variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible" viewport={viewport}
        >
          Experience luxury living at Celtex Grandville Estate — a premier residential
          community designed for modern comfort and elegance. Coming soon.
        </motion.p>

        {/* Estate gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {estateImages.slice(0, 8).map((img, index) => (
            <motion.div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-white/10 group"
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.03, boxShadow: '0 10px 40px rgba(0,0,0,0.4)', transition: { duration: 0.2 } }}
            >
              <img
                src={img}
                alt={`Celtex Grandville Estate ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport} transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <Building2 size={16} className="text-[#C9A227]" />
            <span>8 Premium Units • Gated Security • Modern Amenities</span>
          </div>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] text-black rounded-full font-semibold text-sm hover:bg-[#b8921f] transition-colors"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          >
            Register Interest<ArrowRight size={15} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* ══════════════════════════════════════════════════════════════════════
          ESTATE LAUNCH ANNOUNCEMENT FLYER
          ─────────────────────────────────────────────────────────────────────
          The flyer image now displays FULL WIDTH inside the gold frame.
          The image will scale to fit the container while maintaining aspect ratio.
      ════════════════════════════════════════════════════════════════════════ */}
      <motion.div
        className="mt-16 md:mt-24"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7 }}
      >
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 border border-[#C9A227]/40 rounded-full text-[#C9A227] text-xs font-medium tracking-wide uppercase font-mono"
            animate={{ borderColor: ['rgba(201,162,39,0.4)', 'rgba(201,162,39,0.8)', 'rgba(201,162,39,0.4)'] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
            <span>Official Announcement</span>
          </motion.div>
          <div className="flex-1 h-px bg-gradient-to-r from-[#C9A227]/30 to-transparent" />
        </div>

        <motion.h3
          className="font-display text-2xl md:text-3xl font-bold text-white mb-2"
          variants={fadeUp} custom={0.05} initial="hidden" whileInView="visible" viewport={viewport}
        >
          Estate Launch Flyer
        </motion.h3>
        <motion.p
          className="text-white/50 text-sm mb-8 max-w-xl"
          variants={fadeUp} custom={0.12} initial="hidden" whileInView="visible" viewport={viewport}
        >
          The official launch of Celtex Grandville Estate is coming. Mark your calendar
          and be the first to secure your future home.
        </motion.p>

        {/* ── Flyer frame ─────────────────────────────────────────────────── */}
        <motion.div
          className="relative rounded-2xl overflow-hidden w-full"
          style={{
            background: 'linear-gradient(135deg, #C9A227 0%, #8B6914 40%, #C9A227 70%, #F3D27A 100%)',
            padding: '3px',
          }}
          whileHover={{ boxShadow: '0 0 60px rgba(201,162,39,0.35)', transition: { duration: 0.3 } }}
        >
          {/* Inner container - now full width with no max-height constraint */}
          <div className="relative rounded-[14px] overflow-hidden bg-[#0a0a0a] w-full">

            {/* ── REAL FLYER IMAGE - FULL WIDTH DISPLAY ── */}
            {images.estateLaunchFlyer && !flyerError ? (
              <div className="w-full flex justify-center items-center">
                <img
                  src={images.estateLaunchFlyer}
                  alt="Celtex Grandville Estate — Official Launch Announcement"
                  className="w-full h-auto object-contain block"
                  onError={() => setFlyerError(true)}
                />
              </div>
            ) : (
              /* ── PLACEHOLDER — remove once you add the real flyer ── */
              <div
                className="relative w-full flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 overflow-hidden"
                style={{ minHeight: '420px' }}
              >
                {/* Background texture */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #C9A227 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                  }}
                />

                {/* Corner accents */}
                {[['top-4 left-4', 'border-t-2 border-l-2'],
                  ['top-4 right-4', 'border-t-2 border-r-2'],
                  ['bottom-4 left-4', 'border-b-2 border-l-2'],
                  ['bottom-4 right-4', 'border-b-2 border-r-2']].map(([pos, border], i) => (
                  <div key={i} className={`absolute ${pos} w-8 h-8 ${border} border-[#C9A227]/40 rounded-sm`} />
                ))}

                <div className="relative z-10 max-w-2xl mx-auto">
                  {/* Logo / monogram */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#C9A227] to-[#8B6914] flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(201,162,39,0.4)]">
                    {images.Logo1
                      ? <img src={images.Logo1} alt="Celetex" className="w-full h-full object-cover rounded-2xl" />
                      : <Building2 size={36} className="text-black" />
                    }
                  </div>

                  <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#C9A227]/70 mb-3">
                    Celetex Group Presents
                  </p>

                  <h4 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
                    Celtex Grandville
                    <br />
                    <span className="bg-gradient-to-r from-[#C9A227] via-[#F3D27A] to-[#C9A227] bg-clip-text text-transparent">
                      Estate
                    </span>
                  </h4>

                  <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto my-5" />

                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8 max-w-lg mx-auto">
                    A landmark residential community redefining luxury living in Nigeria.
                    <br className="hidden sm:block" />
                    The official launch event is coming soon.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-sm text-white/50">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#C9A227]" />
                      <span>Launch Date — TBA</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#C9A227]" />
                      <span>Nigeria</span>
                    </div>
                  </div>

                  <div className="inline-flex flex-col items-center gap-2">
                    <span className="text-[11px] font-mono tracking-[0.16em] uppercase text-white/30">
                      Flyer loading
                    </span>
                    <p className="text-[10px] text-white/20 font-mono">
                      Add <code className="text-[#C9A227]/60">images.estateLaunchFlyer</code> to display the official flyer
                    </p>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C9A227] via-[#F3D27A] to-[#C9A227]" />
              </div>
            )}

            {/* Gold shimmer overlay — only on the placeholder, fades out on real image */}
            {(!images.estateLaunchFlyer || flyerError) && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(105deg, transparent 40%, rgba(201,162,39,0.04) 50%, transparent 60%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{ backgroundPosition: ['-100% 0', '200% 0'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />
            )}
          </div>
        </motion.div>

        {/* CTA row below the flyer */}
        <motion.div
          className="mt-6 flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={viewport} transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-white/40 text-xs font-mono">
            <Bell size={13} className="text-[#C9A227]" />
            <span>Register to receive the official launch flyer &amp; event details</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] text-black rounded-full font-semibold text-sm hover:bg-[#b8921f] transition-colors"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              Register Now<ArrowRight size={15} />
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-white border border-white/15 rounded-full font-semibold text-sm hover:border-white/40 transition-colors"
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            >
              View Brochure
            </motion.a>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Awareness banner ───────────────────────────────────────────────── */}
      <motion.div
        className="mt-16 md:mt-24 rounded-2xl overflow-hidden"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div className="relative min-h-[180px] md:min-h-[220px] flex items-center justify-center px-6 py-12 bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227]/10 to-transparent border border-white/10 rounded-2xl backdrop-blur-sm">
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNDOUEyMjciIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] bg-repeat" />
          <div className="relative z-10 text-center max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 border border-[#C9A227]/30 rounded-full text-[#C9A227] text-xs font-medium tracking-wide uppercase font-mono mb-4"
              animate={{ borderColor: ['rgba(201,162,39,0.3)', 'rgba(201,162,39,0.6)', 'rgba(201,162,39,0.3)'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
              <span>Limited Availability</span>
            </motion.div>

            <motion.h4
              className="font-display text-xl md:text-2xl font-bold text-white mb-3"
              variants={fadeUp} custom={0.1} initial="hidden" whileInView="visible" viewport={viewport}
            >
              Secure Your Spot at Celtex Grandville Estate
            </motion.h4>

            <motion.p
              className="text-white/60 text-sm md:text-base max-w-2xl mx-auto"
              variants={fadeUp} custom={0.18} initial="hidden" whileInView="visible" viewport={viewport}
            >
              Pre-registration now open for the most anticipated residential estate.
              Be among the first to own a piece of luxury.
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap justify-center gap-3"
              variants={fadeUp} custom={0.24} initial="hidden" whileInView="visible" viewport={viewport}
            >
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-[#C9A227] text-black rounded-full font-semibold text-sm hover:bg-[#b8921f] transition-colors inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                Register Now<ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 text-white border border-white/20 rounded-full font-semibold text-sm hover:border-white/40 transition-colors"
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              >
                View Brochure
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}