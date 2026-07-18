"use client";

import { useMemo, useState } from "react";

import GoalInputCard from "@/components/calculators/goal-planner/CalculatorInputCard";
import GoalResultCard from "@/components/calculators/goal-planner/CalculatorResultCard";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";

export default function GoalCalculatorPage() {
  const [goalName, setGoalName] = useState("Dream Vacation");
  const [currentCost, setCurrentCost] = useState(500000);
  const [years, setYears] = useState(5);
  const [inflation, setInflation] = useState(7);
  const [returnRate, setReturnRate] = useState(12);

  const result = useMemo(() => {
    // Calculate future cost of the goal based on inflation
    const futureCost = currentCost * Math.pow(1 + inflation / 100, years);

    const monthlyRate = returnRate / 12 / 100;
    const months = years * 12;

    let sip = 0;

    // Calculate Required Monthly SIP
    if (monthlyRate > 0 && months > 0) {
      sip =
        futureCost /
        ((((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate)));
    } else if (monthlyRate === 0) {
      sip = futureCost / months;
    }

    const totalInvestment = sip * months;

    return {
      futureCost: Math.round(futureCost),
      sip: Math.round(sip),
      totalInvestment: Math.round(totalInvestment),
    };
  }, [currentCost, years, inflation, returnRate]);

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
            Financial Goal Planner
          </h1>
          <p className="mt-4 max-w-2xl text-base text-blue-100 sm:mt-5 sm:text-lg lg:text-xl">
            Define your financial goals, factor in inflation, and discover exactly how much you need to invest every month to achieve them.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

          <GoalInputCard
            goalName={goalName}
            setGoalName={setGoalName}
            currentCost={currentCost}
            setCurrentCost={setCurrentCost}
            years={years}
            setYears={setYears}
            inflation={inflation}
            setInflation={setInflation}
            returnRate={returnRate}
            setReturnRate={setReturnRate}
          >
            <CalculatorCTA
              title="🎯 Get My Goal Plan"
              whatsappMessage={`Hello Chhaya,

I used the AYMHC Goal Planner Calculator.

Goal: ${goalName || "My Dream Goal"}
Current Cost: ₹${currentCost.toLocaleString("en-IN")}
Time Horizon: ${years} Years

Inflation: ${inflation}%
Expected Return: ${returnRate}%

Future Cost of Goal:
${formatCurrency(result.futureCost)}

Required Monthly SIP:
${formatCurrency(result.sip)}

Please help me set up an investment plan to achieve this goal.`}
            />
          </GoalInputCard>

          <GoalResultCard
            goalName={goalName}
            futureCost={result.futureCost}
            requiredSip={result.sip}
            totalInvestment={result.totalInvestment}
            currentCost={currentCost}
            years={years}
            inflation={inflation}
            returnRate={returnRate}
            formatCurrency={formatCurrency}
          />

        </div>
      </section>

    </main>
  );
}
