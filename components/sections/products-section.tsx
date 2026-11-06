"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Factory,
  Building2,
  Filter,
  Layers,
  Recycle,
  Boxes,
  Waves,
  Maximize2,
  CheckCircle2,
  AlertTriangle,
  Wrench,
  Gauge,
  PhoneCall,
  ArrowRight,
  ShieldCheck
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog"

export interface SystemItem {
  id: string
  category: "water" | "wastewater"
  categoryLabel: "Water Treatment" | "Wastewater Treatment"
  icon: React.ElementType
  image: string
  schematic: string
  title: string
  tag: string
  shortSummary: string
  keyMetrics: string[]
  principle: string
  challengesSolved: string[]
  technicalSpecs: { label: string; value: string }[]
  deliverables: string[]
}

const systemsData: SystemItem[] = [
  {
    id: "etp",
    category: "wastewater",
    categoryLabel: "Wastewater Treatment",
    icon: Factory,
    image: "/images/etp-plant.jpg",
    schematic: "/images/conicalTank.png",
    title: "Industrial Effluent Treatment Plants (ETP)",
    tag: "Heavy Industrial Discharge",
    shortSummary:
      "Engineered treatment trains for complex industrial wastewater—balancing chemical reaction, primary settling, and biological degradation.",
    keyMetrics: ["Heavy COD/BOD Reduction", "Shock Load Buffering", "TSS & Color Removal"],
    principle:
      "Combines physical equalization, chemical coagulation/flocculation, high-efficiency biological aeration (aerobic/anaerobic), and secondary clarification to bring complex manufacturing effluent into 100% compliance with Pollution Control Board parameters.",
    challengesSolved: [
      "Frequent biological die-offs caused by toxic chemical shock loads",
      "Persistent dark effluent color and foaming in aeration basins",
      "Ineffective coagulant/flocculant recipes leading to pin-point floc carryover",
      "Escalating chemical costs and excessive chemical sludge generation"
    ],
    technicalSpecs: [
      { label: "Design Capacities", value: "10 KLD to 5 MLD modular setups" },
      { label: "Materials of Construction", value: "RCC M30, MSEP Epoxy-Lined, SS316L" },
      { label: "Biological Processes", value: "ASP, Extended Aeration, MBBR, UASB" },
      { label: "Target Effluent Quality", value: "COD < 50-100 ppm, BOD < 10 ppm, TSS < 10 ppm" }
    ],
    deliverables: [
      "On-site jar testing and precise chemical dosing optimization",
      "Dissolved Oxygen (DO) profiling and aeration cycle recalibration",
      "Microscopic sludge analysis and MLSS/MLVSS balance recovery",
      "Turnkey operation, shift staffing, and monthly compliance audits"
    ]
  },
  {
    id: "stp",
    category: "wastewater",
    categoryLabel: "Wastewater Treatment",
    icon: Building2,
    image: "/images/stp-plant.jpg",
    schematic: "/images/building.png",
    title: "Sewage Treatment Plants (STP: ASP, MBBR, SBR, MBR)",
    tag: "Commercial & Campus Utilities",
    shortSummary:
      "Odor-free, high-clarity biological sewage treatment designed for IT parks, commercial complexes, healthcare facilities, and residential campuses.",
    keyMetrics: ["100% Odor Elimination", "Flush & HVAC Reuse", "Zero Bacterial Starvation"],
    principle:
      "Utilizes biological digestion (aerobic and anoxic cycles) to convert sewage organics into stable biomass and clear treated effluent suitable for non-potable domestic reuse such as landscaping and HVAC cooling tower makeup.",
    challengesSolved: [
      "Persistent hydrogen sulfide sewage odors triggering tenant and guest complaints",
      "Turbid, discolored treated water unusable for toilet flushing or gardening",
      "Low microbial counts (MLSS) during weekend or holiday starvation periods",
      "Rapid fouling and differential pressure spikes across MBR membrane cassettes"
    ],
    technicalSpecs: [
      { label: "Available Technologies", value: "ASP, MBBR, Sequencing Batch Reactor (SBR), MBR" },
      { label: "Operating Flow Rates", value: "25 KLD up to 10 MLD installations" },
      { label: "Disinfection Method", value: "UV Sterilizers / Online Chlorine Dosing / Ozonation" },
      { label: "Discharge Standard", value: "Meets CPCB/SPCB strict urban landscape norms" }
    ],
    deliverables: [
      "Root-cause aeration diffuser and blower balancing to halt septic anaerobiosis",
      "Bio-culture reactivation and biological buffering during holiday load dips",
      "Tertiary media rejuvenation and automatic backwash sequence setup",
      "Complete operational handover or managed certified shift operations"
    ]
  },
  {
    id: "clarifiers",
    category: "wastewater",
    categoryLabel: "Wastewater Treatment",
    icon: Layers,
    image: "/images/clarifier.jpg",
    schematic: "/images/tank.png",
    title: "Clarifiers, Tube Settlers & Lamella Systems",
    tag: "Solid-Liquid Separation",
    shortSummary:
      "High-rate primary and secondary clarifiers engineered for optimal settling velocity, stable sludge blanketing, and clear weir overflow.",
    keyMetrics: ["Zero Floc Carryover", "Compact Lamella Footprint", "Sludge Blanket Stability"],
    principle:
      "Applies hydraulic sedimentation and inclined plate/tube technology to multiply effective settling area up to 10-fold, accelerating the separation of coagulated particles and biological flocs from the liquid stream.",
    challengesSolved: [
      "Pin-point floc carryover choking downstream sand and carbon filters",
      "Sludge blanket rise and anaerobic gas-lifting in warm climates",
      "Uneven hydraulic weir overflows caused by unlevel perimeter launders",
      "Scraper mechanism torque tripping and heavy sludge compaction"
    ],
    technicalSpecs: [
      { label: "Settling Velocity Range", value: "0.8 to 1.5 m³/m²·hr design rate" },
      { label: "Lamella Plate Angle", value: "60° self-cleaning inclined PVC/FRP modules" },
      { label: "Drive Mechanism", value: "Central torque drive with overload safety cutoff" },
      { label: "Effluent Launders", value: "V-Notch adjustable SS304/FRP weir plates" }
    ],
    deliverables: [
      "Hydraulic retention time (HRT) and surface loading rate audit",
      "Flocculator velocity gradient (G-value) calibration for dense floc growth",
      "Weir elevation leveling and baffle re-engineering",
      "Automated sludge blowdown timer integration to prevent septic lifting"
    ]
  },
  {
    id: "filtration",
    category: "water",
    categoryLabel: "Water Treatment",
    icon: Filter,
    image: "/images/filtration.jpg",
    schematic: "/images/mgf.png",
    title: "Pressure Sand, Activated Carbon & Multi-Media Filters",
    tag: "Pre-Treatment & Polishing",
    shortSummary:
      "Multi-gradient physical and adsorption filtration for raw borewell, river, or tertiary treated water—stripping turbidity, suspended matter, and chlorine.",
    keyMetrics: ["Turbidity < 1 NTU", "High Iodine Carbon Adsorption", "Automated Backwash"],
    principle:
      "Passes pressurized water through calibrated layers of graded silica sand, quartz gravel, anthracite, and virgin bituminous activated carbon to mechanically trap solids and chemically adsorb organic contaminants.",
    challengesSolved: [
      "Severe media channeling creating bypass routes for dirty water",
      "Mud-ball formation and media solidification inside filter vessels",
      "Excessive differential pressure (> 0.8 bar) starving downstream feed pumps",
      "Premature carbon exhaustion causing chlorine slip into sensitive RO membranes"
    ],
    technicalSpecs: [
      { label: "Vessel Construction", value: "FRP (Composite), MSEP/MSRL, SS304/SS316" },
      { label: "Filtration Velocity", value: "15 to 25 m/hr continuous flow" },
      { label: "Carbon Iodine Value", value: "900 - 1100 mg/g virgin coal-based carbon" },
      { label: "Valving Options", value: "Multi-Port Valve (MPV) or Pneumatic Butterfly Skid" }
    ],
    deliverables: [
      "Vessel internal inspection, lateral strainer replacement, and media bed re-layering",
      "Backwash differential pressure setpoint calibration and air scouring integration",
      "Residual chlorine breakthrough testing and carbon replacement scheduling",
      "Automated valve retrofit for error-free unattended backwashing"
    ]
  },
  {
    id: "softener-ro",
    category: "water",
    categoryLabel: "Water Treatment",
    icon: Waves,
    image: "/images/water-testing.jpg",
    schematic: "/images/ro.png",
    title: "Industrial Softeners, RO & Demineralization (DM)",
    tag: "Scale Prevention & High Purity",
    shortSummary:
      "Ion exchange and high-recovery membrane demineralization producing ultra-low hardness and high-resistivity water for boilers, chillers, and precision processes.",
    keyMetrics: ["Hardness < 5 ppm", "Boiler Scaling Protection", "High Recovery Membranes"],
    principle:
      "Employs premium cation exchange resin to replace calcium/magnesium ions with sodium, paired with high-rejection Thin Film Composite (TFC) reverse osmosis membranes to strip dissolved salts down to trace ppm levels.",
    challengesSolved: [
      "Severe calcium/magnesium scaling in boiler tubes and cooling tower heat exchangers",
      "Premature RO membrane bio-fouling and irreversible silica scaling",
      "High salt consumption during un-optimized brine regeneration cycles",
      "Premature resin bead attrition and capacity degradation"
    ],
    technicalSpecs: [
      { label: "Hardness Elimination", value: "< 2 - 5 ppm as CaCO3 in product water" },
      { label: "RO Salt Rejection", value: "99.2% to 99.7% with low-energy TFC elements" },
      { label: "Resin Chemistry", value: "Food-grade Strong Acid Cation (SAC) crosslinked" },
      { label: "Instrumentation", value: "Online Conductivity, Flow Transmitters, TDS meters" }
    ],
    deliverables: [
      "Normalized RO membrane flux profiling and Clean-in-Place (CIP) chemical wash",
      "Brine draw rate and regeneration stoichiometric salt dosing optimization",
      "Antiscalant dosage threshold calculation based on feed water Langelier Saturation Index",
      "Long-term resin capacity testing and ion-exchange bed rejuvenation"
    ]
  },
  {
    id: "filterpress",
    category: "wastewater",
    categoryLabel: "Wastewater Treatment",
    icon: Boxes,
    image: "/images/filterpress.jpg",
    schematic: "/images/pump.png",
    title: "Sludge Dewatering & Membrane Filter Press Systems",
    tag: "Waste & Cake Handling",
    shortSummary:
      "Heavy-duty recessed plate, membrane squeeze, and centrifuge decanters calibrated to maximize dry cake solids and slash hazardous disposal costs.",
    keyMetrics: ["30-45% Dry Cake Solids", "Reduced Hauling Costs", "Faster Cycle Turnaround"],
    principle:
      "Pumps chemically conditioned sludge into high-pressure recessed chambers lined with woven filter cloth, expressing water under 7 to 16 bar hydraulic pressure to leave behind dry, transportable filter cakes.",
    challengesSolved: [
      "Sloppy, dripping sludge cakes rejected by authorized TSDF disposal sites",
      "Frequent filter cloth blinding requiring constant high-pressure jetting",
      "Excessive polymer coagulant consumption driving up daily operating costs",
      "Unbalanced hydraulic pressure causing plate warpage and chamber leakage"
    ],
    technicalSpecs: [
      { label: "Plate Dimensions", value: "470 x 470 mm up to 1500 x 1500 mm" },
      { label: "Operating Squeeze Pressure", value: "7 bar (Standard) to 16 bar (Membrane squeeze)" },
      { label: "Hydraulic Closure", value: "Semi-automatic to PLC-controlled automatic" },
      { label: "Plate Material", value: "Virgin high-density Polypropylene (PP) homopolymer" }
    ],
    deliverables: [
      "Polymer flocculant bench testing to discover the exact dosage threshold",
      "Filtration cycle time reduction through feed pump stage sequencing",
      "Cloth cleaning protocol with safe descaling agents to restore flow rate",
      "Hydraulic seal pressure tuning and leak-free plate alignment"
    ]
  }
]

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState<"all" | "water" | "wastewater">("all")
  const [activeModalItem, setActiveModalItem] = React.useState<SystemItem | null>(null)

  const filteredSystems = React.useMemo(() => {
    if (selectedCategory === "all") return systemsData
    return systemsData.filter((item) => item.category === selectedCategory)
  }, [selectedCategory])

  const waterCount = systemsData.filter(s => s.category === "water").length
  const wastewaterCount = systemsData.filter(s => s.category === "wastewater").length

  return (
    <section id="products" className="py-20 bg-transparent border-b border-border">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <Badge variant="default" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Systems & Technologies Handled
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Treatment Plants & Equipment We Optimize
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            From heavy industrial ETPs to commercial STPs and precision filtration skids, we understand the physics, hydraulics, and chemistry of your exact setup. Click any system to explore technical specs and solutions.
          </p>

          {/* Grundfos-Style Category Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-slate-100 text-muted-foreground hover:text-foreground hover:bg-slate-200"
              }`}
            >
              All Systems ({systemsData.length})
            </button>
            <button
              onClick={() => setSelectedCategory("water")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "water"
                  ? "bg-cyan-700 text-white shadow-sm"
                  : "bg-cyan-50 text-cyan-900 hover:bg-cyan-100"
              }`}
            >
              <Waves className="h-3.5 w-3.5" />
              <span>Water Treatment ({waterCount})</span>
            </button>
            <button
              onClick={() => setSelectedCategory("wastewater")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                selectedCategory === "wastewater"
                  ? "bg-emerald-700 text-white shadow-sm"
                  : "bg-emerald-50 text-emerald-900 hover:bg-emerald-100"
              }`}
            >
              <Factory className="h-3.5 w-3.5" />
              <span>Wastewater Treatment ({wastewaterCount})</span>
            </button>
          </div>
        </div>

        {/* Systems Grid with Prominent Images & Concise Cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSystems.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  onClick={() => setActiveModalItem(item)}
                  className="rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs hover:border-primary/60 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
                >
                  {/* High-Impact Enlarged Photo Banner (Grundfos Reference) */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden border-b border-border/60 bg-slate-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Schematic Icon Pill */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs rounded-lg p-2 shadow-sm border border-white/70 flex items-center gap-2">
                      <div className="h-7 w-7 relative">
                        <Image
                          src={item.schematic}
                          alt="Schematic"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider pr-1">
                        {item.category === "water" ? "Water" : "Wastewater"}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="outline"
                        className="text-[10px] font-semibold bg-black/65 text-white border-white/30 backdrop-blur-xs"
                      >
                        {item.tag}
                      </Badge>
                    </div>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shrink-0 shadow-xs">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Concise Card Body */}
                  <div className="p-5 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {item.shortSummary}
                      </p>

                      {/* Concise Performance Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.keyMetrics.map((metric, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md"
                          >
                            <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                            <span>{metric}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expandable CTA Button */}
                    <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setActiveModalItem(item)}
                        className="w-full justify-between font-semibold text-xs border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all h-9"
                      >
                        <span className="flex items-center gap-1.5">
                          <Maximize2 className="h-3.5 w-3.5" />
                          <span>Explore System Details & Specs</span>
                        </span>
                        <ArrowRight className="h-3.5 w-3.5 text-primary" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Modal Dialog (Fixed Size, No Scrollbar, Executive Layout) */}
      <Dialog open={!!activeModalItem} onOpenChange={(open) => !open && setActiveModalItem(null)}>
        {activeModalItem && (
          <DialogContent className="w-[95vw] sm:max-w-3xl lg:max-w-4xl p-0 rounded-2xl mx-auto overflow-hidden border border-border shadow-2xl bg-white">
            {/* Compact Header Photo Banner */}
            <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-950">
              <Image
                src={activeModalItem.image}
                alt={activeModalItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              <div className="absolute top-3.5 left-4 flex items-center gap-2">
                <Badge className="bg-primary text-white font-semibold text-[11px] px-2.5 py-0.5">
                  {activeModalItem.categoryLabel}
                </Badge>
                <Badge variant="outline" className="bg-black/60 text-white border-white/30 text-[10px]">
                  {activeModalItem.tag}
                </Badge>
              </div>

              <div className="absolute bottom-3.5 left-4 right-14 text-white">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-md">
                    <activeModalItem.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {activeModalItem.title}
                    </h2>
                    <p className="text-[11px] text-slate-200 mt-0.5 line-clamp-1">
                      Technical Architecture, Diagnostic Remediation & Performance Optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Content Details */}
            <div className="p-5 sm:p-6 space-y-3.5">
              {/* Working Principle */}
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Gauge className="h-3.5 w-3.5" />
                  <span>Engineering Operating Principle</span>
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {activeModalItem.principle}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="rounded-xl border border-border/80 bg-slate-50 p-3 space-y-2">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground">
                  Standard Technical Parameters & Capacities
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {activeModalItem.technicalSpecs.map((spec, i) => (
                    <div key={i} className="flex flex-col bg-white p-2 rounded-lg border border-border/60">
                      <span className="text-[10px] font-medium text-muted-foreground truncate">
                        {spec.label}
                      </span>
                      <span className="text-[11px] font-bold text-foreground mt-0.5 truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two Column: Common Challenges vs Nanneer Remediation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-0.5">
                {/* Column 1: Failure Modes */}
                <div className="p-3 rounded-xl border border-amber-200/80 bg-amber-50/40 space-y-1.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1">
                    <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                    <span>Common Failure Modes We Solve</span>
                  </h4>
                  <ul className="space-y-1">
                    {activeModalItem.challengesSolved.slice(0, 3).map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-amber-950 font-medium">
                        <span className="text-amber-600 font-bold">•</span>
                        <span className="line-clamp-1">{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: Deliverables */}
                <div className="p-3 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-1.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                    <Wrench className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Nanneer Remediation Deliverables</span>
                  </h4>
                  <ul className="space-y-1">
                    {activeModalItem.deliverables.slice(0, 3).map((del, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-emerald-950 font-medium">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="pt-3 border-t border-border/80 flex items-center justify-between gap-3">
                <span className="text-[11px] text-muted-foreground hidden sm:inline-block">
                  Facing output inconsistencies or compliance warnings on this system?
                </span>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <DialogClose asChild>
                    <Button variant="outline" size="sm" className="h-8 text-xs px-3">
                      Close
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button asChild size="sm" className="h-8 text-xs px-3.5 gap-1.5 bg-primary hover:bg-primary/90 text-white font-semibold">
                      <a href="#contact">
                        <PhoneCall className="h-3 w-3" />
                        <span>Request Plant Audit</span>
                      </a>
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}
