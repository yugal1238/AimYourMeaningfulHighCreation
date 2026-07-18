"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  PiggyBank,
  TrendingUp,
  Handshake,
} from "lucide-react";

const solutions = [
  {
    icon: ShieldCheck,
    title: "Protect",
    text: "Secure your family with the right insurance solutions.",
  },
  {
    icon: PiggyBank,
    title: "Plan",
    text: "Create personalized financial plans for every life stage.",
  },
  {
    icon: TrendingUp,
    title: "Grow",
    text: "Build long-term wealth through disciplined investment strategies.",
  },
  {
    icon: Handshake,
    title: "Support",
    text: "Receive ongoing guidance, reviews, and claim assistance.",
  },
];

export default function Solution() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700">
            The AYMHC Approach
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            We Build Financial Confidence, Not Just Policies
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600">
            At AYMHC, we believe every family deserves a clear financial roadmap.
            Our approach focuses on protecting what matters today while preparing
            for tomorrow&apos;s opportunities.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 lg:mt-20 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg">
                  <Icon className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>

                <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}