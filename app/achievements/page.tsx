import { Award, Star, Users, Trophy, ShieldCheck, MapPin } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Award in Financial Planning",
    subtitle: "CII – United Kingdom",
    desc: "Internationally recognized certification demonstrating the highest standard of financial planning, ethics, and wealth management expertise.",
  },
  {
    icon: Users,
    title: "1,000+ Families Protected",
    subtitle: "Across India & Abroad",
    desc: "Over two decades, we have successfully managed, protected, and grown the wealth of over a thousand families.",
  },
  {
    icon: Trophy,
    title: "20+ Years of Excellence",
    subtitle: "Since 2006",
    desc: "A consistent track record of ethical advisory, high claim-settlement ratios, and multi-generational wealth preservation.",
  },
  {
    icon: ShieldCheck,
    title: "100% Claim Support",
    subtitle: "Lifelong Partnership",
    desc: "We don't just plan; we stand by our clients during their toughest times, ensuring smooth and hassle-free claim settlements.",
  }
];

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      
      {/* Hero */}
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Legacy
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif mb-6 leading-tight">
            Milestones & Achievements
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 font-light">
            Trust is earned through decades of commitment. Here is a look at the milestones that define our journey.
          </p>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-[#D4AF37] py-12 relative z-20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-[#0B1528]">
            <div>
              <p className="text-4xl font-serif font-bold mb-2">20+</p>
              <p className="text-xs font-bold uppercase tracking-widest">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold mb-2">1000+</p>
              <p className="text-xs font-bold uppercase tracking-widest">Families Served</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold mb-2">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest">Claim Support</p>
            </div>
            <div>
              <p className="text-4xl font-serif font-bold mb-2">UK</p>
              <p className="text-xs font-bold uppercase tracking-widest">CII Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="bg-white rounded-sm border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start hover:border-[#D4AF37]/50 transition-colors">
                <div className="w-16 h-16 rounded-full bg-[#0B1528] flex items-center justify-center shrink-0">
                  <Icon className="text-[#D4AF37]" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#0B1528] mb-1">{item.title}</h3>
                  <p className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest mb-4">{item.subtitle}</p>
                  <p className="text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial Feature */}
      <section className="py-20 lg:py-24 bg-[#0B1528] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/globe.svg')] bg-center bg-no-repeat bg-contain" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Star className="text-[#D4AF37] mx-auto mb-6" size={40} />
          <blockquote className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8">
            "The greatest achievement of AYMHC is not the awards we have won, but the peace of mind we have delivered to generations of families."
          </blockquote>
          <p className="text-[#D4AF37] uppercase tracking-widest text-sm font-bold">Chhaya Harshad Bhimjiyani</p>
        </div>
      </section>

    </main>
  );
}
