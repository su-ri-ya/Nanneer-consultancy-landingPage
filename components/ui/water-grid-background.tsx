"use client"

import * as React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function WaterGridBackground() {
  const mouseX = useMotionValue(-500)
  const mouseY = useMotionValue(-500)

  const springConfig = { damping: 30, stiffness: 120 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMove)
  }, [mouseX, mouseY])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-transparent">
      {/* Precision Engineering Grid & Dots */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/60 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,#000_25%,transparent_100%)]"
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

      {/* Ambient Pulsing Concentric Water Ripples */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] flex items-center justify-center">
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border-2 border-cyan-500/35 bg-gradient-to-r from-cyan-500/10 via-primary/5 to-transparent"
            initial={{ width: 120, height: 120, opacity: 0.6 }}
            animate={{
              width: [120, 750],
              height: [120, 750],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 2,
            }}
          />
        ))}

        {/* Central Clean Water Glow Core */}
        <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-cyan-400/20 via-primary/15 to-transparent blur-3xl opacity-80" />
      </div>

      {/* Interactive Cursor Fluid Water Light Beam (Soft & Subtle) */}
      <motion.div
        className="fixed w-64 h-64 rounded-full bg-gradient-to-br from-primary/4 via-aqua/4 to-transparent blur-3xl pointer-events-none"
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  )
}
