"use client";

interface Props {
  invested: number;
  returns: number;
  maturity: number;
  monthlyInvestment: number;
  years: number;
  annualReturn: number;
  formatCurrency: (value: number) => string;
}

export default function CalculatorResultCard({
  invested,
  returns,
  maturity,
  monthlyInvestment,
  years,
  annualReturn,
  formatCurrency,
}: Props) {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8 shadow-xl">

      <h2 className="mb-6 sm:mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
        Your Estimated Wealth
      </h2>

      <div className="space-y-4 sm:space-y-6">

        {/* Total Investment */}

        <div className="rounded-2xl bg-blue-50 p-4 sm:p-6">
          <p className="text-slate-500 text-sm sm:text-base">Total Investment</p>

          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 break-words">
            {formatCurrency(invested)}
          </h3>
        </div>

        {/* Estimated Returns */}

        <div className="rounded-2xl bg-green-50 p-4 sm:p-6">
          <p className="text-slate-500 text-sm sm:text-base">Estimated Returns</p>

          <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-green-700 break-words">
            {formatCurrency(returns)}
          </h3>
        </div>

        {/* Total Wealth */}

        <div className="rounded-2xl bg-purple-50 p-4 sm:p-6">
          <p className="text-slate-500 text-sm sm:text-base">Total Wealth Created</p>

          <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-purple-700 break-words">
            {formatCurrency(maturity)}
          </h3>
        </div>

        {/* Investment Summary */}

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4 sm:p-6">

          <h3 className="mb-4 text-lg sm:text-xl font-bold text-blue-800">
            Investment Summary
          </h3>

          <div className="space-y-2 text-sm sm:text-base text-slate-700">

            <p className="break-words">
              <strong>Monthly SIP:</strong>{" "}
              {formatCurrency(monthlyInvestment)}
            </p>

            <p>
              <strong>Investment Period:</strong>{" "}
              {years} Years
            </p>

            <p>
              <strong>Expected Return:</strong>{" "}
              {annualReturn}% p.a.
            </p>

            <p className="break-words">
              <strong>Estimated Wealth:</strong>{" "}
              <span className="font-bold text-blue-700">
                {formatCurrency(maturity)}
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}