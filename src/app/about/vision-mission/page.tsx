"use client";

import { motion } from "framer-motion";
import { Target, Compass, Eye, Shield, Users, Sparkles } from "lucide-react";
import Image from "next/image";

// Reusing FadeIn from the components
import FadeIn from "../../../components/FadeIn";
import SectionHeader from "../../../components/SectionHeader";

export default function VisionMissionPage() {
  return (
    // FIXED: REMOVED pt-24 md:pt-32 so content initializes from the true top of the viewport
    <main className="min-h-screen bg-[var(--color-cream)] pb-20">
      
      {/* ── HERO BANNER SYSTEM (NAVBAR OVERLAPS HERE SEAMLESSLY) ── */}
      <section className="relative w-full py-44 lg:py-64 bg-zinc-950 text-white flex items-center justify-center">
        
        {/* ENHANCED HIGH-OPACITY IMAGE BLOCK FOR ABSOLUTE IMAGE SHARPNESS */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80 select-none">
          <Image
            src="/images/missionvision.png"
            alt="Corporate Vision"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Soft, Light-Weighted Transparency Gradient Mask */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/40 pointer-events-none" />
        
        {/* ADJUSTED: Added a bit more internal top padding (mt-16 lg:mt-24) to the content so it pushes safely below the navbar links */}
        <div className="max-w-7xl mx-auto relative z-20 text-center mt-16 lg:mt-24">
          <FadeIn>
            <div className="inline-flex items-center gap-3 glass-dark border-[var(--color-gold)]/30 px-6 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Compass className="text-[var(--color-gold)]" size={16} />
              <span className="text-[var(--color-gold)] text-sm font-bold tracking-[0.2em] uppercase">Our Core Purpose</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold heading-premium mb-8 drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
              Vision & <span className="gradient-text italic">Mission</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-white max-w-3xl mx-auto text-xl md:text-2xl font-bold tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,1)] leading-relaxed">
              To redefine luxury living through architectural brilliance, unyielding integrity, and a profound understanding of our clients&apos; highest aspirations.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative h-[600px] rounded-3xl overflow-hidden glass border-white/40 shadow-2xl">
                <Image
                  src="/images/ourvision.png"
                  alt="Our Vision"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-gold)]/20 to-transparent mix-blend-overlay" />
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-dark)] flex items-center justify-center shadow-lg">
                  <Eye size={36} className="text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-dark)] heading-premium">
                  Our <span className="text-[var(--color-gold-dark)] italic">Vision</span>
                </h2>
                <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-gold)] to-transparent" />
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  To be the absolute pinnacle of real estate excellence worldwide. We envision a future where WorldWide Prominent Properties is synonymous with unparalleled luxury, architectural innovation, and transformative community development. We aim to sculpt skylines and secure legacies, ensuring every property we touch becomes a landmark of prestige.
                </p>
                
                <ul className="space-y-4 pt-6">
                  {[
                    "Architectural Innovation & Sustainability",
                    "Global Prestige & Recognition",
                    "Transformative Community Impact"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-gray-800 font-medium">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-cream-dark)] flex items-center justify-center border border-[var(--color-gold)]/30">
                        <Sparkles size={14} className="text-[var(--color-gold-dark)]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-[var(--color-dark)] text-white relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_50%)] opacity-5 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader
            subtitle="The Execution"
            title="Our Mission"
            description="How we translate our grand vision into exceptional reality, every single day."
            light
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Target,
                title: "Excellence in Execution",
                desc: "We deliver flawless properties by adhering to the highest standards of construction, design, and project management. No detail is too small, no compromise is accepted."
              },
              {
                icon: Shield,
                title: "Unwavering Integrity",
                desc: "Trust is our foundation. We operate with absolute transparency, ethical practices, and a commitment to honoring every promise made to our clients and partners."
              },
              {
                icon: Users,
                title: "Client-Centric Legacy",
                desc: "We build more than homes; we build relationships. Our mission is to secure our clients' futures, ensuring their investments yield profound financial and emotional returns."
              }
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="glass-dark rounded-3xl p-10 h-full border border-white/10 hover:border-[var(--color-gold)]/50 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[var(--color-gold)]/10 to-transparent rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
                  
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[var(--color-gold)] transition-colors duration-500">
                    <item.icon size={28} className="text-[var(--color-gold)] group-hover:text-white transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 heading-premium">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}