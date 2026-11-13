"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FlaskConical,
  Activity,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Gauge,
  ArrowRight,
  TrendingDown,
  Wrench,
  ChevronRight
} from "lucide-react"

interface DiagnosticStation {
  id: string
  code: string
  name: string
  stageTag: string
  metricLabel: string
  metricValue: string
  metricDelta: string
  status: "Optimized" | "Audited" | "Calibrated"
  icon: React.ElementType
  symptom: string
  engineeringFix: string
  measuredResult: string
}

const STATIONS: DiagnosticStation[] = [
  {
    id: "treatment-yield",
    code: "STATION 01",
    name: "Sewage Treatment Yield",
    stageTag: "Inflow Treatment Benchmark",
    metricLabel: "Sewage Treated",
    metricValue: "≥99%",
    metricDelta: "Share of Incoming Sewage Treated",
    status: "Calibrated",
    icon: Activity,
    symptom: "Unmonitored bypass and unbuffered surges cause untreated sewage overflow during morning peak hours.",
    engineeringFix: "Continuous biological kinetics management, DO regulation, and secondary clarification tuning.",
    measuredResult: "≥99% incoming sewage successfully treated to non-potable statutory reuse standards."
  },
  {
    id: "plant-uptime",
    code: "STATION 02",
    name: "STP Plant Availability",
    stageTag: "Reliable Asset Performance",
    metricLabel: "Monthly Uptime",
    metricValue: "≥99%",
    metricDelta: "Operational Availability Target",
    status: "Optimized",
    icon: Layers,
    symptom: "Sudden pump jamming, blower tripping, and aeration diffusers clogging causing emergency plant shutdown.",
    engineeringFix: "Strict preventive maintenance routines, vibration checks, and scheduled cleaning checklists.",
    measuredResult: "Zero unplanned operational interruptions and ≥99% monthly mechanical equipment availability."
  },
  {
    id: "manpower-coverage",
    code: "STATION 03",
    name: "24×7 Shift Coverage",
    stageTag: "3 Shifts · 24×7",
    metricLabel: "Shift Coverage",
    metricValue: "100%",
    metricDelta: "Scheduled Shifts Covered",
    status: "Calibrated",
    icon: ShieldCheck,
    symptom: "Operator absenteeism and untrained night-shift labor causing septic odor buildup and tank overflow.",
    engineeringFix: "Certified multi-shift staffing, defined SOPs, digital shift sign-ins, and daily logbook audits.",
    measuredResult: "100% roster attendance coverage across all 3 shifts, 24×7."
  },
  {
    id: "water-recovery",
    code: "STATION 04",
    name: "Beneficial Water Reuse",
    stageTag: "Cooling · Flush · Garden",
    metricLabel: "Treated Reused",
    metricValue: "99 KL",
    metricDelta: "Out of 100 KL Inflow",
    status: "Audited",
    icon: FlaskConical,
    symptom: "Treated wastewater discharged into municipal drains due to lack of application-specific water polishing.",
    engineeringFix: "Application-grade polishing, chlorination/UV disinfection, and turbidity control for cooling and flush.",
    measuredResult: "39.6 KL cooling makeup + 39.6 KL toilet flush + 19.8 KL gardening fully utilized daily."
  }
]

export function PlantDiagnosticInspector() {
  const [activeStation, setActiveStation] = React.useState<DiagnosticStation>(STATIONS[0])
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true)

  // Gentle auto-rotation between stations unless paused by user interaction
  React.useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setActiveStation((prev) => {
        const currentIdx = STATIONS.findIndex((s) => s.id === (prev?.id || ""))
        const nextIdx = (Math.max(0, currentIdx) + 1) % STATIONS.length
        return STATIONS[nextIdx]
      })
    }, 4500)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  const Icon = activeStation.icon

  return (
    <div
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      className="relative w-full max-w-xl rounded-3xl border border-black/10 bg-white p-5 sm:p-6 shadow-2xl backdrop-blur-xl select-none flex flex-col justify-between"
    >
      {/* Top Header: Physical Diagnostic Scope */}
      <div className="flex items-center justify-between border-b border-black/[0.06] pb-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
            <Wrench className="h-4 w-4 text-primary" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase font-bold text-primary tracking-wider block">
              Field Audit Simulator
            </span>
            <h3 className="text-sm font-bold text-foreground">
              ETP &amp; STP Diagnostic Probe
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-emerald-700 text-xs font-semibold">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>4 Stations Active</span>
        </div>
      </div>

      {/* 4 Interactive Process Stations (Mini Horizontal Train) */}
      <div className="grid grid-cols-4 gap-1.5 sm:gap-2 mb-4">
        {STATIONS.map((station) => {
          const isSelected = activeStation.id === station.id
          const StationIcon = station.icon

          return (
            <button
              key={station.id}
              onClick={() => setActiveStation(station)}
              className={`relative rounded-xl p-2.5 text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? "bg-primary text-white border-primary shadow-md scale-[1.02] z-10"
                  : "bg-slate-50/80 hover:bg-slate-100 border-black/[0.06] text-foreground"
              }`}
            >
              <div>
                <span
                  className={`font-mono text-[9px] font-bold block mb-1 ${
                    isSelected ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {station.code}
                </span>
                <p className="text-xs font-bold leading-tight line-clamp-1">
                  {station.name.split(" ")[0]}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <StationIcon
                  className={`h-3.5 w-3.5 ${isSelected ? "text-white" : "text-primary"}`}
                />
                <span
                  className={`font-mono text-[11px] font-bold ${
                    isSelected ? "text-white" : "text-emerald-600"
                  }`}
                >
                  {station.metricValue}
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {/* Detailed Diagnostic Station Inspection Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStation.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-black/[0.08] bg-slate-50/70 p-4 sm:p-5 space-y-3.5"
        >
          {/* Station Title & Live Metric Delta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.06] pb-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shrink-0 shadow-xs">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <span className="font-mono text-[10px] font-semibold text-primary uppercase tracking-wider block">
                  {activeStation.stageTag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-foreground">
                  {activeStation.name}
                </h4>
              </div>
            </div>

            <div className="bg-white border border-black/[0.08] rounded-xl px-3 py-1.5 text-right shrink-0">
              <span className="text-[10px] font-medium text-muted-foreground block">
                {activeStation.metricLabel}
              </span>
              <span className="font-mono text-base font-extrabold text-primary block leading-none">
                {activeStation.metricValue}
              </span>
            </div>
          </div>

          {/* On-Site Engineering Diagnosis Details */}
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 text-foreground/80">
              <span className="font-bold text-red-600 font-mono text-[11px] shrink-0 mt-0.5">
                Observed Gap:
              </span>
              <span className="leading-relaxed">{activeStation.symptom}</span>
            </div>

            <div className="flex items-start gap-2 text-foreground">
              <span className="font-bold text-primary font-mono text-[11px] shrink-0 mt-0.5">
                Nanneer Tuning:
              </span>
              <span className="leading-relaxed font-medium">{activeStation.engineeringFix}</span>
            </div>

            <div className="flex items-start gap-2 text-emerald-800 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="leading-relaxed font-semibold">{activeStation.measuredResult}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Dispatch Footer */}
      <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs">
        <span className="text-muted-foreground font-medium hidden sm:inline">
          Facing plant instability at this unit?
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline ml-auto"
        >
          <span>Request On-Site Jar Testing &amp; Audit</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}

