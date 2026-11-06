"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Activity,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { evaluateHealthCheck } from "@/lib/health-check"
import { HealthCheckResult, HealthCheckState } from "@/lib/types"
import { trackEvent } from "@/lib/analytics"

interface Question {
  id: keyof HealthCheckState
  title: string
  subtitle: string
  options: string[]
}

const questions: Question[] = [
  {
    id: "plantType",
    title: "What type of treatment installation do you operate?",
    subtitle: "Select the primary process configuration on site",
    options: ["ETP", "STP", "Combined / Not Sure"]
  },
  {
    id: "plantAge",
    title: "How long has this plant been in active operation?",
    subtitle: "Equipment wear and hydraulic deviation often correlate with operating lifespan",
    options: ["Less than 1 year", "1 – 3 years", "3 – 7 years", "More than 7 years"]
  },
  {
    id: "primarySymptom",
    title: "What is the most acute daily pain point in your plant?",
    subtitle: "Select the symptom causing the greatest concern for plant management",
    options: [
      "Inconsistent COD/BOD/TSS discharge",
      "Foaming, sludge rising or biological upset",
      "High chemical or energy consumption",
      "Frequent membrane/filter fouling"
    ]
  },
  {
    id: "treatedWaterIssue",
    title: "How does the final treated water currently perform?",
    subtitle: "Compliance and reuse eligibility status",
    options: [
      "Fails PCB / pollution board statutory norms",
      "Unusable for reuse / cooling tower",
      "High turbidity or residual odor",
      "Meets discharge norms but want reuse optimization"
    ]
  },
  {
    id: "costTrend",
    title: "How has operating expenditure trended over the past 6–12 months?",
    subtitle: "Chemical, power, and sludge hauling expenses",
    options: [
      "Chemical & sludge hauling costs spiking >25%",
      "Unpredictable monthly operational bills",
      "Stable costs, but seeking efficiency gains"
    ]
  },
  {
    id: "downtimeFrequency",
    title: "How often does your team engage in reactive emergency interventions?",
    subtitle: "Firefighting operational upsets, sudden pump clogs, or chemical shock adjustments",
    options: [
      "Weekly or continuous firefighting",
      "Monthly unexpected disruptions",
      "Rarely / once a year"
    ]
  }
]

export function HealthCheckSection() {
  const [currentStep, setCurrentStep] = React.useState<number>(0)
  const [answers, setAnswers] = React.useState<Partial<HealthCheckState>>({})
  const [result, setResult] = React.useState<HealthCheckResult | null>(null)

  const activeQuestion = questions[currentStep]
  const progressPercent = Math.round(((currentStep + 1) / questions.length) * 100)

  const handleSelectOption = (option: string) => {
    if (!activeQuestion) return
    const updatedAnswers = { ...answers, [activeQuestion.id]: option }
    setAnswers(updatedAnswers)

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Completed questionnaire
      const computed = evaluateHealthCheck(updatedAnswers)
      setResult(computed)
      trackEvent("health_check_complete", {
        riskLevel: computed.riskLevel,
        score: computed.score
      })
    }
  }

  const handleReset = () => {
    setAnswers({})
    setCurrentStep(0)
    setResult(null)
    trackEvent("health_check_reset")
  }

  const handlePrefillContact = () => {
    // Scroll to contact form and emit a custom event to populate fields
    const contactEl = document.getElementById("contact")
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" })
      const prefillEvent = new CustomEvent("prefill-contact-from-healthcheck", {
        detail: {
          plantType: answers.plantType || "ETP",
          summary: result?.summary || "",
          score: result?.score || 0,
          issue: `${answers.primarySymptom || "Process instability"}. Treated water issue: ${answers.treatedWaterIssue || "N/A"}.`
        }
      })
      window.dispatchEvent(prefillEvent)
      trackEvent("health_check_prefill_contact_click")
    }
  }

  return (
    <section id="health-check" className="py-20 bg-muted/20 border-b border-border/60">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <Badge variant="aqua" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Interactive Diagnostic Tool
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            System Health & Risk Gauge
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Answer 6 targeted diagnostic questions about your treatment setup to receive an instant physical risk assessment and actionable engineering recommendations.
          </p>
        </div>

        {/* Stepper Card */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xl glass-card backdrop-blur-md">
          {!result ? (
            <div className="space-y-6">
              {/* Stepper Header & Progress */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span>
                    Question 0{currentStep + 1} of 0{questions.length}
                  </span>
                  <span>{progressPercent}% Completed</span>
                </div>
                <Progress value={progressPercent} className="h-2" />
              </div>

              {/* Active Question */}
              <div className="space-y-2 pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {activeQuestion?.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {activeQuestion?.subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-2.5 pt-2">
                {activeQuestion?.options.map((option) => {
                  const isSelected = answers[activeQuestion.id] === option
                  return (
                    <button
                      key={option}
                      onClick={() => handleSelectOption(option)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        isSelected
                          ? "border-primary bg-primary/10 text-foreground ring-1 ring-primary"
                          : "border-border/80 bg-card hover:bg-muted/70 text-foreground"
                      }`}
                    >
                      <span>{option}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 ml-2" />
                    </button>
                  )
                })}
              </div>

              {/* Navigation Back */}
              <div className="pt-4 flex items-center justify-between border-t border-border/50 text-xs">
                {currentStep > 0 ? (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="gap-1.5 text-xs text-muted-foreground"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Previous Question
                  </Button>
                ) : (
                  <span className="text-[11px] text-muted-foreground">
                    Runs 100% in your browser. No data stored without your consent.
                  </span>
                )}

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleReset}
                  className="gap-1 text-xs text-muted-foreground hover:text-foreground"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </Button>
              </div>
            </div>
          ) : (
            /* Results Presentation */
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                    Plant Health Assessment Results
                  </h3>
                </div>
                <Badge variant={result.badgeVariant}>
                  {result.riskLevel}
                </Badge>
              </div>

              {/* Score Gauge Block */}
              <div className="rounded-xl border border-border/80 bg-muted/40 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground block">
                    Calculated Operational Risk Index
                  </span>
                  <div className="text-3xl font-mono font-black text-foreground mt-1">
                    {result.score}{" "}
                    <span className="text-xs text-muted-foreground font-normal">/ 100 max risk</span>
                  </div>
                </div>

                <div className="text-right sm:max-w-xs text-xs text-muted-foreground">
                  <strong>Suggested Action:</strong> {result.suggestedService}
                </div>
              </div>

              {/* Plain-Language Findings */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Diagnostic Summary:
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {result.summary}
                </p>
              </div>

              {/* Recommended Focus Points */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">
                  Recommended Immediate Steps:
                </h4>
                <ul className="space-y-2">
                  {result.recommendations.map((rec) => (
                    <li key={rec} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-healthy shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handlePrefillContact}
                  className="w-full sm:flex-1 gap-2 font-semibold shadow-md bg-primary hover:bg-primary/95 text-white"
                >
                  <FileText className="h-4 w-4" />
                  <span>Discuss Findings With Specialists</span>
                </Button>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2 text-xs"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Retake Check
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

