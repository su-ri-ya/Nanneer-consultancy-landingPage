import type { HealthCheckResult, HealthCheckState } from "./types"

export function evaluateHealthCheck(answers: Partial<HealthCheckState>): HealthCheckResult {
  let score = 20

  // Primary symptom weights
  if (answers.primarySymptom === "Inconsistent COD/BOD/TSS discharge") {
    score += 25
  } else if (answers.primarySymptom === "Foaming, sludge rising or biological upset") {
    score += 25
  } else if (answers.primarySymptom === "High chemical or energy consumption") {
    score += 15
  } else if (answers.primarySymptom === "Frequent membrane/filter fouling") {
    score += 20
  }

  // Treated water issues
  if (answers.treatedWaterIssue === "Fails PCB / pollution board statutory norms") {
    score += 30
  } else if (answers.treatedWaterIssue === "Unusable for reuse / cooling tower") {
    score += 20
  } else if (answers.treatedWaterIssue === "High turbidity or residual odor") {
    score += 15
  }

  // Cost trends
  if (answers.costTrend === "Chemical & sludge hauling costs spiking >25%") {
    score += 15
  } else if (answers.costTrend === "Unpredictable monthly operational bills") {
    score += 10
  }

  // Plant age & downtime
  if (answers.downtimeFrequency === "Weekly or continuous firefighting") {
    score += 15
  } else if (answers.downtimeFrequency === "Monthly unexpected disruptions") {
    score += 10
  }

  // Clamp score
  const finalScore = Math.min(Math.max(score, 15), 98)

  if (finalScore >= 70) {
    return {
      score: finalScore,
      riskLevel: "Critical Risk (Action Required)",
      riskColor: "text-red-500 dark:text-red-400",
      badgeVariant: "destructive",
      summary: "Your treatment facility exhibits active failure points across process stability or compliance limits. Continuing reactive maintenance risks regulatory action and compounding operational loss.",
      recommendations: [
        "Immediate on-ground root-cause audit of biological aeration & chemical dosing ratios",
        "Verification of hydraulic equalisation and peak load shock handling",
        "Stabilisation protocol before investing in expensive new equipment or membranes"
      ],
      suggestedService: "ETP/STP Performance Troubleshooting & Root-Cause Audit"
    }
  }

  if (finalScore >= 45) {
    return {
      score: finalScore,
      riskLevel: "Moderate Friction",
      riskColor: "text-amber-500 dark:text-amber-400",
      badgeVariant: "secondary",
      summary: "Your system runs, but suffers from sub-optimal efficiency, creeping consumable costs, or intermittent performance dips during load swings.",
      recommendations: [
        "Chemical dosage optimization to trim excess coagulant/polymer spend",
        "Aeration basin dissolved oxygen (DO) tuning and return sludge (RAS) calibration",
        "Pre-treatment clarifier settling and hydraulic retention check"
      ],
      suggestedService: "Operational Efficiency & Cost Reduction Audit"
    }
  }

  return {
    score: finalScore,
    riskLevel: "Low Risk (Optimizable)",
    riskColor: "text-emerald-500 dark:text-emerald-400",
    badgeVariant: "default",
    summary: "Your plant maintains baseline function, but holds tangible opportunities for water recovery enhancement and operational energy savings.",
    recommendations: [
      "Fine-tune blower run schedules and pump duty cycles for power efficiency",
      "Evaluate treated water polishing for non-potable on-site reuse",
      "Establish preventive operating windows for seasonal load variations"
    ],
    suggestedService: "Water Reuse & Performance Tuning"
  }
}
