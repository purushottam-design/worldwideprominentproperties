"use client";

import { useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

import {
  galleryItems,
  galleryCategories,
} from "@/data/gallery";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState<number | null>(null);

  // Filtered array indexes ko accurate trace karne ke liye map filter loop update kiya hai
  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((i) => i.category === activeCategory);

  return (
    <>
      {/* ── HERO HEADER WITH OPTIMIZED BACKGROUND IMAGE ── */}
      <section className="relative py-36 lg:py-48 bg-zinc-950 overflow-hidden flex items-center justify-center">
        
        {/* FULL COVER HIGH-END ARCHITECTURE GRAPHIC BACKDROP */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30 select-none">
          <Image
            src="/images/gallery.png" // Premium residential layout vector
            alt="WorldWide Prominent Properties Project Backdrop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Multi-layered cinematic overlay shielding for clean text readability */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-black/40 pointer-events-none" />
        <div className="absolute inset-0 z-10 bg-radial-gradient(circle at center, transparent 20%, #09090b 95%) opacity-60 pointer-events-none" />

        {/* Fine geometric accents */}
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[var(--color-gold)]/10" />
        </div>

        {/* Header Content Array */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 glass rounded-full text-[var(--color-gold)] text-xs font-bold mb-6 tracking-[0.2em] uppercase">✦ SHOWCASE MODULE</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight mb-4">
            Our <span className="gradient-text font-[family-name:var(--font-playfair)] lowercase italic font-medium">Gallery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-zinc-400 max-w-xl mx-auto text-sm md:text-base tracking-wide font-medium leading-relaxed">
            Explore our premium portfolios, meticulous interior layouts, and landmark construction blueprints.
          </motion.p>
        </div>
      </section>

      {/* Filter & Gallery Sector */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category Filter Elements */}
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    activeCategory === cat
                      ? "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-white shadow-lg shadow-[var(--color-gold)]/25"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Core Interactive Media Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl border border-zinc-100"
                  onClick={() => setSelected(i)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10 transition-opacity duration-300" />
                  
                  {/* Subtle Text Layout Card Cover */}
                  <div className="absolute inset-0 flex items-end justify-center z-20">
                    <div className="text-center p-5 w-full transform group-hover:translate-y-[-4px] transition-transform duration-300">
                      <p className="text-white font-bold text-sm md:text-base tracking-wide line-clamp-1">{item.title}</p>
                      <span className="mt-2 inline-block px-3 py-1 bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-zinc-200 text-[9px] font-bold tracking-wider uppercase">{item.category}</span>
                    </div>
                  </div>
                  
                  {/* Luxury Zoom Mask Hover */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center z-30">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-[var(--color-gold)]/40">
                      <ZoomIn size={20} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal Lightbox System Overlay */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white hover:text-[var(--color-gold)] hover:bg-white/10 transition-all cursor-pointer shadow-2xl" onClick={() => setSelected(null)}>
              <X size={22} />
            </button>
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              transition={{ type: "spring", stiffness: 150, damping: 24 }}
              className="w-full max-w-5xl aspect-[16/10] rounded-2xl bg-zinc-950 flex flex-col justify-end relative overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[selected]?.image}
                alt={filtered[selected]?.title}
                fill
                className="object-contain"
                sizes="100vw"
                quality={95}
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 md:p-10 text-center z-10">
                <h2 className="text-white text-xl md:text-3xl font-black uppercase tracking-wide mb-2">{filtered[selected]?.title}</h2>
                <span className="px-4 py-1 bg-[var(--color-gold)] rounded-full text-black font-black text-xs uppercase tracking-widest">{filtered[selected]?.category}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}