"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  category: "all" | "operations" | "reuse" | "evidence"
  question: string
  answer: string
}

const FAQS: FAQItem[] = [
  {
    category: "operations",
    question: "What does Nanneer Global's STP O&M service include?",
    answer:
      "Trained multi-shift manpower operating 24×7, defined SOPs, digital telemetry, preventive maintenance, and monthly evidence-based reports."
  },
  {
    category: "reuse",
    question: "How do you ensure treated water is safe for cooling towers and flushing?",
    answer:
      "Tertiary polishing and controlled chlorination for cooling towers to eliminate scaling and biological risks, plus crystal clarity (< 2 NTU) and zero odour for toilet flushing."
  },
  {
    category: "operations",
    question: "How does this differ from traditional manpower-only contracts?",
    answer:
      "We commit to ≥99% treatment yield, maximize freshwater substitution, prevent tank overflows, and provide verifiable monthly operational data."
  },
  {
    category: "operations",
    question: "What operational performance targets do you commit to?",
    answer:
      "≥99% sewage treatment yield, ≥99% monthly plant availability, 100% scheduled operator shift coverage, and zero unplanned downtime through preventive maintenance."
  },
  {
    category: "evidence",
    question: "What is included in the Monthly Management Report?",
    answer:
      "A complete water balance (received, treated, and reused), certified laboratory test sheets, tank level logs, pump energy analytics, and organized incident documentation and media."
  },
  {
    category: "evidence",
    question: "How do we get started with an initial assessment?",
    answer:
      "We provide a complimentary initial evaluation of your current STP operations, reviewing treatment yield, freshwater substitution potential, and plant condition."
  }
]

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "operations", label: "24×7 Operations" },
  { id: "reuse", label: "Water Recovery" },
  { id: "evidence", label: "Audit & Reports" }
]

export function FaqSection() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all")

  const filteredFaqs = React.useMemo(() => {
    if (activeCategory === "all") return FAQS
    return FAQS.filter(faq => faq.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="faq" className="py-8 sm:py-12 bg-transparent border-t border-black/[0.06] scroll-mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Sticky Editorial Heading & Category Filter Pills */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <Badge variant="default" className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold bg-primary/10 text-primary border-primary/20">
              STP O&amp;M FAQ
            </Badge>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Clear answers on 24×7 shift staffing, reuse quality standards, and monthly audit accountability.
            </p>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {CATEGORIES.map(cat => {
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-2xs font-semibold"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>

            {/* Need More Assistance Card */}
            <div className="p-5 rounded-3xl border border-black/[0.08] bg-slate-50/70 space-y-2 mt-4">
              <span className="font-mono text-[11px] font-bold text-primary uppercase tracking-wider block">
                Have Specific Plant Inquiries?
              </span>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our environmental engineering team evaluates STP layouts and reuse feasibility across commercial facilities.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-primary text-xs font-semibold gap-1.5 pt-1">
                <a href="#contact">
                  <span>Speak with our technical team</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column: Clean Accordion Items */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible defaultValue="faq-0" className="w-full space-y-3">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="border border-black/[0.08] rounded-2xl px-5 sm:px-6 bg-white shadow-2xs transition-all hover:border-primary/40 hover:shadow-xs"
                >
                  <AccordionTrigger className="text-left font-bold text-foreground text-sm sm:text-base py-4 sm:py-5 hover:no-underline hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4 pt-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
