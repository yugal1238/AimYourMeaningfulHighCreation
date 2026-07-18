"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";
export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const months = years * 12;
    const monthlyRate = interestRate / 12 / 100;

    let emi = 0;

    if (monthlyRate === 0) {
      emi = loanAmount / months;
    } else {
      emi =
        (loanAmount *
          monthlyRate *
          Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  }, [loanAmount, interestRate, years]);

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
          <h1 className="text-5xl font-bold">EMI Calculator</h1>
          <p className="mt-5 text-xl text-blue-100 max-w-2xl">
            Calculate your monthly EMI for Home, Car and Personal Loans.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Loan Details
            </h2>

            <div className="space-y-8">

              <div>
                <label>Loan Amount</label>

                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e)=>setLoanAmount(Number(e.target.value))}
                  className="w-full mt-2 border rounded-xl p-3"
                />

                <input
                  type="range"
                  min="100000"
                  max="50000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e)=>setLoanAmount(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              <div>
                <label>Interest Rate (%)</label>

                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e)=>setInterestRate(Number(e.target.value))}
                  className="w-full mt-2 border rounded-xl p-3"
                />

                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={(e)=>setInterestRate(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

              <div>
                <label>Loan Tenure (Years)</label>

                <input
                  type="number"
                  value={years}
                  onChange={(e)=>setYears(Number(e.target.value))}
                  className="w-full mt-2 border rounded-xl p-3"
                />

                <input
                  type="range"
                  min="1"
                  max="35"
                  value={years}
                  onChange={(e)=>setYears(Number(e.target.value))}
                  className="w-full mt-3"
                />
              </div>

            </div>

          </div>

          <div className="bg-white rounded-3xl shadow p-8">

            <h2 className="text-3xl font-bold mb-8">
              Loan Summary
            </h2>

            <div className="space-y-6">

              <div className="bg-blue-50 rounded-2xl p-6">
                <p>Monthly EMI</p>
                <h3 className="text-4xl font-bold text-blue-700 mt-2">
                  {money(result.emi)}
                </h3>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <p>Total Interest</p>
                <h3 className="text-3xl font-bold text-red-600 mt-2">
                  {money(result.totalInterest)}
                </h3>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <p>Total Payment</p>
                <h3 className="text-3xl font-bold text-green-700 mt-2">
                  {money(result.totalPayment)}
                </h3>
              </div>

            </div>

            <div className="mt-8 bg-slate-100 rounded-2xl p-6 leading-8">

              Your monthly EMI will be approximately

              <strong className="text-blue-700">
                {" "}{money(result.emi)}
              </strong>

              over

              <strong>
                {" "}{years} years
              </strong>

              at

              <strong>
                {" "}{interestRate}% p.a.
              </strong>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-slate-900 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Planning a Home Loan?
        </h2>

        <p className="mt-6 text-slate-300 text-xl">
          Get expert guidance on loan selection, insurance and financial planning.
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