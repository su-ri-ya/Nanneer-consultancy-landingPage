"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  AlertOctagon,
  Gauge,
  Flame,
  ActivitySquare,
  FlaskConical
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const problems = [
  {
    icon: TrendingUp,
    title: "Escalating Chemical & Power OPEX",
    badge: "Cost Leakage",
    description:
      "Coagulant and polymer costs continue rising each month, blower electricity accounts for huge bills, yet treated water clarity remains inconsistent.",
    impact: "15%–35% recurring cost leakage",
  },
  {
    icon: AlertOctagon,
    title: "Continuous Statutory Compliance Anxiety",
    badge: "Regulatory Risk",
    description:
      "Treated discharge parameters (COD, BOD, TSS, Ammoniacal Nitrogen) fluctuate unpredictably with incoming batch loads, creating risk before pollution control board audits.",
    impact: "Inspection notices & potential shutdown",
  },
  {
    icon: Gauge,
    title: "Clarifier & Filtration Bottlenecks",
    badge: "Process Inefficiency",
    description:
      "Poor flocculation, sludge bulking, high turbidity carryover, and premature filter blinding drive frequent backwashes and reduced hydraulic throughput.",
    impact: "Unplanned operational downtime",
  },
  {
    icon: Flame,
    title: "Manpower Shortages & Unskilled Operations",
    badge: "Operational Downtime",
    description:
      "Treatment facilities frequently suffer 40+ hours of non-operation and severe process upsets simply due to operator shortages, high shift attrition, and lack of verified daily plant logs.",
    impact: "Unplanned downtime & compliance breaches",
  },
  {
    icon: ActivitySquare,
    title: "Treated Water Unusable for Reuse",
    badge: "Resource Loss",
    description:
      "Treated effluent promised for cooling towers, boiler feed, or flushing cannot be safely utilized due to residual odor, color, or turbidity, forcing costly freshwater purchases.",
    impact: "High freshwater tanker expenses",
  },
  {
    icon: FlaskConical,
    title: "Biological Shock & Severe Odor Generation",
    badge: "Biological Drift",
    description:
      "Sudden toxic load spikes, erratic aeration, and falling MLSS biomass trigger culture die-offs, foul septic odors, and weeks of unbudgeted plant recovery downtime.",
    impact: "Active biomass loss & odor complaints",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-12 sm:py-16 md:py-20 bg-transparent border-b border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <Badge variant="silt" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Operational Headwinds
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Common Challenges Facing ETP & STP Facilities
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Most treatment facilities fail to achieve design specs not because of bad equipment, but due to uncalibrated chemical recipes, biological stress, and process drift.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="silt" className="text-[11px] font-semibold">
                      {problem.badge}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-border/60 text-xs font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <span>Impact:</span>
                  <span>{problem.impact}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
