"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Compass,
  DollarSign,
  ShieldAlert,
  Wrench,
  ClipboardCheck,
  CheckCircle2,
  Users,
  Award,
  Briefcase,
  GraduationCap
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const pillars = [
  {
    icon: Compass,
    title: "Fundamentals-First Engineering",
    description:
      "We troubleshoot by analyzing hydraulic retention, mass balances, stoichiometric chemical dosages, and microbial kinetics—not by selling unnecessary hardware."
  },
  {
    icon: ShieldAlert,
    title: "100% Vendor-Neutral Advisory",
    description:
      "We do not manufacture or distribute chemicals, membranes, or proprietary machinery. Our recommendations are uncompromised and solely designed to optimize your existing capital assets."
  },
  {
    icon: Wrench,
    title: "On-Ground Diagnostic & Operational Presence",
    description:
      "We don't troubleshoot remotely from a spreadsheet. Our specialists inspect basins, pumps, clarifiers, and filtration skids directly on your site, backing up operations with trained manpower."
  },
  {
    icon: ClipboardCheck,
    title: "Audited Operational & Manpower Reports",
    description:
      "Complete operational transparency with monthly deployment audits—tracking required vs. deployed man-days, shift operational hours, and root-cause downtime logs to prevent plant disturbances."
  }
]

const leadershipTeam = [
  {
    name: "Founder & Chief Technical Director",
    avatar: "/images/team-founder.jpg",
    role: "Senior Environmental Process Engineer",
    experience: "20+ Years in Industrial Water Engineering",
    bio: "Pioneering practical, on-ground troubleshooting for complex industrial ETPs and commercial STPs across Tamil Nadu and Pan-India. Dedicated to eliminating operational failure points without costly capital expenditure.",
    specialties: ["ETP Process Forensic Audits", "Biological Recovery", "Zero-Vendor-Bias Consulting"]
  },
  {
    name: "Head of Operations & Staffing",
    avatar: "/images/team-ops.jpg",
    role: "Lead Field Operations Engineer",
    experience: "14+ Years in Facility & Plant Management",
    bio: "Oversees site-level technician deployment, shift scheduling, operator training, and monthly operational log audits for marquee commercial tech parks and industrial facilities.",
    specialties: ["Shift Manpower Deployment", "Daily Log Auditing", "24/7 Breakdown Response"]
  },
  {
    name: "Lead Chemical & Compliance Specialist",
    avatar: "/images/team-chem.jpg",
    role: "Environmental Chemistry & Water Testing Lead",
    experience: "12+ Years in Laboratory & Jar Testing",
    bio: "Specializes in stoichiometric dosage recalibration, coagulant/polymer optimization, sludge settling kinetics, and state pollution control board statutory compliance assurance.",
    specialties: ["Jar Testing & Dosing Recalibration", "SPCB Norm Stabilization", "OPEX Cost Reduction"]
  },
  {
    name: "Senior Diagnostic & Hydraulic Auditor",
    avatar: "/images/team-audit.jpg",
    role: "Hydraulic Modeling & Mechanical Specialist",
    experience: "10+ Years in Treatment Plant Audits",
    bio: "Conducts unit-by-unit mass balances, pump performance curves, dissolved oxygen (DO) aeration balancing, and dewatering press cycle optimization.",
    specialties: ["Mass Balance & HRT Analysis", "Aeration Energy Tuning", "Clarifier Hydraulics"]
  }
]

export function WhyNanneerSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-transparent border-b border-border scroll-mt-20">
      <div id="why-nanneer" className="container-custom space-y-12 sm:space-y-16">
        {/* Section 1: Core Ethos & About Us Manifesto */}
        <div>
          <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
            <Badge variant="silt" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
              About Nanneer Consultancy
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              Practical On-Ground Problem Solving for Water Systems
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              We bridge the gap between treatment plant design and everyday operational reality through independent engineering diagnostics, reliable shift operations, and transparent performance reporting.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs flex items-start gap-3.5 sm:gap-4 hover:border-primary/40 transition-all"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Section 2: Leadership & Engineering Team */}
        <div className="pt-8 border-t border-border/70">
          <div className="max-w-3xl mx-auto text-center space-y-2.5 sm:space-y-3 mb-8 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Users className="h-3.5 w-3.5" />
              <span>Leadership & Technical Team</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              The Engineers Behind Your Plant&apos;s Performance
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our multidisciplinary team combines chemical engineers, environmental scientists, and certified plant operators who have diagnosed and stabilized hundreds of treatment systems across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-border/80 bg-slate-50/60 p-5 sm:p-6 shadow-xs space-y-4 hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    {/* Portrait Avatar */}
                    <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded-xl overflow-hidden border-2 border-primary/20 shrink-0 shadow-xs">
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-2">
                        <h4 className="text-base font-bold text-foreground">
                          {member.name}
                        </h4>
                        <Badge variant="outline" className="text-[10px] font-semibold bg-white border-border w-fit shrink-0">
                          {member.experience}
                        </Badge>
                      </div>
                      <span className="text-xs font-semibold text-primary block mt-0.5">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground block mb-2">
                    Key Focus Areas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white border border-border text-foreground/80"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
