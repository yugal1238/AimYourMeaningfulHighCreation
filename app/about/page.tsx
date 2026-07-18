import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  HeartHandshake,
  ArrowRight,
  Baby,
  Wallet,
  PiggyBank,
  Home,
  Building2,
  Landmark,
  Gem,
  HandHeart,
  CheckCircle2,
} from "lucide-react";

const milestones = [
  { year: "2006", title: "Life Insurance Advisor", desc: "Began with a simple belief: every family deserves financial security." },
  { year: "2016", title: "Health Protection", desc: "Expanded into health insurance to protect families more completely." },
  { year: "2020", title: "Mutual Fund Advisory", desc: "Added SIPs and goal-based investing to help clients create real wealth." },
  { year: "2022", title: "Wellness Solutions", desc: "Introduced health and wellness through Kangen Water." },
  { year: "Today", title: "AYMHC", desc: "One trusted roof for every financial milestone, from birth to beyond." },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    desc: "Long-term relationships built on transparency and ethical advice.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    desc: "Helping clients build wealth with disciplined financial planning.",
  },
  {
    icon: HeartHandshake,
    title: "Protection",
    desc: "Protecting every family's future through comprehensive risk management.",
  },
];

const lifeStages = [
  {
    icon: Baby,
    title: "Birth & Child Planning",
    items: [
      "Child Education Planning",
      "Sukanya Samriddhi",
      "Child Future Planning",
      "Family Protection"
    ],
  },
  {
    icon: Wallet,
    title: "Career & Income Planning",
    items: [
      "Salary Protection",
      "Income Planning",
      "Emergency Fund",
      "Tax Planning"
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment & Wealth Creation",
    items: [
      "Mutual Funds",
      "SIP",
      "Lumpsum Investments",
      "Portfolio Management",
      "Goal Based Planning"
    ],
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Risk Management",
    items: [
      "Life Insurance",
      "Term Insurance",
      "Health Insurance",
      "Mediclaim",
      "General Insurance",
      "Critical Illness",
      "Personal Accident Cover",
      "MWP Act Insurance"
    ],
  },
  {
    icon: Building2,
    title: "Corporate & Business Solutions",
    items: [
      "Keyman Insurance",
      "Employer Employee Insurance",
      "Partnership Insurance",
      "Group Insurance",
      "Business Continuity Planning",
      "Working Capital Planning"
    ],
  },
  {
    icon: Home,
    title: "Loans & Property",
    items: [
      "Home Loan",
      "Business Loan",
      "Mortgage Loan",
      "Loan Against Property",
      "Commercial Property Advisory"
    ],
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    items: [
      "Retirement Corpus",
      "Pension Planning",
      "Passive Income",
      "Senior Citizen Planning"
    ],
  },
  {
    icon: Gem,
    title: "Estate, Will & Wealth Preservation",
    items: [
      "Will Planning",
      "Estate Planning",
      "Succession Planning",
      "Wealth Transfer",
      "Nomination Planning",
      "Family Wealth Structuring"
    ],
  },
  {
    icon: HandHeart,
    title: "After-Life Financial Assistance",
    items: [
      "Insurance Claim Settlement",
      "Investment Transmission",
      "Nominee Assistance",
      "Estate Execution Guidance",
      "Wealth Transfer Support"
    ],
  },
];

const whyChoose = [
  "20+ Years of Financial Experience",
  "Award in Financial Planning (CII – UK)",
  "Complete Financial Planning Under One Roof",
  "Mutual Fund & Wealth Management",
  "Life, Health & General Insurance",
  "Employer Employee Insurance",
  "MWP Act Financial Protection",
  "Retirement Planning",
  "Estate & Will Planning",
  "Business Financial Planning",
  "Tax Saving Strategies",
  "Lifetime Relationship & Claim Support",
];

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-16 sm:py-20 lg:py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:px-8">

          <div>

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm text-blue-200">
              About AYMHC
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Aim Your Meaningful High Creation
            </h1>

            <p className="mt-6 text-lg italic text-blue-200 sm:text-xl">
              "Vichaar Tamaro, Aakaar Amaro"
            </p>
            <p className="mt-1 text-base text-blue-300 sm:text-lg">
              Your Thought, Our Shape.
            </p>

            <p className="mt-8 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              At AYMHC, we don't believe in one-time transactions.

We believe in lifelong financial relationships.

From the birth of a child to education planning, wealth creation, insurance protection, retirement planning, business succession, Will Planning, Estate Planning, Employer Employee Insurance, MWP Act protection, claim settlement and wealth transfer, we remain your trusted financial partner at every stage of life.

Your Financial Goals are My Responsibility.
Vichaar Tamaro, Aakaar Amaro.
Your Thought, Our Shape.</p>

          </div>

          <div className="flex justify-center">

            <Image
              src="/hero-chhaya.jpg"
              alt="Chhaya Harshad Bhimjiyani"
              width={520}
              height={620}
              priority
              className="w-full max-w-[280px] rounded-[28px] object-cover shadow-2xl sm:max-w-[360px] sm:rounded-[36px] lg:max-w-[420px]"
            />

          </div>

        </div>

      </section>

      {/* Meet the Founder */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
              Meet the Founder
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Chhaya Harshad Bhimjiyani
            </h2>
            <p className="mt-2 text-base text-slate-500 sm:text-lg">
              Founder &amp; Chief Financial Planner, Award in Financial Planning (CII – United Kingdom)

Wealth Management Consultant • Estate & Will Planning Specialist
            </p>
          </div>

          {/* Bio + values card */}

          <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-14">

            <div>

              <blockquote className="border-l-4 border-blue-600 pl-5 text-lg italic leading-8 text-slate-700 sm:text-xl">
                "Every financial dream begins with an idea. At AYMHC, your
                aspirations become our responsibility."
              </blockquote>
            
              <p className="mt-8 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                I am <strong>Chhaya Harshad Bhimjiyani</strong>, a Financial
                Planner and Wealth Consultant with over 20 years of experience
                helping individuals, families, professionals and business
                owners achieve financial confidence.
              </p>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                My journey began in 2006 as a Life Insurance Advisor with a
                simple belief: every family deserves financial security. As I
                worked with more families, I realized true financial planning
                extends far beyond insurance — people need guidance through
                every stage of life. That vision became AYMHC, bringing every
                essential financial solution together under one trusted roof.
              </p>

              <div className="mt-8 flex gap-4">

                <div className="h-fit rounded-2xl bg-blue-50 p-4 sm:p-5">
                  <Award className="text-blue-600" size={30} />
                </div>

                <div>

                  <h3 className="text-lg font-semibold sm:text-xl">
                    Professional Financial Guidance
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Personalized planning for every stage of life.
                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">

              <h3 className="text-xl font-bold sm:text-2xl">
                Why Clients Choose AYMHC
              </h3>

              <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">

                {values.map((value) => (
                  <div key={value.title} className="flex gap-4 sm:gap-5">

                    <value.icon className="mt-1 shrink-0 text-blue-600" size={28} />

                    <div>

                      <h4 className="text-lg font-semibold sm:text-xl">
                        {value.title}
                      </h4>

                      <p className="mt-1 text-slate-600 sm:mt-2">
                        {value.desc}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* One partner for every stage of life */}

          <div className="mt-20 sm:mt-24">

            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                One Financial Partner for Every Stage of Life
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
                Financial planning is not about selling insurance policies or investment products.

It is about understanding your life, your family, your dreams and your responsibilities.

Every recommendation at AYMHC begins with understanding your complete financial picture. Based on your goals, I create a personalized roadmap that protects your income, grows your wealth, minimizes financial risks, optimizes taxes, prepares for retirement, safeguards your business and ensures smooth wealth transfer to your loved ones.

My objective is simple—to become your family's lifelong Financial Partner.</p>
            </div>

            <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

              {lifeStages.map((stage) => (
                <div
                  key={stage.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <stage.icon className="text-blue-600" size={28} />
                  <h4 className="mt-4 text-lg font-semibold text-slate-900">
                    {stage.title}
                  </h4>
                  <ul className="mt-3 space-y-1.5">
                    {stage.items.map((item) => (
                      <li key={item} className="text-sm leading-6 text-slate-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

          {/* Approach */}

          <div className="mt-20 grid gap-10 rounded-3xl bg-slate-900 p-6 text-white sm:mt-24 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">

            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                My Approach
              </h3>
              <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                I don't believe in selling products. I believe in
                understanding people. Every recommendation begins by
                understanding your goals, responsibilities, family's needs,
                dreams, challenges and future aspirations — only then do I
                create a personalized financial roadmap aligned with your life
                and long-term vision.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-blue-300">
                Why families choose AYMHC
              </h4>
              <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {whyChoose.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-slate-200 sm:text-base">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-blue-400" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Promise / closing */}

          <div className="mt-20 text-center sm:mt-24">

            <Landmark className="mx-auto text-blue-600" size={36} />

            <h3 className="mt-5 text-2xl font-bold text-slate-900 sm:text-3xl">
              Your Financial Goals Are My Responsibility
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              At AYMHC, we don't simply offer financial products — we become
              your lifelong financial partner, helping you navigate every
              financial decision from birth, through every stage of life, and
              beyond, so that your family's future remains secure for
              generations.
            </p>

            <blockquote className="mx-auto mt-8 max-w-xl text-lg italic text-slate-500 sm:text-xl">
              "Vichaar Tamaro, Aakaar Amaro"
              <span className="mt-1 block text-base not-italic text-slate-400 sm:text-lg">
                Your Thought, Our Shape.
              </span>
            </blockquote>

          </div>

        </div>

      </section>

      {/* Journey */}

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="text-center">

            <h2 className="text-3xl font-bold sm:text-4xl">
              Our Journey
            </h2>

            <p className="mt-4 text-base text-slate-600 sm:text-lg">
              20+ years of building trust, one family at a time.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-5">

            {milestones.map((item) => (

              <div
                key={item.year}
                className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
              >

                <p className="font-bold text-blue-600">
                  {item.year}
                </p>

                <h3 className="mt-4 text-lg font-bold sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 sm:text-base">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 sm:py-20 lg:py-24">

        <div className="mx-auto max-w-5xl rounded-[32px] bg-blue-600 px-6 py-12 text-center text-white sm:rounded-[40px] sm:px-10 sm:py-16">

          <Briefcase className="mx-auto mb-6" size={40} />

          <h2 className="text-3xl font-bold sm:text-4xl">
            Let's Build Your Financial Future
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base text-blue-100 sm:text-lg">
            Whether you're starting your investment journey or reviewing your
            existing portfolio, AYMHC is here to guide you.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Book Your Consultation
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

    </main>
  );
}
