"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, BedDouble, ChevronRight, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const ongoingProjects = [
  {
    name: "Sri Krishna Nagar",
    location: "Patna",
    type: "2 & 3 BHK Apartments",
    price: "Starting ₹45 Lacs",
    features: ["Gated Community", "24/7 Security", "Landscaped Gardens", "Children's Play Area", "Covered Parking", "Power Backup"],
    status: "Under Construction",
    completion: "December 2025",
    image: "/images/property-sri-krishna.png",
  },
  {
    name: "Bihta Residential Township",
    location: "Bihta (Maner), Patna",
    type: "2 & 3 BHK + Plots",
    price: "Starting ₹35 Lacs",
    features: ["Wide Roads", "Community Center", "Shopping Complex", "Temple", "Park & Jogging Track", "Water Treatment Plant"],
    status: "Phase 2 Ongoing",
    completion: "March 2026",
    image: "/images/property-bihta.png",
  },
  {
    name: "West Boring Canal Residency",
    location: "West Boring Canal Road, Patna",
    type: "2 & 3 BHK Apartments",
    price: "Starting ₹55 Lacs",
    features: ["Premium Location", "Modern Architecture", "Rooftop Garden", "Gym & Swimming Pool", "Smart Home Features", "Earthquake Resistant"],
    status: "Under Construction",
    completion: "June 2026",
    image: "/images/property-canal-road.png",
  },
];

export default function OngoingProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-dark-light)] to-[var(--color-dark-lighter)] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[var(--color-gold)]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 glass rounded-full text-[var(--color-gold)] text-sm font-semibold mb-6 tracking-wider">✦ PROPERTIES</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
            Ongoing <span className="gradient-text">Projects</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-400 max-w-2xl mx-auto text-lg">Explore our current projects under development</motion.p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {ongoingProjects.map((project, i) => (
              <FadeIn key={project.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Image */}
                    <div className="lg:col-span-2 h-64 lg:h-auto relative overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">{project.status}</span>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h2 className="text-2xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)]">{project.name}</h2>
                          <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                            <MapPin size={14} className="text-[var(--color-gold)]" />
                            {project.location}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[var(--color-gold)]">{project.price}</p>
                          <p className="text-xs text-gray-500 mt-1">{project.type}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                        <BedDouble size={16} className="text-[var(--color-gold)]" />
                        <span>{project.type}</span>
                        <span className="text-gray-300 mx-2">|</span>
                        <span>Est. Completion: {project.completion}</span>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        {project.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={14} className="text-green-500 flex-shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <Link href="/contact" className="px-6 py-2.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-white text-sm font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                          Enquire Now <ArrowRight size={16} />
                        </Link>
                        <button className="px-6 py-2.5 border-2 border-[var(--color-gold)] text-[var(--color-gold)] text-sm font-semibold rounded-full hover:bg-[var(--color-gold)] hover:text-white transition-all duration-300">
                          Download Brochure
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--color-dark)] to-[var(--color-dark-lighter)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn><h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-playfair)] mb-6">Interested in Our Projects?</h2></FadeIn>
          <FadeIn delay={0.1}><p className="text-gray-400 mb-8 text-lg">Schedule a site visit today and explore your dream home in person.</p></FadeIn>
          <FadeIn delay={0.2}>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[var(--color-gold)]/25 transition-all duration-300 hover:scale-105">
              Schedule a Visit <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
