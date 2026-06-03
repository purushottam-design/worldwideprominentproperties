"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar, ArrowRight, Shield, Zap, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";

const upcomingProjects = [
  {
    id: 1,
    title: "Olympian Heights",
    location: "Cyber City, Gurgaon",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    launchDate: "Q4 2024",
    price: "From ₹8.5 Cr",
    features: ["Smart Home Gen 4", "Rooftop Helipad", "Private Pools"],
    status: "RERA Approved",
    description: "An architectural marvel redefining the skyline. Olympian Heights offers bespoke luxury with panoramic city views and ultra-modern amenities."
  },
  {
    id: 2,
    title: "The Golden Crest",
    location: "Banjara Hills, Hyderabad",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000",
    launchDate: "Q1 2025",
    price: "From ₹12 Cr",
    features: ["Biophilic Design", "Exclusive Clubhouse", "Concierge"],
    status: "Pre-Launch",
    description: "A sanctuary of peace in the heart of the city. The Golden Crest seamlessly blends nature with opulent living spaces."
  },
  {
    id: 3,
    title: "Marina Bay Estates",
    location: "Worli Sea Face, Mumbai",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    launchDate: "Q2 2025",
    price: "On Request",
    features: ["Ocean Front", "Private Marina", "Automated Parking"],
    status: "Coming Soon",
    description: "Experience the pinnacle of waterfront living. Marina Bay Estates offers unhindered ocean views and world-class luxury."
  }
];

export default function UpcomingPropertiesPage() {
  return (
    // FIXED: Removed top padding from main tag to align header seamlessly from absolute top zero viewport
    <main className="min-h-screen bg-[var(--color-dark)] pb-20 text-white">
      
      {/* ── HERO BANNER MODIFIED TO TOTAL FULL SCREEN 100vh ── */}
      <section className="relative h-screen w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
        
        {/* HIGH-OPACITY IMAGE BLOCK FOR ARCHITECTURAL VISIBILITY */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-80 select-none">
          <Image
            src="/images/upcomming.png" // Shared global luxury real estate asset look
            alt="WorldWide Prominent Properties Upcoming Matrix Backdrop"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Cinematic Premium Overlay Shielding */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-black/40 pointer-events-none" />

        {/* Dynamic Spinning Accents */}
        <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }} 
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[var(--color-gold)]/10" 
          />
        </div>

        {/* Header Content Array - Perfectly Symmetrical Over 100vh Viewport */}
        <div className="max-w-7xl mx-auto px-6 relative z-20 text-center mt-16">
          <SectionHeader
            subtitle="Future Landmarks"
            title="Upcoming Projects"
            description="Discover our visionary developments set to redefine luxury living across prime locations. Be the first to secure your legacy."
            light
          />
        </div>

        {/* Infinite Bounce Downward Indicator Layer */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-60">
          <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase font-black">Explore Future Tech</span>
          <div className="w-5 h-8 border-2 border-zinc-500 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[var(--color-gold)] rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Fixed Layout Background Graphic Element for Lower Page Context */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_60%)] opacity-[0.03] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_60%)] opacity-[0.03] translate-y-1/3 -translate-x-1/3" />
      </div>

      {/* Projects List Section */}
      <section className="relative px-6 z-10 pb-24 pt-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto space-y-24">
          {upcomingProjects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-dark border border-white/10 relative group">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent opacity-80" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-6 left-6 glass px-4 py-2 rounded-full border border-[var(--color-gold)]/30 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
                      <span className="text-white text-xs font-bold tracking-wider uppercase">{project.status}</span>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className={`absolute -bottom-6 ${index % 2 !== 0 ? '-left-6' : '-right-6'} w-32 h-32 bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_70%)] opacity-20 blur-xl`} />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[var(--color-gold)] font-medium tracking-wide">
                      <MapPin size={18} />
                      <span>{project.location}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold heading-premium text-white">
                      {project.title}
                    </h2>
                    <p className="text-xl text-[var(--color-gold-light)] font-light">
                      {project.price}
                    </p>
                  </div>

                  <p className="text-gray-400 text-lg leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Launch</p>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Calendar size={16} className="text-[var(--color-gold)]" />
                        <span>{project.launchDate}</span>
                      </div>
                    </div>
                    {project.features.map((feature, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Highlight {i+1}</p>
                        <div className="flex items-center gap-2 text-gray-300">
                          <Sparkles size={16} className="text-[var(--color-gold)]" />
                          <span>{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <button className="group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-dark)] text-white font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      <span className="relative z-10 flex items-center gap-2">
                        Register Interest <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold-light)] to-[var(--color-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-24 px-6 border-t border-white/10 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] mb-8">
              <Shield size={40} />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold heading-premium mb-6">
              Early Access Privilege
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-400 font-light mb-10">
              Join our exclusive inner circle to receive priority information, pre-launch pricing, and private preview invitations.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Link href="/contact" className="inline-block px-10 py-4 glass-dark rounded-full border border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10 transition-colors text-[var(--color-gold)] font-bold tracking-widest uppercase text-sm">
              Join Waitlist
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}