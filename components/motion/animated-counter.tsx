"use client"

import * as React from "react"
import { useInView, useSpring, useMotionValueEvent } from "framer-motion"

export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  label,
  rangeLabel,
  icon: Icon
}: {
  value: number
  prefix?: string
  suffix?: string
  label: string
  rangeLabel?: string
  icon?: React.ElementType
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-60px" })
  const spring = useSpring(0, { stiffness: 60, damping: 20 })
  const [display, setDisplay] = React.useState(`${prefix}0${suffix}`)

  useMotionValueEvent(spring, "change", (v) => {
    setDisplay(`${prefix}${Math.round(v)}${suffix}`)
  })

  React.useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  return (
    <div ref={ref} className="space-y-2">
      {rangeLabel && (
        <span className="font-mono text-xs font-semibold text-primary px-2 py-0.5 rounded-md bg-primary/10 inline-block">
          {rangeLabel}
        </span>
      )}
      <div className="font-mono text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
        {display}
      </div>
      <p className="text-xs sm:text-sm font-semibold text-foreground/90">{label}</p>
    </div>
  )
}

