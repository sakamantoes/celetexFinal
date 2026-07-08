// components/sections/CybermallSection.jsx
import React from 'react';
import { Smartphone, Download, ArrowRight, Store, ShoppingCart, CreditCard, Truck, Package, BadgeCheck } from 'lucide-react';
import images from '../../assets/image';
import { useReveal } from '../ui/Reveal';

const features = [
  { icon: ShoppingCart, label: 'Easy Shopping' },
  { icon: CreditCard, label: 'Secure Payments' },
  { icon: Truck, label: 'Fast Delivery' },
  { icon: Package, label: 'Tracking Logistics' },
  { icon: BadgeCheck, label: 'Verified Sellers' },
];

export function CybermallSection() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section className="max-w-[1360px] mx-auto px-6 md:px-12 lg:px-16 py-15 md:py-20" id="cybermall-app" ref={ref}>
      <div className={`transition-all duration-800 ease-[cubic-bezier(.2,.7,.2,1)] 
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 bg-charcoal rounded-3xl p-8 md:p-10 lg:p-15 
          border border-white/6 min-h-[400px] md:min-h-[500px]">
          
          <div className="lg:pr-5">
            <div className={`transition-all duration-700 ease-in-out 
              ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-7.5'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/15 border border-gold/25 
                rounded-full text-gold-bright text-xs font-semibold tracking-wider uppercase 
                font-mono mb-5">
                <Smartphone size={16} />
                <span>Coming Soon</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] 
                tracking-[-0.02em] text-white mb-4">
                Cybermall App
                <span className="bg-gradient-gold bg-clip-text text-transparent"> Coming Soon</span>
              </h2>

              <p className="text-base leading-relaxed text-white/60 mb-7 max-w-[480px]">
                Experience seamless shopping with the Cybermall mobile app.
                Browse products, make secure payments, track deliveries, and
                manage your logistics all from the palm of your hand.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2.5 px-4 py-3 bg-white/4 rounded-lg 
                      border border-white/6 transition-all duration-300 
                      hover:border-gold hover:-translate-y-0.5 hover:shadow-gold/10 hover:bg-white/6
                      ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'}`}
                    style={{ transitionDelay: `${180 + index * 70}ms` }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/12 flex items-center justify-center text-gold-bright flex-shrink-0">
                      <feature.icon size={18} />
                    </div>
                    <span className="text-[13px] font-medium text-white">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <a href="#contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 
                  bg-gradient-gold text-black rounded-full font-semibold text-sm 
                  transition-all duration-300 hover:-translate-y-0.5 hover:shadow-gold 
                  active:scale-98">
                  <Download size={18} />
                  Get Notified
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 
                  bg-transparent text-white border border-white/15 rounded-full font-semibold text-sm 
                  transition-all duration-300 hover:border-gold hover:text-gold-bright 
                  hover:-translate-y-0.5 active:scale-98">
                  Learn More
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4.5 py-2.5 bg-white/6 text-white/50 
                  rounded-lg text-xs font-medium border border-white/6 
                  transition-all duration-300 hover:bg-white/10 hover:text-white/80">
                  <Store size={20} /><span>App Store</span>
                </div>
                <div className="flex items-center gap-2 px-4.5 py-2.5 bg-white/6 text-white/50 
                  rounded-lg text-xs font-medium border border-white/6 
                  transition-all duration-300 hover:bg-white/10 hover:text-white/80">
                  <Store size={20} /><span>Google Play</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className={`relative w-full max-w-[400px] md:max-w-[550px] rounded-2xl overflow-hidden 
              border border-white/6 shadow-2xl transition-all duration-400 
              hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)]
              ${visible ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-95 translate-x-7.5'}`}>
              <img src={images.mockup} alt="Cybermall App Mockup" className="w-full h-auto block object-cover" loading="lazy" />
              <div className="absolute inset-[-50%] pointer-events-none z-0 
                bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.08),transparent_70%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}