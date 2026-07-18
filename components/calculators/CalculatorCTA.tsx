import Link from "next/link";

interface CalculatorCTAProps {
  title: string;
  whatsappMessage: string;
}

export default function CalculatorCTA({
  title,
  whatsappMessage,
}: CalculatorCTAProps) {
  return (
    <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 p-8 text-white">

      <h2 className="text-3xl font-bold">
        Ready for a Personalized Financial Plan?
      </h2>

      <p className="mt-4 text-slate-300 leading-7">
        Online calculators provide estimates. At <strong>AYMHC (Aim Your Meaningful High Creation)</strong>,
        we help you convert these estimates into a personalized financial roadmap
        based on your goals, family needs, risk profile, and long-term wealth creation.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">

        <a
          href={`https://wa.me/918850391909?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-green-500 px-8 py-4 text-lg font-semibold hover:bg-green-600 transition"
        >
          {title}
        </a>

        <a
          href="tel:+918850391909"
          className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold hover:bg-blue-700 transition"
        >
          📞 Call Now
        </a>

        <Link
          href="/portfolio-review"
          className="rounded-full border border-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-slate-900 transition"
        >
          📊 Free Portfolio Review
        </Link>

      </div>

      <div className="mt-8 border-t border-white/20 pt-6 text-center text-sm text-slate-300">
        <p>
          <strong>AYMHC</strong> • Aim Your Meaningful High Creation
        </p>
        <p>"Vichar Tamaro, Aakar Amaro"</p>
      </div>

    </section>
  );
}