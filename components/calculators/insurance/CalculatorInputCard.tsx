"use client";

type Props = {
  currentAge: number;
  setCurrentAge: (value: number) => void;

  retirementAge: number;
  setRetirementAge: (value: number) => void;

  monthlyExpenses: number;
  setMonthlyExpenses: (value: number) => void;

  outstandingLoans: number;
  setOutstandingLoans: (value: number) => void;

  existingSavings: number;
  setExistingSavings: (value: number) => void;

  existingCover: number;
  setExistingCover: (value: number) => void;

  children: React.ReactNode;
};

export default function InsuranceInputCard({
  currentAge,
  setCurrentAge,
  retirementAge,
  setRetirementAge,
  monthlyExpenses,
  setMonthlyExpenses,
  outstandingLoans,
  setOutstandingLoans,
  existingSavings,
  setExistingSavings,
  existingCover,
  setExistingCover,
  children,
}: Props) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-xl appearance-none">
      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Family Details
      </h2>

      <div className="space-y-7 sm:space-y-8 md:space-y-10">

        {/* Current Age */}
        <div>
          <div className="mb-3 flex flex-col gap-2 xs:flex-row xs:items-center xs:justify-between sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Current Age</label>
            <input
              type="number"
              value={currentAge}
              min={18}
              max={65}
              onChange={(e) => setCurrentAge(Number(e.target.value))}
              className="w-full sm:w-24 rounded-xl border p-2 text-right font-semibold"
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
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Retirement Age</label>
            <input
              type="number"
              value={retirementAge}
              min={40}
              max={75}
              onChange={(e) => setRetirementAge(Number(e.target.value))}
              className="w-full sm:w-24 rounded-xl border p-2 text-right font-semibold"
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
        </div>

        {/* Monthly Expenses */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Monthly Family Expenses</label>
            <input
              type="number"
              value={monthlyExpenses}
              min={10000}
              step={5000}
              onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
              className="w-full sm:w-32 rounded-xl border p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={monthlyExpenses}
            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
            className="w-full accent-green-600"
          />
        </div>

        {/* Outstanding Loans */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Outstanding Loans (Home, Car, etc.)</label>
            <input
              type="number"
              value={outstandingLoans}
              min={0}
              step={100000}
              onChange={(e) => setOutstandingLoans(Number(e.target.value))}
              className="w-full sm:w-32 rounded-xl border p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={0}
            max={20000000}
            step={100000}
            value={outstandingLoans}
            onChange={(e) => setOutstandingLoans(Number(e.target.value))}
            className="w-full accent-red-500"
          />
        </div>

        {/* Existing Savings */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Existing Savings & Investments</label>
            <input
              type="number"
              value={existingSavings}
              min={0}
              step={100000}
              onChange={(e) => setExistingSavings(Number(e.target.value))}
              className="w-full sm:w-32 rounded-xl border p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={0}
            max={50000000}
            step={100000}
            value={existingSavings}
            onChange={(e) => setExistingSavings(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
        </div>

        {/* Existing Life Cover */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label className="font-semibold text-slate-700 text-sm sm:text-base">Existing Life Insurance Cover</label>
            <input
              type="number"
              value={existingCover}
              min={0}
              step={500000}
              onChange={(e) => setExistingCover(Number(e.target.value))}
              className="w-full sm:w-32 rounded-xl border border-slate-300 p-2 text-right font-semibold"
            />
          </div>
          <input
            type="range"
            min={0}
            max={50000000}
            step={500000}
            value={existingCover}
            onChange={(e) => setExistingCover(Number(e.target.value))}
            className="w-full accent-teal-600"
          />
        </div>

      </div>

      {children}
    </div>
  );
}