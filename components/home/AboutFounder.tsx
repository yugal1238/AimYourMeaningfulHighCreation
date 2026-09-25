"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="py-20 lg:py-28 bg-[#0B1528] text-white relative overflow-hidden">
      {/* Decorative Gold Accents */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
      
      {/* Background Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Meet Your Advisors
          </h2>
          <h3 className="text-3xl md:text-5xl font-serif font-light leading-tight mb-6">
            Guidance Built on Trust
          </h3>
          <div className="relative inline-block mt-4">
            <span className="absolute -left-6 -top-4 text-5xl text-[#D4AF37]/30 font-serif">"</span>
            <p className="text-xl md:text-2xl text-slate-300 font-light italic leading-relaxed px-4">
              Every family has different dreams, responsibilities and financial challenges. Our role is to understand yours and help you create a plan around them.
            </p>
            <span className="absolute -right-6 -bottom-8 text-5xl text-[#D4AF37]/30 font-serif">"</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Founders Images Container */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-slate-800 relative z-10">
              <div className="absolute inset-0 bg-[#0B1528]/10 mix-blend-overlay z-10 pointer-events-none" />
              <Image
                src="/hero-chhaya.JPG" // Replace with a dual photo of Chhaya and Harshad
                alt="Chhaya and Harshad Bhimjiyani"
                fill
                className="object-cover grayscale-[20%]"
              />
            </div>
            {/* Backdrop accent */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#D4AF37]/30 rounded-sm z-0" />
          </motion.div>

          {/* Founders Bios */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-12"
          >
            
            <div className="border-l-2 border-[#D4AF37] pl-6">
              <h4 className="text-3xl font-serif mb-2">Chhaya Harshad Bhimjiyani</h4>
              <p className="text-[#D4AF37] font-semibold tracking-wide uppercase text-sm mb-4">
                Financial Planning & Investment Consultant
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                With a deep focus on holistic wealth creation, Chhaya specializes in designing bespoke financial roadmaps that align with your family's unique aspirations, leveraging mutual funds, SIPs, and strategic goal planning.
              </p>
            </div>

            <div className="border-l-2 border-[#D4AF37] pl-6">
              <h4 className="text-3xl font-serif mb-2">Harshad Bhimjiyani</h4>
              <p className="text-[#D4AF37] font-semibold tracking-wide uppercase text-sm mb-4">
                LIC Life Insurance Advisor
              </p>
              <p className="text-slate-400 font-light leading-relaxed">
                Bringing over two decades of robust experience in life and general insurance, Harshad ensures that your wealth generation is backed by an impenetrable wall of family protection and legacy planning.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}