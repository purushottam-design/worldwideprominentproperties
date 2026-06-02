"use client";

import { motion } from "framer-motion";
import { Target, Compass, Eye, Shield, Users, Sparkles } from "lucide-react";
import Image from "next/image";

// Reusing FadeIn from the components (or a local implementation if needed, but going with the provided one from page.tsx style)
import FadeIn from "../../../components/FadeIn";
import SectionHeader from "../../../components/SectionHeader";

export default function VisionMissionPage() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden bg-[var(--color-dark)] text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
            alt="Corporate Vision"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-[var(--color-dark)]/80 to-[var(--color-dark)]/60" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-3 glass-dark border-[var(--color-gold)]/30 px-6 py-2 rounded-full mb-8 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
              <Compass className="text-[var(--color-gold)]" size={16} />
              <span className="text-[var(--color-gold)] text-sm font-bold tracking-[0.2em] uppercase">Our Core Purpose</span>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold heading-premium mb-8 drop-shadow-2xl">
              Vision & <span className="gradient-text italic">Mission</span>
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
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
