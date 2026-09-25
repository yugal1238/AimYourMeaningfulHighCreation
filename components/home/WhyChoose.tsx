"use client";

import { ShieldCheck, TrendingUp, GraduationCap, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    title: "Family Protection",
    description: "Secure your loved ones against life's uncertainties with comprehensive life and health insurance strategies.",
    icon: ShieldCheck,
  },
  {
    title: "Wealth Creation",
    description: "Build and multiply your assets systematically with tailored mutual funds, SIPs, and diversified investments.",
    icon: TrendingUp,
  },
  {
    title: "Children's Future",
    description: "Guarantee their higher education and marriage goals regardless of market fluctuations or unforeseen events.",
    icon: GraduationCap,
  },
  {
    title: "Retirement & Legacy",
    description: "Design a tax-efficient retirement corpus that provides regular income and leaves a lasting legacy.",
    icon: Landmark,
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

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Why AYMHC?
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
            We don't just sell financial products.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            We understand your goals, identify gaps and help you create a practical financial roadmap tailored entirely to your family's unique aspirations.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="group p-8 rounded-sm border border-slate-100 bg-slate-50 hover:bg-white hover:border-[#D4AF37]/30 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle Hover Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-full bg-[#0B1528]/5 flex items-center justify-center mb-6 group-hover:bg-[#0B1528] transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#0B1528] group-hover:text-[#D4AF37] transition-colors duration-300" />
                </div>
                
                <h4 className="text-xl font-serif text-[#0B1528] mb-3">
                  {reason.title}
                </h4>
                
                <p className="text-slate-600 font-light leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}