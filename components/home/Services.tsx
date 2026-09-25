"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Target, Landmark, ArrowRight } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Protection",
    icon: ShieldCheck,
    items: [
      "Life Insurance",
      "Health Insurance",
      "General Insurance",
      "Keyman / Business Protection"
    ],
    href: "/services/protection"
  },
  {
    title: "Investment",
    icon: TrendingUp,
    items: [
      "Mutual Funds",
      "SIP / SWP",
      "NPS",
      "Bonds / Fixed Income"
    ],
    href: "/services/investment"
  },
  {
    title: "Goal Planning",
    icon: Target,
    items: [
      "Child Education",
      "Retirement",
      "Wealth Creation",
      "Estate / Family Protection"
    ],
    href: "/services/goal-planning"
  },
  {
    title: "Financial Solutions",
    icon: Landmark,
    items: [
      "Home / Mortgage Loans",
      "Business Funding",
      "Working Capital",
      "Other Loan Solutions"
    ],
    href: "/services/financial-solutions"
  }
];

export default function Services() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Solutions
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
            Comprehensive Financial Strategies
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            From protecting what you have today to building what you need tomorrow, we offer a full spectrum of tailored solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-sm border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300 p-8 group flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-full bg-[#0B1528]/5 flex items-center justify-center mb-6 group-hover:bg-[#0B1528] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#0B1528] group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                
                <h4 className="text-2xl font-serif text-[#0B1528] mb-6">
                  {category.title}
                </h4>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-2 shrink-0" />
                      <span className="text-slate-600 font-light">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={category.href}
                  className="inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#0B1528] group-hover:text-[#D4AF37] transition-colors mt-auto"
                >
                  Explore Details
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}