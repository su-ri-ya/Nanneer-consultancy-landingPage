"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Compass,
  Search,
  Wrench,
  CheckCheck,
  ShieldCheck,
  ArrowRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    number: "01",
    title: "Understand Fundamentally",
    subtitle: "Baseline & Mass Balance Audit",
    icon: Compass,
    description:
      "We begin by understanding your facility at first principles. We audit design vs. actual hydraulic load, organic loading (COD/BOD/TSS), chemical dosages, pump flow rates, and basin retention times—pinpointing where actual operation deviated from original engineering intent.",
    deliverables: [
      "Hydraulic & mass balance assessment",
      "Chemical consumption vs. baseline audit",
      "Historical compliance fluctuation review"
    ]
  },
  {
    number: "02",
    title: "Diagnose Root Causes",
    subtitle: "On-Ground Physical & Biochemical Profiling",
    icon: Search,
    description:
      "Our team conducts hands-on on-ground testing: jar testing with plant-specific coagulants/polymers, biological health assessment (MLSS/MLVSS, settleability/SVI, DO profiles across aeration cells), and clarifier weir flow distribution checks.",
    deliverables: [
      "On-site coagulant & flocculant jar tests",
      "Dissolved Oxygen (DO) & microbial health checks",
      "Secondary clarifier hydraulic settling analysis"
    ]
  },
  {
    number: "03",
    title: "Fix the Gaps",
    subtitle: "Targeted On-Ground Process Rectification",
    icon: Wrench,
    description:
      "Rather than recommending costly civil overhauls or new equipment, we maximize your existing assets. We reset dosing regimes, re-balance air blower duty cycles, optimize return sludge (RAS) ratios, and clear hydraulic short-circuits.",
    deliverables: [
      "Chemical dosing curve recalibration",
      "Aeration blower & DO schedule tuning",
      "Sludge wasting and return flow optimization"
    ]
  },
  {
    number: "04",
    title: "Stabilise & Hand Over",
    subtitle: "Steady-State Verification & Operating SOPs",
    icon: CheckCheck,
    description:
      "We stay through load transitions (batch discharges, shift changes, weekend shutdowns) to verify that results hold in real operating conditions. We provide your plant team with clear operating windows, simplified daily testing protocols, and handover documentation.",
    deliverables: [
      "Multi-shift operational verification",
      "Customized operator logsheets & SOPs",
      "Continuous compliance peace of mind"
    ]
  }
]

export function ApproachSection() {
  return (
    <section id="approach" className="py-20 bg-muted/20 border-b border-border/60">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <Badge variant="healthy" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Engineering Methodology
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Our 4-step approach to lasting stability
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We don&apos;t sell chemicals or push unnecessary turnkey machinery. We solve the physics, chemistry, and biology of your existing plant so it performs reliably on your current budget.
          </p>
        </div>

        {/* 4 Staggered Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-black text-primary/30">
                      {step.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs font-semibold text-primary mt-0.5">
                      {step.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                    Key Outputs:
                  </span>
                  <ul className="space-y-1.5 text-xs text-foreground">
                    {step.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5 text-healthy shrink-0 mt-0.5" />
                        <span className="text-[11px] text-muted-foreground leading-tight">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-foreground">
              Have an urgent plant bottleneck or pending inspection?
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Our engineering specialists conduct structured on-ground diagnostics across facilities in India.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-primary hover:bg-primary/95 px-4 py-2.5 rounded-lg shadow-sm shrink-0"
          >
            <span>Request Diagnostic Visit</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

