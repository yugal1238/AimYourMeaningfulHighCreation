"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  ShieldCheck,
  Handshake,
  CheckCircle2,
  PhoneCall,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "20+ Years of Experience",
    text: "Trusted financial guidance with decades of practical experience.",
  },
  {
    icon: Users,
    title: "Personalized Planning",
    text: "Every financial plan is tailored to your goals and family needs.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Protection",
    text: "Insurance, investments and wealth planning under one roof.",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationship",
    text: "We believe in lifelong financial partnerships, not one-time sales.",
  },
  {
    icon: PhoneCall,
    title: "Claim Assistance",
    text: "Support when you need it the most during insurance claims.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Advice",
    text: "Simple, honest and practical financial guidance without confusion.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700">
            Why AYMHC
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            More Than Financial Advice.
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600">
            We believe financial planning is about protecting dreams,
            creating opportunities and building confidence for every stage of life.
          </p>

        </motion.div>

        <div className="mt-10 sm:mt-14 lg:mt-20 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-xl"
              >
                <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-600 text-white">
                  <Icon size={24} className="sm:hidden" />
                  <Icon size={30} className="hidden sm:block" />
                </div>

                <h3 className="text-lg sm:text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-6 sm:leading-8 text-slate-600">
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