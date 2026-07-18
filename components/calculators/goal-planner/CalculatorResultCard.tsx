"use client";

type Props = {
  goalName: string;
  futureCost: number;
  requiredSip: number;
  totalInvestment: number;

  currentCost: number;
  years: number;
  inflation: number;
  returnRate: number;

  formatCurrency: (value: number) => string;
};

export default function GoalResultCard({
  goalName,
  futureCost,
  requiredSip,
  totalInvestment,
  currentCost,
  years,
  inflation,
  returnRate,
  formatCurrency,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:mb-8 sm:text-4xl">
        Goal Summary
      </h2>

      <div className="space-y-5 sm:space-y-6">

        {/* Future Goal Cost */}
        <div className="rounded-2xl bg-blue-50 p-5 sm:p-6">
          <p className="text-sm text-slate-500 sm:text-base">
            Future cost of{" "}
            <span className="font-semibold text-blue-700">{goalName || "goal"}</span>
          </p>
          <h3 className="mt-2 break-words text-2xl font-bold text-blue-700 sm:text-4xl">
            {formatCurrency(futureCost)}
          </h3>
        </div>

        {/* Required Monthly SIP */}
        <div className="rounded-2xl bg-green-50 p-5 sm:p-6">
          <p className="text-sm text-slate-500 sm:text-base">Required Monthly SIP</p>
          <h3 className="mt-2 break-words text-xl font-bold text-green-700 sm:text-3xl">
            {formatCurrency(requiredSip)}
          </h3>
        </div>

        {/* Total Investment */}
        <div className="rounded-2xl bg-purple-50 p-5 sm:p-6">
          <p className="text-sm text-slate-500 sm:text-base">Total investment over {years} years</p>
          <h3 className="mt-2 break-words text-lg font-bold text-purple-700 sm:text-2xl">
            {formatCurrency(totalInvestment)}
          </h3>
        </div>

        {/* Summary Details */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-blue-800 sm:text-xl">
            Plan Details
          </h3>
          <div className="space-y-2 text-sm text-slate-700 sm:text-base">
            <p>
              <strong>Goal Name:</strong> {goalName || "Not specified"}
            </p>
            <p>
              <strong>Current Cost:</strong> {formatCurrency(currentCost)}
            </p>
            <p>
              <strong>Time Horizon:</strong> {years} Years
            </p>
            <p>
              <strong>Inflation Rate:</strong> {inflation}% p.a.
            </p>
            <p>
              <strong>Expected Return:</strong> {returnRate}% p.a.
            </p>
            <div className="my-4 border-t border-blue-200"></div>
            <p>
              <strong>Total Investment:</strong>{" "}
              {formatCurrency(totalInvestment)}
            </p>
            <p>
              <strong>Wealth Gained:</strong>{" "}
              <span className="font-bold text-green-700">
                {formatCurrency(Math.max(0, futureCost - totalInvestment))}
              </span>
            </p>
            <p>
              <strong>Future Target Value:</strong>{" "}
              <span className="font-bold text-blue-700">
                {formatCurrency(futureCost)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
