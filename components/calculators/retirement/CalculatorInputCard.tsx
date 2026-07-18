"use client";

type Props = {
  currentAge: number;
  setCurrentAge: (value: number) => void;

  retirementAge: number;
  setRetirementAge: (value: number) => void;

  monthlyExpenses: number;
  setMonthlyExpenses: (value: number) => void;

  inflation: number;
  setInflation: (value: number) => void;

  returnRate: number;
  setReturnRate: (value: number) => void;

  children: React.ReactNode;
};

export default function RetirementInputCard({
  currentAge,
  setCurrentAge,
  retirementAge,
  setRetirementAge,
  monthlyExpenses,
  setMonthlyExpenses,
  inflation,
  setInflation,
  returnRate,
  setReturnRate,
  children,
}: Props) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-xl appearance-none">
      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Retirement Details
      </h2>
      <div className="space-y-7 sm:space-y-8 md:space-y-10">

        {/* Current Age */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Current Age</label>
            <input
              type="number"
              value={currentAge}
              min={18}
              max={65}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="w-full sm:w-28 rounded-xl border p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={18}
            max={65}
            value={currentAge}
            onChange={(e) => setCurrentAge(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Retirement Age */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Target Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              min={40}
              max={75}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              className="w-full sm:w-28 rounded-xl border p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={40}
            max={75}
            value={retirementAge}
            onChange={(e) => setRetirementAge(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="mt-2 flex justify-between text-xs sm:text-sm text-slate-500">
            <span>40 Years</span>
            <span>75 Years</span>
          </div>
        </div>

        {/* Current Monthly Expenses */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Current Monthly Expenses</label>
            <input
              type="number"
              value={monthlyExpenses}
              min={10000}
              max={1000000}
              step={5000}
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
              className="w-full sm:w-32 rounded-xl border border-slate-300 p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={10000}
            max={1000000}
            step={5000}
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* Inflation Rate */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Expected Inflation (%)</label>
            <input
              type="number"
              value={inflation}
              min={4}
              max={15}
              step={0.5}
              onChange={(e) => setInflation(Number(e.target.value))}
              className="w-full sm:w-28 rounded-xl border border-slate-300 p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={4}
            max={15}
            step={0.5}
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
            className="w-full accent-green-600"
          />
        </div>

        {/* Expected Return */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Expected Return (%)</label>
            <input
              type="number"
              value={returnRate}
              min={8}
              max={20}
              step={0.5}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full sm:w-28 rounded-xl border border-slate-300 p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={8}
            max={20}
            step={0.5}
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
          <div className="mt-2 flex justify-between text-xs sm:text-sm text-slate-500">
            <span>8%</span>
            <span>20%</span>
          </div>
        </div>

        <div className="rounded-xl bg-blue-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-semibold text-slate-700 text-sm sm:text-base">Years to Retirement</span>
            <span className="text-xl sm:text-2xl font-bold text-blue-700">
              {Math.max(0, retirementAge - currentAge)} Years
            </span>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
}