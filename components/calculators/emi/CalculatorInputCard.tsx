"use client";

type Props = {
  loanAmount: number;
  setLoanAmount: (value: number) => void;

  interestRate: number;
  setInterestRate: (value: number) => void;

  years: number;
  setYears: (value: number) => void;

  children?: React.ReactNode;
};

export default function CalculatorInputCard({
  loanAmount,
  setLoanAmount,
  interestRate,
  setInterestRate,
  years,
  setYears,
  children,
}: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8">

      <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:mb-8 sm:text-4xl">
        Loan Details
      </h2>

      <div className="space-y-8 sm:space-y-10">

        {/* Loan Amount */}

        <div>

          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <label htmlFor="loanAmount" className="font-semibold text-slate-700">
              Loan Amount
            </label>

            <input
              id="loanAmount"
              type="number"
              value={loanAmount}
              min={1000}
              max={50000000}
              step={50000}
              onChange={(e) =>
                setLoanAmount(Number(e.target.value))
              }
              className="w-full rounded-xl border p-2 text-right font-semibold sm:w-36"
            />

          </div>

          <input
            type="range"
            aria-label="Loan Amount"
            min={0}
            max={50000000}
            step={50000}
            value={loanAmount}
            onChange={(e) =>
              setLoanAmount(Number(e.target.value))
            }
            className="w-full accent-blue-600"
          />

          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>0</span>
            <span>₹5,00,00,000</span>
          </div>

        </div>

        {/* Interest Rate*/}

        <div>

          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <label htmlFor="interestRate" className="font-semibold text-slate-700">
              Interest Rate
            </label>

            <input
              id="interestRate"
              type="number"
              value={interestRate}
              min={1}
              max={20}
              step={0.5}
              onChange={(e) =>
                setInterestRate(Number(e.target.value))
              }
              className="w-full rounded-xl border p-2 text-right font-semibold sm:w-28"
            />

          </div>

          <input
            type="range"
            aria-label="Interest Rate"
            min={1}
            max={20}
            step={0.5}
            value={interestRate}
            onChange={(e) =>
              setInterestRate(Number(e.target.value))
            }
            className="w-full accent-green-600"
          />

          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>1%</span>
            <span>20%</span>
          </div>

        </div>

        {/* Years */}

        <div>

          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

            <label htmlFor="years" className="font-semibold text-slate-700">
              Loan Tenure (Years)
            </label>

            <input
              id="years"
              type="number"
              value={years}
              min={1}
              max={40}
              onChange={(e) =>
                setYears(Number(e.target.value))
              }
              className="w-full rounded-xl border p-2 text-right font-semibold sm:w-28"
            />

          </div>

          <input
            type="range"
            aria-label="Loan Tenure in Years"
            min={1}
            max={40}
            value={years}
            onChange={(e) =>
              setYears(Number(e.target.value))
            }
            className="w-full accent-indigo-600"
          />

          <div className="mt-2 flex justify-between text-sm text-slate-500">
            <span>1 Year</span>
            <span>40 Years</span>
          </div>

        </div>

        {children}

      </div>

    </div>
  );
}