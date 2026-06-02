"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  Clock,
  Users,
  Shield,
  Trophy,
  Star,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  BedDouble,
  Sofa,
  Waves,
  Calculator,
  FileDown,
  HardHat,
  Sparkles,
  Target,
  Gem,
  Zap,
  MapPin,
  Phone,
} from "lucide-react";

import FadeIn from "@/components/FadeIn";


/* ─── Section Header ─── */
function SectionHeader({
  subtitle,
  title,
  description,
  light = false,
}: {
  subtitle: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-16">
      <FadeIn>
        <span className="inline-block px-4 py-1.5 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-semibold rounded-full mb-4 tracking-wider uppercase">
          {subtitle}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-4 ${
            light ? "text-white" : "text-[var(--color-dark)]"
          }`}
        >
          {title}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <div className="section-divider mb-6" />
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p
            className={`max-w-2xl mx-auto text-base ${
              light ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}

/* ─── HERO WITH INTEGRATED LUXURY IMAGES ─── */
const heroSlides = [
  {
    title: "MODERN HOME",
    highlight: "For Sale",
    features: ["3 Bed Rooms", "1 Living Room", "Swimming Pool"],
    icons: [BedDouble, Sofa, Waves],
    // High-end architecture image synced with Slide 1
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "LUXURY LIVING",
    highlight: "Apartments",
    features: ["Premium Finish", "Gated Community", "Modern Amenities"],
    icons: [Gem, Shield, Sparkles],
    // Ultra-premium penthouse image synced with Slide 2
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
  },
  {
    title: "DREAM SPACES",
    highlight: "Awaits You",
    features: ["Prime Location", "World-Class Design", "On-Time Delivery"],
    icons: [Target, Star, Clock],
    // Cinematic residential tower image synced with Slide 3
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80",
  },
];

function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % heroSlides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE SLIDER MATRICES (FULLY SYNCED) */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.45, scale: 1 }} // 0.45 opacity guarantees text readability over image
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slide.image}
            alt={`${slide.title} ${slide.highlight}`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Cinematic Vignette Gradients Layer */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-black/50" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#050505]/90 via-[#050505]/40 to-transparent" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-[var(--color-gold)]/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full border border-[var(--color-gold)]/5"
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--color-gold)]/20 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 16}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: 0.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="inline-block px-4 py-1.5 glass rounded-full text-[var(--color-gold)] text-xs font-bold mb-6 tracking-[0.2em] uppercase">
                  ✦ Welcome to World Wide Prominent Properties
                </span>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white heading-premium mb-2 drop-shadow-2xl">
                  {slide.title}
                </h1>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text heading-premium mb-8 drop-shadow-xl">
                  {slide.highlight}
                </h2>

                <div className="flex flex-wrap gap-4 mb-12">
                  {slide.features.map((feat, i) => {
                    const Icon = slide.icons[i];
                    return (
                      <motion.div
                        key={feat}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.15, ease: "easeOut" }}
                        className="flex items-center gap-2 glass px-5 py-2.5 rounded-full border border-white/10 hover:border-[var(--color-gold)]/50 transition-colors"
                      >
                        <Icon size={18} className="text-[var(--color-gold)]" />
                        <span className="text-gray-200 text-sm font-medium tracking-wide">{feat}</span>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-6">
                  <Link
                    href="/properties/ongoing"
                    className="group relative px-8 py-4 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-dark)] font-bold rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.3)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-500 hover:scale-105 flex items-center gap-3 tracking-wide"
                  >
                    <span className="relative z-10">Explore Properties</span>
                    <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
                  </Link>
                  <Link
                    href="/contact"
                    className="group px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-500 flex items-center gap-3 tracking-wide"
                  >
                    <span>Contact Us</span>
                    <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] group-hover:scale-150 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Decorative Experience Card – synced with slide change */}
          <div className="hidden lg:flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.8, y: 30, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -20, rotate: 8 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Soft outer glow that reacts on every change */}
                <motion.div
                  key={`glow-${current}`}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 0.45, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-[22rem] h-[22rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.55)_0%,transparent_65%)] blur-3xl" />
                </motion.div>

                <div className="relative w-80 h-80 rounded-full glass border-2 border-[var(--color-gold)]/30 flex items-center justify-center animate-float shadow-[0_0_40px_rgba(212,175,55,0.18)]">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[var(--color-gold)]/25 via-[var(--color-gold)]/10 to-[var(--color-gold)]/5 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <motion.div
                        key={`icon-${current}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Building2
                          size={72}
                          className="mx-auto text-[var(--color-gold)] drop-shadow-lg"
                        />
                      </motion.div>
                      <p className="text-white text-3xl font-bold font-[family-name:var(--font-playfair)] tracking-tight">
                        21<span className="text-[var(--color-gold)]">+</span> Years
                      </p>
                      <p className="text-gray-300 text-sm uppercase tracking-[0.25em]">
                        Of Excellence
                      </p>
                      {/* Current slide label */}
                      <p className="mt-2 text-xs text-gray-400 tracking-[0.2em] uppercase">
                        {slide.title} · {slide.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Satellite circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center shadow-lg">
                    <Trophy size={20} className="text-white" />
                  </div>
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[var(--color-dark-lighter)] flex items-center justify-center shadow-lg border border-[var(--color-gold)]/40">
                    <Star size={20} className="text-[var(--color-gold)]" />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-10 bg-[var(--color-gold)]"
                  : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutSection() {
  return (
    <section className="py-32 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[var(--color-gold)]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-gold)]/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left : visual */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="w-full aspect-square max-w-lg mx-auto rounded-full bg-white/50 border border-white/60 p-4 shadow-2xl backdrop-blur-sm relative">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-white to-[var(--color-cream-dark)] flex items-center justify-center p-12">
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Building2
                        size={120}
                        className="mx-auto text-[var(--color-gold)] mb-8 drop-shadow-lg"
                      />
                    </motion.div>
                    <h3 className="text-7xl font-bold text-[var(--color-dark)] heading-premium">
                      21<span className="text-[var(--color-gold)]">+</span>
                    </h3>
                    <p className="text-xl text-gray-500 mt-2 tracking-widest uppercase font-medium">
                      Years of Legacy
                    </p>
                  </div>
                </div>
                
                {/* Floating stats badges */}
                <motion.div
                  animate={{ y: [-15, 15, -15] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 -left-8 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white"
                >
                  <p className="text-3xl font-bold gradient-text">500+</p>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Families</p>
                </motion.div>

                <motion.div
                  animate={{ y: [15, -15, 15] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-12 -right-8 bg-[var(--color-dark)] text-white rounded-2xl p-6 shadow-2xl border border-[var(--color-gold)]/20"
                >
                  <Trophy size={32} className="text-[var(--color-gold)] mb-2" />
                  <p className="text-sm font-bold tracking-widest uppercase">Awards</p>
                  <p className="text-2xl font-bold mt-1">Winning</p>
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Right : text */}
          <div className="lg:pl-10">
            <FadeIn>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[2px] w-12 bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
                <span className="text-[var(--color-gold)] text-sm font-bold tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-dark)] heading-premium mb-8 leading-tight">
                Crafting Legacies, <br/>
                <span className="gradient-text italic">Redefining Luxury.</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                WorldWide Prominent Properties has established itself as the pinnacle of real estate excellence. With over two decades of unwavering dedication, we have masterfully curated world-class residential and commercial spaces across Patna and Bihar.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed pl-6 border-l-2 border-[var(--color-gold)]/30">
                Our philosophy transcends mere construction. We architect communities, foster prosperity, and deliver on our profound commitment to transparency and uncompromising quality.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-dark)] text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_10px_40px_rgba(26,26,46,0.3)] hover:-translate-y-1"
              >
                <span className="relative z-10 tracking-wide">Discover Our Heritage</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)] translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CORE VALUES ─── */
const values = [
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "A meticulous approach ensuring your masterpiece is delivered precisely when promised.",
  },
  {
    icon: Shield,
    title: "Absolute Transparency",
    desc: "Honesty and crystal-clear communication form the bedrock of our enduring relationships.",
  },
  {
    icon: Trophy,
    title: "Unshakable Integrity",
    desc: "Every foundation we lay is infused with our uncompromising ethical standards.",
  },
  {
    icon: Zap,
    title: "Visionary Design",
    desc: "Aesthetic brilliance meets functional perfection to unlock your property's ultimate potential.",
  },
];

function CoreValuesSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          subtitle="Our Ethos"
          title="Pillars of Excellence"
          description="The unyielding principles that guide our pursuit of perfection and client satisfaction."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-[var(--color-cream)] rounded-3xl p-10 hover:shadow-[0_30px_60px_rgba(212,175,55,0.1)] transition-all duration-500 border border-transparent hover:border-[var(--color-gold)]/20 group h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-gold)]/5 rounded-bl-full -z-0 transition-transform duration-500 group-hover:scale-150" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:bg-gradient-to-br group-hover:from-[var(--color-gold)] group-hover:to-[var(--color-gold-light)] transition-colors duration-500">
                    <v.icon size={30} className="text-[var(--color-gold)] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-4 heading-premium">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROPERTIES ─── */
const properties = [
  {
    name: "Sri Krishna Nagar",
    location: "Patna",
    type: "2 & 3 BHK Apartments",
    status: "Ongoing",
    price: "Starting ₹45 Lacs",
    image: "/images/property-sri-krishna.png",
  },
  {
    name: "Bihta Project",
    location: "Bihta (Maner), Patna",
    type: "Residential Township",
    status: "Ongoing",
    price: "Starting ₹35 Lacs",
    image: "/images/property-bihta.png",
  },
  {
    name: "Canal Road Residency",
    location: "West Boring Canal Road, Patna",
    type: "2 & 3 BHK Apartments",
    status: "Upcoming",
    price: "Coming Soon",
    image: "/images/property-canal-road.png",
  },
];

function PropertiesSection() {
  return (
    <section className="py-32 bg-[var(--color-dark)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[var(--color-dark-lighter)]/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="Our Projects"
          title="Masterpieces in the Making"
          description="Discover our premium residential projects that redefine luxury living in Patna."
          light
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {properties.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -12 }}
                className="group glass-dark rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 border border-white/5"
              >
                {/* Property Image */}
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent" />
                  
                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 backdrop-blur-md bg-white/10 border border-white/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${p.status === "Ongoing" ? "bg-green-400 animate-pulse" : "bg-[var(--color-gold)]"}`} />
                    <span className="text-white text-xs font-bold tracking-wider uppercase">{p.status}</span>
                  </div>
                </div>
                
                <div className="p-8 relative">
                  <div className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                    <ArrowRight size={20} className="text-white -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white heading-premium mb-2">
                    {p.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-4 text-sm">
                    <MapPin size={16} className="text-[var(--color-gold)]" />
                    <span>{p.location}</span>
                  </div>
                  
                  <div className="h-[1px] w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent mb-4" />
                  
                  <p className="text-gray-300 font-medium tracking-wide mb-6">{p.type}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Starting From</p>
                      <span className="text-[var(--color-gold)] font-bold text-lg">
                        {p.price}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            href="/properties/ongoing"
            className="group relative inline-flex items-center gap-3 px-8 py-4 glass text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:border-[var(--color-gold)]/50"
          >
            <span className="relative z-10 tracking-wide">View All Properties</span>
            <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center group-hover:bg-[var(--color-gold)] transition-colors duration-500 relative z-10">
              <ArrowRight size={16} className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="absolute inset-0 bg-white/5 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── WHY CHOOSE US ─── */
const whyUs = [
  { number: "21+", label: "Years Experience", icon: Clock },
  { number: "500+", label: "Happy Families", icon: Users },
  { number: "50+", label: "Projects Completed", icon: Building2 },
  { number: "100%", label: "On-Time Delivery", icon: CheckCircle2 },
];

function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-[var(--color-dark-light)] text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-50">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_60%)] opacity-5 blend-screen" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="The World Wide Prominent Properties Difference"
          title="Excellence in Every Detail"
          description="With decades of undisputed leadership, we are the architects of your success and the builders of your future."
          light
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {whyUs.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-xl" />
                <div className="relative z-10 p-6">
                  <div className="w-20 h-20 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center mx-auto mb-6 group-hover:border-[var(--color-gold)] transition-colors duration-500 bg-[var(--color-dark)] text-[var(--color-gold)] shadow-[0_0_30px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-5xl lg:text-6xl font-bold gradient-text heading-premium mb-3 tracking-tighter drop-shadow-lg">
                    {item.number}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium tracking-widest uppercase">{item.label}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TOOLS & SUPPORT ─── */
const tools = [
  {
    icon: Calculator,
    title: "EMI / Loan Calculator",
    desc: "Plan your finances with our easy-to-use EMI calculator and explore best loan options.",
    href: "/tools/emi-calculator",
  },
  {
    icon: FileDown,
    title: "Download Brochures",
    desc: "Get detailed project brochures with floor plans, amenities, and pricing information.",
    href: "/tools/brochures",
  },
  {
    icon: HardHat,
    title: "Construction Updates",
    desc: "Stay informed with real-time construction progress updates on all our projects.",
    href: "/tools/construction-updates",
  },
];

function ToolsSection() {
  return (
    <section className="py-32 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="absolute -left-64 top-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-60" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="Ecosystem"
          title="Empowering Your Journey"
          description="Comprehensive resources designed to provide clarity and absolute confidence in your investment."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((t, i) => (
            <FadeIn key={t.title} delay={i * 0.15}>
              <Link href={t.href} className="block h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-[0_20px_40px_rgba(0,0,0,0.03)] border border-white group cursor-pointer h-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-[var(--color-cream-dark)] border border-white flex items-center justify-center mb-8 group-hover:bg-[var(--color-dark)] transition-colors duration-500 shadow-inner">
                      <t.icon
                        size={32}
                        className="text-[var(--color-dark)] group-hover:text-[var(--color-gold)] transition-colors duration-500 drop-shadow-sm"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-4 heading-premium">
                      {t.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-[var(--color-dark-lighter)] transition-colors">
                      {t.desc}
                    </p>
                    
                    <div className="mt-8 flex items-center gap-3 text-[var(--color-gold)] font-bold tracking-wide text-sm opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                      ACCESS RESOURCE <ArrowRight size={18} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Home Owner",
    text: "WorldWide Prominent Properties made our dream of owning a home a reality. The quality of construction and timely delivery exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Investor",
    text: "Exceptional service and transparency throughout the buying process. The team was professional and supportive at every step.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Home Owner",
    text: "The best real estate company in Patna! Their attention to detail and commitment to quality is truly commendable.",
    rating: 5,
  },
];

function TestimonialsSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[300px] text-[var(--color-cream-dark)] opacity-30 font-serif leading-none select-none pointer-events-none">
        &rdquo;
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeader
          subtitle="Testimonials"
          title="Words of Appreciation"
          description="The true measure of our success lies in the voices of those who dwell in our creations."
        />
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-[var(--color-cream)] rounded-3xl p-10 shadow-lg border border-transparent hover:border-[var(--color-gold)]/20 transition-all duration-500 relative h-full group"
              >
                <div className="absolute -top-6 left-10 w-12 h-12 bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] rounded-2xl rotate-12 flex items-center justify-center shadow-xl group-hover:rotate-0 transition-transform duration-500">
                  <span className="text-white text-3xl font-serif leading-none pt-2">&ldquo;</span>
                </div>
                <div className="flex gap-1 mb-6 mt-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-[var(--color-gold)] text-[var(--color-gold)] filter drop-shadow-[0_2px_4px_rgba(212,175,55,0.4)]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 font-serif italic text-justify">
                  {t.text}
                </p>
                
                <div className="h-[1px] w-full bg-gradient-to-r from-gray-200 to-transparent mb-6" />
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[var(--color-dark)] flex items-center justify-center text-[var(--color-gold)] font-bold text-xl shadow-inner border-2 border-[var(--color-gold)]/20 group-hover:border-[var(--color-gold)] transition-colors">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-[var(--color-dark)] tracking-wide">
                      {t.name}
                    </p>
                    <p className="text-sm text-[var(--color-gold-dark)] font-medium tracking-widest uppercase">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  {
    q: "What types of properties do you offer?",
    a: "We offer a wide range of residential properties including 2 BHK and 3 BHK apartments, independent houses, and residential plots in prime locations across Patna, Bihar.",
  },
  {
    q: "Do you provide home loan assistance?",
    a: "Yes, we have tie-ups with leading banks and financial institutions. Our dedicated team assists you throughout the loan process to ensure quick approvals.",
  },
  {
    q: "What is the timeline for project completion?",
    a: "We are committed to on-time delivery. Our projects typically have a completion timeline of 2-3 years from the date of launch, and we have a 100% track record of timely delivery.",
  },
  {
    q: "Are your properties RERA registered?",
    a: "Absolutely! All our projects are RERA registered and comply with all government regulations. We believe in complete transparency and legal compliance.",
  },
  {
    q: "Can I visit the construction site?",
    a: "Yes, we encourage site visits. You can schedule a visit by contacting our office or through our website. We provide guided tours of all our ongoing projects.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          subtitle="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to the most commonly asked questions about our properties and services."
        />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <motion.div
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open === i
                    ? "border-[var(--color-gold)] shadow-lg shadow-[var(--color-gold)]/10"
                    : "border-gray-200 hover:border-[var(--color-gold)]/50"
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span
                    className={`font-semibold ${
                      open === i
                        ? "text-[var(--color-gold)]"
                        : "text-[var(--color-dark)]"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 flex-shrink-0 ml-4 ${
                      open === i
                        ? "rotate-180 text-[var(--color-gold)]"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-gray-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="py-32 bg-[var(--color-dark)] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/80 to-[var(--color-dark)]" />
      
      <div className="absolute inset-0 opacity-30 mix-blend-color-dodge">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--color-gold)] blur-[80px]"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              top: `${20 + i * 20}%`,
              left: `${10 + i * 30}%`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
        <FadeIn>
          <div className="inline-flex items-center gap-3 glass-dark border-[var(--color-gold)]/30 px-6 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-gold)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--color-gold)]"></span>
            </span>
            <span className="text-[var(--color-gold)] text-sm font-bold tracking-[0.2em] uppercase">Private Consultations Open</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white heading-premium mb-8 drop-shadow-2xl">
            Step Into Your <br />
            <span className="gradient-text italic">Extraordinary Reality.</span>
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            Allow us to curate your ultimate living experience. Schedule a bespoke viewing with our senior advisors today.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="/contact"
              className="group w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-[var(--color-gold-dark)] via-[var(--color-gold)] to-[var(--color-gold-light)] text-[var(--color-dark)] font-bold rounded-full text-lg tracking-wide hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-105 flex items-center justify-center gap-3 relative overflow-hidden"
            >
              <span className="relative z-10">Schedule a Viewing</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
            </Link>
            
            <a
              href="tel:+919031630070"
              className="group w-full sm:w-auto px-10 py-5 glass border border-[var(--color-gold)]/20 text-white font-bold rounded-full text-lg tracking-wide hover:bg-white/5 transition-all duration-500 flex items-center justify-center gap-3"
            >
              <Phone size={20} className="text-[var(--color-gold)] group-hover:animate-bounce" />
              <span>+91 9031 630 070</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── HOME PAGE ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <PropertiesSection />
      <WhyChooseUsSection />
      <ToolsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}