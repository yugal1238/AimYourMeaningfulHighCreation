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
    solution: "We create a personalized financial roadmap to help you achieve your life goals with confidence.",
    benefits: ["Cash Flow Planning", "Goal Based Investments", "Retirement Strategy", "Tax Efficient Planning"],
  },
  {
    icon: PiggyBank,
    title: "Mutual Fund Advisory",
    problem: "Savings aren't growing fast enough?",
    solution: "We recommend suitable investment strategies based on your goals and risk profile.",
    benefits: ["SIP Planning", "Lump Sum Investments", "Portfolio Review", "Long Term Wealth Creation"],
  },
  {
    icon: Shield,
    title: "Life Insurance",
    problem: "Is your family financially protected?",
    solution: "Secure your loved ones with the right insurance strategy for every stage of life.",
    benefits: ["Term & Whole Life Plans", "ULIPs & Endowment Plans", "Family Income Protection", "Keyman & Business Insurance", "Estate & Legacy Planning"],
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    problem: "Medical emergencies can affect your finances.",
    solution: "Protect yourself and your family from rising healthcare costs.",
    benefits: ["Family Floater", "Senior Citizen Plans", "Critical Illness", "Cashless Hospitalisation"],
  },
  {
    icon: GraduationCap,
    title: "Child Future Planning",
    problem: "Education costs continue to rise.",
    solution: "Plan systematically so your child's dreams are never compromised.",
    benefits: ["Education Fund", "Marriage Planning", "Long Term Investments", "Goal Tracking"],
  },
  {
    icon: Landmark,
    title: "Retirement Planning",
    problem: "Will your savings last after retirement?",
    solution: "Build a retirement corpus that supports your desired lifestyle.",
    benefits: ["Retirement Income", "Corpus Planning", "Inflation Protection", "Regular Review"],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#F8F9FA] min-h-screen">
      
      {/* Hero */}
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Services
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif mb-6 leading-tight">
            Solutions Designed Around Your Life
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 font-light">
            At AYMHC, we don't sell products. We build financial strategies that help families protect, grow, and preserve wealth for generations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-sm border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#D4AF37]/30 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 rounded-full bg-[#0B1528]/5 flex items-center justify-center mb-6 group-hover:bg-[#0B1528] transition-colors">
                  <Icon className="text-[#0B1528] group-hover:text-[#D4AF37] transition-colors" size={28} />
                </div>

                <h2 className="text-2xl font-serif text-[#0B1528] mb-6">
                  {service.title}
                </h2>

                <div className="mb-4">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Challenge</span>
                  <p className="text-sm text-slate-600 font-light italic">"{service.problem}"</p>
                </div>

                <div className="mb-6 pl-4 border-l-2 border-[#D4AF37]">
                  <span className="block text-xs font-bold text-[#0B1528] uppercase tracking-widest mb-1">Solution</span>
                  <p className="text-sm text-slate-700 font-medium">{service.solution}</p>
                </div>

                <div className="mt-auto space-y-3 pt-6 border-t border-slate-100">
                  {service.benefits.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="shrink-0 text-[#D4AF37] mt-0.5" size={16} />
                      <span className="text-sm text-slate-600 font-light">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-wide text-[#0B1528] group-hover:text-[#D4AF37] transition-colors"
                >
                  Book Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1528] py-20 lg:py-24 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          <Briefcase className="mx-auto text-[#D4AF37] mb-6" size={40} />
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
            Every Great Journey Starts With One Conversation
          </h2>
          <p className="text-lg text-slate-300 font-light mb-10 max-w-2xl mx-auto">
            Let's understand your goals and create a strategy that works for your family—not just for today, but for the future.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#D4AF37] text-[#0B1528] font-bold tracking-wide rounded-sm hover:bg-white hover:scale-105 transition-all"
          >
            Schedule Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}