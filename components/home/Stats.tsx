"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Users, Award, ShieldCheck, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    number: 20,
    suffix: "+",
    title: "Years of Experience",
    description: "Serving families with trusted financial guidance since 2006.",
  },
  {
    icon: Users,
    number: 1000,
    suffix: "+",
    title: "Families Served",
    description: "Helping clients achieve financial confidence and security.",
  },
  {
    icon: ShieldCheck,
    number: 8,
    suffix: "+",
    title: "Financial Solutions",
    description: "Insurance, investments, retirement, loans and more.",
  },
  {
    icon: Award,
    number: 95,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Built on trust, transparency and long-term relationships.",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700">
            Trusted by Families
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Experience That Builds Confidence
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600">
            Our commitment is to provide thoughtful financial guidance,
            personalized solutions and long-term support for every client.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 lg:mt-20 grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-4 sm:p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-xl"
              >
                <div className="mx-auto flex h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-blue-600 text-white">
                  <Icon size={20} className="sm:hidden" />
                  <Icon size={26} className="hidden sm:block md:hidden" />
                  <Icon size={30} className="hidden md:block" />
                </div>

                <h3 className="mt-3 sm:mt-5 md:mt-6 text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-600">
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {item.suffix}
                </h3>

                <h4 className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-lg md:text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-1.5 sm:mt-2 md:mt-3 hidden sm:block text-sm sm:text-base leading-6 sm:leading-7 text-slate-600">
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