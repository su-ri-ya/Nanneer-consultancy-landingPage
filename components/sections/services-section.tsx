"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Fan,
  Building,
  Trees,
  CheckCircle2,
  ArrowRight,
  Droplets,
  Check,
  Sparkles
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface DestinationPanel {
  id: string
  title: string
  shortTitle: string
  image: string
  icon: React.ElementType
  oneLiner: string
}

const DESTINATIONS: DestinationPanel[] = [
  {
    id: "cooling-tower",
    title: "Cooling Tower Makeup",
    shortTitle: "Cooling Tower",
    image: "/images/stp-cooling-tower.jpg",
    icon: Fan,
    oneLiner: "Polished, disinfected, and conditioned to manage scaling, corrosion, fouling, and microbiological risks."
  },
  {
    id: "toilet-flushing",
    title: "Toilet Flushing Reuse",
    shortTitle: "Toilet Flushing",
    image: "/images/stp-reuse-manifold.jpg",
    icon: Building,
    oneLiner: "Maintain suitable non-potable water quality with crystal clarity, complete odour control, and disinfection."
  },
  {
    id: "gardening",
    title: "Gardening & Landscaping",
    shortTitle: "Landscaping",
    image: "/images/stp-gardening-irrigation.jpg",
    icon: Trees,
    oneLiner: "Safe, nutrient-balanced non-potable irrigation reuse meeting statutory environmental standards."
  }
]

export function ServicesSection() {
  const [activeIdx, setActiveIdx] = React.useState(0)

  return (
    <section id="services" className="relative py-8 sm:py-12 overflow-hidden bg-transparent border-t border-black/[0.06]">

      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Minimal Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <Badge
            variant="default"
            className="px-4 py-1.5 text-xs uppercase tracking-wider font-semibold mb-3 bg-slate-100 text-slate-800 border-black/[0.06] shadow-2xs"
          >
            Water Recovery
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-slate-900 text-balance leading-[1.15]">
            Every Litre Has a Destination
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We measure water received, treated, stored, and reused so building management can verify actual recovery performance.
          </p>
        </div>

        {/* Expanding Panorama Accordion Component */}
        <div>
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 h-auto md:h-[380px] lg:h-[400px]">
            {DESTINATIONS.map((dest, idx) => {
              const Icon = dest.icon
              const isExpanded = activeIdx === idx

              return (
                <div
                  key={dest.id}
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer transition-all duration-500 ease-out border border-black/[0.08] shadow-sm ${
                    isExpanded
                      ? "md:flex-[3] min-h-[270px] sm:min-h-[360px] md:min-h-0 ring-2 ring-blue-600/40 shadow-xl"
                      : "md:flex-[1] min-h-[95px] sm:min-h-[135px] md:min-h-0 bg-slate-900 hover:brightness-105"
                  }`}
                >
                  {/* High-Resolution Photograph */}
                  <Image
                    src={dest.image}
                    alt={dest.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover transition-transform duration-700 ${
                      isExpanded ? "scale-105" : "scale-100 group-hover:scale-105 opacity-65"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isExpanded
                        ? "bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/20"
                        : "bg-slate-950/60 group-hover:bg-slate-950/50"
                    }`}
                  />

                  {/* Content: When Expanded */}
                  {isExpanded ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 }}
                      className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-6 sm:left-6 sm:right-6 z-10 text-white space-y-1.5 sm:space-y-2.5"
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="h-6.5 w-6.5 sm:h-8 sm:w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-xs shrink-0">
                          <Icon className="h-3.5 w-3.5 sm:h-4.5 sm:w-4.5" />
                        </div>
                        <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                          {dest.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                        {dest.oneLiner}
                      </p>
                    </motion.div>
                  ) : (
                    /* Content: When Collapsed (Desktop/Tablet Label) */
                    <div className="absolute inset-0 z-10 p-3.5 sm:p-4 lg:p-5 flex flex-col justify-end text-white">
                      <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-2 shadow-xs">
                        <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                      </div>
                      <h4 className="text-sm sm:text-base lg:text-lg font-bold leading-tight text-white/95">
                        {dest.shortTitle}
                      </h4>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
