"use client";

import { useMemo, useState } from "react";

import InsuranceInputCard from "@/components/calculators/insurance/CalculatorInputCard";
import InsuranceResultCard from "@/components/calculators/insurance/CalculatorResultCard";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";
import Footer from "@/components/layout/Footer";

export default function InsuranceCalculatorPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [outstandingLoans, setOutstandingLoans] = useState(2500000);
  const [existingSavings, setExistingSavings] = useState(1000000);
  const [existingCover, setExistingCover] = useState(5000000);

  const result = useMemo(() => {
    const yearsToProtect = Math.max(0, retirementAge - currentAge);
    const annualExpenses = monthlyExpenses * 12;

    const incomeReplacement = annualExpenses * yearsToProtect;
    const totalCoverRequired = Math.max(0, incomeReplacement + outstandingLoans - existingSavings);
    const additionalCoverNeeded = Math.max(0, totalCoverRequired - existingCover);

    return {
      incomeReplacement,
      totalCoverRequired,
      additionalCoverNeeded,
    };
  }, [
    currentAge,
    retirementAge,
    monthlyExpenses,
    outstandingLoans,
    existingSavings,
    existingCover,
  ]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 py-10 sm:py-14 md:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Term Insurance Calculator
          </h1>
          <p className="mt-3 sm:mt-4 md:mt-5 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-blue-100">
            Calculate your Human Life Value to ensure your family's lifestyle is protected and liabilities are covered in your absence.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">

          <InsuranceInputCard
            currentAge={currentAge}
            setCurrentAge={setCurrentAge}
            retirementAge={retirementAge}
            setRetirementAge={setRetirementAge}
            monthlyExpenses={monthlyExpenses}
            setMonthlyExpenses={setMonthlyExpenses}
            outstandingLoans={outstandingLoans}
            setOutstandingLoans={setOutstandingLoans}
            existingSavings={existingSavings}
            setExistingSavings={setExistingSavings}
            existingCover={existingCover}
            setExistingCover={setExistingCover}
          >
            <CalculatorCTA
              title="🛡️ Get My Protection Plan"
              whatsappMessage={`Hello Chhaya,

I used the AYHC FAMILY PROTECTION Insurance Calculator.

Age: ${currentAge} (Protecting till ${retirementAge})
Monthly Expenses: ₹${monthlyExpenses.toLocaleString("en-IN")}
Outstanding Loans: ₹${outstandingLoans.toLocaleString("en-IN")}
Existing Savings: ₹${existingSavings.toLocaleString("en-IN")}
Existing Cover: ₹${existingCover.toLocaleString("en-IN")}

Total Ideal Cover:
${formatCurrency(result.totalCoverRequired)}

Additional Cover Gap:
${formatCurrency(result.additionalCoverNeeded)}

Please help me evaluate the best Term/Employer-Employee Insurance options to bridge this gap.`}
            />
          </InsuranceInputCard>

          <InsuranceResultCard
            totalCoverRequired={result.totalCoverRequired}
            additionalCoverNeeded={result.additionalCoverNeeded}
            incomeReplacement={result.incomeReplacement}
            outstandingLoans={outstandingLoans}
            existingSavings={existingSavings}
            existingCover={existingCover}
            formatCurrency={formatCurrency}
          />

        </div>
      </section>

      <Footer />
    </main>
  );
}