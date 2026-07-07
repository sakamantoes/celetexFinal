import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Building2,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ShieldCheck,
  Users,
  Target,
  ClipboardList,
  Hammer,
  BadgeCheck,
  Camera,
  Plane,
  Landmark,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import images from "./assets/image";

/* ----------------------------------------------------------------------
   IMAGES — sourced stock photography (business / city / office themed
   to reflect a diversified, multi-sector company rather than a single
   construction-rental brand).
---------------------------------------------------------------------- */

const img = {
  skyline: "https://images.pexels.com/photos/1398003/pexels-photo-1398003.jpeg?auto=compress&cs=tinysrgb&w=1200",
  meeting: "https://images.pexels.com/photos/36733315/pexels-photo-36733315.jpeg?auto=compress&cs=tinysrgb&w=1200",
  strategy: "https://images.pexels.com/photos/36733322/pexels-photo-36733322.jpeg?auto=compress&cs=tinysrgb&w=1200",
  laptops: "https://images.pexels.com/photos/23496879/pexels-photo-23496879.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tablet: "https://images.pexels.com/photos/36765717/pexels-photo-36765717.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

/* ----------------------------------------------------------------------
   HOOKS
---------------------------------------------------------------------- */

function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function useScrollState() {
  const [y, setY] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrollTop = h.scrollTop || document.body.scrollTop;
        const scrollHeight = h.scrollHeight - h.clientHeight;
        setY(scrollTop);
        setProgress(scrollHeight > 0 ? scrollTop / scrollHeight : 0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { y, progress, scrolled: y > 24 };
}

function usePointerFine() {
  const [isFine, setIsFine] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsFine(mq.matches);
    const listener = (e) => setIsFine(e.matches);
    mq.addEventListener ? mq.addEventListener("change", listener) : mq.addListener(listener);
    return () => {
      mq.removeEventListener ? mq.removeEventListener("change", listener) : mq.removeListener(listener);
    };
  }, []);
  return isFine;
}

