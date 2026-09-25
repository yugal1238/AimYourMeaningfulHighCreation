"use client";

import { motion } from "framer-motion";
import { Award, Users, Shield, Briefcase } from "lucide-react";

const stats = [
  {
    value: "20+",
    label: "Years of Experience",
    icon: Briefcase,
  },
  {
    value: "2,000+",
    label: "Families Served",
    icon: Users,
  },
  {
    value: "20+ Years",
    label: "LIC Life Insurance Experience",
    icon: Shield,
  },
  {
    value: "Award",
    label: "UK CII in Financial Planning",
    icon: Award,
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#0B1528] text-white border-y border-[#D4AF37]/20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-slate-800">
          
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="mb-4 text-[#D4AF37]">
                  <Icon className="w-8 h-8 opacity-80" strokeWidth={1.5} />
                </div>
                <div className="text-3xl md:text-4xl font-serif font-light tracking-tight text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-light tracking-wide uppercase max-w-[180px]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}