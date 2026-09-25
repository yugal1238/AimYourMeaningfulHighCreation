"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, HandCoins, Landmark } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-[#0B1528] overflow-hidden text-white">
      {/* Decorative Gold Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
      
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      
      {/* Glows */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5 pt-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs uppercase tracking-widest font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              Boutique Family Wealth & Protection Advisory
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6 font-serif">
              Protect.<br />
              Plan.<br />
              <span className="font-semibold text-[#D4AF37]">Prosper.</span>
            </h1>

            <p className="text-xl sm:text-2xl text-slate-300 font-light mb-4">
              <span className="italic">"Vichaar Tamaro, Aakar Amaro"</span>
              <br/>— Your Thought. Our Shape.
            </p>
            
            <p className="text-base sm:text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Protect today. Plan tomorrow. Build your family's financial future. 
              We don't just sell products; we help you create a practical financial roadmap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#D4AF37] text-[#0B1528] font-bold tracking-wide rounded-sm transition-all hover:bg-white shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                Book a FREE Health Check
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-white font-medium tracking-wide rounded-sm transition-all hover:border-white hover:bg-white/5"
              >
                Talk to an Advisor
              </Link>
            </div>
            
            {/* Trust Strip */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">20+</span> Years Experience
              </span>
              <span className="flex items-center gap-2">
                <span className="text-[#D4AF37] font-bold">2,000+</span> Families Served
              </span>
              <span>Financial Planning • Insurance • Investments • Loans</span>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 xl:col-span-7 relative mt-10 lg:mt-0"
          >
            <div className="relative rounded-sm overflow-hidden border border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full h-[500px] sm:h-[600px] lg:h-[750px]">
              <div className="absolute inset-0 bg-[#0B1528]/10 mix-blend-overlay z-10 pointer-events-none" />
              {/* Replace with actual high-quality photo of founders */}
              <Image
                src="/hero-chhaya.JPG"
                alt="Chhaya and Harshad Bhimjiyani - AYMHC Founders"
                fill
                className="object-cover object-top grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
            
            {/* Floating Accent Card */}
            <div className="absolute -bottom-6 -left-4 sm:-left-10 bg-white p-5 sm:p-8 shadow-2xl rounded-sm max-w-[280px] sm:max-w-sm border-l-4 border-[#D4AF37] z-20">
              <p className="text-slate-900 font-serif text-base sm:text-lg leading-snug">
                "Every family has different dreams. Our role is to understand yours."
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider mt-3">
                — Founders, AYMHC
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}