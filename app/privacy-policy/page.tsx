export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-500 sm:text-base">Last updated: [DATE]</p>

      <div className="mt-8 space-y-8 text-base leading-7 text-slate-700 sm:mt-10 sm:text-lg sm:leading-8">
        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Information We Collect</h2>
          <p className="mt-3">
            When you use our contact form, portfolio review form, or financial calculators,
            we may collect your name, email address, phone number, age, and financial details
            you choose to share (such as SIP amount, insurance cover, or uploaded portfolio
            statements).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">How We Use Your Information</h2>
          <p className="mt-3">
            We use the information you provide solely to respond to your inquiries, prepare
            personalized financial recommendations, and communicate with you about our services.
            We do not sell or rent your personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Data Storage</h2>
          <p className="mt-3">
            Form submissions are sent directly to us via email/WhatsApp and are not stored on
            a public database. Uploaded portfolio statements are used only for the purpose of
            the review you requested.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Your Rights</h2>
          <p className="mt-3">
            You may request that we delete any information you've shared with us at any time
            by contacting us at{" "}
            <a href="mailto:chhaya.harshad@rediffmail.com" className="break-all text-blue-600 hover:underline">
              chhaya.harshad@rediffmail.com
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">Contact Us</h2>
          <p className="mt-3">
            If you have questions about this policy, reach out at{" "}
            <a href="mailto:chhaya.harshad@rediffmail.com" className="break-all text-blue-600 hover:underline">
              chhaya.harshad@rediffmail.com
            </a>{" "}
            or{" "}
            <a href="tel:+918850391909" className="text-blue-600 hover:underline">
              +91 88503 91909
            </a>.
          </p>
        </section>
      </div>
    </main>
  );
}
