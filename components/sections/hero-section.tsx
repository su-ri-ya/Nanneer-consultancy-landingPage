"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Droplet,
  Gauge,
  FlaskConical,
  Zap,
  TrendingDown
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { WaterGridBackground } from "@/components/ui/water-grid-background"
import { trackEvent } from "@/lib/analytics"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-24 md:pb-28 border-b border-border bg-transparent">
      {/* Precision Grid & Water Ripple Animation */}
      <WaterGridBackground />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Problem-Led Messaging */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2"
            >
              <Badge variant="default" className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold">
                Introducing Nanneer Consultancy · ETP & STP Engineering Advisory
              </Badge>
            </motion.div>

            {/* Official Problem-led H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-foreground leading-[1.18] sm:leading-[1.14]"
            >
              Where systems exist,{" "}
              <span className="text-gradient-water">but performance doesn’t meet expectations.</span>
            </motion.h1>

            {/* Official Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              We work with industries and commercial buildings to solve real-world water treatment challenges. Across ETP and STP setups, issues like inconsistent output, operational inefficiencies, and rising costs are more common than they should be. Our role is to step in, understand these systems at a fundamental level, and resolve the gaps that impact performance.
            </motion.p>


            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto shadow-md font-semibold gap-2 bg-primary hover:bg-primary/90 text-white px-7"
                onClick={() => trackEvent("hero_primary_cta_click", { target: "contact" })}
              >
                <a href="#contact">
                  <span>Schedule a Plant Audit</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto font-medium gap-2 px-6"
                onClick={() => trackEvent("hero_secondary_cta_click", { target: "services" })}
              >
                <a href="#services">
                  <span>Explore Advisory Services</span>
                </a>
              </Button>
            </motion.div>

            {/* Verified Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-muted-foreground"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>On-Ground Root Cause Audit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>15%–35% OPEX Reduction</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span>100% Statutory Compliance</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Executive Diagnostic Overview Card with Real Plant Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xl">
              {/* Plant Photo Banner */}
              <div className="relative h-36 sm:h-44 w-full overflow-hidden border-b border-border/60">
                <Image
                  src="/images/hero-plant.jpg"
                  alt="Industrial Wastewater Treatment Plant"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3">
                  <Badge variant="healthy" className="text-[10px] font-semibold shadow-xs">
                    On-Site Diagnostic Audit
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-mono tracking-wider opacity-85 block">
                    ETP & STP Performance Engineering
                  </span>
                  <h3 className="text-sm font-bold">
                    Plant Performance Benchmark
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between pb-1 text-xs">
                  <span className="font-semibold text-foreground">Audit & Stabilization Scope</span>
                  <span className="text-primary font-medium">Pan-India Support</span>
                </div>

                {/* 4 Clean Metric & Focus Areas */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
                  <div className="p-2.5 sm:p-3.5 rounded-xl border border-border/70 bg-muted/40 space-y-0.5 sm:space-y-1">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="text-[11px] sm:text-xs font-medium">Chemical Cost</span>
                      <TrendingDown className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <div className="text-base sm:text-xl font-bold text-foreground font-mono">
                      -18% to -35%
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                      Dosage & recipe tuning
                    </p>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl border border-border/70 bg-muted/40 space-y-0.5 sm:space-y-1">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="text-[11px] sm:text-xs font-medium">BOD / COD</span>
                      <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <div className="text-base sm:text-xl font-bold text-foreground font-mono">
                      99%+ In-Spec
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                      Pollution board norms
                    </p>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl border border-border/70 bg-muted/40 space-y-0.5 sm:space-y-1">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="text-[11px] sm:text-xs font-medium">Aeration Power</span>
                      <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <div className="text-base sm:text-xl font-bold text-foreground font-mono">
                      -12% to -22%
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                      DO & blower tuning
                    </p>
                  </div>

                  <div className="p-2.5 sm:p-3.5 rounded-xl border border-border/70 bg-muted/40 space-y-0.5 sm:space-y-1">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span className="text-[11px] sm:text-xs font-medium">Water Reuse</span>
                      <Droplet className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" />
                    </div>
                    <div className="text-base sm:text-xl font-bold text-foreground font-mono">
                      Maximized
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                      Cooling & flushing
                    </p>
                  </div>
                </div>

              {/* Scope Footer note */}
              <div className="pt-2 text-xs text-muted-foreground border-t border-border/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <span>Applicable to ETP, STP & ZLD</span>
                <span className="text-primary font-medium">Direct Engineering Advisory</span>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
