import { HeroSection } from "@/components/sections/hero-section"
import { ClientsSection } from "@/components/sections/clients-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProductsSection } from "@/components/sections/products-section"
import { CaseStudiesSection } from "@/components/sections/case-studies-section"
import { OutcomesSection } from "@/components/sections/outcomes-section"
import { WhyNanneerSection } from "@/components/sections/why-nanneer-section"
import { FaqSection } from "@/components/sections/faq-section"
import { ContactSection } from "@/components/sections/contact-section"
import { WaterFlowBackground } from "@/components/ui/water-flow-background"

export default function HomePage() {
  return (
    <div className="relative isolate">
      {/* Dynamic Water Engineering Ambient Background Flow */}
      <WaterFlowBackground />

      {/* 1. Hero: Official Mission Statement & Diagnostic Snapshot */}
      <HeroSection />

      {/* 2. Common Plant Challenges & Operational Gaps */}
      <ProblemSection />

      {/* 3. Core Services: Practical Engineering & Dedicated Operations Manpower */}
      <ServicesSection />

      {/* 4. Products & Treatment Systems We Optimize */}
      <ProductsSection />

      {/* 5. Real-World Case Studies & Turnarounds (Field Proof) */}
      <CaseStudiesSection />

      {/* 6. Measurable Outcomes & Verified Metrics */}
      <OutcomesSection />

      {/* 7. About Nanneer: Founder, Leadership Team, Engineering Ethos & Audited Logs */}
      <WhyNanneerSection />

      {/* 8. Frequently Asked Questions */}
      <FaqSection />

      {/* 9. Enterprise Clients & Track Record (Right Above Contact) */}
      <ClientsSection />

      {/* 10. Contact & Plant Audit Booking */}
      <ContactSection />
    </div>
  )
}
