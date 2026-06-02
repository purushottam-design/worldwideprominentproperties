"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const contactInfo = [
  { icon: Phone, label: "Phone", values: ["+91 9031630070", "+91 9031630071", "+91 9031630072"] },
  { icon: Mail, label: "Email", values: ["info@worldwideprominentproperties.com"] },
  { icon: MapPin, label: "Address", values: ["Thakur Parsad Community Hall, Near Axis Bank ATM, B-10 Kidwaipuri, Patna, Bihar 800001"] },
  { icon: Clock, label: "Working Hours", values: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"] },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-dark-light)] to-[var(--color-dark-lighter)] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: "linear" }} className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-[var(--color-gold)]/10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 glass rounded-full text-[var(--color-gold)] text-sm font-semibold mb-6 tracking-wider">✦ REACH OUT</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
            Contact <span className="gradient-text">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-gray-400 max-w-2xl mx-auto text-lg">We&apos;d love to hear from you. Get in touch today!</motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <h2 className="text-2xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)] mb-8">Get In Touch</h2>
              </FadeIn>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <FadeIn key={info.label} delay={i * 0.1}>
                    <div className="flex gap-4 items-start p-5 bg-[var(--color-cream)] rounded-2xl hover:shadow-md transition-shadow duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-gold-light)] flex items-center justify-center flex-shrink-0 shadow-md">
                        <info.icon size={22} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-dark)] text-sm mb-1">{info.label}</h3>
                        {info.values.map((v) => (
                          <p key={v} className="text-gray-600 text-sm">{v}</p>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Map */}
              <FadeIn delay={0.4}>
                <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.8!2d85.1!3d25.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDM2JzAuMCJOIDg1wrAwNicwLjAiRQ!5e0!3m2!1sen!2sin!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <FadeIn>
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
                  <h2 className="text-2xl font-bold text-[var(--color-dark)] font-[family-name:var(--font-playfair)] mb-2">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <CheckCircle2 size={64} className="mx-auto text-green-500 mb-4" />
                      <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2">Thank You!</h3>
                      <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                          <input
                            type="email"
                            required
                            placeholder="Enter Your Email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all text-sm"
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all text-sm bg-white"
                          >
                            <option value="">Select Subject</option>
                            <option value="property">Property Enquiry</option>
                            <option value="visit">Schedule Visit</option>
                            <option value="career">Career</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                        <textarea
                          rows={5}
                          required
                          placeholder="Tell us about your requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-gold)] focus:border-transparent outline-none transition-all resize-none text-sm"
                        />
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[var(--color-gold)]/25 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send size={18} />
                        Send Message
                      </motion.button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
