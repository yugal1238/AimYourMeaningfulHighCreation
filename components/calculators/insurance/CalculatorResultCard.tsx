"use client";

type Props = {
  totalCoverRequired: number;
  additionalCoverNeeded: number;
  incomeReplacement: number;

  outstandingLoans: number;
  existingSavings: number;
  existingCover: number;

  formatCurrency: (value: number) => string;
};

export default function InsuranceResultCard({
  totalCoverRequired,
  additionalCoverNeeded,
  incomeReplacement,
  outstandingLoans,
  existingSavings,
  existingCover,
  formatCurrency,
}: Props) {
  const isFullyCovered = additionalCoverNeeded <= 0;

  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-xl">
      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Coverage Summary
      </h2>

      <div className="space-y-4 sm:space-y-6">

        {/* Additional Cover Needed (The Main Result) */}
        <div className={`rounded-2xl p-4 sm:p-6 ${isFullyCovered ? "bg-green-50" : "bg-red-50"}`}>
          <p className="text-slate-600 text-sm sm:text-base">
            {isFullyCovered ? "You are fully covered!" : "Additional Life Cover Needed"}
          </p>
          <h3 className={`mt-2 text-2xl sm:text-3xl md:text-4xl font-bold break-words ${isFullyCovered ? "text-green-700" : "text-red-700"}`}>
            {isFullyCovered ? "₹0" : formatCurrency(additionalCoverNeeded)}
          </h3>
        </div>

        {/* Total Ideal Cover */}
        <div className="rounded-2xl bg-blue-50 p-4 sm:p-6">
          <p className="text-slate-500 text-sm sm:text-base">Total Ideal Life Cover (Human Life Value)</p>
          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 break-words">
            {formatCurrency(totalCoverRequired)}
          </h3>
        </div>

        {/* Breakdown Details */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 sm:p-6">
          <h3 className="mb-4 text-lg sm:text-xl font-bold text-slate-800">
            How we calculated this
          </h3>
          <div className="space-y-3 text-sm sm:text-base text-slate-700">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
              <span>Family Income Replacement:</span>
              <span className="font-semibold">{formatCurrency(incomeReplacement)}</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
              <span>Outstanding Loans:</span>
              <span className="font-semibold text-red-600">+{formatCurrency(outstandingLoans)}</span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 border-b border-slate-300 pb-2">
              <span>Existing Savings/Assets:</span>
              <span className="font-semibold text-green-600">-{formatCurrency(existingSavings)}</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 pt-2">
              <span className="font-bold">Total Cover Required:</span>
              <span className="font-bold text-blue-700">{formatCurrency(totalCoverRequired)}</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1">
              <span>Existing Life Cover:</span>
              <span className="font-semibold text-teal-600">-{formatCurrency(existingCover)}</span>
            </div>

            <div className="mt-2 border-t border-slate-300 pt-3 flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 font-bold text-base sm:text-lg">
              <span>Shortfall / Gap:</span>
              <span className={isFullyCovered ? "text-green-700" : "text-red-700"}>
                {isFullyCovered ? "₹0" : formatCurrency(additionalCoverNeeded)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}