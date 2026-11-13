"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { HelpCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-transparent min-h-[calc(100vh-4.5rem)] flex items-center py-8 sm:py-14 lg:py-16 border-b border-black/[0.06]">
      {/* Subtle Blue Radial Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,102,204,0.07),transparent_70%)]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10 w-full min-w-0">
          
          {/* Left Column: 100% Question-Driven Hook & Diagnostic Reality Check (5 cols) */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-5 sm:space-y-6 w-full min-w-0">
            
            {/* Audience Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block max-w-full"
            >
              <div className="inline-flex items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-blue-600/20 bg-blue-50/80 px-2.5 sm:px-3.5 py-1 text-xs font-semibold text-blue-900 shadow-2xs max-w-full">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
                <span className="font-mono text-[9px] xs:text-[10px] sm:text-[11px] font-bold uppercase tracking-normal sm:tracking-wider text-left break-words leading-tight">
                  FOR COMMERCIAL BUILDING OWNERS &amp; FACILITY HEADS
                </span>
              </div>
            </motion.div>

            {/* Loud & Clear Question Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold tracking-tight text-slate-950 leading-[1.2] sm:leading-[1.12] break-words"
            >
              Your STP Is Running.{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-600 to-teal-600 mt-1">
                But Is It Really{" "}
                <span className="inline-block">Performing?</span>
              </span>
            </motion.h1>

            {/* Subtitle: Rhythmic Couplet (Thirukkural 4 + 3 Word Cadence) */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-xs sm:text-base md:text-lg text-slate-800 leading-relaxed font-semibold max-w-xl mx-auto lg:mx-0 break-words px-1 sm:px-0"
            >
              Measure every single drop; stop guessing plant performance.
            </motion.p>

            {/* 3 Diagnostic Question Pills */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-2 sm:gap-2.5 max-w-md mx-auto lg:mx-0 w-full"
            >
              <div className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] sm:text-[13px] font-semibold text-slate-800 text-left">
                <HelpCircle className="h-4 w-4 text-blue-600 shrink-0" />
                <span className="flex-1 break-words leading-snug">Is 100% of your sewage treated without bypass?</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] sm:text-[13px] font-semibold text-slate-800 text-left">
                <HelpCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="flex-1 break-words leading-snug">Are you reusing enough water to cut tanker bills?</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl bg-slate-100/90 border border-slate-200 text-[11px] sm:text-[13px] font-semibold text-slate-800 text-left">
                <HelpCircle className="h-4 w-4 text-sky-600 shrink-0" />
                <span className="flex-1 break-words leading-snug">Can your logbooks prove zero compliance risk?</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Extra Large, Ultra-Clear Single Photo (7 cols) */}
          <div className="lg:col-span-7 w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[16/10] min-h-[260px] sm:min-h-[400px] lg:min-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-black/[0.08] bg-slate-100 group"
            >
              <Image
                src="/images/hero-stp-clarifiers.jpg"
                alt="Commercial High-Performance Wastewater Treatment Plant with Circular Clarifiers"
                fill
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
