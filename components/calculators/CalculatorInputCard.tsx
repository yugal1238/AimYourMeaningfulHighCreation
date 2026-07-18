"use client";

interface Props {
  monthlyInvestment: number;
  setMonthlyInvestment: (value: number) => void;

  annualReturn: number;
  setAnnualReturn: (value: number) => void;

  years: number;
  setYears: (value: number) => void;

  children?: React.ReactNode;
}

export default function CalculatorInputCard({
  monthlyInvestment,
  setMonthlyInvestment,
  annualReturn,
  setAnnualReturn,
  years,
  setYears,
  children,
}: Props) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-xl">

      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Investment Details
      </h2>

      <div className="space-y-7 sm:space-y-8 md:space-y-10">

        {/* Monthly SIP */}

        <div>

          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <label className="font-semibold text-slate-700 text-sm sm:text-base">
              Monthly SIP Amount
            </label>

            <input
              type="number"
              value={monthlyInvestment}
              min={500}
              step={500}
              onChange={(e) =>
                setMonthlyInvestment(Number(e.target.value))
              }
              className="w-full sm:w-36 rounded-xl border p-2 text-right font-semibold"
            />

          </div>

          <input
            type="range"
            min={500}
            max={100000}
            step={500}
            value={monthlyInvestment}
            onChange={(e) =>
              setMonthlyInvestment(Number(e.target.value))
            }
            className="w-full accent-blue-600"
          />

          <div className="mt-2 flex justify-between text-xs sm:text-sm text-slate-500">
            <span>₹500</span>
            <span>₹1,00,000</span>
          </div>

        </div>

        {/* Return */}

        <div>

          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <label className="font-semibold text-slate-700 text-sm sm:text-base">
              Expected Return
            </label>

            <input
              type="number"
              value={annualReturn}
              min={1}
              max={20}
              step={0.5}
              onChange={(e) =>
                setAnnualReturn(Number(e.target.value))
              }
              className="w-full sm:w-28 rounded-xl border p-2 text-right font-semibold"
            />

          </div>

          <input
            type="range"
            min={1}
            max={20}
            step={0.5}
            value={annualReturn}
            onChange={(e) =>
              setAnnualReturn(Number(e.target.value))
            }
            className="w-full accent-green-600"
          />

          <div className="mt-2 flex justify-between text-xs sm:text-sm text-slate-500">
            <span>1%</span>
            <span>20%</span>
          </div>

        </div>

        {/* Years */}

        <div>

          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <label className="font-semibold text-slate-700 text-sm sm:text-base">
              Investment Period
            </label>

            <input
              type="number"
              value={years}
              min={1}
              max={40}
              onChange={(e) =>
                setYears(Number(e.target.value))
              }
              className="w-full sm:w-28 rounded-xl border p-2 text-right font-semibold"
            />

          </div>

          <input
            type="range"
            min={1}
            max={40}
            value={years}
            onChange={(e) =>
              setYears(Number(e.target.value))
            }
            className="w-full accent-indigo-600"
          />

          <div className="mt-2 flex justify-between text-xs sm:text-sm text-slate-500">
            <span>1 Year</span>
            <span>40 Years</span>
          </div>

        </div>

        {children}

      </div>

    </div>
  );
}