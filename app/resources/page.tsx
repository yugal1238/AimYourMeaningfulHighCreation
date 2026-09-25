import Link from "next/link";
import { BookOpen, PlayCircle, FileText, ArrowRight, Download } from "lucide-react";
export default function ResourcesPage() {
  const articles = [
    {
      category: "Wealth Creation",
      title: "The Power of Compounding in SIPs",
      desc: "Learn how starting early with mutual funds can exponentially grow your wealth over time, outperforming traditional savings.",
      href: "/articles/power-of-compounding" // <-- ADD YOUR ARTICLE LINK HERE
    },
    {
      category: "Family Protection",
      title: "Understanding the MWP Act",
      desc: "Why the Married Women's Property Act is the ultimate shield to protect your family's insurance claims from creditors and business liabilities.",
      href: "/articles/understanding-mwp"
    },
    {
      category: "Estate Planning",
      title: "Why You Need a Will Today",
      desc: "A comprehensive look at succession planning and why drafting a will is crucial for seamless multi-generational wealth transfer.",
      href: "/articles/why-you-need-a-will"
    },
    {
      category: "Health & Wellness",
      title: "Investing in Your Health",
      desc: "Financial planning isn't just about money. Discover how proactive wellness and health insurance protect your financial corpus.",
      href: "/articles/investing-in-health"
    },
    {
      category: "Retirement",
      title: "Building a Bulletproof Retirement Corpus",
      desc: "Strategies to beat inflation and ensure your lifestyle remains uninterrupted even after you stop working.",
      href: "/articles/retirement-corpus"
    },
    {
      category: "Child Future",
      title: "Funding International Education",
      desc: "How to systematically plan and invest today to secure your child's overseas education dreams without taking expensive loans.",
      href: "/articles/international-education"
    }
  ];

  const videos = [
    {
      title: "Why MWP Act Matters",
      desc: "Protecting your family's insurance claims from business creditors. A 2-minute breakdown.",
      href: "https://youtube.com/your-video-link" // <-- ADD YOUTUBE LINK HERE
    },
    {
      title: "The Hidden Cost of Inflation",
      desc: "How inflation silently eats your savings and why equity is the best hedge.",
      href: "https://youtube.com/your-video-link"
    },
    {
      title: "Term Insurance vs. ULIPs",
      desc: "Understanding the difference and choosing what's right for your family's protection.",
      href: "https://youtube.com/your-video-link"
    },
    {
      title: "Introduction to Kangen Water",
      desc: "Exploring the health and wellness benefits of alkaline water for your family.",
      href: "https://youtube.com/your-video-link"
    }
  ];

  const guides = [
    {
      title: "Retirement Planning Checklist",
      size: "PDF Document (2.1 MB)",
      href: "/pdfs/retirement-checklist.pdf" // <-- ADD PDF FILE PATH HERE
    },
    {
      title: "Mutual Fund Beginner's Guide",
      size: "PDF Document (3.4 MB)",
      href: "/pdfs/mutual-fund-guide.pdf"
    },
    {
      title: "Estate & Will Planning Template",
      size: "PDF Document (1.8 MB)",
      href: "/pdfs/estate-will-template.pdf"
    },
    {
      title: "Child Education Cost Calculator Matrix",
      size: "Excel Document (1.1 MB)",
      href: "/pdfs/education-calculator.xlsx"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      
      {/* Hero */}
      <section className="bg-[#0B1528] pt-32 pb-20 lg:pt-40 lg:pb-28 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1528] via-[#D4AF37] to-[#0B1528]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest mb-3">
            Education Center
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-serif mb-6 leading-tight">
            Financial Literacy & Resources
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-300 font-light">
            Empowering you with the knowledge to make confident financial decisions. Explore our articles, guides, and videos.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Recommended Reads */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-serif text-[#0B1528] flex items-center gap-3">
              <BookOpen className="text-[#D4AF37]" size={28} />
              Featured Articles
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link href={article.href} key={article.title} className="bg-white rounded-sm border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all group flex flex-col h-full">
                <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-3 block">{article.category}</span>
                <h3 className="text-xl font-serif text-[#0B1528] mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-600 font-light mb-6 leading-relaxed flex-grow">
                  {article.desc}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-[#0B1528] group-hover:text-[#D4AF37] transition-colors mt-auto pt-4 border-t border-slate-100">
                  Read Article <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Video Resources */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-serif text-[#0B1528] flex items-center gap-3">
              <PlayCircle className="text-[#D4AF37]" size={28} />
              Video Insights
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((video) => (
              <a href={video.href} target="_blank" rel="noopener noreferrer" key={video.title} className="block bg-[#0B1528] rounded-sm p-8 text-white relative overflow-hidden group border border-[#0B1528] hover:border-[#D4AF37]/50 transition-colors">
                <div className="absolute inset-0 bg-[#D4AF37]/5 group-hover:bg-[#D4AF37]/10 transition-colors" />
                <PlayCircle className="text-[#D4AF37] w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-serif mb-3 text-white">{video.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed">{video.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Downloads & Guides */}
        <div>
          <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-4">
            <h2 className="text-2xl font-serif text-[#0B1528] flex items-center gap-3">
              <FileText className="text-[#D4AF37]" size={28} />
              Free Guides & Checklists
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <a href={guide.href} download key={guide.title} className="flex items-center justify-between bg-white rounded-sm border border-slate-200 p-6 shadow-sm hover:border-[#D4AF37]/50 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B1528]/5 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <FileText className="text-[#0B1528] group-hover:text-[#D4AF37]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#0B1528] mb-0.5">{guide.title}</h4>
                    <p className="text-xs text-slate-500">{guide.size}</p>
                  </div>
                </div>
                <Download className="text-slate-300 group-hover:text-[#D4AF37] group-hover:translate-y-1 transition-all" size={20} />
              </a>
            ))}
          </div>
        </div>

      </section>
    </main>
  );
}
