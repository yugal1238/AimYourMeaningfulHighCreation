export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-light font-serif mb-4">Terms of Service</h1>
          <p className="text-[#D4AF37] text-sm uppercase tracking-widest">Last updated: September 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12 text-slate-700 font-light leading-relaxed bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">
          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">General</h2>
            <p>
              This website is operated by Chhaya Harshad Bhimjiyani (AYMHC) for informational
              purposes. Content on this site, including calculators, does not constitute
              personalized investment or insurance advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">Calculators &amp; Estimates</h2>
            <p>
              All figures produced by the calculators on this site (SIP, EMI, Retirement,
              Goal Planner, Insurance) are estimates based on the inputs you provide and
              assumed rates of return/inflation. Actual results may vary. These tools do not
              constitute a guarantee or formal financial plan.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">No Guarantee of Returns</h2>
            <p>
              Mutual fund investments are subject to market risk. Past performance is not
              indicative of future results. Please consult us directly before making any
              investment or insurance decision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of this site
              constitutes acceptance of the current terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
