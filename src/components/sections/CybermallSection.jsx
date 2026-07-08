// components/sections/CybermallSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Download,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  Truck,
  Package,
} from "lucide-react";
import images from "../../assets/image";

/*
  WHY THIS VERSION IS FLICKER-SAFE ON ANDROID:
  - Only ONE element (the section wrapper) animates on scroll-in.
    Previously the badge, heading, each feature row, AND the mockup
    panel all had their own whileInView/opacity+translate transition
    running at slightly different delays — each one forces its own
    GPU compositing layer. Several layers compositing at once is what
    reads as a flicker on weaker Android GPUs.
  - The mockup image has exactly one hover effect (a subtle lift),
    no separate radial-gradient glow layer sitting on top of it.
  - No arbitrary/inset blur or gradient overlays — those force the
    browser to repaint a full-bleed layer on every frame of a
    transition instead of a simple compositor-only transform.
  - Feature rows are static (no per-item entrance animation) since a
    5-item staggered reveal rarely adds enough to justify the extra
    repaint cost.
*/

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.2, 0.7, 0.2, 1] },
  },
};

const features = [
  { icon: ShoppingCart, label: "Easy Shopping" },
  { icon: CreditCard, label: "Secure Payments" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: Package, label: "Tracking Logistics" },
];

export function CybermallSection() {
  return (
    <section
      className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24"
      id="cybermall-app"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center border border-white/10 rounded-2xl p-8 md:p-12 lg:p-16"
      >
        {/* TEXT */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/15 rounded-full text-white/70 text-xs font-medium tracking-wide uppercase font-mono mb-6">
            <Smartphone size={14} />
            <span>Coming Soon</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.15] tracking-tight text-white mb-4">
            Cybermall App
          </h2>

          <p className="text-[15px] leading-relaxed text-white/55 mb-8 max-w-[440px]">
            Shop, pay, and track deliveries from one place. Cybermall brings the
            marketplace to your pocket — simple, secure, and built for everyday use.
          </p>

          <ul className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
            {features.map((feature) => (
              <li key={feature.label} className="flex items-center gap-2.5 text-sm text-white/80">
                <feature.icon size={16} className="text-[#C9A227] flex-shrink-0" />
                {feature.label}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold text-sm transition-colors duration-200 hover:bg-white/90"
            >
              <Download size={16} />
              Get Notified
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white border border-white/15 rounded-full font-semibold text-sm transition-colors duration-200 hover:border-white/40"
            >
              Learn More
              <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* MOCKUP — single hover transform, no extra glow layer */}
        <div className="flex justify-center">
          <img
            src={images.mockup}
            alt="Cybermall App Mockup"
            loading="lazy"
            className="w-full max-w-[420px] rounded-xl border border-white/10 shadow-xl transition-transform duration-300 will-change-transform hover:-translate-y-1"
          />
        </div>
      </motion.div>
    </section>
  );
}