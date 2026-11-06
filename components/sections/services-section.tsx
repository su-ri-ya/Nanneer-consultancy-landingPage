"use client"

import * as React from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Factory,
  Building2,
  TrendingDown,
  Microscope,
  FileCheck2,
  Users,
  ArrowRight,
  CheckCircle2,
  Maximize2,
  PhoneCall,
  ShieldCheck,
  ClipboardList,
  Wrench,
  Clock,
  ChevronLeft,
  ChevronRight
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog"

export interface ServiceItem {
  id: string
  icon: React.ElementType
  image: string
  title: string
  scope: string
  badge: string
  shortSummary: string
  keyOutcomes: string[]
  deepOverview: string
  workflowSteps: { step: string; title: string; desc: string }[]
  deliverables: string[]
  clientBenefits: string[]
}

const servicesData: ServiceItem[] = [
  {
    id: "manpower",
    icon: Users,
    image: "/images/manpower.jpg",
    title: "Trained Plant Operations & Manpower Deployment",
    scope: "Certified Operators, Shift Technicians & Supervisors",
    badge: "Operations & Staffing",
    shortSummary:
      "Vetted, technically certified shift operators and on-ground supervisors ensuring uninterrupted plant operation, zero downtime, and statutory logbook accountability.",
    keyOutcomes: ["100% Shift Coverage Guarantee", "Certified ETP/STP Technicians", "Monthly Uptime & Logbook Audits"],
    deepOverview:
      "Unskilled operators, high staff turnover, and unvetted handling are the single largest cause of plant failures and regulatory fines across industrial parks. Nanneer deploys thoroughly trained, certified ETP and STP operators managed by our senior process engineers. We take full ownership of daily dosing, backwashing, sludge dewatering, and preventive maintenance.",
    workflowSteps: [
      { step: "01", title: "Site & Plant Baseline Audit", desc: "Assessing existing plant complexity, shifts, and hydraulic flow requirements." },
      { step: "02", title: "Trained Personnel Deployment", desc: "Deploying certified operators with SOP training specific to your facility's OEM equipment." },
      { step: "03", title: "Standard Operating Procedure (SOP) Enforcement", desc: "Implementing digital checklists for hourly parameters: DO, MLSS, pH, and backwashes." },
      { step: "04", title: "Monthly Engineering Review", desc: "Senior consultant visit to audit logbooks, chemical inventory, and operational efficiency." }
    ],
    deliverables: [
      "Qualified, vetted shift operators and dedicated site supervisors",
      "Guaranteed shift coverage with automated backup replacement protocols",
      "Daily chemical consumption and operational logging registers",
      "Monthly Plant Performance & Uptime Reports delivered to management"
    ],
    clientBenefits: [
      "Zero plant non-operation fines from regulatory bodies",
      "Elimination of operator hiring, training, and turnover hassles",
      "Extended equipment lifespan through disciplined daily maintenance"
    ]
  },
  {
    id: "etp-troubleshooting",
    icon: Factory,
    image: "/images/etp-plant.jpg",
    title: "Industrial ETP Performance Troubleshooting",
    scope: "Chemical, Textile, Food & Manufacturing Plants",
    badge: "Process Engineering",
    shortSummary:
      "Forensic diagnosis and chemical-hydraulic rectification for industrial plants facing toxic shock loads, high COD/BOD carryover, or biological upsets.",
    keyOutcomes: ["Guaranteed COD/BOD Compliance", "Optimized Coagulant Recipes", "Biological Shock Recovery"],
    deepOverview:
      "Industrial effluent is rarely homogeneous—surges in chemical oxygen demand, temperature fluctuations, and toxic cleaning runs frequently wipe out active biological biomass. Our consultants trace every stream back to its origin, optimize reaction chemistry, and stabilize your biological aeration basin.",
    workflowSteps: [
      { step: "01", title: "Inflow Sampling & Mass Balance", desc: "Forensic sampling across equalization, reaction tanks, and aeration basins." },
      { step: "02", title: "Laboratory Jar Testing", desc: "Discovering precise coagulant, coagulant aid, and polymer dosing curves." },
      { step: "03", title: "Biological Tuning & Aeration Profiling", desc: "Dissolved oxygen balancing and re-inoculation of resilient microbial strains." },
      { step: "04", title: "Discharge Compliance Verification", desc: "Third-party NABL lab testing confirming total compliance with SPCB discharge norms." }
    ],
    deliverables: [
      "Bench-scale jar test report establishing lowest-cost effective chemical dosages",
      "Aeration diffuser efficiency and DO profile calibration",
      "Secondary clarifier sludge settling and blanket stability remediation",
      "Standard Operating Procedures (SOPs) for handling sudden toxic shock loads"
    ],
    clientBenefits: [
      "Avoid plant closure notices and regulatory show-cause actions",
      "20% to 35% reduction in monthly chemical and coagulant expenditure",
      "Consistent, clear treated effluent ready for recycling or safe discharge"
    ]
  },
  {
    id: "stp-optimization",
    icon: Building2,
    image: "/images/stp-plant.jpg",
    title: "Commercial & Institutional STP Optimization",
    scope: "Tech Parks, Commercial Real Estate, Hospitals & Campuses",
    badge: "Facility Water Management",
    shortSummary:
      "Eliminating persistent sewage odors, murky grey water, biological starvation, and membrane fouling in commercial real estate STPs.",
    keyOutcomes: ["100% Odor Elimination", "Toilet Flush & HVAC Clarity", "Zero Bacterial Starvation"],
    deepOverview:
      "Commercial buildings experience extreme flow variations: huge morning and evening peaks, combined with starvation over weekends. This leads to septic conditions, foul hydrogen sulfide stench, and discolored grey water that stains fixtures. We re-engineer cycle timers and biological buffers to deliver crystal-clear, odorless water 365 days a year.",
    workflowSteps: [
      { step: "01", title: "Odour Source & Hydraulic Audit", desc: "Pinpointing septic stagnation zones and air supply deficiencies across collection pits." },
      { step: "02", title: "Aeration Cycle & Biological Balancing", desc: "Reprogramming PLC blower cycles and introducing bio-enzymatic cultures." },
      { step: "03", title: "Filtration Skid Rejuvenation", desc: "Re-bedding media filters and chemically cleaning MBR cassettes." },
      { step: "04", title: "Treated Water Quality Stabilization", desc: "Chlorine/UV disinfection tuning ensuring pathogen-free, odorless flush water." }
    ],
    deliverables: [
      "Root-cause elimination of sewer and aeration tank odors",
      "Bio-culture reactivation and nutritional balancing for low-load periods",
      "Tertiary sand, carbon, and ultrafiltration media performance restoration",
      "Detailed maintenance schedule for blowers, submersible pumps, and valves"
    ],
    clientBenefits: [
      "Zero tenant and visitor odor complaints",
      "Massive reduction in freshwater tanker purchase by safely reusing 100% of treated water",
      "Longer membrane and media filter life"
    ]
  },
  {
    id: "plant-audit",
    icon: Microscope,
    image: "/images/water-testing.jpg",
    title: "Comprehensive Plant Water Audit & Bottleneck Analysis",
    scope: "Forensic Technical Evaluation",
    badge: "Technical Audit",
    shortSummary:
      "A complete hydraulic, mechanical, and biochemical audit of your entire treatment facility to locate hidden capacity constraints and underperforming units.",
    keyOutcomes: ["Forensic Mass Balance", "Hidden Capacity Unlock", "Prioritized Engineering Roadmap"],
    deepOverview:
      "Before investing millions in plant expansions or new equipment, a forensic technical audit determines whether your existing infrastructure is simply operating out of hydraulic balance. We evaluate flow meters, retention times, pump head curves, and chemical dosing systems to uncover bottlenecks and restore designed throughput.",
    workflowSteps: [
      { step: "01", title: "Process Flow & P&ID Verification", desc: "Mapping actual physical plumbing against original design schematics." },
      { step: "02", title: "Hydraulic Retention Time (HRT) Verification", desc: "Measuring true volumetric retention across all reaction and settling tanks." },
      { step: "03", title: "Unit-by-Unit Contaminant Mapping", desc: "Forensic testing of COD, BOD, TSS, Oil & Grease, and TDS at every stage." },
      { step: "04", title: "Remediation Blueprint Formulation", desc: "Prioritizing low-cost operational tweaks vs. necessary capital retrofits." }
    ],
    deliverables: [
      "Comprehensive Forensic Engineering Audit Report with photographic documentation",
      "Stage-by-stage mass balance and removal efficiency scorecards",
      "Cost-benefit analysis for recommended upgrades vs. operational adjustments",
      "Executive summary presentation for plant leadership and facility directors"
    ],
    clientBenefits: [
      "Avoid premature CAPEX on unneeded tank or equipment expansions",
      "Identify the true root cause of persistent operational failures",
      "Clear regulatory roadmap ensuring compliance peace of mind"
    ]
  },
  {
    id: "opex-optimization",
    icon: TrendingDown,
    image: "/images/filterpress.jpg",
    title: "OPEX Rationalization & Power Optimization",
    scope: "Cost Reduction Advisory",
    badge: "Financial Optimization",
    shortSummary:
      "Systematic reduction of monthly treatment expenditure without compromising discharge quality or risking compliance with statutory standards.",
    keyOutcomes: ["20-35% Chemical Cost Reduction", "15-25% Aeration Energy Savings", "Sludge Hauling Cuts"],
    deepOverview:
      "Treatment facilities waste millions annually due to blind chemical overdosing, unthrottled blowers running 24/7 at full power, and wet, sloppy sludge cake that skyrockets hazardous transport fees. We introduce precision dosing controls and blower duty optimization that directly reduce OPEX while maintaining spotless compliance.",
    workflowSteps: [
      { step: "01", title: "Utility Bill & Chemical Consumption Audit", desc: "Reviewing 12 months of electricity, chemical, and sludge hauling expenses." },
      { step: "02", title: "Blower & Motor Load Profiling", desc: "VFD assessment and Dissolved Oxygen feedback loop calibration." },
      { step: "03", title: "Coagulant & Polymer Rationalization", desc: "Switching to high-efficiency polymer formulations with lower net dosage." },
      { step: "04", title: "Sludge Cake Dewatering Tuning", desc: "Boosting filter press dry solids percentage to minimize disposal weight." }
    ],
    deliverables: [
      "Monthly OPEX Savings Projections with guaranteed payback timelines",
      "Blower automation and dissolved oxygen feedback integration plan",
      "Chemical vendor evaluation and formulation rationalization sheet",
      "Quarterly cost benchmarking audits to prevent consumption creep"
    ],
    clientBenefits: [
      "Immediate reduction in monthly operating overheads",
      "Substantial drop in carbon footprint and electricity consumption",
      "Substantially reduced hazardous waste transport and landfill fees"
    ]
  }
]

