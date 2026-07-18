"use client";

import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  Landmark,
  Wallet,
} from "lucide-react";

const problems = [
  {
    icon: HeartPulse,
    title: "Medical Emergencies",
    description:
      "Unexpected hospital bills can put years of savings at risk.",
  },
  {
    icon: GraduationCap,
    title: "Children's Future",
    description:
      "Education and marriage costs continue to rise every year.",
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    description:
      "Many families reach retirement without sufficient income planning.",
  },
  {
    icon: Wallet,
    title: "Wealth Management",
    description:
      "Savings without a clear strategy often fail to meet long-term goals.",
  },
];

export default function Problem() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-red-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-red-600">
            Common Financial Challenges
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Are These Financial Concerns Holding You Back?
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600">
            Every family dreams of financial security, but without proper planning,
            unexpected events can disrupt those dreams.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 lg:mt-16 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * .1 }}
                viewport={{ once: true }}
                className="group rounded-2xl sm:rounded-3xl border bg-white p-6 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 group-hover:text-white" />
                </div>

                <h3 className="mb-2 sm:mb-4 text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}