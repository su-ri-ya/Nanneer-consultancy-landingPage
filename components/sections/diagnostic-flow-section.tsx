"use client"

import * as React from "react"
import { motion } from "framer-motion"
import {
  Info,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Filter,
  Waves,
  Cpu,
  RefreshCw,
  FlaskConical,
  Activity
} from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface StageData {
  id: string
  name: string
  shortLabel: string
  icon: React.ElementType
  etpFailurePoint: string
  etpSymptom: string
  etpFix: string
  stpFailurePoint: string
  stpSymptom: string
  stpFix: string
}

const flowStages: StageData[] = [
  {
    id: "inlet",
    name: "Raw Effluent / Sewage Inlet",
    shortLabel: "Inlet",
    icon: Waves,
    etpFailurePoint: "Uncontrolled batch discharges and sudden pH/temperature shocks",
    etpSymptom: "Sudden biological die-off or violent chemical reactions downstream",
    etpFix: "Upstream segregation, buffer retention checks, and load balancing",
    stpFailurePoint: "Peak hydraulic surge during morning/evening usage cycles",
    stpSymptom: "Overwhelming screen chambers, bypass overflow, grease blinding",
    stpFix: "Inlet surge damping and screening hydraulic calibration",
  },
  {
    id: "screening",
    name: "Bar Screening & Grit Removal",
    shortLabel: "Screening",
    icon: Filter,
    etpFailurePoint: "Coarse solids bypassing manual or damaged mechanical screens",
    etpSymptom: "Submersible pump impeller wear, pipe clogging, sludge pump failure",
    etpFix: "Bar rack aperture review and auto-cleaning velocity alignment",
    stpFailurePoint: "Sanitary solids & fat/oil/grease accumulation",
    stpSymptom: "Odor formation, anaerobic septic conditions, pump jamming",
    stpFix: "Differential head check and grease trap retention verification",
  },
  {
    id: "equalisation",
    name: "Equalisation & Neutralisation",
    shortLabel: "Equalisation",
    icon: RefreshCw,
    etpFailurePoint: "Insufficient aeration mixing leading to anaerobic sediment deposition",
    etpSymptom: "Sulfur odors, black sludge accumulation, erratic pH spikes to reaction tanks",
    etpFix: "Diffuser grid pattern redesign and continuous dosing feedback loops",
    stpFailurePoint: "Inadequate holding volume for daytime vs. nighttime flow disparity",
    stpSymptom: "Hydraulic shock dumping raw sewage directly into aeration tanks",
    stpFix: "Pump scheduling and level-controlled gradual feed balancing",
  },
  {
    id: "treatment",
    name: "Biological / Chemical Treatment",
    shortLabel: "Bio / Chem Core",
    icon: FlaskConical,
    etpFailurePoint: "Imbalanced Food-to-Microorganism (F/M) ratio or chemical overdosing",
    etpSymptom: "Sludge bulking, viscous foaming, high residual COD, toxic shock",
    etpFix: "Respirometry audit, DO setpoint calibration, and jar-test coagulant tuning",
    stpFailurePoint: "Low MLSS maintenance, excessive wasting, or diffuser clogging",
    stpSymptom: "Pin-point floc, murky effluent, non-compliant ammoniacal nitrogen",
    stpFix: "F/M balancing, return activated sludge (RAS) ratio calibration",
  },
  {
    id: "clarifier",
    name: "Secondary Clarification & Settling",
    shortLabel: "Clarifier",
    icon: Activity,
    etpFailurePoint: "Hydraulic short-circuiting and poor flocculant bridge formation",
    etpSymptom: "Turbid weir overflow, pin-point flocs escaping to tertiary filters",
    etpFix: "Inlet feedwell baffle adjustment and anionic polymer dosing realignment",
    stpFailurePoint: "Denitrification causing floating sludge blankets (sludge rising)",
    stpSymptom: "Clumps of dark sludge on surface; poor clarity in launders",
    stpFix: "Clarifier detention time tuning and sludge blanket level management",
  },
  {
    id: "filtration",
    name: "Tertiary Sand, Carbon & Membrane Filtration",
    shortLabel: "Filtration",
    icon: Cpu,
    etpFailurePoint: "Premature bed compaction and rapid differential pressure rise",
    etpSymptom: "Frequent backwashing cycles wasting treated water, media channeling",
    etpFix: "Media bed regrading, air-scour flow audit, and pre-filter TSS control",
    stpFailurePoint: "Organic biofilm fouling activated carbon and cartridge filters",
    stpSymptom: "Chlorine demand spikes, persistent fecal coliform, membrane foul",
    stpFix: "Contact time verification and backwash protocol optimization",
  },
  {
    id: "outlet",
    name: "Treated Water Storage & Reuse Outlet",
    shortLabel: "Treated Outlet",
    icon: CheckCircle2,
    etpFailurePoint: "Discharge parameters exceeding SPCB / CPCB statutory standards",
    etpSymptom: "Risk of regulatory notices, fines, or inability to reuse for utilities",
    etpFix: "Systematic stabilization ensuring continuous compliant discharge",
    stpFailurePoint: "Residual smell and discoloration restricting flushing or cooling reuse",
    stpSymptom: "Plumbing discoloration, cooling tower scaling, tenant complaints",
    stpFix: "Final disinfection polishing and turbidity stabilizer adjustment",
  },
]