export function ServicesSection() {
  const [activeService, setActiveService] = React.useState<ServiceItem | null>(null)
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-transparent border-b border-border overflow-hidden">
      <div className="container-custom">
        {/* Section Header with Carousel Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-2.5 sm:space-y-3">
            <Badge variant="default" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
              Our Core Offerings
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
              On-Ground Engineering & Dedicated Operations
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              From deploying certified shift operators to troubleshooting complex biological upsets and rationalizing monthly OPEX, we ensure your treatment facility runs reliably, safely, and cost-effectively.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="h-10 w-10 rounded-full border-border/80 bg-white shadow-xs hover:bg-slate-50 hover:border-primary/50 text-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="h-10 w-10 rounded-full border-border/80 bg-white shadow-xs hover:bg-slate-50 hover:border-primary/50 text-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Services Cards in Horizontal Scroll Container with Custom Water Scrollbar */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 custom-water-scrollbar snap-x snap-mandatory scroll-smooth -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {servicesData.map((service, index) => {
            const Icon = service.icon

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                onClick={() => setActiveService(service)}
                className="w-[84vw] sm:w-[360px] lg:w-[410px] shrink-0 snap-center sm:snap-start rounded-2xl border border-border/80 bg-card overflow-hidden shadow-xs hover:border-primary/60 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer"
              >
                {/* Enlarged Photo Header (Grundfos Style) */}
                <div className="relative h-56 sm:h-60 w-full overflow-hidden border-b border-border/60 bg-slate-900">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <Badge
                      variant="outline"
                      className="text-[11px] font-semibold bg-black/65 text-white border-white/30 backdrop-blur-xs"
                    >
                      {service.badge}
                    </Badge>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-3.5 left-4 right-4 text-white">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white shrink-0 shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                        <span className="text-[11px] text-white/80 block mt-0.5">
                          {service.scope}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Concise Card Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {service.shortSummary}
                    </p>

                    {/* Concise Outcome Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.keyOutcomes.map((outcome, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] font-medium bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                          <span>{outcome}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand CTA Button */}
                  <div className="pt-4 border-t border-border/60">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setActiveService(service)}
                      className="w-full justify-between font-semibold text-xs border-primary/30 text-primary hover:bg-primary/5 hover:border-primary transition-all h-9"
                    >
                      <span className="flex items-center gap-1.5">
                        <Maximize2 className="h-3.5 w-3.5" />
                        <span>Explore Scope, Workflow & Deliverables</span>
                      </span>
                      <ArrowRight className="h-3.5 w-3.5 text-primary" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Interactive Expanded Modal Dialog (Fixed Size, No Scrollbar, Executive Layout) */}
      <Dialog open={!!activeService} onOpenChange={(open) => !open && setActiveService(null)}>
        {activeService && (
          <DialogContent className="w-[95vw] sm:max-w-3xl lg:max-w-4xl p-0 rounded-2xl mx-auto overflow-hidden border border-border shadow-2xl bg-white max-h-[90vh] overflow-y-auto">
            {/* Compact Header Photo Banner */}
            <div className="relative h-32 sm:h-40 w-full overflow-hidden bg-slate-950 shrink-0">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

              <div className="absolute top-3.5 left-4">
                <Badge className="bg-primary text-white font-semibold text-[11px] px-2.5 py-0.5">
                  {activeService.badge}
                </Badge>
              </div>

              <div className="absolute bottom-3.5 left-4 right-14 text-white">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center text-white shrink-0 shadow-md">
                    <activeService.icon className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {activeService.title}
                    </h2>
                    <span className="text-[11px] text-slate-200 block mt-0.5">
                      Scope: {activeService.scope}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Compact Body: Balanced Grid without Overflow */}
            <div className="p-5 sm:p-6 space-y-4">
              {/* Strategic Overview */}
              <div className="space-y-1">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Strategic Engineering Approach</span>
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {activeService.deepOverview}
                </p>
              </div>

              {/* 4-Step Engineering Workflow (Compact 2x2 Grid) */}
              <div className="space-y-1.5">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <ClipboardList className="h-3.5 w-3.5 text-primary" />
                  <span>Nanneer Diagnostic & Execution Workflow</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.workflowSteps.map((step, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg border border-border/80 bg-slate-50 flex items-start gap-2">
                      <span className="flex h-5 w-5 items-center justify-center rounded bg-primary text-white font-bold text-[10px] shrink-0">
                        {step.step}
                      </span>
                      <div className="min-w-0">
                        <h5 className="text-[11px] font-bold text-foreground truncate">
                          {step.title}
                        </h5>
                        <p className="text-[10px] text-muted-foreground leading-snug line-clamp-1">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables & Client Benefits (Side-by-Side Compact) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl border border-emerald-200/80 bg-emerald-50/40 space-y-1.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1">
                    <Wrench className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Deliverables Provided</span>
                  </h4>
                  <ul className="space-y-1">
                    {activeService.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-emerald-950 font-medium">
                        <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl border border-cyan-200/80 bg-cyan-50/40 space-y-1.5">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-cyan-900 flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-cyan-600" />
                    <span>Business & Compliance Impact</span>
                  </h4>
                  <ul className="space-y-1">
                    {activeService.clientBenefits.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[11px] text-cyan-950 font-medium">
                        <CheckCircle2 className="h-3 w-3 text-cyan-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Compact Modal Footer */}
              <div className="pt-3 border-t border-border/80 flex items-center justify-between gap-3">
                <span className="text-[11px] text-muted-foreground hidden sm:inline-block">
                  Need on-ground deployment or plant turnaround?
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
                        <span>Consult Engineers</span>
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
