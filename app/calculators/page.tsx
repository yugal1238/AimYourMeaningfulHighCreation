import Link from "next/link";
import {
  PiggyBank,
  Landmark,
  Calculator,
  GraduationCap,
  Target,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Estimate the future value of your monthly SIP investments.",
    icon: PiggyBank,
    href: "/calculators/sip",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "EMI Calculator",
    description: "Calculate monthly EMI for home, car or personal loans.",
    icon: Calculator,
    href: "/calculators/emi",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Retirement Planner",
    description: "Know how much wealth you'll need after retirement.",
    icon: Landmark,
    href: "/calculators/retirement",
    color: "bg-orange-100 text-orange-700",
  },
  {
    title: "Goal Planner",
    description: "Plan for future financial goals with confidence.",
    icon: Target,
    href: "/calculators/goal-planner",
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Insurance Calculator",
    description: "Estimate your ideal life cover based on your family's needs.",
    icon: ShieldCheck,
    href: "/calculators/insurance",
    color: "bg-teal-100 text-teal-700",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="bg-slate-50 min-h-screen">

      <section className="bg-gradient-to-r from-blue-700 to-slate-900 py-10 sm:py-14 md:py-20 text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Financial Calculators
          </h1>

          <p className="mt-3 sm:mt-4 md:mt-6 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-blue-100">
            Smart tools to help you make better financial decisions.
          </p>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

          {calculators.map((item) => {

            const Icon = item.icon;

            return (

              <Link
                key={item.title}
                href={item.href}
                className="rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-6 md:p-8 shadow hover:shadow-xl transition hover:-translate-y-2 border"
              >

                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center ${item.color}`}>

                  <Icon size={28} className="sm:hidden" />
                  <Icon size={30} className="hidden sm:block md:hidden" />
                  <Icon size={34} className="hidden md:block" />

                </div>

                <h2 className="mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl md:text-2xl font-bold">

                  {item.title}

                </h2>

                <p className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base text-slate-600">

                  {item.description}

                </p>

                <div className="mt-5 sm:mt-6 md:mt-8 flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base">

                  Open Calculator

                  <ArrowRight size={16} className="sm:hidden" />
                  <ArrowRight size={18} className="hidden sm:block" />

                </div>

              </Link>

            );

          })}

        </div>

      </section>

    </main>
  );
}