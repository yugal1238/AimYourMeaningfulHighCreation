import Link from "next/link";
import { Search, PenTool, Rocket, ShieldCheck, RefreshCw, ArrowRight, Briefcase } from "lucide-react";

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discover & Assess",
    desc: "We begin with a deep dive into your current financial health. We listen to your dreams, understand your responsibilities, and identify any existing gaps in your wealth or protection.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Design the Roadmap",
    desc: "Using our expertise, we craft a personalized, comprehensive financial strategy. This isn't a one-size-fits-all plan—it is meticulously tailored to your unique life stage and risk appetite.",
  },
  {
    step: "03",
    icon: Rocket,
    title: "Implement Strategy",
    desc: "We help you execute the plan smoothly. Whether it is allocating mutual funds, starting SIPs, or structuring debt, we handle the complex setup so you don't have to.",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Protect & Insure",
    desc: "Wealth creation is meaningless without wealth protection. We secure your human life value, health, and assets against unforeseen circumstances to ensure your family is never vulnerable.",
  },
  {
    step: "05",
    icon: RefreshCw,
    title: "Review & Adapt",
    desc: "Life changes, and so should your financial plan. We conduct regular portfolio reviews, adapting your strategy to new milestones like marriage, a new child, or retirement.",
  },
];

export default function FinancialPlanningPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      
      {/* Hero Section */}
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Methodology
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif mb-6 leading-tight">
            The 5-Step Planning Process
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 font-light">
            We don't just sell products. We use a structured, disciplined approach to build a financial fortress around your family.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 lg:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 relative">
          
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute top-0 left-[45px] w-0.5 h-full bg-[#D4AF37]/20 z-0" />

          {processSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 group">
                
                {/* Step Number & Icon */}
                <div className="flex items-center gap-6 md:w-32 shrink-0">
                  <div className="w-24 h-24 rounded-full bg-white border border-slate-200 shadow-sm flex flex-col items-center justify-center shrink-0 group-hover:border-[#D4AF37]/50 group-hover:shadow-md transition-all">
                    <Icon className="text-[#0B1528] mb-1" size={28} />
                    <span className="text-[#D4AF37] font-bold text-sm tracking-widest">STEP {item.step}</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="bg-white rounded-sm border border-slate-200 p-8 shadow-sm flex-1 hover:border-[#D4AF37]/30 transition-colors relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h3 className="text-2xl font-serif text-[#0B1528] mb-3">{item.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{item.desc}</p>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0B1528] py-20 lg:py-24 text-white text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Briefcase className="mx-auto text-[#D4AF37] mb-6" size={40} />
          <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">
            Ready to Take Step 01?
          </h2>
          <p className="text-lg text-slate-300 font-light mb-10">
            Let's sit down and discuss your financial dreams. No pressure, no obligations—just a clear assessment of where you stand today.
          </p>
          <Link
            href="/portfolio-review"
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#D4AF37] text-[#0B1528] font-bold tracking-wide rounded-sm hover:bg-white hover:scale-105 transition-all"
          >
            Start Your Financial Plan
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </main>
  );
}
