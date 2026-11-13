"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function WaterGridBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-transparent">
      {/* Precision Blueprint Water Grid Pattern (Soft & Delicate Background Layer) */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-300/50 opacity-40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="water-grid-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path
              d="M.5 32V.5H32"
              fill="none"
              strokeDasharray="0"
              strokeWidth="0.75"
            />
            <circle cx="0.5" cy="0.5" r="0.85" className="fill-sky-400/30" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#water-grid-pattern)" />
      </svg>

      {/* Top Ambient Water Flow Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-400/15 via-blue-500/10 to-transparent blur-3xl"
        />
      </div>

      {/* Bottom Subtle Water Ambient Glow */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[450px] h-[450px] rounded-full bg-gradient-to-br from-blue-400/10 via-teal-400/10 to-transparent blur-3xl"
        />
      </div>
    </div>
  )
}
