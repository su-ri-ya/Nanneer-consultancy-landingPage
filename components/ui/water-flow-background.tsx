"use client"

import * as React from "react"

export function WaterFlowBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Configuration for 7 ultra-fine hydraulic contour streamlines
    const contourCount = 7
    let time = 0

    const render = () => {
      time += 0.003
      ctx.clearRect(0, 0, width, height)

      // Spacing between streamline contours
      const spacing = height / (contourCount + 1)

      for (let i = 1; i <= contourCount; i++) {
        const baseY = i * spacing
        const phaseOffset = i * 0.75
        const speed = 0.8 + (i % 3) * 0.2

        ctx.beginPath()
        ctx.moveTo(-20, baseY)

        // Draw smooth fluid contour curve across the entire screen
        const segments = 32
        const segmentWidth = (width + 40) / segments

        for (let j = 0; j <= segments; j++) {
          const x = -20 + j * segmentWidth

          // Harmonic hydraulic wave formula
          const wave1 = Math.sin(x * 0.0018 + time * speed + phaseOffset) * 28
          const wave2 = Math.cos(x * 0.0032 - time * 0.7 + phaseOffset * 1.5) * 14
          const wave3 = Math.sin(x * 0.0009 + time * 0.5) * 10

          const y = baseY + wave1 + wave2 + wave3

          if (j === 0) {
            ctx.moveTo(x, y)
          } else {
            const prevX = -20 + (j - 1) * segmentWidth
            const prevWave1 = Math.sin(prevX * 0.0018 + time * speed + phaseOffset) * 28
            const prevWave2 = Math.cos(prevX * 0.0032 - time * 0.7 + phaseOffset * 1.5) * 14
            const prevWave3 = Math.sin(prevX * 0.0009 + time * 0.5) * 10
            const prevY = baseY + prevWave1 + prevWave2 + prevWave3

            // Smooth Bézier curve interpolation
            const midX = (prevX + x) / 2
            const midY = (prevY + y) / 2
            ctx.quadraticCurveTo(prevX, prevY, midX, midY)
          }
        }

        // Alternating refined styling: fine continuous vs. subtle dashed engineering lines
        ctx.strokeStyle =
          i % 2 === 0
            ? "rgba(6, 182, 212, 0.16)" // Cyan-500 subtle
            : "rgba(2, 132, 199, 0.13)" // Sky-600 subtle

        ctx.lineWidth = 0.85

        if (i % 3 === 0) {
          ctx.setLineDash([6, 8]) // Subtle dashed engineering contour
        } else {
          ctx.setLineDash([])
        }

        ctx.stroke()
      }

      ctx.setLineDash([])
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      {/* Precision Micro-Grid Pattern */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="water-streamline-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#water-streamline-grid)" />
      </svg>

      {/* Hydraulic Fluid Streamline Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  )
}
