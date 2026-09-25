import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChoose from "@/components/home/WhyChoose";
import Process from "@/components/home/Process";
import Journey from "@/components/home/Journey";
import Services from "@/components/home/Services";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import AboutFounder from "@/components/home/AboutFounder";
import Testimonials from "@/components/home/Testimonials";
import CalculatorsPreview from "@/components/home/CalculatorsPreview";
import EducationPreview from "@/components/home/EducationPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      {/* 2.1 Hero */}
      <Hero />

      {/* 2.2 Why AYMHC? (4 Cards) */}
      <WhyChoose />

      {/* 2.3 Trust Numbers */}
      <Stats />

      {/* 2.4 Our Journey (Timeline) */}
      <Journey />
      
      {/* 2.5 How AYMHC Helps You (Process) */}
      <Process />

      {/* 2.6 FREE Financial Health Check CTA */}
      <CTA />

      {/* 2.7 Our Solutions */}
      <Services />

      {/* 2.8 Who We Help */}
      <WhoWeHelp />

      {/* 2.9 Meet Your Advisors */}
      <AboutFounder />

      {/* 2.10 Client Stories */}
      <Testimonials />

      {/* 2.11 Calculators */}
      <CalculatorsPreview />

      {/* 2.12 Education Centre */}
      <EducationPreview />

      {/* 2.13 Final CTA */}
      <CTA />
    </>
  );
}
