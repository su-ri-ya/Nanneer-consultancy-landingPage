"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight, PhoneCall, Droplets, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export function FinalCtaSection() {
  return (
    <section className="relative py-24 overflow-hidden border-b border-border/60 bg-gradient-to-b from-card via-background to-aqua/10">
      {/* Background Clear Water Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-aqua/20 via-healthy/10 to-transparent blur-3xl opacity-70" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto rounded-3xl border border-aqua/30 bg-card/90 p-8 sm:p-14 text-center shadow-2xl glass-card backdrop-blur-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-healthy/15 border border-healthy/30 text-emerald-800 dark:text-healthy text-xs font-bold tracking-wide">
            <Droplets className="h-4 w-4" />
            <span>Fully Clarified & In-Spec Operations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.15]">
            If your system isn&apos;t delivering the results it should,{" "}
            <span className="text-gradient-water">we&apos;re here to help.</span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Stop guessing dosages and enduring constant compliance anxiety. Let our water specialists step into your plant, diagnose the true fundamental bottlenecks, and restore predictable, efficient performance.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto font-semibold gap-2 shadow-lg shadow-primary/25 bg-primary hover:bg-primary/95 text-white"
              onClick={() => trackEvent("final_cta_primary_click")}
            >
              <a href="#contact">
                <PhoneCall className="h-4 w-4" />
                <span>Schedule a Water Audit</span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto font-medium gap-2 border-border hover:bg-muted"
              onClick={() => trackEvent("final_cta_secondary_click")}
            >
              <a href="#health-check">
                <span>Run System Health Check</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-healthy" />
              <span>Direct field engineer response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-healthy" />
              <span>Independent & zero equipment bias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-healthy" />
              <span>Pan-India industrial support [VERIFY]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

