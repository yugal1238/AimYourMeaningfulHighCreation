"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const checks = [
  "Income & expenses",
  "Assets & liabilities",
  "Life insurance",
  "Health insurance",
  "Investments",
  "Children's goals",
  "Retirement planning",
  "Protection gaps"
];

export default function CTA() {
  return (
    <section className="py-20 lg:py-24 bg-[#0B1528] text-white relative overflow-hidden">
      {/* Decorative Gold Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
      
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-sm p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="text-center mb-10">
            <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
              Complimentary Review
            </h2>
            <h3 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-4">
              Do You Know Your Financial Health?
            </h3>
            <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">
              Schedule a comprehensive session with our advisory team to uncover gaps in your current planning and discover new opportunities for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 mb-12">
            {checks.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-slate-300 font-light text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link 
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#D4AF37] text-[#0B1528] font-bold tracking-wide rounded-sm transition-all hover:bg-white hover:scale-105"
            >
              Book My Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}