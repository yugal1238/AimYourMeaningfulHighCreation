"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Client 01",
    role: "Financial Planning",
    review:
      "AYMHC helped us organize our finances with a clear plan. The guidance was practical and easy to understand.",
  },
  {
    name: "Client 02",
    role: "Insurance Planning",
    review:
      "Professional service and excellent support throughout the process. We now feel much more financially secure.",
  },
  {
    name: "Client 03",
    role: "Wealth Management",
    review:
      "The personalized approach and regular reviews gave us confidence that we're moving toward our financial goals.",
  },
];

export default function Testimonials() {
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
            Client Experiences
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-3xl text-sm sm:text-base md:text-lg text-slate-600">
            Building long-term relationships through trust, transparency,
            and personalized financial guidance.
          </p>
        </motion.div>

        <div className="mt-10 sm:mt-14 lg:mt-20 grid gap-5 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Quote className="mb-4 sm:mb-6 h-8 w-8 sm:h-10 sm:w-10 text-blue-600 opacity-40" />

              <div className="mb-4 sm:mb-6 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 sm:h-5 sm:w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-sm sm:text-base leading-6 sm:leading-8 text-slate-600">
                &ldquo;{item.review}&rdquo;
              </p>

              <div className="mt-6 sm:mt-8 border-t border-slate-200 pt-4 sm:pt-6">
                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                  {item.name}
                </h4>

                <p className="text-xs sm:text-sm text-blue-600">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}