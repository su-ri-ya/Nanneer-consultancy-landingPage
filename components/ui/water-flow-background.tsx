"use client"

import * as React from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

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
      initParticles()
    }
    window.addEventListener("resize", handleResize)

    // Minimal particle network parameters
    const particleCount = Math.min(50, Math.max(25, Math.floor(width / 32)))
    const connectionDistance = 135
    const particles: Particle[] = []

    const colors = [
      "rgba(2, 132, 199, ", // Sky Blue
      "rgba(6, 182, 212, ", // Cyan
      "rgba(13, 148, 136, ", // Teal
    ]

    const initParticles = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          // Gentle laminar current drift with slight horizontal bias (liquid flow)
          vx: (Math.random() - 0.4) * 0.4,
          vy: (Math.random() - 0.5) * 0.35,
          radius: Math.random() * 1.8 + 1.2,
          color: colors[i % colors.length],
        })
      }
    }

    // Gentle cursor influence
    let mouseX = -1000
    let mouseY = -1000
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    const handleMouseLeave = () => {
      mouseX = -1000
      mouseY = -1000
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)

    initParticles()

    let step = 0
    const render = () => {
      step += 0.008
      ctx.clearRect(0, 0, width, height)

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Add subtle laminar fluid oscillation
        p.x += p.vx + Math.sin(step + i) * 0.08
        p.y += p.vy + Math.cos(step + i * 0.7) * 0.06

        // Gentle mouse interaction (smooth soft deflection, no harsh rings)
        if (mouseX > 0) {
          const dx = mouseX - p.x
          const dy = mouseY - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100 && dist > 0) {
            const force = (100 - dist) / 100 * 0.015
            p.x -= (dx / dist) * force * 15
            p.y -= (dy / dist) * force * 15
          }
        }

        // Wrap around boundaries
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
        if (p.y < -10) p.y = height + 10
        if (p.y > height + 10) p.y = -10

        // Draw particle dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}0.55)`
        ctx.fill()
      }

      // 2. Draw proximity connections (delicate hydraulic network lines)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.22
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(2, 132, 199, ${alpha})`
            ctx.lineWidth = 0.65
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      {/* Precision Micro-Grid for Engineering Aesthetic */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="water-flow-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#water-flow-grid)" />
      </svg>

      {/* Minimal Hydraulic Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
      />
    </div>
  )
}
