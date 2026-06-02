"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Building2,
  Trophy,
  Users,
  Clock,
  CheckCircle2,
  Shield,
  Gem,
  Target,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const milestones = [
  { year: "2003", event: "Company Founded", desc: "Started with a vision to transform real estate in Bihar" },
  { year: "2008", event: "First Major Project", desc: "Launched our first residential township in Patna" },
  { year: "2013", event: "500+ Happy Families", desc: "Reached the milestone of serving 500 families" },
  { year: "2018", event: "Expansion Phase", desc: "Expanded operations across Bihar and neighboring states" },
  { year: "2024", event: "New Era", desc: "Launching next-generation smart home projects" },
];

const team = [
  { name: "Managing Director", role: "Visionary Leader", icon: Star },
  { name: "Chief Architect", role: "Design Excellence", icon: Gem },
  { name: "Project Head", role: "Timely Delivery", icon: Target },
  { name: "Sales Director", role: "Customer First", icon: Users },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-dark-light)] to-[var(--color-dark-lighter)] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[var(--color-gold)]/10"
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[var(--color-gold)]/20 rounded-full"
              style={{ top: `${20 + i * 15}%`, left: `${10 + i * 18}%` }}
              animate={{ y: [-20, 20, -20], opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            />
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 glass rounded-full text-[var(--color-gold)] text-sm font-semibold mb-6 tracking-wider"
          >
            ✦ ABOUT US
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4"
          >
            Who <span className="gradient-text">Are We</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Building dreams, delivering excellence since 2003
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual with real image */}
            <FadeIn>
              <div className="relative max-w-lg mx-auto">
                <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/aaaa.webp"
                    alt="WorldWide Prominent Properties team discussing a project"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                </div>

                {/* Floating stats card */}
                <motion.div
                  animate={{ y: [-12, 12, -12] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-8 -right-4 md:-right-8 bg-white rounded-2xl px-6 py-5 shadow-[0_20px_40px_rgba(0,0,0,0.18)] border border-[var(--color-gold)]/20 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center text-white shadow-lg">
                    <Building2 size={26} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)]">
                      21<span className="text-[var(--color-gold)]">+</span>
                    </p>
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500">
                      Years of excellence
                    </p>
                  </div>
                </motion.div>

                {/* Award badge */}
                <motion.div
                  animate={{ y: [8, -8, 8] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 left-4 md:left-10 bg-[var(--color-dark)] text-white rounded-2xl px-5 py-3 shadow-xl border border-[var(--color-gold)]/40 flex items-center gap-3"
                >
                  <Trophy size={22} className="text-[var(--color-gold)]" />
                  <div className="text-xs">
                    <p className="font-semibold tracking-[0.18em] uppercase">Award Winning</p>
                    <p className="text-[10px] text-gray-300">Trusted by 500+ families</p>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <div>
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)] mb-6">
                  Building Dreams, <span className="gradient-text">Delivering Excellence</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  WorldWide Prominent Properties has established itself as one of the key players in the real estate market. With over 21 years of experience, we have been consistently delivering world-class residential and commercial projects in Patna and across Bihar.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our commitment to quality, transparency, and timely delivery has earned us the trust of over 500 happy families. We believe in building not just homes, but communities where families thrive. Every project is a testament to our unwavering dedication to excellence.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, text: "Fair Practices" },
                    { icon: Clock, text: "Timely Delivery" },
                    { icon: CheckCircle2, text: "Quality Assured" },
                    { icon: Users, text: "Customer First" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 p-3 bg-[var(--color-cream)] rounded-xl">
                      <item.icon size={20} className="text-[var(--color-gold)]" />
                      <span className="text-sm font-medium text-[var(--color-dark)]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gradient-to-b from-[var(--color-cream)] to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-semibold rounded-full mb-4 tracking-wider uppercase">
                Our Journey
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)]">
                Milestones of Growth
              </h2>
            </FadeIn>
          </div>
          <div className="space-y-8">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {m.year}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)]">{m.event}</h3>
                    <p className="text-gray-600 text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn><span className="inline-block px-4 py-1.5 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-semibold rounded-full mb-4 tracking-wider uppercase">Our Team</span></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)]">Leadership Team</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="bg-[var(--color-cream)] rounded-2xl p-8 text-center group">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <t.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)]">{t.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{t.role}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-dark-lighter)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] mb-6">
              Want to Know More?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-gray-400 mb-8 text-lg">Get in touch with us to learn more about our company and projects.</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[var(--color-gold)]/25 transition-all duration-300 hover:scale-105">
              Contact Us <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
