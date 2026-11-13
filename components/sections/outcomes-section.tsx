"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TargetKPI {
  value: string
  label: string
  status: string
}

const OPERATIONAL_TARGETS: TargetKPI[] = [
  {
    value: "≥99%",
    label: "Sewage Treatment Yield",
    status: "Treatment Benchmark"
  },
  {
    value: "≥99%",
    label: "STP Plant Availability",
    status: "Monthly Uptime"
  },
  {
    value: "≥99%",
    label: "Manpower Shift Coverage",
    status: "Roster Attendance"
  },
  {
    value: "Zero",
    label: "Unplanned Downtime",
    status: "Reliability Goal"
  }
]

export function OutcomesSection() {
  return (
    <section id="impact" className="relative py-8 sm:py-12 overflow-hidden bg-transparent border-t border-black/[0.06]">

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Editorial Split Header & Photo Feature */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & 4 Big Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <Badge variant="default" className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold mb-3 bg-primary/10 text-primary border-primary/20">
                Performance Targets
              </Badge>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
                Our Operational Commitments
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Measurable targets established for reliable commercial building water recovery.
              </p>
            </div>

            {/* 4 Big KPI Tiles (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3.5">
              {OPERATIONAL_TARGETS.map((target, idx) => (
                <motion.div
                  key={target.label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-2xl sm:rounded-3xl border border-black/[0.08] bg-slate-50/70 p-2.5 sm:p-5 hover:border-primary/40 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-primary px-1.5 sm:px-2 py-0.5 rounded-md bg-primary/10 inline-block mb-1 sm:mb-1.5 truncate max-w-full">
                    {target.status}
                  </span>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground font-mono">
                    {target.value}
                  </div>
                  <h3 className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-bold text-foreground leading-snug">
                    {target.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Photo Feature (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-black/[0.08] bg-slate-100 group">
              <Image
                src="/images/case-techpark-stp.jpg"
                alt="Nanneer STP Water Recovery Operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Floating Top Badge */}
              <div className="absolute top-4 left-4 z-10">
                <div className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md px-3.5 py-1.5 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-xs font-bold text-slate-900">
                    Active Plant Asset
                  </span>
                </div>
              </div>

              {/* Bottom Quote / Assurance */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-300 mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Evidence-Based Assurance</span>
                </div>
                <p className="text-sm font-medium text-white/95 leading-snug">
                  Transforming sewage treatment into an active, high-yield water recovery utility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
