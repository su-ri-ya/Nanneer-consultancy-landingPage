"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Clock,
  ClipboardList,
  Camera,
  FileText,
  ShieldCheck,
  CheckCircle2,
  FileDown
} from "lucide-react"

interface EvidenceTier {
  id: string
  step: string
  title: string
  icon: React.ElementType
  deliverable: string
  detail: string
  // Cardinal positions on orbit ring: 0 (top), 1 (right), 2 (bottom), 3 (left)
  positionClasses: string
}

const EVIDENCE_TIERS: EvidenceTier[] = [
  {
    id: "shift-manning",
    step: "01",
    title: "24×7 STP Operators",
    icon: Clock,
    deliverable: "100% Shift Attendance",
    detail: "3 shifts per day (24×7 coverage) with certified biological treatment operators.",
    positionClasses: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
  },
  {
    id: "shift-logbook",
    step: "02",
    title: "Digital Shift Logbook",
    icon: ClipboardList,
    deliverable: "Timestamped Cloud Logs",
    detail: "Standardized shift checklists, chemical dosing records, and backwash SOPs.",
    positionClasses: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
  },
  {
    id: "inspection-media",
    step: "03",
    title: "On-Site Inspection Media",
    icon: Camera,
    deliverable: "Visual Incident Trail",
    detail: "Time-stamped photographic evidence for pump conditions, clarifiers, and filter media.",
    positionClasses: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
  },
  {
    id: "monthly-dossier",
    step: "04",
    title: "Monthly Audit Dossier",
    icon: FileText,
    deliverable: "Executive Monthly Report",
    detail: "Verified monthly water balance, lab certificates, and equipment run-hours.",
    positionClasses: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
  }
]

