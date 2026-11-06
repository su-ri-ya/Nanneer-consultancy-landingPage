export type PlantType = "ETP" | "STP" | "Combined / Not Sure"

export interface HealthCheckState {
  plantType: PlantType
  plantAge: string
  primarySymptom: string
  treatedWaterIssue: string
  costTrend: string
  downtimeFrequency: string
}

export interface HealthCheckResult {
  score: number // 0-100 (higher means higher risk / more urgent intervention required)
  riskLevel: "Low Risk (Optimizable)" | "Moderate Friction" | "Critical Risk (Action Required)"
  riskColor: string
  badgeVariant: "default" | "secondary" | "destructive"
  summary: string
  recommendations: string[]
  suggestedService: string
}

export interface ContactFormData {
  fullName: string
  company: string
  email: string
  phone: string
  plantType: PlantType
  issueDescription: string
  healthCheckScore?: number
  healthCheckSummary?: string
  honeypot?: string
}

