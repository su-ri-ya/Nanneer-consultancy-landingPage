"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Car,
  Pill,
  FlaskRound,
  UtensilsCrossed,
  Shirt,
  Cog,
  Cpu,
  Building,
  Hotel,
  Home,
  CheckCircle2,
  Building2,
  Stethoscope
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const industries = [
  {
    icon: Car,
    title: "Automotive & Ancillaries",
    painPoint: "High oil & grease, paint sludge, phosphating rinse metals, and rapid batch shift swings.",
    focus: "Chemical precipitation tuning, emulsion breaking, and paint shop reuse polishing."
  },
  {
    icon: Pill,
    title: "Pharmaceuticals & Bulk Drugs",
    painPoint: "High refractory COD, antibiotic residues, and active pharmaceutical ingredient (API) biocide toxicity.",
    focus: "Advanced oxidation compatibility, acclimated biology, and shock retention balancing."
  },
  {
    icon: FlaskRound,
    title: "Chemicals & Petrochemicals",
    painPoint: "Extreme pH swings, high total dissolved solids (TDS), and sudden solvent influxes.",
    focus: "Neutralization stability, equalisation mixing, and clarifier settling enhancement."
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Beverage",
    painPoint: "High biological oxygen demand (BOD), fats, oils, and grease (FOG), and seasonal production surges.",
    focus: "DAF (Dissolved Air Flotation) efficiency, anaerobic digestion stability, and odor control."
  },
  {
    icon: Shirt,
    title: "Textiles & Dyeing",
    painPoint: "Complex reactive dyes, refractory color, fluctuating salinity, and heavy TSS loads.",
    focus: "Coagulant optimization, de-colorization dosage control, and biological stability."
  },
  {
    icon: Cog,
    title: "General Manufacturing & Engineering",
    painPoint: "Cutting fluids, coolant emulsions, heavy metals, and inconsistent wash water volumes.",
    focus: "Oil-water separation, chemical flocculation, and compliance discharge reliability."
  },
  {
    icon: Cpu,
    title: "Electronics & Semiconductor",
    painPoint: "Trace metals, high-purity rinse effluents, fluoride, and stringent reuse criteria.",
    focus: "Targeted precipitation, cartridge filter life enhancement, and water recovery."
  },
  {
    icon: Building,
    title: "Industrial Parks & CETPs",
    painPoint: "Highly variable mixed effluents from multiple tenant units causing severe biological upsets.",
    focus: "Inlet equalization strategy, toxic shock prevention, and collective compliance support."
  }
]

const commercialBuildings = [
  {
    icon: Building2,
    title: "Commercial Offices & IT Parks",
    challenge: "Low organic load during weekends causing biological starvation; morning hydraulic surges.",
    solution: "Equalization pump scheduling, MLSS preservation SOPs, and treated water reuse for HVAC cooling towers."
  },
  {
    icon: Building,
    title: "Shopping Malls & Retail Hubs",
    challenge: "Heavy food court grease trap discharge combined with high footfall variability.",
    solution: "Grease retention balancing, biological bio-augmentation checks, and continuous odor elimination."
  },
  {
    icon: Stethoscope,
    title: "Hospitals & Healthcare Facilities",
    challenge: "Strict disinfection standards, medical effluent segregation, and high bio-burden risks.",
    solution: "Safe pre-treatment alignment, chlorination/UV polishing verification, and PCB compliant discharge."
  },
  {
    icon: Hotel,
    title: "Hotels & Hospitality Resorts",
    challenge: "Laundry detergent surfactants creating massive aeration foaming; fluctuating tourist occupancy.",
    solution: "Antifoam rationalization, biological acclimation, and zero-odor landscape irrigation polishing."
  },
  {
    icon: Home,
    title: "Residential Complexes & Townships",
    challenge: "Decentralized STP management, maintenance committee budget constraints, and frequent tenant complaints.",
    solution: "Robust operator daily workflows, blower energy rationalization, and clear flushing water quality."
  }
]

export function IndustriesSection() {
  return (
    <section id="industries" className="py-20 bg-muted/20 border-b border-border/60">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <Badge variant="aqua" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Sectors & Applications
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Engineered for industries & commercial facilities
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether your setup treats complex chemical wastewater (ETP) or human sanitary sewage (STP), each sector requires specialized hydraulic and process diagnostics.
          </p>
        </div>

        {/* Section A: Industrial Sectors (8 cards) */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 rounded bg-primary/10">
              Group 01 · Industrial ETP Operations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-xl border border-border/70 bg-card p-4 sm:p-5 shadow-xs hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <h3 className="text-sm font-bold text-foreground leading-tight">
                        {ind.title}
                      </h3>
                    </div>

                    <div className="text-xs space-y-2">
                      <div>
                        <span className="font-semibold text-muted-foreground block text-[10px] uppercase">
                          Specific Challenge:
                        </span>
                        <p className="text-muted-foreground mt-0.5 leading-relaxed text-[11px]">
                          {ind.painPoint}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-primary font-medium flex items-start gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-healthy shrink-0 mt-0.5" />
                    <span>{ind.focus}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Section B: Commercial Buildings (5 cards) */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal px-2.5 py-1 rounded bg-aqua/15 text-teal-800 dark:text-aqua">
              Group 02 · Commercial & Residential STP Operations
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {commercialBuildings.map((bld, idx) => {
              const Icon = bld.icon
              return (
                <motion.div
                  key={bld.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-xl border border-border/70 bg-card p-4 shadow-xs hover:border-aqua/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-aqua/15 text-aqua shrink-0">
                        <Icon className="h-4 w-4 text-teal-800 dark:text-aqua" />
                      </div>
                      <h4 className="text-xs font-bold text-foreground leading-tight">
                        {bld.title}
                      </h4>
                    </div>

                    <div>
                      <span className="text-[10px] font-semibold text-muted-foreground uppercase block">
                        Typical Issue:
                      </span>
                      <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                        {bld.challenge}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 text-[11px] text-foreground font-medium flex items-start gap-1">
                    <span className="text-healthy font-bold">✓</span>
                    <span className="text-[10.5px] text-muted-foreground leading-snug">
                      {bld.solution}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

