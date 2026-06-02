"use client";

import { HardHat, MapPin, Clock } from "lucide-react";

const updates = [
  {
    project: "Sri Krishna Nagar Apartments",
    location: "Patna",
    stage: "Superstructure Completed",
    eta: "Possession expected: Q4 2026",
  },
  {
    project: "Bihta Township",
    location: "Bihta (Maner), Patna",
    stage: "Foundation & Podium Levels",
    eta: "Phase 1 handover: Mid 2027",
  },
  {
    project: "Canal Road Residency",
    location: "West Boring Canal Road, Patna",
    stage: "Pre-launch & Approvals",
    eta: "Detailed timeline to be announced",
  },
];

export default function ConstructionUpdatesPage() {
  return (
    <section className="min-h-[70vh] bg-[var(--color-cream)] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white shadow-sm border border-[var(--color-gold)]/20 mb-5">
            <HardHat className="text-[var(--color-gold)]" size={18} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-dark)]">
              Construction Updates
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-dark)] heading-premium mb-3">
            Track Project Progress
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A quick snapshot of current construction status across our flagship developments.
          </p>
        </div>

        <div className="space-y-4">
          {updates.map((u) => (
            <div
              key={u.project}
              className="bg-white rounded-3xl border border-white shadow-[0_16px_40px_rgba(0,0,0,0.03)] px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-gold-dark)] font-semibold mb-1">
                  {u.project}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <MapPin size={14} className="text-[var(--color-gold)]" />
                  <span>{u.location}</span>
                </div>
                <p className="text-sm font-medium text-[var(--color-dark)]">
                  {u.stage}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Clock size={14} className="text-[var(--color-gold)]" />
                <span>{u.eta}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[11px] text-gray-500 text-center">
          Note: Timelines are indicative and may be revised as per statutory approvals and on-ground conditions.
        </p>
      </div>
    </section>
  );
}

