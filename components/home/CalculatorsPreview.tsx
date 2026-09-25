"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, PiggyBank, Landmark, Target, ShieldCheck } from "lucide-react";

const tools = [
  { name: "SIP Calculator", icon: PiggyBank },
  { name: "Retirement Calculator", icon: Landmark },
  { name: "Life Insurance Need", icon: ShieldCheck },
  { name: "Education Goal", icon: Target },
  { name: "Loan EMI Calculator", icon: Calculator },
];

export default function CalculatorsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
              Financial Tools
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
              Understand Your Numbers
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8">
              Take the first step toward financial clarity. Use our smart calculators to estimate your wealth creation, retirement needs, and family protection requirements.
            </p>
            
            <div className="bg-white p-6 rounded-sm border border-slate-100 shadow-sm border-l-4 border-l-[#D4AF37] mb-8">
              <p className="text-[#0B1528] font-medium mb-4">Want to understand your numbers better?</p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#D4AF37] hover:text-[#0B1528] transition-colors"
              >
                Get a complimentary consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={index}
                  href="/calculators"
                  className="flex items-center gap-4 bg-white p-4 rounded-sm border border-slate-100 shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#0B1528]/5 flex items-center justify-center shrink-0 group-hover:bg-[#0B1528] transition-colors">
                    <Icon className="w-5 h-5 text-[#0B1528] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-[#0B1528]">{tool.name}</span>
                </Link>
              )
            })}
            
            <Link
              href="/calculators"
              className="flex items-center justify-center gap-2 bg-[#0B1528] text-white p-4 rounded-sm border border-[#0B1528] shadow-sm hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0B1528] transition-all"
            >
              <span className="font-medium">View All Tools</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
