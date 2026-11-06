"use client"

import * as React from "react"

interface Particle {
  x: number
  y: number
  radius: number
  speedY: number
  speedX: number
  opacity: number
  phase: number
}

interface Ripple {
  x: number
  y: number
  radius: number
  maxRadius: number
  opacity: number
  speed: number
}

export function WaterFlowBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", handleResize)

    // Aeration bubbles & purification micro-droplets
    const particlesCount = Math.min(35, Math.floor(width / 35))
    const particles: Particle[] = []
    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 2,
        speedY: Math.random() * 0.8 + 0.4,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.45 + 0.15,
        phase: Math.random() * Math.PI * 2,
      })
    }

    // Dynamic water ripples (Subtle, delicate ripple effect)
    const ripples: Ripple[] = []
    const addRipple = (x: number, y: number) => {
      if (ripples.length > 4) ripples.shift()
      ripples.push({
        x,
        y,
        radius: 6,
        maxRadius: Math.random() * 20 + 35,
        opacity: 0.12,
        speed: 0.8,
      })
    }

    // Interactive cursor water disturbance (Throttled to prevent rapid clustering)
    let lastMouseMove = 0
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastMouseMove > 650) {
        addRipple(e.clientX, e.clientY)
        lastMouseMove = now
      }
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })

    // Auto-create periodic gentle water pulses
    let lastAutoPulse = 0

    let step = 0

    const render = (time: number) => {
      step += 0.015

      // Periodically trigger ambient water ripple
      if (time - lastAutoPulse > 3500) {
        addRipple(
          Math.random() * (width * 0.8) + width * 0.1,
          Math.random() * (height * 0.8) + height * 0.1
        )
        lastAutoPulse = time
      }

      ctx.clearRect(0, 0, width, height)

      // 1. Draw Organic Flowing Wave Ribbons across the viewport
      const waveConfigs = [
        {
          color: "rgba(6, 182, 212, 0.08)", // Cyan-500 soft
          amplitude: 45,
          wavelength: 0.002,
          speed: 0.012,
          yOffset: height * 0.22,
        },
        {
          color: "rgba(2, 132, 199, 0.07)", // Sky/Blue-600 soft
          amplitude: 55,
          wavelength: 0.0016,
          speed: -0.009,
          yOffset: height * 0.48,
        },
        {
          color: "rgba(13, 148, 136, 0.075)", // Teal-600 soft
          amplitude: 40,
          wavelength: 0.0022,
          speed: 0.015,
          yOffset: height * 0.72,
        },
        {
          color: "rgba(14, 165, 233, 0.06)", // Aqua-500 soft
          amplitude: 50,
          wavelength: 0.0018,
          speed: -0.011,
          yOffset: height * 0.9,
        },
      ]

      waveConfigs.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, wave.yOffset)

        for (let x = 0; x <= width; x += 15) {
          const y =
            wave.yOffset +
            Math.sin(x * wave.wavelength + step * wave.speed * 100) *
              wave.amplitude +
            Math.cos(x * wave.wavelength * 0.6 + step * 0.5) *
              (wave.amplitude * 0.35)
          ctx.lineTo(x, y)
        }

        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()
        ctx.fillStyle = wave.color
        ctx.fill()
      })

      // 2. Draw Wave Crest Highlights (Laminar stream lines)
      waveConfigs.forEach((wave, idx) => {
        ctx.beginPath()
        for (let x = 0; x <= width; x += 12) {
          const y =
            wave.yOffset +
            Math.sin(x * wave.wavelength + step * wave.speed * 100) *
              wave.amplitude +
            Math.cos(x * wave.wavelength * 0.6 + step * 0.5) *
              (wave.amplitude * 0.35)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle =
          idx % 2 === 0
            ? "rgba(6, 182, 212, 0.22)"
            : "rgba(2, 132, 199, 0.2)"
        ctx.lineWidth = 1.75
        ctx.stroke()
      })

      // 3. Draw & Update Interactive Water Ripples (Subtle & Quick Fade)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const ripple = ripples[i]
        ripple.radius += ripple.speed
        ripple.opacity -= 0.005

        if (ripple.opacity <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(6, 182, 212, ${ripple.opacity})`
        ctx.lineWidth = 0.75
        ctx.stroke()
      }

      // 4. Draw & Update Rising Water Aeration Droplets / Micro-Bubbles
      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += Math.sin(step + p.phase) * 0.45 + p.speedX

        // Wrap around bottom to top
        if (p.y < -20) {
          p.y = height + 10
          p.x = Math.random() * width
        }

        // Draw bubble body
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(6, 182, 212, ${p.opacity * 0.4})`
        ctx.fill()

        // Highlight sheen
        ctx.strokeStyle = `rgba(2, 132, 199, ${p.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()

        // Micro light reflection dot
        ctx.beginPath()
        ctx.arc(
          p.x - p.radius * 0.3,
          p.y - p.radius * 0.3,
          p.radius * 0.25,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.85})`
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-white">
      {/* Precision Blueprint Grid */}
      <svg
        className="absolute inset-0 h-full w-full stroke-slate-200/40"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="water-grid-base"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#water-grid-base)" />
      </svg>

      {/* Real-time Fluid Water Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
    </div>
  )
}
