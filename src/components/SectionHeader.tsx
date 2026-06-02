"use client";

import FadeIn from "./FadeIn";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description: string;
  light?: boolean;
}

export default function SectionHeader({ subtitle, title, description, light }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20 relative">
      <FadeIn>
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-4 ${
            light
              ? "glass text-[var(--color-gold)] border border-[var(--color-gold)]/20 shadow-[0_0_15px_rgba(212,175,55,0.15)]"
              : "bg-[var(--color-gold)]/10 text-[var(--color-gold)]"
          }`}
        >
          {subtitle}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 heading-premium drop-shadow-md ${
            light ? "text-white" : "text-[var(--color-dark)]"
          }`}
        >
          {title}
        </h2>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className={`text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-600"}`}>
          {description}
        </p>
      </FadeIn>
    </div>
  );
}
