"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, ArrowRight, Star, Heart, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

const benefits = [
  { icon: Star, title: "Premium Work Environment", desc: "Work in state-of-the-art corporate offices equipped with modern amenities." },
  { icon: Heart, title: "Health & Well-being", desc: "Comprehensive luxury health coverage and wellness programs for you and your family." },
  { icon: Zap, title: "Accelerated Growth", desc: "Fast-tracked career progression based purely on merit and excellence." },
  { icon: ShieldCheck, title: "Stability & Trust", desc: "Join an industry leader with a solid foundation and a reputation for integrity." },
];

const openPositions = [
  {
    id: "VP-SALES",
    title: "Vice President - Sales & Strategy",
    department: "Sales & Marketing",
    location: "Patna HQ",
    type: "Full-Time",
  },
  {
    id: "SR-ARCHITECT",
    title: "Senior Lead Architect",
    department: "Design & Development",
    location: "Gurgaon",
    type: "Full-Time",
  },
  {
    id: "LUX-CONSULTANT",
    title: "Luxury Property Consultant",
    department: "Client Relations",
    location: "Mumbai / Hyderabad",
    type: "Full-Time",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32 pb-20">
      {/* Hero */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-[var(--color-dark)] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
            alt="Corporate Culture"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/90 to-[var(--color-dark)]/70" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 glass-dark border-[var(--color-gold)]/30 px-6 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Briefcase className="text-[var(--color-gold)]" size={16} />
              <span className="text-[var(--color-gold)] text-sm font-bold tracking-[0.2em] uppercase">Join The Elite</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold heading-premium mb-8 drop-shadow-2xl">
              Build Your <span className="gradient-text italic">Legacy</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10">
              At WorldWide Prominent Properties, we don&apos;t just build landmarks; we build unparalleled careers. Join a team of visionaries shaping the future of luxury real estate.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            subtitle="Why World Wide Prominent Properties"
            title="The World Wide Prominent Properties Advantage"
            description="We believe that excellence in our projects starts with excellence in our people. We provide an environment where top talent thrives."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 hover:-translate-y-2 transition-transform duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#FCFAF8] border border-[var(--color-gold)]/20 flex items-center justify-center mb-6">
                    <benefit.icon className="text-[var(--color-gold-dark)]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{benefit.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-[var(--color-dark)] text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-gold)_0%,transparent_100%)] opacity-[0.03]" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <SectionHeader
            subtitle="Current Openings"
            title="Join the Movement"
            description="Explore our current opportunities and find where your expertise aligns with our vision."
            light
          />
          
          <div className="space-y-6">
            {openPositions.map((job, i) => (
              <FadeIn key={job.id} delay={i * 0.1}>
                <div className="group glass-dark border border-white/10 rounded-2xl p-8 hover:border-[var(--color-gold)]/50 transition-colors duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer">
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[var(--color-gold)] text-xs font-bold tracking-widest uppercase">{job.department}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-500" />
                      <span className="text-gray-400 text-xs uppercase tracking-wider">{job.id}</span>
                    </div>
                    <h3 className="text-2xl font-bold heading-premium group-hover:text-[var(--color-gold-light)] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm pt-2">
                      <div className="flex items-center gap-1.5 border border-white/10 rounded-full px-3 py-1">
                        <MapPin size={14} className="text-[var(--color-gold)]" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1.5 border border-white/10 rounded-full px-3 py-1">
                        <Briefcase size={14} className="text-[var(--color-gold)]" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white transition-all font-semibold"
                    >
                      Apply Now <ArrowRight size={16} />
                    </Link>
                  </div>
                  
                </div>
              </FadeIn>
            ))}
          </div>
          
          <FadeIn delay={0.4}>
            <div className="mt-16 text-center border-t border-white/10 pt-12">
              <p className="text-gray-400 mb-6 font-light">
                Don&apos;t see a role that fits? We are always looking for exceptional talent.
              </p>
              <Link href="/contact" className="text-[var(--color-gold)] font-bold tracking-wider uppercase hover:text-white transition-colors underline-offset-8 underline">
                Send us your resume
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
