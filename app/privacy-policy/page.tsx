export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-light font-serif mb-4">Privacy Policy</h1>
          <p className="text-[#D4AF37] text-sm uppercase tracking-widest">Last updated: September 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-12 text-slate-700 font-light leading-relaxed bg-white p-8 md:p-12 shadow-sm border border-slate-100 rounded-sm">
          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">Information We Collect</h2>
            <p>
              When you use our contact form, portfolio review form, or financial calculators,
              we may collect your name, email address, phone number, age, and financial details
              you choose to share (such as SIP amount, insurance cover, or uploaded portfolio
              statements).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">How We Use Your Information</h2>
            <p>
              We use the information you provide solely to respond to your inquiries, prepare
              personalized financial recommendations, and communicate with you about our services.
              We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">Data Storage</h2>
            <p>
              Form submissions are sent directly to us via email/WhatsApp and are not stored on
              a public database. Uploaded portfolio statements are used only for the purpose of
              the review you requested.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">Your Rights</h2>
            <p>
              You may request that we delete any information you've shared with us at any time
              by contacting us at{" "}
              <a href="mailto:chhaya.harshad@rediffmail.com" className="font-bold text-[#0B1528] hover:text-[#D4AF37] transition-colors break-all">
                chhaya.harshad@rediffmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-[#0B1528] mb-4">Contact Us</h2>
            <p>
              If you have questions about this policy, reach out at{" "}
              <a href="mailto:chhaya.harshad@rediffmail.com" className="font-bold text-[#0B1528] hover:text-[#D4AF37] transition-colors break-all">
                chhaya.harshad@rediffmail.com
              </a>{" "}
              or{" "}
              <a href="tel:+918850391909" className="font-bold text-[#0B1528] hover:text-[#D4AF37] transition-colors">
                +91 88503 91909
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
