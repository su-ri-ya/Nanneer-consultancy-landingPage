"use client"

import * as React from "react"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of treatment plants does Nanneer Consultancy optimize?",
    answer:
      "We specialize in industrial Effluent Treatment Plants (ETP) across sectors like manufacturing, automotive, pharma, food & beverage, and textiles, as well as commercial Sewage Treatment Plants (STP) for IT parks, commercial buildings, malls, and hospital campuses."
  },
  {
    question: "Can Nanneer Consultancy work alongside our existing O&M contractor?",
    answer:
      "Yes, frequently. Many plant heads and sustainability managers engage Nanneer as an independent technical advisory layer. We diagnose root causes, establish calibrated operating windows, and provide clear standard operating procedures (SOPs) that empower your existing O&M contractor to maintain stable compliance."
  },
  {
    question: "How quickly can we expect measurable improvements in discharge parameters?",
    answer:
      "Chemical dosing and clarifier flocculation adjustments typically yield noticeable water clarity and TSS reductions within 24–48 hours of on-site tuning. Biological stabilization (restoring starved or bulking activated sludge in ASP/MBBR systems) generally stabilizes within 7–14 days of balanced nutrient and DO control."
  },
  {
    question: "What deliverables are included in an On-Site Water Audit?",
    answer:
      "A comprehensive on-site audit delivers a full unit-by-unit hydraulic and biological assessment, stoichiometric chemical recipe recalibration, identified bottleneck points, actionable remediation steps, and an executive briefing for management."
  },
  {
    question: "What geographic areas do you cover?",
    answer:
      "Nanneer Consultancy supports industrial clusters and commercial developments across India, providing both on-site engineering audits and structured technical advisory engagements."
  }
]

export function FaqSection() {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 bg-transparent border-b border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <Badge variant="default" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Clear Answers for Plant & Facility Leaders
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Everything you need to know about engaging Nanneer Consultancy for your water and wastewater treatment facilities.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border/80 rounded-xl px-5 bg-card shadow-xs"
              >
                <AccordionTrigger className="text-left font-bold text-sm sm:text-base text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
