"use client";

import { useMemo, useState } from "react";

import RetirementInputCard from "@/components/calculators/retirement/CalculatorInputCard";
import RetirementResultCard from "@/components/calculators/retirement/CalculatorResultCard";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";

export default function RetirementCalculatorPage() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retirementAge, setRetirementAge] = useState(60);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [inflation, setInflation] = useState(7);
  const [returnRate, setReturnRate] = useState(12);

  const result = useMemo(() => {
    const yearsRemaining = Math.max(0, retirementAge - currentAge);

    // Calculate future monthly expenses based on inflation
    const futureMonthlyExpenses =
      monthlyExpenses * Math.pow(1 + inflation / 100, yearsRemaining);

    // Calculate Required Corpus (Standard 25x Annual Expenses Rule / 4% Safe Withdrawal)
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
  }, [
    currentAge,
    retirementAge,
    monthlyExpenses,
    inflation,
    returnRate,
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
      <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-900 py-14 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Retirement Planner
          </h1>

          <p className="mt-4 max-w-2xl text-base text-blue-100 sm:mt-5 sm:text-lg lg:text-xl">
            Estimate the corpus you will need to maintain your lifestyle after retirement and discover the monthly SIP required to achieve it.
          </p>

        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

          <RetirementInputCard
            currentAge={currentAge}
            setCurrentAge={setCurrentAge}
            retirementAge={retirementAge}
            setRetirementAge={setRetirementAge}
            monthlyExpenses={monthlyExpenses}
            setMonthlyExpenses={setMonthlyExpenses}
            inflation={inflation}
            setInflation={setInflation}
            returnRate={returnRate}
            setReturnRate={setReturnRate}
          >
            <CalculatorCTA
              title="🏖️ Get My Retirement Plan"
              whatsappMessage={`Hello Chhaya,

I used the AYMHC Retirement Calculator.

Current Age: ${currentAge} Years
Retirement Age: ${retirementAge} Years

Current Monthly Expenses:
₹${monthlyExpenses.toLocaleString("en-IN")}

Inflation: ${inflation}%
Expected Return: ${returnRate}%

Required Retirement Corpus:
${formatCurrency(result.retirementCorpus)}

Required Monthly SIP:
${formatCurrency(result.sip)}

Please help me create a personalized Retirement Plan.`}
            />
          </RetirementInputCard>

          <RetirementResultCard
            retirementCorpus={result.retirementCorpus}
            requiredSip={result.sip}
            yearsRemaining={result.yearsRemaining}
            futureMonthlyExpenses={result.futureMonthlyExpenses}
            currentAge={currentAge}
            retirementAge={retirementAge}
            monthlyExpenses={monthlyExpenses}
            inflation={inflation}
            returnRate={returnRate}
            formatCurrency={formatCurrency}
          />

        </div>
      </section>

    </main>
  );
}
