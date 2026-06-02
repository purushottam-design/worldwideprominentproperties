"use client";

import { FileDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const brochures = [
  {
    name: "Sri Krishna Nagar Apartments",
    location: "Patna",
    type: "2 & 3 BHK Residential",
    href: "#",
  },
  {
    name: "Bihta Township",
    location: "Bihta (Maner), Patna",
    type: "Integrated Residential Township",
    href: "#",
  },
  {
    name: "Canal Road Residency",
    location: "West Boring Canal Road, Patna",
    type: "Premium Apartments",
    href: "#",
  },
];

export default function BrochuresPage() {
  return (
    <section className="min-h-[70vh] bg-[var(--color-cream)] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border border-[var(--color-gold)]/20 mb-5">
            <FileDown className="text-[var(--color-gold)]" size={18} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-dark)]">
              Project Brochures
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] heading-premium mb-3">
            Download Detailed Brochures
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore floor plans, amenities and specifications for each of our key projects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {brochures.map((b) => (
            <div
              key={b.name}
              className="bg-white rounded-3xl border border-white shadow-[0_16px_40px_rgba(0,0,0,0.03)] p-6 flex flex-col justify-between"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-gold-dark)] font-semibold mb-2">
                  {b.location}
                </p>
                <h2 className="text-lg font-bold text-[var(--color-dark)] heading-premium mb-1">
                  {b.name}
                </h2>
                <p className="text-xs text-gray-500 mb-4">{b.type}</p>
              </div>
              <Link
                href={b.href}
                className="inline-flex items-center gap-2 text-[var(--color-gold-dark)] text-sm font-semibold mt-2"
              >
                Download Brochure
                <ArrowRight size={16} />
              </Link>
              <p className="text-[10px] text-gray-400 mt-2">
                PDFs will be shared by our sales team. You can also request them via the contact page.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

