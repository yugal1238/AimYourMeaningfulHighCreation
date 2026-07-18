import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "AYMHC | Aim Your Meaningful High Creation",
  description:
    "Helping families build, protect and grow wealth through insurance, investments and financial planning.",
  metadataBase: new URL("https://your-site-name.vercel.app"),
  verification: {
    google: "your-verification-code-here",
  },
  openGraph: {
    title: "AYMHC | Aim Your Meaningful High Creation",
    description:
      "Helping families build, protect and grow wealth through insurance, investments and financial planning.",
    url: "https://your-site-name.vercel.app",
    siteName: "AYMHC",
    images: [
      {
        url: "/hero-chhaya.jpg",
        width: 700,
        height: 800,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} bg-white text-slate-900 antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "AYMHC - Chhaya Harshad Bhimjiyani",
              description:
                "Wealth management, insurance and financial planning advisory serving families since 2006.",
              telephone: "+91-88503-91909",
              email: "chhaya.harshad@rediffmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressRegion: "Maharashtra",
                addressCountry: "IN",
              },
              founder: {
                "@type": "Person",
                name: "Chhaya Harshad Bhimjiyani",
              },
            }),
          }}
        />
        <Navbar />

        {children}

        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
