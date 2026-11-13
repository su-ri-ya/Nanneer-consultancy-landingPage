"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  TrendingDown,
  Zap,
  CheckCircle2,
  Activity,
  Gauge,
  BarChart2,
  AlertTriangle,
  ShieldCheck
} from "lucide-react"

const FIELD_ALERTS = [
  "Coagulant dosing tuned: -24% chemical OPEX achieved",
  "Secondary clarifier torque balanced: Zero floc carryover",
  "DO aeration kinetics stabilized: Blower power cut by 18%",
  "SPCB statutory discharge: 100% compliant across COD/BOD/TSS",
  "Shift operator deployment: 100% attendance & audited logs"
]

// 12 dynamic trend bar heights representing plant stabilization
const STABILIZATION_TREND = [35, 48, 42, 65, 58, 78, 72, 85, 90, 94, 98, 100]

export function PlantIntelligenceConsole() {
  const [alertIndex, setAlertIndex] = React.useState(0)

  // Rotate field alerts smoothly
  React.useEffect(() => {
    const timer = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % FIELD_ALERTS.length)
    }, 3800)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full max-w-lg rounded-2xl border border-black/10 bg-white/95 p-4 shadow-2xl glow-border backdrop-blur-xl sm:p-5 select-none">
      {/* Floating Field Advisory Badge */}
      <div
        className="absolute -right-3 -top-3 sm:-right-4 sm:-top-4 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs font-bold text-primary floating shadow-xs backdrop-blur-md z-20"
        aria-hidden="true"
      >
        On-Ground Audit
      </div>

      <div className="relative z-10">
        {/* Top Header: Live Diagnostic Status + 3 Dots */}
        <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 pulse-glow" />
            <span className="font-mono text-xs font-semibold text-emerald-700">
              Diagnostic Benchmark · Active
            </span>
          </div>

          <div className="flex gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <div className="h-2.5 w-2.5 rounded-full bg-black/20" />
          </div>
        </div>

        {/* Plant Stabilization Score */}
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-xs text-muted-foreground font-medium">Plant Health &amp; Compliance Index</p>
            <p className="font-mono text-3xl sm:text-4xl font-bold text-primary tracking-tight">
              96<span className="text-xl text-muted-foreground font-normal">/100</span>
            </p>
          </div>

          <div className="flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-2.5 py-1 border border-emerald-500/20">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            <span className="font-mono text-xs font-bold text-emerald-700">100% In-Spec</span>
          </div>
        </div>

        {/* 4 Micro-Stat Tiles (Field Performance) */}
        <div className="mb-4 grid grid-cols-2 gap-2">
          {/* Chemical OPEX */}
          <div className="rounded-xl border border-black/[0.06] bg-black/[0.03] p-3">
            <div className="mb-1 flex items-center justify-between">
              <TrendingDown className="h-3.5 w-3.5 text-emerald-600" />
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-700">
                Reduced
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">Chemical OPEX</p>
            <p className="font-mono text-sm font-bold text-foreground">-24% Cut</p>
          </div>

          {/* Aeration Energy */}
          <div className="rounded-xl border border-black/[0.06] bg-black/[0.03] p-3">
            <div className="mb-1 flex items-center justify-between">
              <Zap className="h-3.5 w-3.5 text-secondary" />
              <span className="font-mono text-[10px] uppercase font-bold text-secondary">
                Tuned
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">Aeration Power</p>
            <p className="font-mono text-sm font-bold text-foreground">-18% kWh</p>
          </div>

          {/* SPCB Compliance */}
          <div className="rounded-xl border border-black/[0.06] bg-black/[0.03] p-3">
            <div className="mb-1 flex items-center justify-between">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              <span className="font-mono text-[10px] uppercase font-bold text-emerald-700">
                Audited
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">SPCB Norms</p>
            <p className="font-mono text-sm font-bold text-foreground">100% Pass</p>
          </div>

          {/* Shift Staffing */}
          <div className="rounded-xl border border-black/[0.06] bg-black/[0.03] p-3">
            <div className="mb-1 flex items-center justify-between">
              <Activity className="h-3.5 w-3.5 text-primary" />
              <span className="font-mono text-[10px] uppercase font-bold text-primary">
                Deployed
              </span>
            </div>
            <p className="text-[10px] text-muted-foreground">Shift Staffing</p>
            <p className="font-mono text-sm font-bold text-foreground">100% Uptime</p>
          </div>
        </div>

        {/* 30-Day Discharge Stabilization Trend */}
        <div className="mb-3 rounded-xl border border-black/[0.06] bg-black/[0.02] p-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
              <BarChart2 className="h-3.5 w-3.5 text-primary" />
              <span>30-Day Effluent Clarity &amp; COD Trend</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-700 font-semibold">Stabilized</span>
          </div>

          <div className="flex h-14 items-end gap-1.5 pt-1">
            {STABILIZATION_TREND.map((height, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="flex-1 rounded-sm bg-gradient-to-t from-primary/30 to-primary"
              />
            ))}
          </div>
        </div>

        {/* Field Diagnostic Alerts Ticker */}
        <div className="space-y-1.5">
          <p className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
            <AlertTriangle className="h-3 w-3 text-amber-500" />
            <span>On-Ground Diagnostic Feed</span>
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={alertIndex}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.25 }}
              className="rounded-lg border border-black/[0.06] bg-black/[0.03] px-3 py-2 text-[11px] font-medium text-foreground flex items-center justify-between"
            >
              <span>{FIELD_ALERTS[alertIndex]}</span>
              <span className="font-mono text-[10px] text-primary shrink-0 ml-2">Verified</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
