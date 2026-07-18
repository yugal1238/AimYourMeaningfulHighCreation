import Link from "next/link";
import {
  Shield,
  TrendingUp,
  PiggyBank,
  HeartPulse,
  GraduationCap,
  Landmark,
  Briefcase,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Financial Planning",
    problem: "Not sure where your money is going?",
    solution:
      "We create a personalized financial roadmap to help you achieve your life goals with confidence.",
    benefits: [
      "Cash Flow Planning",
      "Goal Based Investments",
      "Retirement Strategy",
      "Tax Efficient Planning",
    ],
  },
  {
    icon: PiggyBank,
    title: "Mutual Fund Advisory",
    problem: "Savings aren't growing fast enough?",
    solution:
      "We recommend suitable investment strategies based on your goals and risk profile.",
    benefits: [
      "SIP Planning",
      "Lump Sum Investments",
      "Portfolio Review",
      "Long Term Wealth Creation",
    ],
  },
  {
    icon: Shield,
    title: "Life Insurance",
    problem: "Is your family financially protected?",
    solution:
      "Secure your loved ones with the right insurance strategy for every stage of life.",
    benefits: [
      "Term & Whole Life Plans",
      "ULIPs & Endowment Plans",
      "Family Income Protection",
      "Keyman & Business Insurance",
      "Group & Employer-Employee Insurance",
      "Estate & Legacy Planning",
    ],
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    problem: "Medical emergencies can affect your finances.",
    solution:
      "Protect yourself and your family from rising healthcare costs.",
    benefits: [
      "Family Floater",
      "Senior Citizen Plans",
      "Critical Illness",
      "Cashless Hospitalisation",
    ],
  },
  {
    icon: GraduationCap,
    title: "Child Future Planning",
    problem: "Education costs continue to rise.",
    solution:
      "Plan systematically so your child's dreams are never compromised.",
    benefits: [
      "Education Fund",
      "Marriage Planning",
      "Long Term Investments",
      "Goal Tracking",
    ],
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    problem: "Will your savings last after retirement?",
    solution:
      "Build a retirement corpus that supports your desired lifestyle.",
    benefits: [
      "Retirement Income",
      "Corpus Planning",
      "Inflation Protection",
      "Regular Review",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 text-white sm:py-20 lg:py-24">

        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm text-blue-200 sm:text-base">
            Our Services
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:mt-8 sm:text-4xl md:text-5xl lg:text-6xl">
            Financial Solutions Designed Around Your Life
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base text-slate-300 sm:mt-8 sm:text-lg lg:text-xl">
            At AYMHC, we don't sell products.
            We build financial strategies that help families protect,
            grow and preserve wealth for generations.
          </p>

        </div>

      </section>

      {/* Services */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-2 lg:gap-10 lg:px-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 sm:hover:-translate-y-2"
            >
              <service.icon
                className="rounded-2xl bg-blue-100 p-2.5 text-blue-700 sm:p-3"
                size={48}
              />

              <h2 className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl">
                {service.title}
              </h2>

              <p className="mt-5 text-sm font-semibold text-red-500 sm:mt-6 sm:text-base">
                Problem
              </p>

              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                {service.problem}
              </p>

              <p className="mt-5 text-sm font-semibold text-green-600 sm:mt-6 sm:text-base">
                Solution
              </p>

              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                {service.solution}
              </p>

              <div className="mt-6 space-y-2.5 sm:mt-8 sm:space-y-3">

                {service.benefits.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 sm:items-center sm:gap-3"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-green-600 sm:mt-0"
                      size={18}
                    />

                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}

              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:mt-10 sm:text-base"
              >
                Book Consultation

                <ArrowRight size={18} />
              </Link>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-slate-900 py-16 text-white sm:py-20 lg:py-24">

        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">

          <Briefcase
            className="mx-auto text-blue-400"
            size={44}
          />

          <h2 className="mt-6 text-3xl font-bold sm:mt-8 sm:text-4xl lg:text-5xl">
            Every Great Financial Journey Starts With One Conversation
          </h2>

          <p className="mt-6 text-base text-slate-300 sm:mt-8 sm:text-lg lg:text-xl">
            Let's understand your goals and create a strategy that works
            for your family—not just for today, but for the future.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-blue-600 px-8 py-4 text-base font-semibold transition hover:bg-blue-700 sm:mt-10 sm:text-lg"
          >
            Schedule Your Consultation
          </Link>

        </div>

      </section>

    </main>
  );
}
  