export function WhyNanneerSection() {
  const [selectedId, setSelectedId] = React.useState<string>("monthly-dossier")
  const [isPaused, setIsPaused] = React.useState<boolean>(false)
  const activeTier = EVIDENCE_TIERS.find((t) => t.id === selectedId) || EVIDENCE_TIERS[3]

  // Auto-cycle through tiers periodically if user is not hovering/touching
  React.useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setSelectedId((prev) => {
        const idx = EVIDENCE_TIERS.findIndex((t) => t.id === prev)
        return EVIDENCE_TIERS[(idx + 1) % EVIDENCE_TIERS.length].id
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section id="why-nanneer" className="relative py-6 sm:py-8 lg:py-10 bg-transparent border-t border-black/[0.06] overflow-hidden scroll-mt-16">
      {/* Subtle radial ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_55%,rgba(14,165,233,0.06),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Editorial Header (Compact, Screen-Fitted) */}
        <div className="max-w-3xl mx-auto text-center mb-4 sm:mb-5">
          <div className="inline-flex items-center rounded-full border border-sky-400/50 bg-sky-50/50 px-3.5 py-0.5 shadow-2xs mb-2">
            <span className="font-mono text-[11px] font-bold tracking-widest text-slate-800 uppercase">
              EVIDENCE-BASED ACCOUNTABILITY
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
            Every Shift Documented.{" "}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-400 to-teal-400 font-extrabold mt-0.5">
              Every Month Accounted For.
            </span>
          </h2>

          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Transforming routine STP operations into a structured, permanent operational record.
          </p>
        </div>

        {/* Unified Planetary Orbit Diagram (Runs smoothly on Mobile, Tablet & Desktop) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="relative flex items-center justify-center w-full max-w-2xl mx-auto h-[270px] sm:h-[310px] lg:h-[330px] my-1 sm:my-2"
        >
          {/* Custom Keyframe Rules to Guarantee Smooth Spin on all Mobile Browsers */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes smoothOrbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes smoothCounterOrbit {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
          `}} />

          {/* Static Outer Track Ring */}
          <div className="absolute w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] lg:w-[250px] lg:h-[250px] rounded-full border border-slate-200/90 pointer-events-none" />

          {/* Static Inner Radar Dashed Ring */}
          <div className="absolute w-[120px] h-[120px] sm:w-[155px] sm:h-[155px] lg:w-[170px] lg:h-[170px] rounded-full border border-dashed border-slate-200/60 pointer-events-none" />

          {/* Central Static AUDIT Hub (Stationary Core) */}
          <div className="relative z-20 flex flex-col items-center justify-center pointer-events-none select-none">
            {/* Animated Sonar Pulse Wave */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute -inset-2 rounded-full border border-sky-400/40 pointer-events-none"
            />

            {/* Hub Frame */}
            <div className="w-16 h-16 sm:w-22 sm:h-22 lg:w-24 lg:h-24 rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-xs">
              <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-white border border-slate-200/90 shadow-md flex flex-col items-center justify-center gap-0.5">
                <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-slate-900 stroke-[2.2]" />
                <span className="font-mono text-[8px] sm:text-[9px] font-extrabold tracking-widest text-slate-900 uppercase">
                  AUDIT
                </span>
              </div>
            </div>
          </div>

          {/* Continuous Rotating Orbit Ring Layer */}
          <div
            style={{
              animation: "smoothOrbit 45s linear infinite",
              animationPlayState: isPaused ? "paused" : "running"
            }}
            className="absolute w-[180px] h-[180px] sm:w-[230px] sm:h-[230px] lg:w-[250px] lg:h-[250px] rounded-full z-30"
          >
            {/* Orbiting Glowing Cyan Beacon Dot with Pulse */}
            <div className="absolute top-[18%] right-[5%] -translate-y-1/2 pointer-events-none">
              <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
              </span>
            </div>

            {/* 4 Orbiting Nodes */}
            {EVIDENCE_TIERS.map((tier) => {
              const Icon = tier.icon
              const isSelected = selectedId === tier.id

              return (
                <div
                  key={tier.id}
                  onClick={() => setSelectedId(tier.id)}
                  className={`absolute ${tier.positionClasses} cursor-pointer group`}
                >
                  {/* Counter-Rotation Wrapper: Rotates reverse so node stays strictly upright */}
                  <div
                    style={{
                      animation: "smoothCounterOrbit 45s linear infinite",
                      animationPlayState: isPaused ? "paused" : "running"
                    }}
                    className="flex flex-col items-center"
                  >
                    {/* Circular White Floating Card */}
                    <div
                      className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white border flex items-center justify-center transition-all duration-300 shadow-md ${
                        isSelected
                          ? "border-sky-500 ring-4 ring-sky-500/20 scale-110 shadow-lg"
                          : "border-slate-200/90 hover:border-slate-300 hover:scale-105"
                      }`}
                    >
                      <Icon
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-colors duration-200 ${
                          isSelected ? "text-sky-600 stroke-[2.2]" : "text-slate-800 stroke-[1.8] group-hover:text-slate-900"
                        }`}
                      />
                    </div>

                    {/* Unified Pill Label Below Icon (Mobile & Desktop) */}
                    <div
                      className={`mt-1 sm:mt-1.5 px-2 sm:px-2.5 py-0.5 rounded-full border bg-white/95 backdrop-blur-xs shadow-2xs text-[9px] sm:text-[10px] font-semibold whitespace-nowrap transition-all duration-200 ${
                        isSelected
                          ? "border-sky-500/80 bg-sky-50/90 text-slate-900 shadow-xs scale-105 ring-2 ring-sky-500/20"
                          : "border-slate-200/90 text-slate-700 group-hover:border-slate-300"
                      }`}
                    >
                      <span className="font-mono text-[8px] sm:text-[9px] font-bold text-sky-700 mr-1">{tier.step}</span>
                      <span className="hidden sm:inline">{tier.title}</span>
                      <span className="sm:hidden">{tier.title.replace("24×7 STP ", "").replace("Digital ", "").replace("On-Site ", "").replace("Monthly ", "")}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Selected Tier Detail Bar (Unified for Mobile & Desktop) */}
        <div className="max-w-2xl mx-auto mt-2 px-2 sm:px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTier.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="rounded-2xl border border-slate-200/90 bg-white sm:bg-slate-50/90 p-3 sm:p-4 shadow-xs sm:shadow-2xs space-y-2"
            >
              {/* Row 1: Header with Tier Badge, Title, and Deliverable Status Pill */}
              <div className="flex items-center justify-between gap-2 sm:gap-3">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  {activeTier.step !== "04" && (
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sky-700 bg-sky-100/80 px-2 sm:px-2.5 py-0.5 rounded-full shrink-0">
                      Tier {activeTier.step}
                    </span>
                  )}
                  <span className="font-bold text-slate-900 text-xs sm:text-sm truncate">
                    {activeTier.title}
                  </span>
                </div>
                <div className="shrink-0 flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-[10px] sm:text-[11px] font-mono font-semibold text-emerald-700 shadow-2xs">
                  <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                  <span className="truncate max-w-[120px] sm:max-w-none">{activeTier.deliverable}</span>
                </div>
              </div>

              {/* Row 2: Detail Text and Action Button */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 pt-1.5 border-t border-slate-200/60">
                <p className="text-xs text-slate-600 leading-relaxed max-w-md">
                  {activeTier.detail}
                </p>
                <a
                  href="/documents/Plant_Manpower_Operation_Report_Updated_SEP.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white text-[11px] font-semibold shadow-xs transition-colors self-start sm:self-center w-full sm:w-auto"
                >
                  <FileDown className="h-3.5 w-3.5" />
                  <span>Download Sample Report (PDF)</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
