"use client";

import { motion } from "framer-motion";
import { Search, LineChart, Target, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Understand",
    description: "We understand your income, expenses, family responsibilities and goals.",
    icon: Search
  },
  {
    num: "02",
    title: "Analyse",
    description: "We review your existing insurance, investments, liabilities and financial gaps.",
    icon: LineChart
  },
  {
    num: "03",
    title: "Plan",
    description: "We create a practical financial strategy based on your unique goals.",
    icon: Target
  },
  {
    num: "04",
    title: "Implement",
    description: "We help you select and implement suitable financial solutions.",
    icon: Rocket
  },
  {
    num: "05",
    title: "Review",
    description: "We periodically review your financial plan as your life changes.",
    icon: RefreshCw
  }
];

export default function Process() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Process
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
            How AYMHC Helps You
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            We follow a structured 5-step methodology to bring clarity and confidence to your financial life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connecting Line (hidden on mobile, visible on lg) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-px bg-gradient-to-r from-[#D4AF37] to-transparent opacity-30" />
                )}

                <div className="w-20 h-20 rounded-full bg-[#0B1528]/5 flex items-center justify-center mb-6 relative z-10 group-hover:bg-[#0B1528] group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-[#0B1528] group-hover:text-[#D4AF37] transition-colors duration-300" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center text-xs font-bold text-[#D4AF37]">
                    {step.num}
                  </div>
                </div>

                <h4 className="text-xl font-serif text-[#0B1528] mb-3">
                  {step.title}
                </h4>
                
                <p className="text-sm text-slate-600 font-light leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}