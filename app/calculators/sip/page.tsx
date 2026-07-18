"use client";
import CalculatorInputCard from "@/components/calculators/CalculatorInputCard";
import CalculatorResultCard from "@/components/calculators/CalculatorResultCard";
import CalculatorCTA from "@/components/calculators/CalculatorCTA";
import { useMemo, useState } from "react";

export default function SIPCalculatorPage() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [annualReturn, setAnnualReturn] = useState(12);
  const [years, setYears] = useState(15);

  const result = useMemo(() => {
    const months = years * 12;

    // Effective monthly return
    const monthlyRate = Math.pow(1 + annualReturn / 100, 1 / 12) - 1;

    const invested = monthlyInvestment * months;

    let maturity = 0;

    if (monthlyRate === 0) {
      maturity = invested;
    } else {
      maturity =
        monthlyInvestment *
        ((((1 + monthlyRate) ** months - 1) / monthlyRate) *
          (1 + monthlyRate));
    }

    return {
      invested: Math.round(invested),
      gain: Math.round(maturity - invested),
      maturity: Math.round(maturity),
    };
  }, [monthlyInvestment, annualReturn, years]);

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
            SIP Calculator
          </h1>

          <p className="mt-4 max-w-2xl text-base text-blue-100 sm:mt-5 sm:text-lg lg:text-xl">
            Calculate how your monthly SIP can create long-term wealth through
            disciplined investing.
          </p>

        </div>

      </section>

      {/* CALCULATOR */}

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">

          <CalculatorInputCard
            monthlyInvestment={monthlyInvestment}
            setMonthlyInvestment={setMonthlyInvestment}
            annualReturn={annualReturn}
            setAnnualReturn={setAnnualReturn}
            years={years}
            setYears={setYears}
          >
            <CalculatorCTA
              title="📈 Get My SIP Plan"
              whatsappMessage={`Hello Chhaya,

I used the AYMHC SIP Calculator.

Monthly SIP: ₹${monthlyInvestment.toLocaleString("en-IN")}
Expected Return: ${annualReturn}%
Investment Period: ${years} Years

Estimated Wealth: ${formatCurrency(result.maturity)}

Please help me choose the best SIP plan for my financial goals.`}
            />
          </CalculatorInputCard>

          <CalculatorResultCard
            invested={result.invested}
            returns={result.gain}
            maturity={result.maturity}
            monthlyInvestment={monthlyInvestment}
            years={years}
            annualReturn={annualReturn}
            formatCurrency={formatCurrency}
          />

        </div>
      </section>

    </main>
  );
}
