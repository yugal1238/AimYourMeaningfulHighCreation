"use client";

type Props = {
  emi: number;
  interest: number;
  total: number;
  loanAmount: number;
  interestRate: number;
  years: number;
  formatCurrency: (value: number) => string;
};

export default function CalculatorResultCard({
  emi,
  interest,
  total,
  loanAmount,
  interestRate,
  years,
  formatCurrency,
}: Props): import("react").JSX.Element {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:mb-8 sm:text-4xl">
        Loan Summary
      </h2>

      <div className="space-y-5 sm:space-y-6">
        <div className="rounded-2xl bg-blue-50 p-5 sm:p-6">
          <p className="text-sm text-slate-500 sm:text-base">Monthly EMI</p>
          <h3 className="mt-2 break-words text-2xl font-bold text-blue-700 sm:text-3xl">
            {formatCurrency(emi)}
          </h3>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5 sm:p-6">
          <p className="text-sm text-slate-500 sm:text-base">Total Payment</p>
          <h3 className="mt-2 break-words text-2xl font-bold text-slate-800 sm:text-3xl">
            {formatCurrency(total)}
          </h3>
        </div>

        <div className="rounded-2xl bg-green-50 p-5 sm:p-6">
          <p className="text-sm text-slate-500 sm:text-base">Total Interest</p>
          <h3 className="mt-2 break-words text-2xl font-bold text-green-700 sm:text-3xl">
            {formatCurrency(interest)}
          </h3>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
          <h3 className="mb-4 text-lg font-bold text-blue-800 sm:text-xl">Details</h3>
          <div className="space-y-1.5 text-sm text-slate-700 sm:text-base">
            <p><strong>Loan Amount:</strong> {formatCurrency(loanAmount)}</p>
            <p><strong>Interest Rate:</strong> {interestRate}% p.a.</p>
            <p><strong>Loan Tenure:</strong> {years} Years</p>
            <p>
              <strong>Monthly EMI:</strong>{" "}
              <span className="font-bold text-blue-700">{formatCurrency(emi)}</span>
            </p>
            <p><strong>Total Interest:</strong> {formatCurrency(interest)}</p>
            <p>
              <strong>Total Payment:</strong>{" "}
              <span className="font-bold text-green-700">{formatCurrency(total)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
