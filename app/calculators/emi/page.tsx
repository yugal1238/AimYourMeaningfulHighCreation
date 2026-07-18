"use client";

import { useMemo, useState } from "react";
import CalculatorInputCard from "@/components/calculators/emi/CalculatorInputCard";
import CalculatorResultCard from "@/components/calculators/emi/CalculatorResultCard";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";

export default function EMICalculatorPage() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const result = useMemo(() => {
    const monthlyRate = interestRate / 12 / 100;
    const months = years * 12;

    const emi =
      (loanAmount *
        monthlyRate *
        Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loanAmount;

    return {
      emi: Math.round(emi),
      interest: Math.round(totalInterest),
      total: Math.round(totalPayment),
    };
  }, [loanAmount, interestRate, years]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            EMI Calculator
          </h1>

          <p className="mt-4 max-w-2xl text-base text-blue-100 sm:mt-5 sm:text-lg lg:text-xl">
            Calculate your monthly EMI, total interest payable and total repayment instantly.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

          <CalculatorInputCard
            loanAmount={loanAmount}
            setLoanAmount={setLoanAmount}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            years={years}
            setYears={setYears}
          >
            <CalculatorCTA
              title="🏦 Get My Loan Plan"
              whatsappMessage={`Hello Chhaya,

I used the AYMHC EMI Calculator.

Loan Amount: ₹${loanAmount.toLocaleString("en-IN")}
Interest Rate: ${interestRate}%
Loan Tenure: ${years} Years

Monthly EMI: ${formatCurrency(result.emi)}
Total Interest: ${formatCurrency(result.interest)}
Total Payment: ${formatCurrency(result.total)}

Please help me choose the best loan option.`}
            />
          </CalculatorInputCard>

          <CalculatorResultCard
            emi={result.emi}
            interest={result.interest}
            total={result.total}
            loanAmount={loanAmount}
            interestRate={interestRate}
            years={years}
            formatCurrency={formatCurrency}
          />

        </div>
      </section>

    </main>
  );
}
