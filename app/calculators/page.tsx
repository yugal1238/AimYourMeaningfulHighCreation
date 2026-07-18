import Link from "next/link";

const calculators = [
  {
    title: "SIP Calculator",
    description: "Estimate wealth through Systematic Investment Plans.",
    href: "/calculators/sip",
  },
  {
    title: "EMI Calculator",
    description: "Calculate your monthly loan EMI.",
    href: "/calculators/emi",
  },
  {
    title: "Retirement Calculator",
    description: "Know how much you need for retirement.",
    href: "/calculators/retirement",
  },
  {
    title: "Goal Planner",
    description: "Plan your future financial goals.",
    href: "/calculators/goal-planner",
  },
  {
    title: "Insurance Calculator",
    description: "Estimate your ideal insurance cover.",
    href: "/calculators/insurance",
  },
];

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-r from-blue-700 to-slate-900 py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Financial Calculators
          </h1>
          <p className="mt-4 text-base text-blue-100 sm:text-lg lg:text-xl">
            Use our smart financial calculators to plan your future.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {calculators.map((calculator) => (
            <Link
              key={calculator.title}
              href={calculator.href}
              className="rounded-2xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                {calculator.title}
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-base">
                {calculator.description}
              </p>

              <div className="mt-5 inline-block rounded-full bg-blue-600 px-5 py-2 text-sm text-white sm:mt-6 sm:text-base">
                Open Calculator →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
