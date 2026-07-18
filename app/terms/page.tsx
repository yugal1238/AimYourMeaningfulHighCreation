export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Terms of Service</h1>
      <p className="mt-4 text-sm text-slate-500 sm:text-base">Last updated: [DATE]</p>

      <div className="mt-8 space-y-8 text-base leading-7 text-slate-700 sm:mt-10 sm:text-lg sm:leading-8">
        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">General</h2>
          <p className="mt-3">
            This website is operated by Chhaya Harshad Bhimjiyani (AYMHC) for informational
            purposes. Content on this site, including calculators, does not constitute
            personalized investment or insurance advice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Calculators &amp; Estimates</h2>
          <p className="mt-3">
            All figures produced by the calculators on this site (SIP, EMI, Retirement,
            Goal Planner, Insurance) are estimates based on the inputs you provide and
            assumed rates of return/inflation. Actual results may vary. These tools do not
            constitute a guarantee or formal financial plan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">No Guarantee of Returns</h2>
          <p className="mt-3">
            Mutual fund investments are subject to market risk. Past performance is not
            indicative of future results. Please consult us directly before making any
            investment or insurance decision.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Changes to These Terms</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of this site
            constitutes acceptance of the current terms.
          </p>
        </section>
      </div>
    </main>
  );
}
