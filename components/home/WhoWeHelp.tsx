"use client";

import { motion } from "framer-motion";
import { Users, Briefcase, Baby, HeartPulse, Sparkles } from "lucide-react";

const personas = [
  {
    title: "Young Families",
    focus: "Protection + children's future",
    icon: Users
  },
  {
    title: "Business Owners",
    focus: "Business continuity + personal wealth",
    icon: Briefcase
  },
  {
    title: "Parents",
    focus: "Education + family security",
    icon: Baby
  },
  {
    title: "Pre-Retirees",
    focus: "Retirement income + legacy",
    icon: HeartPulse
  },
  {
    title: "Young Professionals",
    focus: "SIP + wealth creation + protection",
    icon: Sparkles
  }
];

export default function WhoWeHelp() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Who We Help
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
            Your Financial Journey
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            We partner with individuals and families at every life stage to provide the right guidance when it matters most.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {personas.map((persona, index) => {
            const Icon = persona.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-[#F8F9FA] border border-slate-100 p-6 rounded-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 transition-colors">
                    <Icon className="w-6 h-6 text-[#0B1528] group-hover:text-[#D4AF37] transition-colors" />
                  </div>
                  <h4 className="text-xl font-serif text-[#0B1528]">
                    {persona.title}
                  </h4>
                </div>
                <p className="text-sm text-slate-500 font-medium tracking-wide uppercase border-t border-slate-200 pt-4">
                  {persona.focus}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
