"use client";

type Props = {
  retirementCorpus: number;
  requiredSip: number;
  yearsRemaining: number;
  futureMonthlyExpenses: number;

  currentAge: number;
  retirementAge: number;
  monthlyExpenses: number;
  inflation: number;
  returnRate: number;

  formatCurrency: (value: number) => string;
};

export default function RetirementResultCard({
  retirementCorpus,
  requiredSip,
  yearsRemaining,
  futureMonthlyExpenses,
  currentAge,
  retirementAge,
  monthlyExpenses,
  inflation,
  returnRate,
  formatCurrency,
}: Props) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-xl">
      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Retirement Plan Summary
      </h2>

      <div className="space-y-4 sm:space-y-6">

        {/* Required Retirement Corpus */}
        <div className="rounded-2xl bg-blue-50 p-4 sm:p-6">
          <p className="text-slate-500 text-sm sm:text-base">Required Retirement Corpus</p>
          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 break-words">
            {formatCurrency(retirementCorpus)}
          </h3>
        </div>

        {/* Required Monthly SIP */}
        <div className="rounded-2xl bg-green-50 p-4 sm:p-6">
          <p className="text-slate-500 text-sm sm:text-base">Required Monthly SIP</p>
          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-green-700 break-words">
            {formatCurrency(requiredSip)}
          </h3>
        </div>

        {/* Years Remaining */}
        <div className="rounded-2xl bg-purple-50 p-4 sm:p-6">
          <p className="text-slate-500 text-sm sm:text-base">Years to Retirement</p>
          <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700">
            {yearsRemaining} Years
          </h3>
        </div>

        {/* Summary Details */}
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 sm:p-6">
          <h3 className="mb-4 text-lg sm:text-xl font-bold text-blue-800">
            Plan Details
          </h3>
          <div className="space-y-2 text-sm sm:text-base text-slate-700">
            <p>
              <strong>Current Age:</strong> {currentAge} Years
            </p>
            <p>
              <strong>Retirement Age:</strong> {retirementAge} Years
            </p>
            <p className="break-words">
              <strong>Current Monthly Expenses:</strong>{" "}
              {formatCurrency(monthlyExpenses)}
            </p>
            <p>
              <strong>Inflation Rate:</strong> {inflation}% p.a.
            </p>
            <p>
              <strong>Expected Return:</strong> {returnRate}% p.a.
            </p>
            <div className="my-4 border-t border-blue-200"></div>
            <p className="break-words">
              <strong>Est. Monthly Expenses at Retirement:</strong>{" "}
              <span className="font-bold text-slate-900">
                {formatCurrency(futureMonthlyExpenses)}
              </span>
            </p>
            <p className="break-words">
              <strong>Required Monthly SIP:</strong>{" "}
              <span className="font-bold text-green-700">
                {formatCurrency(requiredSip)}
              </span>
            </p>
            <p className="break-words">
              <strong>Required Corpus:</strong>{" "}
              <span className="font-bold text-blue-700">
                {formatCurrency(retirementCorpus)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}