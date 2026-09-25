"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const stories = [
  {
    name: "Rajesh & Priya M.",
    role: "IT Professionals",
    before: "We had multiple policies and random investments but didn't know whether they were actually aligned with our long-term goals or children's education.",
    helped: "Understand our protection gaps, consolidate our portfolio, and map out a precise timeline for our kids' higher education.",
    today: "We have a crystal-clear financial roadmap and total peace of mind regarding our family's future."
  },
  {
    name: "Sanjay D.",
    role: "Business Owner",
    before: "My personal wealth was heavily tied up in my business, and I had virtually no structured retirement or estate planning in place.",
    helped: "Separate my business and personal assets, set up a dedicated retirement corpus, and secure a Keyman insurance policy.",
    today: "My family's wealth is secure independently of market cycles, and my business continuity is guaranteed."
  },
  {
    name: "Dr. Ananya P.",
    role: "Medical Practitioner",
    before: "I was earning well but paying too much in taxes and had no idea how much life cover I actually needed for my dependents.",
    helped: "Calculate my exact Human Life Value and structure a tax-efficient SIP strategy to build wealth effortlessly.",
    today: "I am financially protected with the right term plan and my wealth is growing automatically every month."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Client Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
            Real Families. Real Results.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed font-light">
            Don't just take our word for it. See how we've helped families transform their financial confusion into complete clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8F9FA] rounded-sm p-8 border border-slate-100 relative group hover:shadow-xl hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#0B1528]/5 group-hover:text-[#D4AF37]/10 transition-colors" />
              
              <div className="mb-8">
                <h4 className="font-serif text-xl text-[#0B1528]">{story.name}</h4>
                <p className="text-xs text-[#D4AF37] font-semibold tracking-wide uppercase">{story.role}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Before AYMHC</span>
                  <p className="text-sm text-slate-600 font-light italic">"{story.before}"</p>
                </div>
                
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <span className="block text-xs font-bold text-[#0B1528] uppercase tracking-widest mb-1">AYMHC Helped Me</span>
                  <p className="text-sm text-slate-700 font-medium">{story.helped}</p>
                </div>

                <div>
                  <span className="block text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">Today</span>
                  <p className="text-sm text-slate-600 font-light">"{story.today}"</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}