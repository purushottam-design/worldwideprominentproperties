"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ArrowRight, Clock, Sparkles } from "lucide-react";

export default function PropertiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-dark-light)] to-[var(--color-dark-lighter)] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[var(--color-gold)]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 glass rounded-full text-[var(--color-gold)] text-sm font-semibold mb-6 tracking-wider">✦ OUR PORTFOLIO</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
            Our <span className="gradient-text">Properties</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-400 max-w-2xl mx-auto text-lg">Discover your perfect home from our curated collection of premium projects</motion.p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Link href="/properties/ongoing" className="block group">
                <div className="bg-gradient-to-br from-[var(--color-dark)] to-[var(--color-dark-lighter)] rounded-3xl p-10 h-80 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-6 right-6">
                    <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                      <Building2 size={80} className="text-[var(--color-gold)]/20" />
                    </motion.div>
                  </div>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-4">ACTIVE</span>
                    <h2 className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)] mb-2">Ongoing Projects</h2>
                    <p className="text-gray-400">Explore our currently active developments</p>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-gold)] font-semibold group-hover:gap-4 transition-all duration-300 relative z-10">
                    View Projects <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <Link href="/properties/upcoming" className="block group">
                <div className="bg-gradient-to-br from-[var(--color-gold)]/10 to-[var(--color-cream-dark)] rounded-3xl p-10 h-80 flex flex-col justify-between relative overflow-hidden border border-[var(--color-gold)]/20">
                  <div className="absolute top-6 right-6">
                    <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
                      <Sparkles size={80} className="text-[var(--color-gold)]/20" />
                    </motion.div>
                  </div>
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-[var(--color-gold)] text-white text-xs font-bold rounded-full mb-4">
                      <Clock size={12} /> COMING SOON
                    </span>
                    <h2 className="text-3xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)] mb-2">Upcoming Projects</h2>
                    <p className="text-gray-600">Preview our exciting new developments</p>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-gold)] font-semibold group-hover:gap-4 transition-all duration-300 relative z-10">
                    Explore <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
