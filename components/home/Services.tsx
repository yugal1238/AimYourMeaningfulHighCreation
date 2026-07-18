"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Landmark,
  GraduationCap,
  ShieldCheck,
  TrendingUp,
  Wallet,
  Droplets,
} from "lucide-react";

const services = [
  {
    title: "Wealth Management",
    description:
      "Personalized investment strategies, mutual funds, and long-term wealth creation.",
    icon: TrendingUp,
    size: "lg:col-span-2",
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Insurance Planning",
    description:
      "Life, Health, Mediclaim, Term Insurance and comprehensive family protection.",
    icon: ShieldCheck,
    size: "",
    color: "from-indigo-600 to-blue-500",
  },
  {
    title: "Retirement Planning",
    description:
      "Plan today for a financially independent tomorrow with customized retirement solutions.",
    icon: Landmark,
    size: "",
    color: "from-slate-800 to-slate-600",
  },
  {
    title: "Child Education Planning",
    description:
      "Create dedicated investment plans for higher education and future milestones.",
    icon: GraduationCap,
    size: "lg:col-span-2",
    color: "from-sky-600 to-blue-500",
  },
  {
    title: "Tax Planning",
    description:
      "Reduce tax liability while maximizing savings with strategic financial planning.",
    icon: Wallet,
    size: "",
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Loan Advisory",
    description:
      "Guidance for home, business, personal and mortgage loan solutions.",
    icon: HeartPulse,
    size: "",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Kangen Wellness",
    description:
      "Premium Japanese water technology to support a healthier lifestyle.",
    icon: Droplets,
    size: "lg:col-span-3",
    color: "from-cyan-600 to-sky-500",
  },
];

export default function Services() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700">
            What We Do
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Comprehensive Financial Solutions
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600">
            Every financial journey is different. We combine expertise,
            planning and ongoing guidance to help you protect your family,
            grow your wealth and achieve long-term financial confidence.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 lg:mt-20 grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`${service.size}`}
              >
                <div className="group relative h-full overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">

                  {/* Gradient Glow */}
                  <div
                    className={`absolute right-0 top-0 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-3xl transition-opacity group-hover:opacity-30`}
                  />

                  <div
                    className={`inline-flex rounded-2xl bg-gradient-to-r ${service.color} p-3 sm:p-4 text-white shadow-lg`}
                  >
                    <Icon size={26} className="sm:hidden" />
                    <Icon size={30} className="hidden sm:block" />
                  </div>

                  <h3 className="mt-6 sm:mt-8 text-xl sm:text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 transition group-hover:gap-4"
                  >
                    Talk to an Advisor
                    <ArrowRight size={18} />
                  </Link>

                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}