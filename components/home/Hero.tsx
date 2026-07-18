"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Background Blur */}
      <div className="absolute -left-32 top-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-100 blur-3xl opacity-70" />
      <div className="absolute right-0 top-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-sky-100 blur-3xl opacity-70" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 lg:gap-14 px-4 sm:px-6 py-14 sm:py-20 lg:py-24 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="inline-flex rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700 tracking-wide">
            Since 2006 • Trusted Financial Guidance
          </span>

          <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-6xl">
            Protect Today.
            <br />
            Grow Tomorrow.
            <br />
            <span className="text-blue-600">
              Prosper Forever.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-600">
            AYMHC helps families build wealth, secure their future,
            and achieve financial confidence through insurance,
            investments, retirement planning, and comprehensive
            financial strategies.
          </p>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg italic font-medium text-blue-700">
            &ldquo;Vichar Tamaro, Aakar Amaro&rdquo;
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row sm:flex-row flex-wrap gap-3 sm:gap-4">

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-md transition hover:bg-blue-700 hover:shadow-lg"
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              Explore Services
            </Link>

          </div>

          {/* Trust Cards */}

          <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-3 sm:gap-4 sm:grid-cols-3">

            <div className="rounded-2xl border bg-white p-4 sm:p-5 shadow-sm">
              <ShieldCheck className="mb-2 sm:mb-3 text-blue-600" size={22} />
              <h3 className="text-sm sm:text-base font-semibold">
                Family Protection
              </h3>
            </div>

            <div className="rounded-2xl border bg-white p-4 sm:p-5 shadow-sm">
              <TrendingUp className="mb-2 sm:mb-3 text-blue-600" size={22} />
              <h3 className="text-sm sm:text-base font-semibold">
                Wealth Creation
              </h3>
            </div>

            <div className="rounded-2xl border bg-white p-4 sm:p-5 shadow-sm">
              <HeartHandshake className="mb-2 sm:mb-3 text-blue-600" size={22} />
              <h3 className="text-sm sm:text-base font-semibold">
                Lifetime Guidance
              </h3>
            </div>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative mt-6 lg:mt-0"
        >

          <div className="overflow-hidden rounded-[28px] sm:rounded-[40px] border bg-white p-3 sm:p-5 shadow-2xl">

            <Image
              src="/hero-chhaya.JPG"
              alt="AYMHC Financial Consultant"
              width={700}
              height={800}
              className="w-full rounded-[20px] sm:rounded-[30px] object-cover"
              priority
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -left-3 top-4 sm:-left-8 sm:top-8 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-5 shadow-xl">

            <p className="text-xl sm:text-3xl font-bold text-blue-600">
              20+
            </p>

            <p className="text-xs sm:text-sm text-slate-600">
              Years Experience
            </p>

          </div>

          <div className="absolute -right-2 bottom-6 sm:-right-6 sm:bottom-12 rounded-xl sm:rounded-2xl bg-white p-3 sm:p-5 shadow-xl">

            <p className="text-xl sm:text-3xl font-bold text-blue-600">
              1000+
            </p>

            <p className="text-xs sm:text-sm text-slate-600">
              Families Guided
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
}