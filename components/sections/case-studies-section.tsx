"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  FileText,
  TrendingDown,
  ShieldCheck,
  RotateCcw,
  Building,
  Factory,
  FlaskConical,
  ArrowRight,
  CheckCircle2
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const caseStudies = [
  {
    icon: Factory,
    sector: "Automotive Component Manufacturing",
    title: "Overcoming Inconsistent Discharge & Sludge Carryover",
    challenge:
      "Pin-point floc carryover in secondary clarifiers was causing repeated COD/TSS threshold breaches during state pollution control board reviews, with chemical costs spiraling out of control.",
    intervention:
      "Conducted on-site stoichiometric jar testing, recalibrated coagulant and polymer dosing ratios, and tuned clarifier weir hydraulic loading to achieve steady laminar settling.",
    metrics: [
      { label: "Chemical OPEX Cut", value: "-24%" },
      { label: "PCB Compliance", value: "100% In-Spec" },
      { label: "Turnaround Time", value: "48 Hours" }
    ]
  },
  {
    icon: Building,
    sector: "Commercial Tech Park STP (250 KLD)",
    title: "Eliminating Persistent Odors & Operator Shortages",
    challenge:
      "Severe basement odor complaints and 48 hours of plant disturbance due to sudden operator absenteeism, erratic blower cycling, and biological starvation in the aeration basin.",
    intervention:
      "Deployed certified Nanneer shift operators with structured daily deployment logging; stabilized dissolved oxygen (DO) at 2.2 mg/L; restored active microbial biomass.",
    metrics: [
      { label: "Odor Complaints", value: "Zero in 72h" },
      { label: "Shift Coverage", value: "100% Logged" },
      { label: "Water Reused", value: "180 KLD" }
    ]
  },
  {
    icon: FlaskConical,
    sector: "Specialty Chemical Synthesis",
    title: "Forensic Hydraulic Audit Averts ₹45 Lakh Unneeded CAPEX",
    challenge:
      "Plant management was advised by equipment vendors to install a new secondary clarifier costing ₹45 Lakhs due to alleged tank undersizing and recurring hydraulic overflows.",
    intervention:
      "Comprehensive hydraulic retention time (HRT) and tracer audit revealed internal short-circuiting caused by damaged baffle plates rather than inadequate tank volume.",
    metrics: [
      { label: "CAPEX Averted", value: "₹45 Lakhs" },
      { label: "Fix Cost", value: "< ₹60,000" },
      { label: "Throughput Gain", value: "+30%" }
    ]
  }
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-20 bg-muted/20 border-b border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <Badge variant="healthy" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Field Evidence & Case Studies
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Proven On-Ground Turnarounds
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Real engineering results from facilities where treatment systems existed, but performance failed to meet design expectations.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.09 }}
                className={`rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between ${
                  index === 2 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10">
                      {study.sector}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {study.title}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
                    <p>
                      <strong className="text-foreground font-semibold">Challenge:</strong> {study.challenge}
                    </p>
                    <p>
                      <strong className="text-foreground font-semibold">Nanneer Fix:</strong> {study.intervention}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-border/60">
                  <div className="grid grid-cols-3 gap-2 text-center pb-2">
                    {study.metrics.map((m, i) => (
                      <div key={i} className="p-2 rounded-lg bg-muted/40">
                        <div className="text-sm font-extrabold text-foreground font-mono">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-muted-foreground font-medium mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs">
                    <span className="text-emerald-600 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Verified Outcome
                    </span>
                    <a
                      href="#contact"
                      className="font-semibold text-primary hover:underline flex items-center gap-1"
                    >
                      <span>Discuss Your Plant</span>
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

