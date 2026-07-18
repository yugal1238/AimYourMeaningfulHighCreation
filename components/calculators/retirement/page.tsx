"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [inflation, setInflation] = useState(7);
  const [returnRate, setReturnRate] = useState(12);

  const result = useMemo(() => {
    const yearsRemaining = Math.max(0, retirementAge - currentAge);

    const futureMonthlyExpenses =
      monthlyExpenses * Math.pow(1 + inflation / 100, yearsRemaining);

    const futureAnnualExpenses = futureMonthlyExpenses * 12;
    const retirementCorpus = futureAnnualExpenses * 25; 

    const monthlyRate = returnRate / 12 / 100;
    const months = yearsRemaining * 12;

    let sip = 0;

    if (monthlyRate > 0 && months > 0) {
      sip =
        retirementCorpus /
        ((((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate)));
    }

    return {
      yearsRemaining,
      futureMonthlyExpenses: Math.round(futureMonthlyExpenses),
      retirementCorpus: Math.round(retirementCorpus),
      sip: Math.round(sip),
    };
  }, [currentAge, retirementAge, monthlyExpenses, inflation, returnRate]);

  const money = (n: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <main className="min-h-screen bg-slate-50">

      <section className="bg-gradient-to-r from-cyan-700 via-blue-700 to-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl font-bold">Retirement Calculator</h1>
          <p className="mt-5 text-xl text-blue-100 max-w-2xl">
            Estimate your required retirement corpus and calculate the monthly SIP needed to maintain your lifestyle.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Retirement Details
            </h2>

            <div className="space-y-8">

              <div>
                <label className="flex justify-between">
                  <span>Current Age</span>
                  <span className="font-semibold">{currentAge} Years</span>
                </label>
                <input
                  type="range"
                  min="18"
                  max="65"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              <div>
                <label className="flex justify-between">
                  <span>Target Retirement Age</span>
                  <span className="font-semibold">{retirementAge} Years</span>
                </label>
                <input
                  type="range"
                  min="40"
                  max="75"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              <div>
                <label className="flex justify-between">
                  <span>Current Monthly Expenses</span>
                  <span className="font-semibold">{money(monthlyExpenses)}</span>
                </label>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              <div>
                <label className="flex justify-between">
                  <span>Expected Inflation Rate (%)</span>
                  <span className="font-semibold">{inflation}%</span>
                </label>
                <input
                  type="range"
                  min="4"
                  max="15"
                  step="0.5"
                  value={inflation}
                  onChange={(e) => setInflation(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              <div>
                <label className="flex justify-between">
                  <span>Expected Return Rate (%)</span>
                  <span className="font-semibold">{returnRate}%</span>
                </label>
                <input
                  type="range"
                  min="8"
                  max="20"
                  step="0.5"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Retirement Summary
            </h2>

            <div className="space-y-6">

              <div className="bg-blue-50 rounded-2xl p-6">
                <p>Required Retirement Corpus</p>
                <h3 className="text-4xl font-bold text-blue-700 mt-2">
                  {money(result.retirementCorpus)}
                </h3>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <p>Required Monthly SIP</p>
                <h3 className="text-3xl font-bold text-green-700 mt-2">
                  {money(result.sip)}
                </h3>
              </div>

              <div className="bg-purple-50 rounded-2xl p-6">
                <p>Est. Monthly Expenses at Retirement</p>
                <h3 className="text-3xl font-bold text-purple-700 mt-2">
                  {money(result.futureMonthlyExpenses)}
                </h3>
              </div>

            </div>

            <div className="mt-8 bg-slate-100 rounded-2xl p-6 leading-8 text-slate-700">
              You have 
              <strong className="text-blue-700"> {result.yearsRemaining} years </strong> 
              left to retire. To accumulate the required corpus of 
              <strong className="text-blue-700"> {money(result.retirementCorpus)}</strong>, 
              you need to start a monthly SIP of 
              <strong className="text-green-700"> {money(result.sip)} </strong> 
              assuming a return of 
              <strong> {returnRate}% p.a.</strong>
            </div>

          </div>

        </div>

      </section>

      <section className="bg-slate-900 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to build your Retirement Corpus?
        </h2>

        <p className="mt-6 text-slate-300 text-xl">
          Get expert guidance on financial planning and mutual fund investments.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          <a
            href="https://wa.me/918850391909"
            className="bg-green-500 px-8 py-4 rounded-full font-semibold hover:bg-green-600"
          >
            💬 Talk to an Advisor
          </a>

          <Link
            href="/portfolio-review"
            className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black"
          >
            Free Portfolio Review
          </Link>

        </div>

      </section>

    </main>
  );
}