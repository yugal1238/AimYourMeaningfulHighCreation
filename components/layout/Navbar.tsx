"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Financial Planning", href: "/financial-planning" },
  { name: "Calculators", href: "/calculators" },
  { name: "Achievements", href: "/achievements" },
  { name: "Resources", href: "/resources" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0B1528]/95 backdrop-blur-md shadow-md py-3" : "bg-[#0B1528] py-5"
      } border-b border-white/5`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-white group-hover:scale-105 transition-transform">
              <Image 
                src="/logo.jpg" 
                alt="AYMHC Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-white font-serif font-bold text-xl tracking-wider hidden sm:block">
              AYMHC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-[#D4AF37] transition-colors uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-[#0B1528] text-sm font-bold tracking-wide rounded-sm transition-all hover:bg-white"
            >
              Book FREE Health Check
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-4">
            <Link 
              href="/contact"
              className="hidden sm:inline-flex lg:hidden items-center px-4 py-2 bg-[#D4AF37] text-[#0B1528] text-xs font-bold tracking-wide rounded-sm"
            >
              Book Consultation
            </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors p-1"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-[#0B1528] border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-[#D4AF37] hover:bg-white/5 rounded-sm transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 px-3">
                <Link 
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#D4AF37] text-[#0B1528] font-bold tracking-wide rounded-sm"
                >
                  Book FREE Health Check
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}