export function DiagnosticFlowSection() {
  const [selectedPlant, setSelectedPlant] = React.useState<"ETP" | "STP">("ETP")
  const [activeStage, setActiveStage] = React.useState<string>("treatment")

  const currentStage = flowStages.find((s) => s.id === activeStage) || flowStages[3]

  return (
    <section id="diagnostic-flow" className="py-20 border-b border-border/60 relative overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <Badge variant="aqua" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Interactive System Map
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            How we find what&apos;s wrong
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Treatment plants are connected hydraulic and biochemical chains. An issue appearing at the final outlet is almost always triggered 2 or 3 stages upstream. Select a stage to explore typical root-cause failure points.
          </p>
        </div>

        {/* ETP / STP Selector Tabs */}
        <div className="flex justify-center mb-8">
          <Tabs
            defaultValue="ETP"
            value={selectedPlant}
            onValueChange={(val) => setSelectedPlant(val as "ETP" | "STP")}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ETP" className="text-sm font-semibold">
                Industrial ETP Stream
              </TabsTrigger>
              <TabsTrigger value="STP" className="text-sm font-semibold">
                Commercial STP Stream
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <TooltipProvider delayDuration={150}>
          {/* Visual Interactive Pipeline Map */}
          <div className="relative rounded-2xl border border-border/80 bg-card p-4 sm:p-8 shadow-lg glass-card backdrop-blur-md mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4 flex items-center justify-between">
              <span>Treatment Process Chain (Click a node to inspect)</span>
              <span className="hidden sm:inline-flex text-[11px] text-primary items-center gap-1">
                <Info className="h-3 w-3" />
                Animated flow represents physical hydraulic progression
              </span>
            </div>

            {/* Stage Nodes in Horizontal Chain */}
            <div className="relative grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-2">
              {/* Connecting Flow Line (visible on desktop) */}
              <div className="hidden lg:block absolute top-7 left-6 right-6 h-1 bg-border -z-0 flow-pipe rounded-full" />

              {flowStages.map((stage, idx) => {
                const Icon = stage.icon
                const isSelected = stage.id === activeStage

                return (
                  <Tooltip key={stage.id}>
                    <TooltipTrigger asChild>
                      <button
                        onClick={() => setActiveStage(stage.id)}
                        className={`relative z-10 flex flex-col items-center p-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? "border-primary bg-primary/10 shadow-md ring-2 ring-primary/30"
                            : "border-border/80 bg-card hover:bg-muted/60"
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl mb-2 transition-all ${
                            isSelected
                              ? "bg-primary text-white shadow-sm"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-bold tracking-tight text-foreground line-clamp-1">
                          {stage.shortLabel}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                          Stage 0{idx + 1}
                        </span>

                        {isSelected && (
                          <span className="absolute -bottom-1.5 flex h-2 w-2">
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                          </span>
                        )}
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="font-semibold">{stage.name}</p>
                      <p className="text-[11px] text-muted-foreground">Click to inspect diagnostic findings</p>
                    </TooltipContent>
                  </Tooltip>
                )
              })}
            </div>

            {/* Deep-Dive Inspection Panel for the Active Node */}
            <div className="mt-8 pt-6 border-t border-border/70">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-4 space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
                    <Activity className="h-3.5 w-3.5" />
                    <span>Inspection Target</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-foreground tracking-tight">
                    {currentStage.name}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our diagnostic team audits physical geometry, retention timing, mechanical aeration efficiency, and chemical dosing accuracy at this precise boundary.
                  </p>
                </div>

                <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Common Failure Point & Symptom */}
                  <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400">
                      <AlertTriangle className="h-4 w-4 shrink-0" />
                      <span>Typical Failure Point & Symptom</span>
                    </div>
                    <p className="text-xs text-foreground font-medium">
                      {selectedPlant === "ETP" ? currentStage.etpFailurePoint : currentStage.stpFailurePoint}
                    </p>
                    <div className="pt-2 border-t border-amber-500/20 text-[11px] text-muted-foreground">
                      <strong>Observed On-Ground:</strong>{" "}
                      {selectedPlant === "ETP" ? currentStage.etpSymptom : currentStage.stpSymptom}
                    </div>
                  </div>

                  {/* Nanneer Resolution Methodology */}
                  <div className="rounded-xl border border-healthy/30 bg-healthy/5 p-4 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-healthy">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>How Nanneer Resolves The Gap</span>
                    </div>
                    <p className="text-xs text-foreground font-medium">
                      {selectedPlant === "ETP" ? currentStage.etpFix : currentStage.stpFix}
                    </p>
                    <div className="pt-2 border-t border-healthy/20 text-[11px] text-muted-foreground">
                      <strong>Approach:</strong> Root-cause process tuning with existing civil and electro-mechanical assets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipProvider>

        {/* Bottom CTA block for diagnosis */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-3">
            Not sure which stage is causing your current discharge bottleneck?
          </p>
          <Button asChild variant="outline" className="gap-2 text-xs font-semibold">
            <a href="#contact">
              <span>Request an On-Ground Process Audit</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
