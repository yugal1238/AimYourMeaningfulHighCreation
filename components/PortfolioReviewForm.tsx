"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, UploadCloud, ShieldCheck } from "lucide-react";

export default function PortfolioReviewForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
            Secure Upload
          </h2>
          <h1 className="text-4xl md:text-5xl font-serif font-light text-[#0B1528] mb-6">
            Portfolio Review Request
          </h1>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            Upload your existing policy documents, mutual fund statements, or investment summaries. Our expert advisory team will analyze them and schedule a complimentary review call.
          </p>
        </div>

        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 text-center rounded-sm border border-[#D4AF37]/30 shadow-lg"
          >
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-serif text-[#0B1528] mb-4">Secure Submission Received</h3>
            <p className="text-slate-600 font-light mb-8">
              Thank you for trusting AYMHC. Our advisory team will review your documents and contact you within 24-48 hours.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="px-8 py-3 bg-[#0B1528] text-white font-medium tracking-wide rounded-sm hover:bg-[#D4AF37] hover:text-[#0B1528] transition-all"
            >
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleSubmit}
            className="bg-white p-8 md:p-12 rounded-sm border border-slate-200 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Full Name</label>
                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Phone Number</label>
                <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email Address</label>
              <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" placeholder="john@example.com" />
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Upload Documents (PDF, JPG)</label>
              <div className="border-2 border-dashed border-slate-300 rounded-sm p-10 text-center bg-slate-50 hover:bg-slate-100 hover:border-[#D4AF37] transition-all cursor-pointer">
                <UploadCloud className="w-10 h-10 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600 font-medium mb-1">Click to upload or drag and drop</p>
                <p className="text-xs text-slate-500 font-light">Max file size: 10MB</p>
                <input type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png" />
              </div>
            </div>

            <div className="mb-10">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Specific Concerns or Questions</label>
              <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all resize-none" placeholder="e.g. I want to know if my current life cover is sufficient..."></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#0B1528] text-white font-bold tracking-wide rounded-sm hover:bg-[#D4AF37] hover:text-[#0B1528] transition-all disabled:opacity-70"
            >
              {isSubmitting ? "Submitting securely..." : "Request Free Review"}
              {!isSubmitting && <Send size={18} />}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1">
              <ShieldCheck size={14} /> All data is encrypted and kept strictly confidential.
            </p>
          </motion.form>
        )}
      </div>
    </section>
  );
}