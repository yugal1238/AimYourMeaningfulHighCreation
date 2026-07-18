"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500"></div>

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white"
      >
        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
          Ready to Begin?
        </span>

        <h2 className="mt-8 text-4xl font-extrabold leading-tight md:text-6xl">
          Let's Build Your Financial Future Together
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100">
          Whether you're planning for your family's future, protecting your
          loved ones, growing your investments, or preparing for retirement,
          AYMHC is here to guide you with clarity and confidence.
        </p>

        <p className="mt-8 text-xl font-semibold italic">
          "Vichar Tamaro, Aakar Amaro"
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <a
            href="https://wa.me/918850391909?text=Hello%20AYMHC,%20I%20would%20like%20to%20book%20a%20free%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105 hover:shadow-xl"
          >
            <MessageCircle size={20} />
            WhatsApp Now
          </a>

          <a
            href="tel:+918850391909"
            className="inline-flex items-center gap-3 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-700"
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-blue-100">
          <div>✓ Personalized Financial Planning</div>
          <div>✓ Family Protection</div>
          <div>✓ Wealth Creation</div>
          <div>✓ Long-Term Guidance</div>
        </div>
      </motion.div>
    </section>
  );
}