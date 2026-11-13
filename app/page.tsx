"use client"

import { WaterGridBackground } from "@/components/ui/water-grid-background"
import { HeroSection } from "@/components/sections/hero-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { ServicesSection } from "@/components/sections/services-section"
import { IntelligenceEngineSection } from "@/components/sections/intelligence-engine-section"
import { OutcomesSection } from "@/components/sections/outcomes-section"
import { WhyNanneerSection } from "@/components/sections/why-nanneer-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FaqSection } from "@/components/sections/faq-section"

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen bg-transparent">
      {/* 1. Global Water Blueprint Grid Background */}
      <WaterGridBackground />

      <main className="relative z-10">
        {/* 1. Hero: Nanneer Global STP O&M · Every Drop Treated. Every Drop Accounted For. */}
        <HeroSection />

        {/* 2. Value Proposition: Outcomes, Not Just Manpower (6 Critical Questions) */}
        <ProblemSection />

        {/* 3. Reliable Operations: Six Areas We Monitor & Report (Methodology & Monitoring) */}
        <IntelligenceEngineSection />

        {/* 4. Water Recovery: Every Litre Has a Destination (Solution & Applications) */}
        <ServicesSection />

        {/* 5. Commitments & Impact: Operational Performance Targets & Building Benefits */}
        <OutcomesSection />

        {/* 6. Accountability: Every Shift Documented. Every Month Accounted For. (Monthly Reports) */}
        <WhyNanneerSection />

        {/* 7. Action: Let's Discuss Your STP Performance (Assessment Request) */}
        <ContactSection />

        {/* 8. Knowledge: STP Operations & Maintenance FAQ */}
        <FaqSection />
      </main>
    </div>
  )
}

