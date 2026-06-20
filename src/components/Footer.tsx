"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
  ArrowUp,
  Facebook,
  Twitter,
} from "lucide-react";

const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <path
      d="M12 6.5c-2.7 0-4.5 1.9-4.5 4.3 0 1.7.9 2.9 2.3 3.4.1 0 .2 0 .2-.1.1-.1.1-.3.2-.4 0-.1 0-.2-.1-.3-.2-.6-.3-1.4-.1-2.1.2-.8.8-1.4 1.7-1.4 1 0 1.6.7 1.6 1.7 0 1.2-.6 2-1.3 2-.4 0-.7-.3-.6-.8.1-.4.2-.9.3-1.3.1-.3.1-.6 0-.8-.1-.3-.3-.5-.6-.5-.5 0-.9.5-1 1.2-.1.5 0 .8.1 1.2l-.5 2.1c-.1.4-.1.9-.1 1.3v.1c0 .1.1.1.1.1.1 0 .1 0 .2-.1.5-.7.9-1.5 1.1-2.3.1.1.3.1.5.1 1.7 0 2.9-1.4 2.9-3.4 0-1.8-1.3-3.1-3.1-3.1Z"
      fill="#fff"
    />
  </svg>
);

const footerLinks = {
  quickLinks: [
    { name: "Ongoing Properties", href: "/properties/ongoing" },
    { name: "Upcoming Properties", href: "/properties/upcoming" },
    { name: "Gallery", href: "/gallery" },
    { name: "Career", href: "/contact" },
    { name: "Enquiry", href: "/contact" },
    { name: "Contact Us", href: "/contact" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Vision & Mission", href: "/about/vision-mission" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "#" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[var(--color-dark)] text-white overflow-hidden pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-[2px]" />
      
      <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_60%)] opacity-5 blend-screen rounded-full" />
      <div className="absolute -bottom-[500px] -left-[500px] w-[1000px] h-[1000px] bg-[radial-gradient(circle,var(--color-gold)_0%,transparent_60%)] opacity-5 blend-screen rounded-full" />

      <div className="max-w-7xl mx-auto px-6 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:pr-8"
          >
            <div className=" px-6 py-4 rounded-2xl inline-block mb-8 shadow-2xl relative group pb-4">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" /> */}
              <div className="relative w-40 h-14 md:w-48 md:h-16">
                <Image
                  src="/logo.png"
                  alt="WorldWide Prominent Properties"
                  fill
                  className="object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
              Building excellence since 2003. We are committed to delivering
              world-class real estate solutions with absolute integrity and innovation.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Youtube, href: "https://www.youtube.com/@Official_WPP" },
                // { icon: PinterestIcon, href: "https://www.pinterest.com/official_wpp/" },
                { icon: Instagram, href: "https://www.instagram.com/official_wpp/" },
                { icon: Facebook, href: "https://www.facebook.com/Officialwpp" },
                { icon: Twitter, href: "https://x.com/official_wpp" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-8 heading-premium text-white flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
              Navigation
            </h3>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-3 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[var(--color-gold)] group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block font-light tracking-wide">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-8 heading-premium text-white flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
              Corporate
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-3 group w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[var(--color-gold)] group-hover:scale-150 group-hover:shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-300" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block font-light tracking-wide">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-8 heading-premium text-white flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
              Engage
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-gold)] transition-colors duration-300">
                  <MapPin size={18} className="text-[var(--color-gold)]" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed font-light mt-1">
                101 City Plaza, Kidwaipuri,
                Patna - 800001, Bihar, India
                </p>
              </div>
              
              <div className="w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent" />
              
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+919031630070"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors text-sm group w-fit"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <Phone size={18} className="text-[var(--color-gold)] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-light tracking-wide">+91 90316 30070</span>
                </a>
                
                <a
                  href="mailto:info@worldwideprominentproperties.com"
                  className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors text-sm group w-fit"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                    <Mail size={18} className="text-[var(--color-gold)] group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-light truncate">info@worldwideprominentproperties.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm font-light tracking-wide">
            © {new Date().getFullYear()} <span className="text-white font-medium">WorldWide Prominent Properties</span>. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group hover:bg-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all duration-500 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
}
