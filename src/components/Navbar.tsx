"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
  Instagram,
  Youtube,
  Twitter,
  ArrowRight,
  Sparkles
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Who Are We", href: "/about" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
    ],
  },
  {
    name: "Properties",
    href: "/properties",
    dropdown: [
      { name: "Ongoing Projects", href: "/properties/ongoing" },
      { name: "Upcoming Projects", href: "/properties/upcoming" },
    ],
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Custom action handler jab user "Book Now" par click karega
  const handleBookingTrigger = () => {
    console.log("Booking system sequence initialized.");
    // Yahan aap apna registration modal trigger ya sliding side-panel state call kar sakte hain
  };

  return (
    <>
      {/* ── TOP BAR (EXECUTIVE UTILITIES SECTION) ── */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block bg-zinc-950 text-zinc-400 text-[11px] font-medium uppercase tracking-[0.15em] border-b border-zinc-900"
      >
        <div className="max-w-7xl mx-auto px-8 py-2.5 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-5 border-r border-zinc-800 pr-5">
              <a
                href="tel:+919031630070"
                className="flex items-center gap-2 hover:text-[#fcaf17] transition-colors duration-300"
              >
                <Phone size={11} className="text-[#fcaf17]" />
                <span className="tabular-nums">+91 9031630070</span>
              </a>
              <a
                href="tel:+919031630071"
                className="flex items-center gap-2 hover:text-[#fcaf17] transition-colors duration-300"
              >
                <span className="tabular-nums">0071</span>
              </a>
              <a
                href="tel:+919031630072"
                className="flex items-center gap-2 hover:text-[#fcaf17] transition-colors duration-300"
              >
                <span className="tabular-nums">0072</span>
              </a>
            </div>
            <a
              href="mailto:info@worldwideprominentproperties.com"
              className="flex items-center gap-2 hover:text-[#fcaf17] transition-colors duration-300"
            >
              <Mail size={11} className="text-[#fcaf17]" />
              <span className="lowercase tracking-wider">info@worldwideprominentproperties.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 border-l border-zinc-800 pl-5">
            <a
              href="https://www.instagram.com/official_wpp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fcaf17] transition-colors duration-300 p-1"
            >
              <Instagram size={13} />
            </a>
            <a
              href="https://www.youtube.com/@Official_WPP"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fcaf17] transition-colors duration-300 p-1"
            >
              <Youtube size={13} />
            </a>
            <a
              href="https://x.com/official_wpp"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fcaf17] transition-colors duration-300 p-1"
            >
              <Twitter size={13} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ── MAIN FLOATING NAV SYSTEM ── */}
      <div 
        className={`fixed w-full z-50 px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-out ${
          scrolled ? 'top-3' : 'top-6 lg:top-12'
        }`}
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
          className={`mx-auto transition-all duration-500 rounded-2xl border ${
            scrolled
              ? "max-w-6xl bg-zinc-950/90 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-zinc-800/80"
              : "max-w-7xl bg-black/40 backdrop-blur-md shadow-lg border-white/10"
          }`}
        >
          <div className="px-5 py-3 sm:px-6 flex justify-between items-center">
            
            {/* BRAND LOGO DESIGN SECTOR */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-zinc-900/50 rounded-xl p-1.5 border border-white/5 group-hover:border-[#fcaf17]/30 transition-colors duration-500">
                <Image
                  src="/logo.png"
                  alt="WorldWide Prominent Properties Logo"
                  fill
                  className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm sm:text-base font-black tracking-[0.08em] uppercase text-white group-hover:text-[#fcaf17] transition-colors duration-300">
                  Worldwide Prominent
                </h1>
                <p className="text-[9px] text-[#fcaf17] font-black tracking-[0.38em] uppercase mt-0.5 opacity-90">
                  Properties
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV ANCHORS */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative px-1 py-2"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1.5 px-4 py-2 text-xs font-black uppercase tracking-widest transition-all duration-300 rounded-lg ${
                      activeDropdown === link.name ? 'text-[#fcaf17]' : 'text-zinc-200 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {link.dropdown && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-300 opacity-70 ${
                          activeDropdown === link.name ? "rotate-180 text-[#fcaf17]" : ""
                        }`}
                      />
                    )}
                  </Link>

                  {/* PREMIUM DROPDOWN MATRIX */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 bg-zinc-950 border border-zinc-800 rounded-xl shadow-[0_30px_70px_rgba(0,0,0,0.8)] py-2 min-w-[220px] overflow-hidden"
                      >
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#fcaf17] to-amber-500" />
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between px-5 py-3 text-[11px] font-bold tracking-wider text-zinc-400 uppercase hover:text-white hover:bg-zinc-900/60 transition-all duration-200"
                          >
                            <span>{item.name}</span>
                            <ArrowRight size={10} className="opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* ACTION TRIGGER CTA - EXT LINK REMOVED */}
              <button
                onClick={handleBookingTrigger}
                className="group relative ml-4 px-5 py-2.5 bg-white text-black text-xs font-black uppercase tracking-widest rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[#fcaf17]/10 hover:scale-[1.03] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5 transition-colors duration-500 group-hover:text-black">
                  <Sparkles size={12} className="text-amber-600 group-hover:text-amber-800" />
                  Book Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#fcaf17] to-amber-400 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
              </button>
            </div>

            {/* MOBILE INTERACTIVE TOGGLE */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/30 text-white hover:bg-zinc-900/80 transition-colors"
              aria-label="Toggle Navigation Control"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* MOBILE RESPONSIVE EXPANSION ACCORDION */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden bg-zinc-950 border-t border-zinc-900 overflow-hidden rounded-b-2xl shadow-2xl"
              >
                <div className="px-6 py-5 space-y-2">
                  {navLinks.map((link) => (
                    <div key={link.name} className="border-b border-zinc-900/60 last:border-0 pb-1 last:pb-0">
                      <Link
                        href={link.href}
                        onClick={() => {
                          if (!link.dropdown) setMobileOpen(false);
                        }}
                        className="flex items-center justify-between py-3 text-zinc-200 text-xs font-black uppercase tracking-widest hover:text-[#fcaf17] transition-colors"
                      >
                        <span>{link.name}</span>
                        {link.dropdown && <ChevronDown size={14} className="opacity-60" />}
                      </Link>
                      {link.dropdown && (
                        <div className="pl-4 mb-2 mt-1 space-y-1 bg-zinc-900/30 border-l border-zinc-800 rounded-lg p-2">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2.5 text-[11px] font-bold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* MOBILE ACTION TRIGGER - EXT LINK REMOVED */}
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        handleBookingTrigger();
                      }}
                      className="flex justify-center items-center gap-2 w-full px-6 py-3.5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-xl text-center hover:bg-[#fcaf17] transition-colors shadow-lg cursor-pointer"
                    >
                      Book Free Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </>
  );
}