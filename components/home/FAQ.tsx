"use client";

const faqs = [
  {
    question: "Why should I create a financial plan?",
    answer:
      "A financial plan helps you align your savings, investments and protection with your life goals.",
  },
  {
    question: "Do I need health and life insurance?",
    answer:
      "Insurance helps protect you and your family from unexpected financial burdens.",
  },
  {
    question: "Can AYMHC help with retirement planning?",
    answer:
      "Yes. We create retirement strategies based on your income, goals and expected lifestyle.",
  },
  {
    question: "Do you review existing investments?",
    answer:
      "Yes. We review your current portfolio and recommend improvements where appropriate.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "You can contact us via WhatsApp, phone, or the contact form to schedule your consultation.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-blue-700">
            Frequently Asked Questions
          </span>

          <h2 className="mt-5 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Have Questions?
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-600">
            Here are answers to some common questions.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
            >
              <summary className="cursor-pointer list-none text-sm sm:text-lg font-semibold text-slate-900 flex justify-between items-center gap-3">
                <span>{faq.question}</span>
                <span className="shrink-0 transition-transform group-open:rotate-45 text-xl sm:text-2xl text-blue-600">
                  +
                </span>
              </summary>

              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-6 sm:leading-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}