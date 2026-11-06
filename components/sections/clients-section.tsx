"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Building2, Factory, Stethoscope, Car, Cpu } from "lucide-react"

const clients = [
  {
    name: "Prestige Group",
    subtext: "Commercial Tech Parks",
    facility: "Prestige Polygon & Campuses",
    icon: Building2
  },
  {
    name: "Hyundai Motor India",
    subtext: "Automotive Manufacturing",
    facility: "Assembly & Paint Shop ETP",
    icon: Car
  },
  {
    name: "Royal Enfield",
    subtext: "Automotive Industrial Belt",
    facility: "Industrial Effluent Facilities",
    icon: Factory
  },
  {
    name: "Apollo Healthcare",
    subtext: "Hospitals & Healthcare",
    facility: "High-spec Biomedical STP",
    icon: Stethoscope
  },
  {
    name: "Sundaram Fasteners",
    subtext: "Precision Engineering & Auto Components",
    facility: "Zero Discharge & Chemical ETP",
    icon: Cpu
  }
]

export function ClientsSection() {
  return (
    <section className="py-12 bg-transparent border-b border-border/80">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
            Enterprise Track Record
          </span>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            Trusted by Plant Heads & Facility Directors Across India
          </h2>
          <p className="text-xs text-muted-foreground">
            Delivering on-ground troubleshooting, compliance assurance, and dedicated shift operations.
          </p>
        </div>

        {/* Client Marquee / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clients.map((client, index) => {
            const Icon = client.icon
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="p-4 rounded-xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 pb-2 border-b border-border/50">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-foreground truncate">
                      {client.name}
                    </h3>
                    <span className="text-[10px] text-muted-foreground block truncate">
                      {client.subtext}
                    </span>
                  </div>
                </div>
                <div className="pt-2 text-[10px] font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="h-3 w-3 shrink-0" />
                  <span className="truncate">{client.facility}</span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

