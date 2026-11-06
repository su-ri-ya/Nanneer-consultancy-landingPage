import { test } from "node:test"
import assert from "node:assert"
import * as z from "zod"

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  company: z.string().min(2, "Company / Plant name is required"),
  email: z.string().email("Please enter a valid corporate email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  plantType: z.enum(["ETP", "STP", "Operations & Manpower", "Combined / Not Sure"]),
  issueDescription: z
    .string()
    .min(10, "Please describe the symptoms or goals (minimum 10 characters)"),
  honeypot: z.string().optional(),
})

test("contactSchema validates correct form submission", () => {
  const result = contactSchema.safeParse({
    fullName: "Arun Krishnan",
    company: "Sundaram Fasteners Ltd",
    email: "arun.k@sundaram.com",
    phone: "+919876543210",
    plantType: "ETP",
    issueDescription: "Our clarifier weir has pin-point floc carryover during evening shift batch changes.",
    honeypot: ""
  })

  assert.strictEqual(result.success, true)
})

test("contactSchema catches invalid email and short issue description", () => {
  const result = contactSchema.safeParse({
    fullName: "A",
    company: "",
    email: "not-an-email",
    phone: "123",
    plantType: "ETP",
    issueDescription: "short",
    honeypot: ""
  })

  assert.strictEqual(result.success, false)
  if (!result.success) {
    const fieldErrors = result.error.flatten().fieldErrors
    assert.ok(fieldErrors.fullName)
    assert.ok(fieldErrors.company)
    assert.ok(fieldErrors.email)
    assert.ok(fieldErrors.issueDescription)
  }
})

