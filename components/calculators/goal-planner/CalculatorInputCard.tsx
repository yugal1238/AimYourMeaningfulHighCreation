"use client";

type Props = {
  goalName: string;
  setGoalName: (value: string) => void;

  currentCost: number;
  setCurrentCost: (value: number) => void;

  years: number;
  setYears: (value: number) => void;

  inflation: number;
  setInflation: (value: number) => void;

  returnRate: number;
  setReturnRate: (value: number) => void;

  children: React.ReactNode;
};

export default function GoalInputCard({
  goalName,
  setGoalName,
  currentCost,
  setCurrentCost,
  years,
  setYears,
  inflation,
  setInflation,
  returnRate,
  setReturnRate,
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:mb-8 sm:text-4xl">
        Goal Details
      </h2>

      <div className="space-y-8 sm:space-y-10">

        {/* Goal Name */}
        <div>
          <div className="mb-3">
            <label htmlFor="goalName" className="font-semibold text-slate-700">What are you saving for?</label>
          </div>
          <input
            id="goalName"
            type="text"
            value={goalName}
            placeholder="e.g., Dream Vacation, New Car, Wedding"
            onChange={(e) => setGoalName(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-3 font-semibold text-slate-900 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* Current Cost */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="currentCost" className="font-semibold text-slate-700">Current Cost of Goal</label>
            <input
              id="currentCost"
              type="number"
              value={currentCost}
              min={10000}
              max={50000000}
              step={10000}
              onChange={(e) => setCurrentCost(Number(e.target.value))}
              className="w-full rounded-xl border p-2 text-right font-semibold sm:w-32"
            />
          </div>
          <input
            type="range"
            aria-label="Current Cost of Goal"
            min={10000}
            max={50000000}
            step={10000}
            value={currentCost}
            onChange={(e) => setCurrentCost(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>₹10,000</span>
            <span>₹5,00,00,000</span>
          </div>
        </div>

        {/* Years to Goal */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="goalYears" className="font-semibold text-slate-700">Years to Achieve Goal</label>
            <input
              id="goalYears"
              type="number"
              value={years}
              min={1}
              max={30}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full rounded-xl border p-2 text-right font-semibold sm:w-28"
            />
          </div>
          <input
            type="range"
            aria-label="Years to Achieve Goal"
            min={1}
            max={30}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>

        {/* Inflation Rate */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="goalInflation" className="font-semibold text-slate-700">Expected Inflation (%)</label>
            <input
              id="goalInflation"
              type="number"
              value={inflation}
              min={4}
              max={15}
              step={0.5}
              onChange={(e) => setInflation(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 p-2 text-right font-semibold sm:w-28"
            />
          </div>
          <input
            type="range"
            aria-label="Expected Inflation Percent"
            min={4}
            max={15}
            step={0.5}
            value={inflation}
            onChange={(e) => setInflation(Number(e.target.value))}
            className="w-full accent-green-600"
          />
          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>4%</span>
            <span>15%</span>
          </div>
        </div>

        {/* Expected Return */}
        <div>
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <label htmlFor="goalReturnRate" className="font-semibold text-slate-700">Expected Return on SIP (%)</label>
            <input
              id="goalReturnRate"
              type="number"
              value={returnRate}
              min={8}
              max={20}
              step={0.5}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full rounded-xl border border-slate-300 p-2 text-right font-semibold sm:w-28"
            />
          </div>
          <input
            type="range"
            aria-label="Expected Return on SIP Percent"
            min={8}
            max={20}
            step={0.5}
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>8%</span>
            <span>20%</span>
          </div>
        </div>

      </div>

      {children}
    </div>
  );
}