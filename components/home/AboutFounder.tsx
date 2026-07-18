"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Award, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function AboutFounder() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative"
          >
            <div className="rounded-[24px] sm:rounded-[36px] overflow-hidden shadow-2xl">

              <Image
                src="/hero-chhaya.jpg"
                alt="Chhaya Harshad Bhimjiyani"
                width={700}
                height={800}
                className="w-full object-cover"
              />

            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-5 shadow-xl">

              <p className="text-2xl sm:text-4xl font-bold text-blue-600">
                20+
              </p>

              <p className="text-xs sm:text-base text-slate-600">
                Years Experience
              </p>

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >

            <span className="rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700">
              Meet Your Financial Partner
            </span>

            <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Chhaya Harshad Bhimjiyani
            </h2>

            <p className="mt-2 text-base sm:text-xl font-semibold text-blue-600">
              Founder • AYMHC
            </p>

            <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-7 sm:leading-9 text-slate-600">

              At AYMHC, we believe financial planning is about people,
              not products.

              Every family has different dreams, responsibilities,
              and financial goals.

              Our mission is to help you make confident financial
              decisions through personalized guidance, long-term
              planning and complete financial solutions.

            </p>

            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">

              <div className="flex items-start gap-3 sm:gap-4">

                <Award className="text-blue-600 mt-1 shrink-0" size={20} />

                <div>

                  <h4 className="font-semibold text-base sm:text-lg">
                    Experience Since 2006
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600">
                    More than two decades of helping families build
                    financial security.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3 sm:gap-4">

                <CheckCircle2 className="text-blue-600 mt-1 shrink-0" size={20} />

                <div>

                  <h4 className="font-semibold text-base sm:text-lg">
                    Comprehensive Financial Solutions
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600">
                    Insurance, investments, retirement planning,
                    loans and wealth management.
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-3 sm:gap-4">

                <HeartHandshake className="text-blue-600 mt-1 shrink-0" size={20} />

                <div>

                  <h4 className="font-semibold text-base sm:text-lg">
                    Relationships Built on Trust
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600">
                    Every recommendation is made with transparency,
                    integrity and your family&apos;s future in mind.
                  </p>

                </div>

              </div>

            </div>

            <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-5">

              <Link
                href="/contact"
                className="text-center rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white hover:bg-blue-700 transition"
              >
                Book Consultation
              </Link>

              <Link
                href="/about"
                className="text-center rounded-full border border-slate-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:border-blue-600 hover:text-blue-600 transition"
              >
                Read My Story
              </Link>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}