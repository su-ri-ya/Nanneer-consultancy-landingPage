"use client"

import * as React from "react"
import { motion } from "framer-motion"

export function WaterGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-transparent">
      {/* Precision Blueprint Water Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/50 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_25%,transparent_100%)]"
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
            <circle cx="0.5" cy="0.5" r="1" className="fill-slate-300" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#water-grid-pattern)" />
      </svg>

      {/* Soft Ambient Pure Water Radial Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-400/15 via-primary/10 to-transparent blur-3xl"
        />
      </div>
    </div>
  )
}