function useTilt(strength = 7, enabled = true) {
  const ref = useRef(null);

  const onMouseMove = useCallback(
    (e) => {
      if (!enabled) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * strength}deg) rotateX(${
        -y * strength
      }deg) translateZ(4px)`;
    },
    [strength, enabled],
  );

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

function useCountUp(target, visible, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = null;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, duration]);
  return value;
}

/* ----------------------------------------------------------------------
   PRIMITIVES
---------------------------------------------------------------------- */

function Reveal({ as: Tag = "div", className = "", delay = 0, children, ...rest }) {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Eyebrow({ children }) {
  return (
    <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.12em] uppercase text-[#C9A227] mb-5">
      <span className="w-2 h-2 bg-[#C9A227] rounded-sm inline-block" />
      {children}
    </div>
  );
}

function StatNumber({ value, suffix = "", decimals = 0, delay = 0 }) {
  const [ref, visible] = useReveal(0.5);
  const count = useCountUp(value, visible);
  return (
    <span
      ref={ref}
      className={`font-display font-bold text-5xl inline-block transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* ----------------------------------------------------------------------
   NAVIGATION
---------------------------------------------------------------------- */

function NavBar({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 md:py-6 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/98 border-b border-white/5 py-3 md:py-4" : "bg-transparent"
      }`}>
        <div className="max-w-[1360px] w-full mx-auto flex items-center justify-between">
       <a href="#home" className="flex items-center gap-4 flex-shrink-0 no-underline group">
  <span className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-[#0a0a0a] shadow-[0_0_40px_rgba(201,162,39,0.2)] transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 flex-shrink-0">
    <img src={images.main} alt="Celetex Group Logo" className="w-full h-full object-contain rounded-2xl" />
  </span>
  <span className="font-display font-extrabold text-3xl md:text-4xl tracking-wide text-white">
    Celetex <span className="text-[#C9A227]">Group</span>
  </span>
</a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-white/65 text-sm font-medium relative py-1 no-underline transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#C9A227] after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0a0a0a] bg-gradient-to-r from-[#F3D27A] to-[#C9A227] border border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)] active:scale-95 no-underline">
              Get in Touch <ArrowRight size={16} />
            </a>
            <button className="md:hidden text-white p-1 transition-transform duration-200 active:scale-90" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col overflow-y-auto transition-opacity duration-350 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3D27A] to-[#C9A227] flex items-center justify-center text-[#0a0a0a] border-2 border-[#C9A227]/30 shadow-[0_0_30px_rgba(201,162,39,0.15)] flex-shrink-0">
              <Building2 size={20} strokeWidth={2.4} />
            </span>
            <span className="font-display font-extrabold text-xl tracking-wide text-white">
              Celetex <span className="text-[#C9A227]">Group</span>
            </span>
          </div>
          <button className="text-white p-2 rounded-lg transition-all duration-300 hover:bg-white/5 hover:rotate-90" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <X size={28} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-between px-6 py-10 md:py-12">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-4 px-5 py-4 rounded-xl text-white no-underline font-display text-xl font-medium tracking-tight border border-transparent transition-all duration-300 hover:bg-white/5 hover:border-[#C9A227]/20 ${
                  menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: menuOpen ? `${80 + index * 60}ms` : "0ms" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="font-mono text-xs text-[#C9A227]/60 min-w-[28px]">0{index + 1}</span>
                <span className="flex-1">{link.label}</span>
                <ArrowUpRight size={20} className="text-[#C9A227] opacity-0 -translate-x-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            ))}
            <a
              href="#contact"
              className={`flex items-center justify-between px-6 py-4 mt-2 rounded-xl bg-gradient-to-r from-[#F3D27A] to-[#C9A227] text-[#0a0a0a] no-underline font-display text-lg font-semibold transition-all duration-300 hover:shadow-[0_8px_24px_rgba(201,162,39,0.25)] ${
                menuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: menuOpen ? `${80 + navLinks.length * 60}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="border-t border-white/5 pt-6 mt-8 space-y-2">
            <a href="mailto:hello@celetexgroup.com" className="flex items-center gap-3 text-white/70 no-underline text-sm transition-colors duration-300 hover:text-[#F3D27A] py-2"><Mail size={18} /> hello@celetexgroup.com</a>
            <a href="tel:+2348140784286" className="flex items-center gap-3 text-white/70 no-underline text-sm transition-colors duration-300 hover:text-[#F3D27A] py-2"><Phone size={18} /> +234 814 078 4286</a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ----------------------------------------------------------------------
   HERO SECTION — two-image composition mirroring the reference layout
---------------------------------------------------------------------- */

function HeroSection() {
  const [ref, visible] = useReveal(0.2);
  const tiltImg = useTilt(4, true);

  return (
    <section className="px-6 md:px-12 py-16 md:py-24 lg:py-28 relative" id="home" ref={ref}>
      <div className="max-w-[1360px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className={`transition-all duration-800 ease-[cubic-bezier(.2,.7,.2,1)] ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}>
          <Eyebrow>DIVERSE VENTURE, UNIFIED VISION</Eyebrow>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5">
          Celetex Group of Company Limited
            <br />
            <span className="bg-gradient-to-r from-[#F3D27A] to-[#C9A227] bg-clip-text text-transparent">  Building a legacy of innovation across Africa.</span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-white/60 max-w-xl mb-9">
          Celetex Group is a diversified business conglomerate delivering innovation solutions across media, real esate, travel, and digital commerce - empowering individual, business, and communities.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#0a0a0a] bg-gradient-to-r from-[#F3D27A] to-[#C9A227] border border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)] active:scale-95 no-underline">Request a Consultation <ArrowRight size={16} /></a>
            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-white/15 transition-all duration-300 hover:border-[#C9A227] hover:text-[#F3D27A] no-underline">Our Services</a>
          </div>

          {/* User Circle Indicators */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-[#F3D27A] to-[#C9A227] flex items-center justify-center text-xs font-bold text-[#0a0a0a] shadow-lg">
                JD
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center text-xs font-bold text-white/80 shadow-lg">
                AK
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center text-xs font-bold text-white/80 shadow-lg">
                MR
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-[#C9A227]/20 flex items-center justify-center text-sm font-bold text-[#F3D27A] shadow-lg">
                +
              </div>
            </div>
            <div className="text-sm text-white/60">
              <span className="font-semibold text-white">100+</span> trusted partners
            </div>
          </div>
        </div>

        <div className={`relative h-[420px] md:h-[480px] lg:h-[520px] transition-all duration-800 ease-[cubic-bezier(.22,.61,.36,1)] delay-150 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`} ref={tiltImg.ref} onMouseMove={tiltImg.onMouseMove} onMouseLeave={tiltImg.onMouseLeave}>
          <div className="absolute top-0 right-0 w-[70%] h-[80%] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img src={img.skyline} alt="City skyline representing our reach" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/55 via-transparent to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-[44%] h-[52%] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
            <img src={img.meeting} alt="Team collaborating on strategy" className="w-full h-full object-cover" loading="eager" />
          </div>
          <div className="absolute top-4 md:top-6 left-0 bg-[#0c0c0c]/95 border border-white/5 rounded-xl p-3.5 md:p-4 flex items-center gap-3 shadow-2xl">
            <div className="w-9 h-9 rounded-xl bg-[#C9A227]/20 flex items-center justify-center text-[#F3D27A]"><ShieldCheck size={18} /></div>
            <div>
              <div className="font-display font-bold text-base text-white leading-tight">3+ Yrs</div>
              <div className="text-xs text-white/55">Proven Track Record</div>
            </div>
          </div>

          {/* Floating user indicator on the image */}
          <div className="absolute bottom-4 right-4 bg-[#0c0c0c]/95 border border-white/5 rounded-xl p-3 flex items-center gap-3 shadow-2xl backdrop-blur-sm">
            <div className="flex -space-x-1.5">
              <div className="w-8 h-8 rounded-full border-2 border-[#0c0c0c] bg-gradient-to-br from-[#F3D27A] to-[#C9A227] flex items-center justify-center text-[10px] font-bold text-[#0a0a0a]">
                JD
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#0c0c0c] bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center text-[10px] font-bold text-white/80">
                AK
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#0c0c0c] bg-gradient-to-br from-[#4a4a4a] to-[#2a2a2a] flex items-center justify-center text-[10px] font-bold text-white/80">
                MR
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-[#0c0c0c] bg-[#C9A227]/20 flex items-center justify-center text-xs font-bold text-[#F3D27A]">
                +
              </div>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Active Users</div>
              <div className="text-[10px] text-white/50">24/7 support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   ABOUT / STATS SECTION
---------------------------------------------------------------------- */

function AboutSection() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section className="bg-[#141414] px-6 md:px-12 py-20 md:py-24" id="about" ref={ref}>
      <div className="max-w-[1360px] mx-auto">
        <div className={`max-w-2xl mb-12 transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}>
          <Eyebrow>About Our Company</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3.5">Built on Vision. Driven by Excellence.</h2>
          <p className="text-sm text-white/55 leading-relaxed">
            With years in the field, we bring a hands-on, client-first approach to every venture.
            Our teams blend strategy, craftsmanship, and trust to deliver results that last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className={`lg:row-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-8 border border-white/5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}>
            <div className="flex items-center gap-2.5 font-display font-semibold text-base text-[#F3D27A]">
              <span className="w-6.5 h-6.5 rounded-lg bg-[#C9A227]/15 flex items-center justify-center text-[#F3D27A]"><Building2 size={16} /></span>
              Celetex Group
            </div>
            <StatNumber value={100} suffix="+" delay={200} />
            <div className="text-sm text-white/60 leading-relaxed max-w-xs mt-2">Proven track record across media, property, travel, and commerce sectors.</div>
            <div className="flex mt-6">
              <span className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-br from-[#333] to-[#222] flex items-center justify-center text-[10.5px] text-[#C9A227] font-semibold">OA</span>
              <span className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-br from-[#333] to-[#222] flex items-center justify-center text-[10.5px] text-[#C9A227] font-semibold -ml-2.5">MK</span>
              <span className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-gradient-to-br from-[#333] to-[#222] flex items-center justify-center text-[10.5px] text-[#C9A227] font-semibold -ml-2.5">TR</span>
              <span className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-[#C9A227]/15 flex items-center justify-center text-[10.5px] text-[#F3D27A] font-semibold -ml-2.5">+12</span>
            </div>
          </div>

          <div className={`bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`} style={{ transitionDelay: "120ms" }}>
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-9.5 h-9.5 rounded-xl bg-[#C9A227]/8 flex items-center justify-center text-[#C9A227]"><Target size={18} /></div>
            </div>
            <div className="text-sm text-white/55 font-medium mt-2">Modern Strategy</div>
            <p className="text-sm text-white/55 leading-relaxed mt-2">We integrate current market intelligence and technology to ensure faster, sharper results.</p>
          </div>

          <div className={`bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`} style={{ transitionDelay: "240ms" }}>
            <StatNumber value={98} suffix="%" delay={400} />
            <div className="text-sm text-white/55 font-medium mt-2">Client Satisfaction Rate</div>
          </div>

          <div className={`bg-[#1a1a1a] rounded-2xl p-8 border border-white/5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`} style={{ transitionDelay: "360ms" }}>
            <StatNumber value={4} suffix="" delay={600} />
            <div className="text-sm text-white/55 font-medium mt-2">Business Divisions</div>
          </div>

          <div className={`bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`} style={{ transitionDelay: "480ms" }}>
            <div className="flex items-center justify-between mb-2.5">
              <div className="w-9.5 h-9.5 rounded-xl bg-[#C9A227]/8 flex items-center justify-center text-[#C9A227]"><Users size={18} /></div>
            </div>
            <div className="text-sm text-white/55 font-medium mt-2">Experienced Specialists</div>
            <p className="text-sm text-white/55 leading-relaxed mt-2">Our team brings decades of combined, cross-sector, hands-on experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   SERVICES SECTION
---------------------------------------------------------------------- */

function ServicesSection() {
  const [ref, visible] = useReveal(0.2);
  const tiltA = useTilt(6, true);
  const tiltB = useTilt(6, true);
  const tiltC = useTilt(6, true);

  const services = [
    {
      icon: Camera,
      title: "Media & Creative Services",
      desc: "Branding, content production, digital marketing, and strategic communications built to grow your presence.",
      tilt: tiltA,
    },
    {
      icon: Landmark,
      title: "Property & Real Estate",
      desc: "Development, consultancy, and investment advisory for residential and commercial real estate ventures.",
      tilt: tiltB,
    },
    {
      icon: Plane,
      title: "Travel & Corporate Logistics",
      desc: "Consultancy, planning, and management for individual, corporate, and international travel needs.",
      tilt: tiltC,
    },
  ];

  return (
    <section className="bg-[#0a0a0a] px-6 md:px-12 py-20 md:py-24" id="services" ref={ref}>
      <div className="max-w-[1360px] mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-end mb-14">
          <div className={`transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}>
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-lg">End-to-End Solutions You Can Rely On.</h2>
          </div>
          <p className={`text-sm text-white/55 leading-relaxed max-w-sm transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`} style={{ transitionDelay: "120ms" }}>
            From creative direction to property development and travel logistics — we offer comprehensive
            solutions tailored to your needs across every sector we operate in.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-8 transition-all duration-400 hover:border-[#C9A227] hover:shadow-2xl" ref={s.tilt.ref} onMouseMove={s.tilt.onMouseMove} onMouseLeave={s.tilt.onMouseLeave}>
                <div className="w-13 h-13 rounded-xl bg-[#C9A227]/12 text-[#F3D27A] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-4"><s.icon size={22} /></div>
                <h3 className="font-display text-lg font-semibold mb-3">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4.5">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#F3D27A] no-underline group"><span>Read More</span> <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" /></a>
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={200} className="flex justify-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-white/15 transition-all duration-300 hover:border-[#C9A227] hover:text-[#F3D27A] no-underline">Explore All Services <ArrowRight size={16} /></a>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   PROJECTS SECTION
---------------------------------------------------------------------- */

function ProjectsSection() {
  const [ref, visible] = useReveal(0.15);

  const projects = [
    {
      img: img.strategy,
      title: "Metro Wellness Media Campaign",
      desc: "A full brand relaunch with integrated content strategy for a regional healthcare client.",
      loc: "Lagos, Nigeria",
      date: "2025 / 2026",
    },
    {
      img: img.laptops,
      title: "Skyline Business District Advisory",
      desc: "Investment advisory and planning support for a mixed-use commercial development.",
      loc: "Abuja, Nigeria",
      date: "2024 / 2025",
    },
    {
      img: img.tablet,
      title: "Corporate Travel Framework Rollout",
      desc: "A managed travel program covering logistics, visas, and vendor coordination for enterprise clients.",
      loc: "Port Harcourt, Nigeria",
      date: "2024 / 2025",
    },
  ];

  return (
    <section className="px-6 md:px-12 py-20 md:py-24 max-w-[1360px] mx-auto" id="projects" ref={ref}>
      <div className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}>
        <Eyebrow>Our Projects</Eyebrow>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-3.5">Crafted Ventures, Proven Results.</h2>
        <p className="text-sm text-white/55 leading-relaxed">We don't just deliver — we craft. Every engagement reflects thoughtful planning, expert execution, and precise delivery.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-7">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="relative h-48 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-600 hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A227]/10 to-black/35" />
              </div>
              <div className="p-6 md:p-6.5">
                <h4 className="font-display text-base font-semibold mb-2">{p.title}</h4>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{p.desc}</p>
                <div className="flex gap-4 mb-4 flex-wrap">
                  <span className="flex items-center gap-1.5 text-xs text-white/50"><MapPin size={13} /> {p.loc}</span>
                  <span className="flex items-center gap-1.5 text-xs text-white/50"><Clock size={13} /> {p.date}</span>
                </div>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F3D27A] no-underline">View More <ArrowUpRight size={14} /></a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300} className="flex justify-center mt-12">
        <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-white/15 transition-all duration-300 hover:border-[#C9A227] hover:text-[#F3D27A] no-underline">Explore All Projects <ArrowRight size={16} /></a>
      </Reveal>
    </section>
  );
}

/* ----------------------------------------------------------------------
   PROCESS SECTION
---------------------------------------------------------------------- */

function ProcessLine() {
  const [ref, visible] = useReveal(0.4);
  return (
    <div className="absolute top-11 left-0 right-0 h-px bg-white/5 overflow-hidden" ref={ref}>
      <div className={`h-full bg-gradient-to-r from-[#F3D27A] to-[#C9A227] transition-all duration-1400 ease-[cubic-bezier(.2,.7,.2,1)] ${
        visible ? "w-full" : "w-0"
      }`} />
    </div>
  );
}

function ProcessSection() {
  const [ref, visible] = useReveal(0.2);

  const steps = [
    { n: "01", title: "Understanding Your Needs", desc: "We study your goals, constraints, and market to define what success looks like.", icon: ClipboardList },
    { n: "02", title: "Detailed Timeline & Quote", desc: "Every plan is mapped in detail — budgets, timelines, and risk built in from day one.", icon: Target },
    { n: "03", title: "Expertly Built With Care", desc: "Our teams execute with precision, discipline, and constant communication.", icon: Hammer },
    { n: "04", title: "Final Check & Handover", desc: "We verify every detail before handover, then stay engaged for ongoing support.", icon: BadgeCheck },
  ];

  return (
    <section className="bg-[#141414] px-6 md:px-12 py-20 md:py-24" id="process" ref={ref}>
      <div className="max-w-[1360px] mx-auto">
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-10 items-end mb-16">
          <div className={`transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`}>
            <Eyebrow>Our Process</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl font-bold max-w-lg">Our 4-Step Process to Sustainable Growth.</h2>
          </div>
          <p className={`text-sm text-white/55 leading-relaxed max-w-sm transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
          }`} style={{ transitionDelay: "120ms" }}>
            We don't just deliver — we partner. Every engagement reflects thoughtful planning,
            expert execution, and precise follow-through.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          <ProcessLine />
          {steps.map((step, i) => (
            <div key={step.n} className={`pr-6 relative transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
            }`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="font-display text-5xl font-bold text-white/5 mb-4.5">{step.n}</div>
              <div className="w-11 h-11 rounded-xl bg-[#C9A227]/12 text-[#F3D27A] flex items-center justify-center mb-4.5 relative z-10 transition-transform duration-300 hover:scale-110 hover:-rotate-4"><step.icon size={20} /></div>
              <h3 className="font-display text-base font-semibold mb-2.5">{step.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   TESTIMONIAL STRIP
---------------------------------------------------------------------- */

function TestimonialStrip() {
  const [ref, visible] = useReveal(0.3);
  return (
    <section className="px-6 md:px-12 py-20 md:py-24 max-w-[1360px] mx-auto" ref={ref}>
      <div className={`bg-[#1a1a1a] border border-white/5 rounded-3xl p-8 md:p-14 max-w-3xl mx-auto text-center transition-all duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}>
        <div className="flex justify-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="#C9A227" stroke="#C9A227" />)}
        </div>
        <p className="font-display text-lg md:text-xl font-medium leading-relaxed text-white mb-6">
          Working across media, property, and logistics with one partner has simplified everything.
          The team plans meticulously and delivers exactly what was promised, on schedule.
        </p>
        <div className="flex items-center justify-center gap-3">
          <span className="w-10 h-10 rounded-full bg-[#C9A227]/15 text-[#F3D27A] flex items-center justify-center text-sm font-semibold">DK</span>
          <div className="text-left">
            <div className="text-sm font-semibold text-white">Dara Kalu</div>
            <div className="text-xs text-white/50">Operations Director, Northbridge Retail</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------
   MAIN APP
---------------------------------------------------------------------- */

export default function App() {
  const { progress, scrolled } = useScrollState();
  const [ctaRef, ctaVisible] = useReveal(0.2);

  return (
    <div className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden antialiased">
      <div className="fixed top-0 left-0 w-1 h-screen z-[60] bg-gradient-to-b from-[#F3D27A] via-[#C9A227] to-transparent pointer-events-none origin-top transition-transform duration-100 linear" style={{ transform: `scaleY(${progress})` }} />

      <NavBar scrolled={scrolled} />

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialStrip />

      <div ref={ctaRef}>
        <div className={`mx-6 md:mx-12 mb-16 md:mb-24 rounded-2xl p-8 md:p-16 bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#1a1a1a] relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-10 border border-white/5 transition-all duration-700 ease-[cubic-bezier(.22,.61,.36,1)] ${
          ctaVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}>
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(201,162,39,0.08),transparent_70%)] -top-40 -right-24" />
          <div className="relative z-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold max-w-lg mb-2">Ready to partner with Celetex Group?</h2>
            <p className="text-white/60 max-w-md">Connect with our team today and let's build something extraordinary across every sector we serve.</p>
          </div>
          <div className="relative z-10 flex flex-wrap gap-3.5 flex-shrink-0">
            <a href="mailto:hello@celetexgroup.com" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#0a0a0a] bg-gradient-to-r from-[#F3D27A] to-[#C9A227] border border-transparent transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(201,162,39,0.35)] active:scale-95 no-underline"><Mail size={16} /> Email Us</a>
            <a href="tel:+2348140784286" className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-white bg-transparent border border-white/15 transition-all duration-300 hover:border-[#C9A227] hover:text-[#F3D27A] no-underline"><Phone size={16} /> Call Now</a>
          </div>
        </div>
      </div>

      <footer className="bg-[#0a0a0a] text-white/60 px-6 md:px-12 py-16 md:py-20 border-t border-white/5">
        <div className="max-w-[1360px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
            <div>
              <a href="#home" className="flex items-center gap-3 no-underline">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F3D27A] to-[#C9A227] flex items-center justify-center text-[#0a0a0a] border-2 border-[#C9A227]/30 shadow-[0_0_30px_rgba(201,162,39,0.15)] flex-shrink-0"><Building2 size={20} strokeWidth={2.4} /></span>
                <span className="font-display font-extrabold text-lg tracking-wide text-white">Celetex <span className="text-[#C9A227]">Group</span></span>
              </a>
              <p className="text-sm leading-relaxed mt-4 max-w-xs">A multi-sector enterprise delivering strategic solutions across media, real estate, travel, and digital commerce.</p>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-wider font-mono mb-4.5">Services</h4>
              <a href="#services" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">Media & Creative</a>
              <a href="#services" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">Real Estate</a>
              <a href="#services" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">Travel & Logistics</a>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-wider font-mono mb-4.5">Contact</h4>
              <a href="mailto:hello@celetexgroup.com" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">hello@celetexgroup.com</a>
              <a href="tel:+2348140784286" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">+234 814 078 4286</a>
            </div>
            <div>
              <h4 className="text-white text-sm uppercase tracking-wider font-mono mb-4.5">Quick Links</h4>
              <a href="#about" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">About Us</a>
              <a href="#projects" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">Projects</a>
              <a href="#process" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">Our Process</a>
              <a href="#contact" className="block text-sm mb-3 text-white/60 no-underline transition-colors duration-300 hover:text-[#F3D27A]">Contact</a>
            </div>
          </div>
          <div className="flex flex-wrap justify-between items-center border-t border-white/5 pt-7 text-xs gap-3">
            <span>© 2026 Celetex Group. All rights reserved.</span>
            <span>Black · Gold · White</span>
          </div>
        </div>
      </footer>
    </div>
  );
}