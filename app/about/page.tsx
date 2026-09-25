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
    items: ["Child Education Planning", "Sukanya Samriddhi", "Child Future Planning", "Family Protection"],
  },
  {
    icon: Wallet,
    title: "Career & Income",
    items: ["Salary Protection", "Income Planning", "Emergency Fund", "Tax Planning"],
  },
  {
    icon: TrendingUp,
    title: "Investment & Wealth",
    items: ["Mutual Funds", "SIP", "Portfolio Management", "Goal Based Planning"],
  },
  {
    icon: ShieldCheck,
    title: "Insurance & Risk",
    items: ["Life & Term Insurance", "Health Insurance", "Critical Illness", "MWP Act Insurance"],
  },
  {
    icon: Building2,
    title: "Corporate Solutions",
    items: ["Keyman Insurance", "Employer Employee", "Partnership Insurance", "Business Continuity"],
  },
  {
    icon: Home,
    title: "Loans & Property",
    items: ["Home Loan", "Business Loan", "Mortgage Loan", "Commercial Property"],
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    items: ["Retirement Corpus", "Pension Planning", "Passive Income", "Senior Citizen Planning"],
  },
  {
    icon: Gem,
    title: "Estate & Will",
    items: ["Will Planning", "Estate Planning", "Succession Planning", "Wealth Transfer"],
  },
  {
    icon: HandHeart,
    title: "After-Life Assistance",
    items: ["Claim Settlement", "Investment Transmission", "Nominee Assistance", "Wealth Transfer"],
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
    <main className="bg-[#F8F9FA] min-h-screen">

      {/* Hero */}
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
                About AYMHC
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light font-serif mb-6 leading-tight">
                Aim Your Meaningful High Creation
              </h1>
              <p className="text-xl text-[#D4AF37] italic font-light mb-8">
                "Vichaar Tamaro, Aakaar Amaro" <br/>
                <span className="text-slate-400 not-italic text-lg">Your Thought, Our Shape.</span>
              </p>
              <p className="text-lg leading-relaxed text-slate-300 font-light">
                At AYMHC, we don't believe in one-time transactions. We believe in lifelong financial relationships. From the birth of a child to education planning, wealth creation, insurance protection, retirement planning, and wealth transfer, we remain your trusted financial partner at every stage of life.
              </p>
            </div>
            <div className="relative lg:ml-auto w-full flex justify-center lg:justify-end">
              <div className="relative rounded-sm overflow-hidden border border-slate-800 shadow-2xl w-full max-w-[420px] h-[500px] lg:h-[550px]">
                <div className="absolute inset-0 bg-[#0B1528]/10 mix-blend-overlay z-10 pointer-events-none" />
                <Image
                  src="/hero-chhaya.JPG"
                  alt="Chhaya Harshad Bhimjiyani"
                  fill
                  priority
                  className="object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-3">
              Meet the Founder
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif font-light leading-tight mb-6 text-[#0B1528]">
              Chhaya Harshad Bhimjiyani
            </h3>
            <p className="text-lg text-slate-600 font-light">
              Founder & Chief Financial Planner, Award in Financial Planning (CII – United Kingdom). Wealth Management Consultant & Estate Specialist.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <blockquote className="border-l-2 border-[#D4AF37] pl-6 text-xl italic font-serif leading-relaxed text-[#0B1528] mb-10">
                "Every financial dream begins with an idea. At AYMHC, your aspirations become our responsibility."
              </blockquote>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed">
                <p>
                  I am <strong>Chhaya Harshad Bhimjiyani</strong>, a Financial Planner and Wealth Consultant with over 20 years of experience helping individuals, families, professionals and business owners achieve financial confidence.
                </p>
                <p>
                  My journey began in 2006 as a Life Insurance Advisor with a simple belief: every family deserves financial security. As I worked with more families, I realized true financial planning extends far beyond insurance — people need guidance through every stage of life. That vision became AYMHC, bringing every essential financial solution together under one trusted roof.
                </p>
              </div>
            </div>

            <div className="rounded-sm border border-slate-100 bg-[#F8F9FA] p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-serif text-[#0B1528] mb-8">
                Why Clients Choose AYMHC
              </h3>
              <div className="space-y-8">
                {values.map((value) => (
                  <div key={value.title} className="flex gap-5">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                      <value.icon className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#0B1528] mb-1">{value.title}</h4>
                      <p className="text-slate-600 font-light text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One partner for every stage of life */}
      <section className="py-20 lg:py-28 bg-[#F8F9FA] border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
            <h3 className="text-3xl md:text-4xl font-serif font-light text-[#0B1528] mb-6">
              One Financial Partner for Every Stage of Life
            </h3>
            <p className="text-lg text-slate-600 font-light leading-relaxed">
              Financial planning is not about selling insurance policies or investment products. It is about understanding your life, your family, your dreams and your responsibilities. My objective is simple—to become your family's lifelong Financial Partner.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {lifeStages.map((stage) => (
              <div key={stage.title} className="rounded-sm border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all group">
                <stage.icon className="text-[#0B1528] group-hover:text-[#D4AF37] transition-colors mb-6" size={32} />
                <h4 className="text-xl font-serif text-[#0B1528] mb-4">
                  {stage.title}
                </h4>
                <ul className="space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-28 bg-[#0B1528] text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">Our Philosophy</h2>
              <h3 className="text-3xl md:text-4xl font-serif font-light mb-6">
                My Approach
              </h3>
              <p className="text-lg leading-relaxed text-slate-300 font-light mb-10">
                I don't believe in selling products. I believe in understanding people. Every recommendation begins by understanding your goals, responsibilities, family's needs, dreams, challenges and future aspirations — only then do I create a personalized financial roadmap aligned with your life and long-term vision.
              </p>
              
              <div className="border-t border-white/10 pt-8">
                <Landmark className="text-[#D4AF37] mb-6" size={36} />
                <h3 className="text-2xl font-serif mb-4">Your Goals Are My Responsibility</h3>
                <p className="text-slate-400 font-light">
                  We become your lifelong partner, helping you navigate every decision so that your family's future remains secure for generations.
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm backdrop-blur-sm">
              <h4 className="text-xl font-serif text-[#D4AF37] mb-8">
                Why families choose AYMHC
              </h4>
              <ul className="space-y-4">
                {whyChoose.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                    <CheckCircle2 className="shrink-0 text-[#D4AF37] mt-0.5" size={18} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#0B1528] mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 font-light">
              20+ years of building trust, one family at a time.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {milestones.map((item) => (
              <div key={item.year} className="rounded-sm border border-slate-100 bg-[#F8F9FA] p-6 text-center hover:border-[#D4AF37]/30 transition-colors">
                <p className="font-bold text-[#D4AF37] text-xl mb-3">
                  {item.year}
                </p>
                <h3 className="font-serif text-[#0B1528] text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-[#0B1528] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <Briefcase className="mx-auto mb-6 text-[#D4AF37]" size={40} />
          <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
            Let's Build Your Financial Future
          </h2>
          <p className="text-lg text-slate-300 font-light mb-10 max-w-2xl mx-auto">
            Whether you're starting your investment journey or reviewing your existing portfolio, AYMHC is here to guide you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#D4AF37] text-[#0B1528] font-bold tracking-wide rounded-sm hover:bg-white hover:scale-105 transition-all"
          >
            Book Your Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
