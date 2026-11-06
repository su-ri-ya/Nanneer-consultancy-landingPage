"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  TrendingDown,
  RotateCcw,
  Zap,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const metrics = [
  {
    label: "Chemical & OPEX Reduction",
    value: "18% – 35%",
    detail: "Typical monthly savings achieved by correcting coagulant and polymer recipes and eliminating over-dosing.",
    icon: TrendingDown
  },
  {
    label: "Treated Water Recovery Gain",
    value: "+15% – 28%",
    detail: "High-clarity recovered water volume made safely usable for on-site non-potable cooling tower makeup and flushing.",
    icon: RotateCcw
  },
  {
    label: "Aeration Energy Optimization",
    value: "12% – 22%",
    detail: "Power drop achieved through dissolved oxygen (DO) feedback calibration and blower duty cycle rationalization.",
    icon: Zap
  },
  {
    label: "Discharge Compliance Reliability",
    value: "99%+",
    detail: "Steady-state operation adhering to State Pollution Control Board statutory discharge standards.",
    icon: ShieldCheck
  }
]

export function OutcomesSection() {
  return (
    <section id="outcomes" className="py-12 sm:py-16 md:py-20 bg-transparent border-b border-border">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
          <Badge variant="healthy" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Demonstrated Results
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Measurable Plant Performance Gains
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Our consulting engagements are measured by tangible reductions in operating costs, stable discharge parameters, and complete peace of mind during regulatory reviews.
          </p>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-extrabold font-mono text-foreground">
                      {metric.value}
                    </div>
                    <h3 className="text-sm font-bold text-foreground mt-2">
                      {metric.label}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {metric.detail}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Verified On-Site Outcome</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
