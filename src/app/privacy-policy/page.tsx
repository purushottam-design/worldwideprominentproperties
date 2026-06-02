import FadeIn from "@/components/FadeIn";
import SectionHeader from "@/components/SectionHeader";
import { ShieldAlert, Lock, Eye, Server } from "lucide-react";

export default function PrivacyPolicyPage() {
  const lastUpdated = "March 12, 2026";

  const policies = [
    {
      title: "Information Collection",
      icon: Eye,
      content:
        "WorldWide Prominent Properties (WWPP) respects your privacy. We collect personal information such as your name, email address, phone number, and preferences only when voluntarily submitted by our visitors through inquiry forms or registration processes.",
    },
    {
      title: "Use of Information",
      icon: Server,
      content:
        "The information you provide is used strictly to fulfill your specific requests, manage your account, provide tailored property recommendations, and communicate important updates regarding our projects and services.",
    },
    {
      title: "Data Protection",
      icon: ShieldAlert,
      content:
        "We implement a variety of premium security measures to maintain the safety of your personal information. Our servers are secured and encrypted, and access to client data is strictly limited to authorized personnel only.",
    },
    {
      title: "Information Sharing",
      icon: Lock,
      content:
        "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-cream)] pt-24 md:pt-32 pb-20">
      {/* Header */}
      <section className="bg-[var(--color-dark)] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-gold)_0%,transparent_50%)] opacity-5" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold heading-premium mb-6">
              Privacy <span className="gradient-text italic">Policy</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-gray-400 font-light">Last Updated: {lastUpdated}</p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader
            subtitle="Our Commitment"
            title="Protecting Your Privacy"
            description="At World Wide Prominent Properties, safeguarding the personal information of our distinguished clients is a paramount priority."
          />

          <div className="space-y-12">
            {policies.map((policy, index) => (
              <FadeIn key={policy.title} delay={index * 0.1}>
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#FCFAF8] border border-[var(--color-gold)]/20 flex items-center justify-center">
                    <policy.icon className="text-[var(--color-gold-dark)]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--color-dark)] mb-4">{policy.title}</h3>
                    <p className="text-gray-600 font-light leading-relaxed">{policy.content}</p>
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.4}>
              <div className="bg-[var(--color-dark)] text-white p-10 rounded-3xl mt-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_70%)] opacity-10 -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-2xl font-bold mb-4 heading-premium">Contacting Us</h3>
                <p className="text-gray-400 font-light leading-relaxed mb-6">
                  If there are any questions regarding this privacy policy, you may contact our compliance officer using the information below.
                </p>
                <div className="text-[var(--color-gold-light)] font-medium">
                  <p>WorldWide Prominent Properties</p>
                  <p>Legal & Compliance Department</p>
                  <p>legal@wwpp.in</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
