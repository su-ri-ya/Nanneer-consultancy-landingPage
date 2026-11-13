"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface QuestionItem {
  num: number
  code: string
  title: string
  subtext: string
  points: string[]
  image: string
  badge: string
  badgeColor: string
}

const QUESTIONS: QuestionItem[] = [
  {
    num: 1,
    code: "01",
    title: "How much sewage enters, and how much is successfully treated?",
    subtext: "Traditional contracts estimate. We continuously meter and verify treatment yield with dual electromagnetic flow meters on raw inlet and treated outlet.",
    points: [
      "≥99% target share of incoming sewage successfully treated",
      "Dual electromagnetic flow meters on raw inlet and treated outlet",
      "Daily water balance logging to prevent unaccounted discharge losses"
    ],
    image: "/images/challenge-clarifier.jpg",
    badge: "Yield Accounting",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    num: 2,
    code: "02",
    title: "How much treated water is actually reused, and where?",
    subtext: "Every litre has a verified destination across cooling towers, flushing lines, and landscape irrigation to cut expensive fresh water tanker bills.",
    points: [
      "Sub-metered distribution tracking to cooling towers, flushing, and irrigation",
      "100% beneficial treated water reuse operational target",
      "Direct replacement of commercial freshwater purchase costs"
    ],
    image: "/images/challenge-reuse.jpg",
    badge: "Reuse Tracking",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    num: 3,
    code: "03",
    title: "Does treated water meet application quality standards?",
    subtext: "Laboratory-tested quality parameters tailored for each utility: low turbidity for toilet flushing, and scale-inhibited water for cooling towers.",
    points: [
      "Scheduled laboratory testing verifying BOD, COD, TSS, and chlorine",
      "Tertiary polishing preventing cooling tower scaling, fouling, and bio-risks",
      "Crystal clarity (< 2 NTU) and complete odour control for toilet flushing"
    ],
    image: "/images/about-testing.jpg",
    badge: "Quality Standards",
    badgeColor: "bg-sky-50 text-sky-700 border-sky-200"
  },
  {
    num: 4,
    code: "04",
    title: "Are tank overflows, equipment failures, and interruptions prevented?",
    subtext: "Continuous level sensors, high-water early alarms, and proactive preventive servicing eliminate embarrassing overflows and statutory notices.",
    points: [
      "Ultrasonic continuous level sensors with automated high-level alarms",
      "Pump operating hours, pressure, and power consumption tracking",
      "Zero unplanned downtime operational target through preventive servicing"
    ],
    image: "/images/about-operations.jpg",
    badge: "Overflow Prevention",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200"
  },
  {
    num: 5,
    code: "05",
    title: "Are daily operations, maintenance, and corrective actions documented?",
    subtext: "Transforming routine operator shifts into a permanent, verifiable audit record with 24×7 certified attendance and digital timestamps.",
    points: [
      "24×7 multi-shift certified operator coverage (3 shifts/day)",
      "Digital shift logbooks with timestamped operational checks",
      "Scheduled chemical dosing, filter backwash, and diffuser cleaning SOPs"
    ],
    image: "/images/stp-digital-logging.jpg",
    badge: "Shift Documentation",
    badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200"
  },
  {
    num: 6,
    code: "06",
    title: "Can management verify STP performance through reliable evidence?",
    subtext: "Comprehensive monthly performance dossiers delivered directly to building leadership, including accredited lab test sheets and water balance audits.",
    points: [
      "Water balance reports: received, treated, recycled, and reused",
      "Accredited lab certificates and equipment availability logs",
      "Documented incident reports, logs, and supervisor sign-offs"
    ],
    image: "/images/challenge-compliance.jpg",
    badge: "Executive Evidence",
    badgeColor: "bg-teal-50 text-teal-700 border-teal-200"
  }
]

export function ProblemSection() {
  return (
    <section id="challenges" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-transparent border-b border-black/[0.06]">
      <span id="problems" className="sr-only" />

      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        {/* Centered Editorial Header */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <Badge
            variant="default"
            className="px-3.5 sm:px-4 py-1 sm:py-1.5 text-xs uppercase tracking-wider font-semibold bg-slate-100 text-slate-800 border-black/[0.06] shadow-2xs"
          >
            Outcomes, Not Just Manpower
          </Badge>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] sm:leading-[1.14]">
            Six Critical Questions Every Facility Head Needs Answered
          </h2>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Operating an STP without measuring these 6 parameters exposes your facility to silent overflow risks and unverified utility costs.
          </p>
        </div>

        {/* ONE-BY-ONE Sequential Flow of All 6 Questions */}
        <div className="space-y-5 sm:space-y-8">
          {QUESTIONS.map((q, idx) => (
            <motion.div
              key={q.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all duration-300 p-4 sm:p-7 lg:p-8 grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-center"
            >
              {/* Left Column: Question Content (7 cols) */}
              <div className="lg:col-span-7 space-y-3.5 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-slate-100 text-slate-900 border border-slate-200 font-mono font-extrabold text-base sm:text-xl flex items-center justify-center shrink-0 shadow-2xs">
                    {q.code}
                  </span>
                  <span className={`font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${q.badgeColor}`}>
                    {q.badge}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 leading-snug">
                  {q.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {q.subtext}
                </p>

                {/* 3 Concise Checkmark Points */}
                <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700">
                  {q.points.map((point) => (
                    <div key={point} className="flex items-start gap-2.5">
                      <div className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium text-slate-800 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Dedicated High-Resolution Photo (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden border border-black/[0.08] shadow-sm bg-slate-100 group">
                  <Image
                    src={q.image}
                    alt={q.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 35vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
