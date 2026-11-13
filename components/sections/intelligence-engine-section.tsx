"use client"

import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { X, ArrowUpRight, FileText, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

interface ReportItem {
  code: string
  tag: string
  cardCaption: string
  docTitle: string
  docName: string
  cardImage: string
  reportImage: string
  desc: string
  content: React.ReactNode
}

const SAMPLE_REPORTS: ReportItem[] = [
  {
    code: "01",
    tag: "01 • FLOW ACCOUNTING",
    cardCaption: "Dual magnetic meters track 100% sewage flow without bypass.",
    docTitle: "Source vs. Treated Water Balance",
    docName: "Water_Consumption_Monthly_Report_OCT_2026.pdf",
    cardImage: "/images/stp-inflow-metering.jpg",
    reportImage: "/images/reports/sample_report_01_flow.png",
    desc: "Actual Page 4 from the Water Consumption Report reconciling raw source inlet water against treated reuse deployment with consumption distribution charts.",
    content: (
      <div className="space-y-2 text-[11px] font-mono">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">SOURCE WATER INFLOW:</span>
          <strong className="text-slate-900 text-xs">3,373.00 m³</strong> (Raw Sump)
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">TREATED WATER REUSED:</span>
          <strong className="text-blue-700 text-xs">631.00 m³</strong> (Dual Magmeter)
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">SOURCE - TREATED BALANCE:</span>
          <strong className="text-slate-900">2,742.00 m³</strong> (Net Consumed)
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">RECYCLED TREATED %:</span>
          <strong className="text-blue-700">18.7% of total source</strong>
        </div>
        <p className="text-emerald-700 font-bold text-[11px] pt-1">
          ✔ Dual EMF Metering Head Verified • Zero Untreated Bypass
        </p>
      </div>
    )
  },
  {
    code: "02",
    tag: "02 • QUALITY CONTROL",
    cardCaption: "NABL-certified laboratory tests for strict TNPCB compliance.",
    docTitle: "Water Quality Statistical Control Charts",
    docName: "Field_Test_Monthly_Report_OCT_2026.pdf",
    cardImage: "/images/stp-lab-testing.jpg",
    reportImage: "/images/reports/sample_report_02_lab.png",
    desc: "Actual monthly quality control charts displaying continuous run parameters strictly maintained within regulatory limits.",
    content: (
      <div className="space-y-2 text-[11px] font-mono">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">CONTROL BOUNDARY PROTOCOL:</span>
          <strong className="text-slate-900 text-xs">UCL / LCL Statistical Limits</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">KEY PARAMETERS TRACKED:</span>
          <strong className="text-blue-700 text-xs">pH, Turbidity, MLSS, Dissolved O₂</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">BOUNDARY EXCURSIONS:</span>
          <strong className="text-emerald-700">0 Out-of-Spec Violations</strong>
        </div>
        <p className="text-emerald-700 font-bold text-[11px] pt-1">
          ✔ Real-time Quality Run-Charts with Zero TNPCB Deviations
        </p>
      </div>
    )
  },
  {
    code: "03",
    tag: "03 • LEVEL SENSORS",
    cardCaption: "Ultrasonic level telemetry with early overflow prevention alarms.",
    docTitle: "Per-Tank Telemetry Variability Analysis",
    docName: "Tank_level_Monthly_Report_OCT_2026.pdf",
    cardImage: "/images/stp-tank-levels.jpg",
    reportImage: "/images/reports/sample_report_03_levels.png",
    desc: "Per-item statistical variability analysis across all 7 sump tanks assessing standard deviation and continuous capacity headroom.",
    content: (
      <div className="space-y-2 text-[11px] font-mono">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">SUMP TANKS MONITORED:</span>
          <strong className="text-slate-900 text-xs">7 Critical Storage Vessels</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">VARIABILITY ANALYSIS:</span>
          <strong className="text-blue-700 text-xs">Std Dev, Variance &amp; Daily Means</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">RADAR TELEMETRY RELIABILITY:</span>
          <strong className="text-emerald-700">100% Sensor Data Integrity</strong>
        </div>
        <p className="text-emerald-700 font-bold text-[11px] pt-1">
          ✔ Automated Continuous Radar Level Monitoring
        </p>
      </div>
    )
  },
  {
    code: "04",
    tag: "04 • MECHANICAL ASSETS",
    cardCaption: "Blower run-hours, motor vibration logs, and sludge press dewatering.",
    docTitle: "Filter Feed Treated EMF Meter Stability",
    docName: "Water_Consumption_Monthly_Report_OCT_2026.pdf",
    cardImage: "/images/sludge-press-landscape.jpg",
    reportImage: "/images/reports/sample_report_04_equipment.png",
    desc: "Actual Page 9 displaying the Coefficient of Variation (CV) process stability analysis and daily flow run-hours for the filter feed pumps.",
    content: (
      <div className="space-y-2 text-[11px] font-mono">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">ELECTROMECHANICAL ASSET:</span>
          <strong className="text-slate-900 text-xs">Filter Feed Treated Pump Unit</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">STABILITY METRIC:</span>
          <strong className="text-blue-700 text-xs">CV Process Variation Analysis</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">OPERATIONAL CONTINUITY:</span>
          <strong className="text-emerald-700">High Consistency Across Shifts</strong>
        </div>
        <p className="text-emerald-700 font-bold text-[11px] pt-1">
          ✔ Mechanical Asset Uptime: 100% Verified
        </p>
      </div>
    )
  },
  {
    code: "05",
    tag: "05 • OPERATIONAL SOPS",
    cardCaption: "24×7 multi-shift certified operators executing scheduled dosing.",
    docTitle: "Plant Manpower & Operation Report",
    docName: "Plant_Manpower_Operation_Report_Updated_SEP.pdf",
    cardImage: "/images/service-chemical-dosing.jpg",
    reportImage: "/images/reports/sample_report_05_sops.png",
    desc: "Actual Page 1 showing the certified operator man-days (78 required, 73 provided, 584 hours) and zero plant non-operation due to manpower.",
    content: (
      <div className="space-y-2 text-[11px] font-mono">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">REQUIRED MANPOWER:</span>
          <strong className="text-slate-900 text-xs">78 Man-Days (624 Hours)</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">PROVIDED MANPOWER:</span>
          <strong className="text-blue-700 text-xs">73 Man-Days (584 Hours)</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">PLANT NON-OPERATION:</span>
          <strong className="text-emerald-700">NIL (Zero Downtime)</strong>
        </div>
        <p className="text-emerald-700 font-bold text-[11px] pt-1">
          ✔ 24×7 Certified Operator Attendance Sign-off
        </p>
      </div>
    )
  },
  {
    code: "06",
    tag: "06 • EXECUTIVE EVIDENCE",
    cardCaption: "Monthly board-ready compliance dossiers with 100% legal indemnity.",
    docTitle: "Total Water Consumption Trend & Breakdown",
    docName: "PRESTIGE_POLYGON_STP_240_KLD_OCTOBER_2026.pdf",
    cardImage: "/images/stp-monthly-report.jpg",
    reportImage: "/images/reports/sample_report_06_dossier.png",
    desc: "Actual Page 6 displaying the daily total water consumption trend and itemized distribution breakdown from the comprehensive monthly audit.",
    content: (
      <div className="space-y-2 text-[11px] font-mono">
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">EXECUTIVE DOSSIER:</span>
          <strong className="text-slate-900 text-xs">373-Page Master Compliance Audit</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">EXECUTIVE VISUALIZATION:</span>
          <strong className="text-blue-700 text-xs">Daily Trend &amp; Itemized Distribution</strong>
        </div>
        <div className="p-2 bg-slate-50 rounded-lg border border-slate-200">
          <span className="text-slate-500 block">AUDIT COMPLIANCE:</span>
          <strong className="text-emerald-700">100% Board-Ready Indemnity</strong>
        </div>
        <p className="text-emerald-700 font-bold text-[11px] pt-1">
          ✔ Statutory Legal Indemnity Guaranteed for Building Ownership
        </p>
      </div>
    )
  }
]

export function IntelligenceEngineSection() {
  const [activeModalIdx, setActiveModalIdx] = React.useState<number | null>(null)
  const trackRef = React.useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = React.useState(false)
  const [canScrollRight, setCanScrollRight] = React.useState(true)
  const [activeSegment, setActiveSegment] = React.useState(0)
  const [isDragging, setIsDragging] = React.useState(false)
  const dragInfoRef = React.useRef<{
    isDown: boolean
    startX: number
    scrollLeft: number
    hasMoved: boolean
  }>({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
    hasMoved: false,
  })

  // Close modal on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalIdx(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Lock body scroll when modal is active
  React.useEffect(() => {
    if (activeModalIdx !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [activeModalIdx])

  const updateScrollState = React.useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanScrollLeft(scrollLeft > 20)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20)
    const progress = scrollLeft / (scrollWidth - clientWidth || 1)
    setActiveSegment(progress > 0.45 ? 1 : 0)
  }, [])

  React.useEffect(() => {
    updateScrollState()
    window.addEventListener("resize", updateScrollState)
    return () => window.removeEventListener("resize", updateScrollState)
  }, [updateScrollState])

  // Mouse Grab-to-Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return
    const el = trackRef.current
    if (!el) return
    dragInfoRef.current = {
      isDown: true,
      startX: e.pageX,
      scrollLeft: el.scrollLeft,
      hasMoved: false,
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragInfoRef.current.isDown) return
    const el = trackRef.current
    if (!el) return
    const dx = e.pageX - dragInfoRef.current.startX
    if (Math.abs(dx) > 5) {
      if (!isDragging) setIsDragging(true)
      dragInfoRef.current.hasMoved = true
      el.scrollLeft = dragInfoRef.current.scrollLeft - dx
    }
  }

  const handleMouseUpOrLeave = () => {
    dragInfoRef.current.isDown = false
    if (isDragging) {
      setTimeout(() => {
        setIsDragging(false)
        dragInfoRef.current.hasMoved = false
      }, 60)
    }
  }

  const scrollRow = (direction: number) => {
    const el = trackRef.current
    if (!el) return
    const scrollAmount = el.clientWidth * 0.82
    el.scrollBy({ left: direction * scrollAmount, behavior: "smooth" })
  }

  const activeItem = activeModalIdx !== null ? SAMPLE_REPORTS[activeModalIdx] : null

  return (
    <section id="engine" className="relative py-10 sm:py-14 lg:py-16 overflow-hidden bg-slate-50/60 text-slate-900 border-t border-black/[0.06]">
      {/* Subtle Blue Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,102,204,0.06),transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl w-full space-y-5 sm:space-y-6">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div>
            <Badge
              variant="default"
              className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold bg-blue-50 text-blue-800 border-blue-200/80 shadow-2xs"
            >
              Plant Telemetry &amp; Audits
            </Badge>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight">
            Six Areas We Monitor &amp; Report
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
            Click any area to inspect the actual single-page report sheet from our certified operational audit.
          </p>

          {/* Centered Segment Indicators */}
          <div className="flex items-center justify-center gap-1.5 pt-1.5">
            <span
              className={`h-1 rounded-full transition-all duration-300 ${
                activeSegment === 0 ? "w-8 bg-blue-600" : "w-6 bg-slate-300"
              }`}
            />
            <span
              className={`h-1 rounded-full transition-all duration-300 ${
                activeSegment === 1 ? "w-8 bg-blue-600" : "w-6 bg-slate-300"
              }`}
            />
          </div>
        </div>

        {/* NETFLIX-STYLE FLUID CAROUSEL ROW */}
        <div className="relative w-full group/row py-2">
          
          {/* Netflix Left Edge Paddle Button (Hidden on Mobile/Touch) */}
          <button
            type="button"
            onClick={() => scrollRow(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous cards"
            className="hidden md:flex absolute left-0 top-0 bottom-0 z-30 w-12 sm:w-16 bg-gradient-to-r from-slate-50/95 via-slate-50/70 to-transparent items-center justify-start pl-1 sm:pl-2 text-slate-800 transition-all duration-300 opacity-0 group-hover/row:opacity-100 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-white/95 border border-slate-200 shadow-lg flex items-center justify-center hover:scale-110 hover:border-blue-500 hover:text-blue-600 transition-all">
              <ChevronLeft className="w-5 h-5" />
            </div>
          </button>

          {/* Netflix Right Edge Paddle Button (Hidden on Mobile/Touch) */}
          <button
            type="button"
            onClick={() => scrollRow(1)}
            disabled={!canScrollRight}
            aria-label="Next cards"
            className="hidden md:flex absolute right-0 top-0 bottom-0 z-30 w-12 sm:w-16 bg-gradient-to-l from-slate-50/95 via-slate-50/70 to-transparent items-center justify-end pr-1 sm:pr-2 text-slate-800 transition-all duration-300 opacity-0 group-hover/row:opacity-100 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-white/95 border border-slate-200 shadow-lg flex items-center justify-center hover:scale-110 hover:border-blue-500 hover:text-blue-600 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </button>

          {/* Netflix Horizontal Snap Scroll Track */}
          <div
            ref={trackRef}
            onScroll={updateScrollState}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            className={`flex gap-4 sm:gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-5 px-1 select-none ${
              isDragging ? "cursor-grabbing snap-none scroll-auto" : "cursor-grab snap-x snap-proximity scroll-smooth"
            }`}
          >
            {SAMPLE_REPORTS.map((item, idx) => (
              <div
                key={item.code}
                onClick={() => {
                  if (dragInfoRef.current.hasMoved) return
                  setActiveModalIdx(idx)
                }}
                className="w-[84vw] max-w-[320px] sm:w-[370px] lg:w-[410px] shrink-0 snap-start bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-2xl hover:border-blue-500 transition-all duration-300 hover:scale-[1.03] hover:z-20 cursor-pointer overflow-hidden flex flex-col group"
              >
                {/* Outer Image Area: Taller 4:3 Aspect Plant Photograph */}
                <div className="relative w-full aspect-[4/3] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.cardImage}
                    alt={item.cardCaption}
                    fill
                    sizes="(max-width: 768px) 300px, 410px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Stage Tag */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold text-blue-700 border border-slate-200/80 shadow-2xs font-mono">
                    {item.tag}
                  </div>

                  {/* Hover Inspect Cue */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5 font-mono">
                      Inspect Sample Report <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Complete Content - Zero Truncation, Uniform Height */}
                <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex items-center justify-between min-h-[64px]">
                  <p className="text-xs sm:text-sm md:text-base font-bold text-slate-900 leading-snug">
                    {item.cardCaption}
                  </p>
                  <ArrowUpRight className="w-4 h-4 text-blue-600 shrink-0 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ONE-PAGE SAMPLE REPORT MODAL LIGHTBOX (Fixed to screen space, zero scrollbars) */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveModalIdx(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full h-[92vh] max-h-[850px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden transform transition-all animate-in zoom-in-95 duration-200"
          >
            {/* Modal Top Bar (Fixed height, no scrolling) */}
            <div className="px-3 sm:px-6 py-2.5 sm:py-3 border-b border-slate-100 flex items-center justify-between bg-slate-50/90 shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 pr-2">
                <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded bg-blue-100 text-blue-800 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase shrink-0">
                  {activeItem.tag}
                </span>
                <h3 className="text-xs sm:text-sm md:text-base font-extrabold text-slate-900 truncate">
                  {activeItem.docTitle}
                </h3>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Audit Sheet
                </span>
                <button
                  type="button"
                  onClick={() => setActiveModalIdx(null)}
                  aria-label="Close modal"
                  className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Responsive Viewport (Scrollable on mobile, fixed 2-col on desktop) */}
            <div className="flex-1 min-h-0 p-2.5 sm:p-4 md:p-5 grid grid-cols-1 md:grid-cols-12 gap-2.5 sm:gap-4 overflow-y-auto md:overflow-hidden bg-slate-50/40">
              
              {/* Left Column: Scanned Report Image */}
              <div className="md:col-span-7 bg-white rounded-xl border border-slate-200 p-1.5 sm:p-2 flex items-center justify-center shadow-xs overflow-hidden h-[180px] sm:h-[280px] md:h-full relative shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={activeItem.reportImage}
                    alt={activeItem.docTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>

              {/* Right Column: Verification Metadata & KPIs */}
              <div className="md:col-span-5 bg-white rounded-xl border border-slate-200 p-3 sm:p-5 flex flex-col justify-start md:justify-center shadow-xs overflow-visible md:overflow-hidden shrink-0">
                
                {/* Header & Metric Cards */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <span className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider">
                      AUDIT METRIC VERIFICATION
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                      PASS / COMPLIANT
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 min-w-0 pb-1">
                    <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate text-slate-800 font-semibold">{activeItem.docName}</span>
                  </div>

                  {/* Excerpt Content */}
                  <div className="space-y-2 text-slate-700">
                    {activeItem.content}
                  </div>
                </div>

              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="px-4 sm:px-6 py-2.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-mono shrink-0">
              <a
                href={activeItem.reportImage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold text-xs inline-flex items-center gap-1"
              >
                <span>View Full-Res Image</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setActiveModalIdx(null)}
                className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-xs shadow-2xs"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
