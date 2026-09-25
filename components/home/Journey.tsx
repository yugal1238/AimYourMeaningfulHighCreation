"use client";

import { motion } from "framer-motion";

const journeySteps = [
  { year: "2006", text: "Started LIC & Insurance advisory" },
  { year: "2010", text: "General Insurance" },
  { year: "2016", text: "Mediclaim" },
  { year: "2018", text: "Loan Consultancy" },
  { year: "2020", text: "Mutual Fund Advisory" },
  { year: "2022", text: "Health & Wellness" },
  { year: "Today", text: "AYMHC Family Protection" },
];

export default function Journey() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA] text-[#0B1528] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Our Journey
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
            Evolving to Serve You Better
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Over the years, we've expanded our expertise to provide a truly holistic family wealth and protection advisory.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-px bg-[#D4AF37]/30 transform sm:-translate-x-1/2" />
          
          <div className="space-y-12">
            {journeySteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex items-center ${isEven ? 'sm:flex-row-reverse' : 'sm:flex-row'} flex-row`}
                >
                  {/* Dot */}
                  <div className="absolute left-[20px] sm:left-1/2 w-4 h-4 rounded-full bg-[#0B1528] border-4 border-white shadow-[0_0_0_2px_rgba(212,175,55,0.3)] transform -translate-x-1/2 z-10" />
                  
                  {/* Content Box */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${isEven ? 'sm:pr-16 text-left sm:text-right' : 'sm:pl-16 text-left'}`}>
                    <div className="inline-block px-4 py-2 bg-white border border-slate-100 shadow-sm rounded-sm">
                      <span className="block text-[#D4AF37] font-serif text-xl sm:text-2xl mb-1">{step.year}</span>
                      <span className="block text-slate-700 font-medium text-sm sm:text-base">{step.text}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
