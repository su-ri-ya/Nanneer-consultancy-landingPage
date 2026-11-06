import { test } from "node:test"
import assert from "node:assert"
import { evaluateHealthCheck } from "../lib/health-check.ts"

test("evaluateHealthCheck returns Critical Risk when failing PCB norms and severe upsets occur", () => {
  const result = evaluateHealthCheck({
    plantType: "ETP",
    plantAge: "3-7 years",
    primarySymptom: "Inconsistent COD/BOD/TSS discharge",
    treatedWaterIssue: "Fails PCB / pollution board statutory norms",
    costTrend: "Chemical & sludge hauling costs spiking >25%",
    downtimeFrequency: "Weekly or continuous firefighting"
  })

  assert.strictEqual(result.riskLevel, "Critical Risk (Action Required)")
  assert.ok(result.score >= 70)
  assert.strictEqual(result.badgeVariant, "destructive")
})

test("evaluateHealthCheck returns Low Risk for baseline plants with minimal disruptions", () => {
  const result = evaluateHealthCheck({
    plantType: "STP",
    plantAge: "1-3 years",
    primarySymptom: "Minor operational questions",
    treatedWaterIssue: "Meets discharge norms but want reuse optimization",
    costTrend: "Stable costs",
    downtimeFrequency: "Rarely / once a year"
  })

  assert.strictEqual(result.riskLevel, "Low Risk (Optimizable)")
  assert.ok(result.score < 45)
})
