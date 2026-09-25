"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1528] text-slate-300 border-t border-white/10 relative overflow-hidden">
      
      {/* Decorative Gold Accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group mb-6 inline-flex">
              <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-white">
                <Image 
                  src="/logo.jpg" 
                  alt="AYMHC Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-white font-serif font-bold text-xl tracking-wider">
                AYMHC
              </span>
            </Link>

            <p className="text-[#D4AF37] font-medium text-sm tracking-widest uppercase mb-4">
              Aim Your Meaningful High Creation
            </p>

            <p className="leading-relaxed text-slate-400 font-light mb-4">
              Helping families protect, grow and preserve wealth through personalized financial planning.
            </p>

            <p className="italic text-slate-300 font-serif">
              "Vichaar Tamaro, Aakar Amaro"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6 border-b border-white/10 pb-2 inline-block">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 font-light text-slate-400">
              <Link href="/about" className="hover:text-[#D4AF37] transition-colors w-fit">About Chhaya & Harshad</Link>
              <Link href="/financial-planning" className="hover:text-[#D4AF37] transition-colors w-fit">Our Process</Link>
              <Link href="/calculators" className="hover:text-[#D4AF37] transition-colors w-fit">Financial Calculators</Link>
              <Link href="/portfolio-review" className="hover:text-[#D4AF37] transition-colors w-fit">Portfolio Review</Link>
              <Link href="/contact" className="hover:text-[#D4AF37] transition-colors w-fit">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6 border-b border-white/10 pb-2 inline-block">
              Our Solutions
            </h3>
            <div className="flex flex-col gap-3 font-light text-slate-400">
              <Link href="/services/protection" className="hover:text-[#D4AF37] transition-colors w-fit">Family Protection</Link>
              <Link href="/services/investment" className="hover:text-[#D4AF37] transition-colors w-fit">Wealth Creation & Mutual Funds</Link>
              <Link href="/services/goal-planning" className="hover:text-[#D4AF37] transition-colors w-fit">Children's Education</Link>
              <Link href="/services/goal-planning" className="hover:text-[#D4AF37] transition-colors w-fit">Retirement Planning</Link>
              <Link href="/services/financial-solutions" className="hover:text-[#D4AF37] transition-colors w-fit">Loans & Business Funding</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif text-white mb-6 border-b border-white/10 pb-2 inline-block">
              Get in Touch
            </h3>
            <div className="space-y-4 font-light text-slate-400">
              <a href="tel:+918850391909" className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                <Phone size={18} className="text-[#D4AF37]" />
                +91 88503 91909
              </a>
              <a href="mailto:chhaya.harshad@rediffmail.com" className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
                <Mail size={18} className="text-[#D4AF37]" />
                chhaya.harshad@rediffmail.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#D4AF37] mt-1 shrink-0" />
                <span>Mumbai, Maharashtra</span>
              </div>
              
              <div className="pt-4">
                <a
                  href="https://wa.me/918850391909"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-sm bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-500 transition-colors shadow-lg"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500 font-light">
            © {year} AYMHC. All Rights Reserved. Boutique Family Wealth Advisory.
          </p>

          <div className="flex gap-6 text-sm font-light">
            <Link href="/privacy-policy" className="text-slate-500 hover:text-[#D4AF37] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-[#D4AF37] transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}