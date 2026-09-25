"use client";

import { motion } from "framer-motion";
import { Play, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "How Much Life Cover Do You Actually Need?",
    type: "Article",
    icon: FileText
  },
  {
    title: "5 Common Mistakes in Retirement Planning",
    type: "Video",
    icon: Play
  },
  {
    title: "The Magic of Compounding: Start SIPs Early",
    type: "Article",
    icon: FileText
  }
];

export default function EducationPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
              Education Centre
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight text-[#0B1528]">
              Financial Literacy & Insights
            </h3>
          </div>
          
          <Link 
            href="/resources"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium tracking-wide rounded-sm transition-all hover:border-[#0B1528] hover:bg-[#0B1528] hover:text-white shrink-0"
          >
            Explore All Resources
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-[#F8F9FA] border border-slate-100 rounded-sm mb-6 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative background overlay on hover */}
                  <div className="absolute inset-0 bg-[#0B1528]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-md transition-all">
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  {item.type}
                </div>
                
                <h4 className="text-xl font-serif text-[#0B1528] group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {item.title}
                </h4>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
