"use client";

import Link from "next/link";
import {
  PiggyBank,
  Landmark,
  Calculator,
  Target,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Estimate the future value of your monthly SIP investments.",
    icon: PiggyBank,
    href: "/calculators/sip",
  },
  {
    title: "EMI Calculator",
    description: "Calculate monthly EMI for home, car or personal loans.",
    icon: Calculator,
    href: "/calculators/emi",
  },
  {
    title: "Retirement Planner",
    description: "Know how much wealth you'll need after retirement.",
    icon: Landmark,
    href: "/calculators/retirement",
  },
  {
    title: "Goal Planner",
    description: "Plan for future financial goals with confidence.",
    icon: Target,
    href: "/calculators/goal-planner",
  },
  {
    title: "Insurance Calculator",
    description: "Estimate your ideal life cover based on your family's needs.",
    icon: ShieldCheck,
    href: "/calculators/insurance",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      
      {/* Hero Section */}
      <section className="bg-[#0B1528] py-20 lg:py-28 text-white relative overflow-hidden">
        {/* Decorative Gold Accents */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        
        {/* Background Subtle Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        >
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Financial Tools
          </h2>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight font-serif mb-6">
            Understand Your Wealth
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-300 font-light">
            Use our interactive calculators to map out your financial future, estimate required investments, and identify protection gaps.
          </p>
        </motion.div>
      </section>

      {/* Grid Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {calculators.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={itemVariants}>
                <Link
                  href={item.href}
                  className="block bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#D4AF37]/30 h-full group relative overflow-hidden"
                >
                  {/* Subtle Hover Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="w-14 h-14 rounded-full bg-[#0B1528]/5 flex items-center justify-center mb-6 group-hover:bg-[#0B1528] transition-colors duration-300">
                    <Icon className="w-7 h-7 text-[#0B1528] group-hover:text-[#D4AF37] transition-colors duration-300" />
                  </div>

                  <h2 className="text-2xl font-serif text-[#0B1528] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm text-slate-600 font-light leading-relaxed mb-8">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-[#0B1528] font-bold text-sm tracking-wide group-hover:text-[#D4AF37] transition-colors mt-auto">
                    Open Calculator
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}