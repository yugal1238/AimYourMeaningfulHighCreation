"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  MessageSquare,
  Search,
  FileText,
  Rocket,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    icon: CalendarDays,
    title: "Book a Consultation",
    description:
      "Schedule a complimentary consultation to discuss your financial goals and concerns.",
  },
  {
    icon: MessageSquare,
    title: "Understand Your Goals",
    description:
      "We listen carefully to your family's needs, dreams and future priorities.",
  },
  {
    icon: Search,
    title: "Financial Analysis",
    description:
      "We review your existing insurance, investments and financial position.",
  },
  {
    icon: FileText,
    title: "Personalized Strategy",
    description:
      "Receive a customized roadmap designed around your goals and budget.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description:
      "We help you execute your financial plan with confidence and clarity.",
  },
  {
    icon: RefreshCw,
    title: "Review & Grow",
    description:
      "Regular reviews ensure your financial strategy grows with your life.",
  },
];

export default function Process() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700">
            Our Process
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Your Financial Journey with AYMHC
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600">
            We follow a structured approach that helps you make informed financial
            decisions with confidence and peace of mind.
          </p>
        </motion.div>

        <div className="relative mt-12 sm:mt-16 lg:mt-20">

          {/* Desktop Connecting Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-blue-100 lg:block"></div>

          <div className="space-y-8 sm:space-y-10 lg:space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className={`flex flex-col items-center lg:flex-row ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-full lg:w-5/12">
                    <div className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <span className="mb-2 sm:mb-3 inline-block rounded-full bg-blue-600 px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-white">
                        Step {index + 1}
                      </span>

                      <h3 className="mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="relative z-10 my-5 sm:my-8 flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center rounded-full border-4 sm:border-8 border-slate-50 bg-blue-600 text-white shadow-xl lg:my-0 lg:w-2/12">
                    <Icon size={24} className="sm:hidden" />
                    <Icon size={34} className="hidden sm:block" />
                  </div>

                  {/* Empty Side */}
                  <div className="hidden lg:block lg:w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}