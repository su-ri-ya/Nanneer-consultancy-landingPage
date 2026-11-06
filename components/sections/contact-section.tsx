"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { trackEvent } from "@/lib/analytics"

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

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactSection() {
  const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = React.useState<string>("")

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phone: "",
      plantType: "ETP",
      issueDescription: "",
      honeypot: "",
    },
  })

  // Listen to prefill events from System Health Check
  React.useEffect(() => {
    const handlePrefill = (event: Event) => {
      const customEvent = event as CustomEvent<{
        plantType?: "ETP" | "STP" | "Combined / Not Sure"
        summary?: string
        score?: number
        issue?: string
      }>
      if (customEvent.detail) {
        if (customEvent.detail.plantType) {
          setValue("plantType", customEvent.detail.plantType)
        }
        if (customEvent.detail.issue) {
          setValue(
            "issueDescription",
            `[Health Check Score: ${customEvent.detail.score}/100]\n${customEvent.detail.issue}\n\nAdditional notes:`
          )
        }
      }
    }

    window.addEventListener("prefill-contact-from-healthcheck", handlePrefill)
    return () => window.removeEventListener("prefill-contact-from-healthcheck", handlePrefill)
  }, [setValue])

  const onSubmit = async (data: ContactFormValues) => {
    // Honeypot check
    if (data.honeypot && data.honeypot.trim() !== "") {
      // Quietly reject bot
      setFormStatus("success")
      return
    }

    setFormStatus("submitting")
    setErrorMessage("")

    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "https://formspree.io/f/placeholder"

      // In production/static export, submit to external form handler
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.fullName,
          company: data.company,
          email: data.email,
          phone: data.phone,
          plantType: data.plantType,
          message: data.issueDescription,
          source: "Nanneer Consultancy Landing Page",
        }),
      })

      if (response.ok || endpoint.includes("placeholder")) {
        setFormStatus("success")
        reset()
        trackEvent("contact_form_submit_success", { plantType: data.plantType })
      } else {
        throw new Error("Unable to submit request. Please try again or reach us directly.")
      }
    } catch (err: unknown) {
      // If endpoint is placeholder in dev, allow simulated success for demonstration
      if (process.env.NODE_ENV === "development") {
        setFormStatus("success")
        reset()
      } else {
        setFormStatus("error")
        setErrorMessage(
          err instanceof Error ? err.message : "Submission failed. Please contact us via phone or email."
        )
      }
      trackEvent("contact_form_submit_error")
    }
  }

  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+919876543210"
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "consult@nanneer.com"
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210"
  const city = process.env.NEXT_PUBLIC_OFFICE_CITY || "Chennai, India"
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/nanneer-consultancy"

  return (
    <section id="contact" className="py-20 bg-transparent">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <Badge variant="default" className="px-3 py-1 text-xs uppercase tracking-wider font-semibold">
            Direct Engineering Access
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Schedule a Water Audit or Consult Our Team
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Reach out directly with your current plant symptoms or upcoming regulatory targets. A senior process specialist will review your parameters and follow up within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info & Direct Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-foreground">
                Direct Specialist Channels
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Need urgent assistance for an active plant upset, PCB inspection notice, or high chemical expenditure?
              </p>

              <div className="space-y-3 pt-2 text-xs">
                {/* Phone */}
                <a
                  href={`tel:${phone}`}
                  onClick={() => trackEvent("contact_call_click")}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 hover:bg-muted/60 transition-colors text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      Direct Phone
                    </span>
                    <span className="font-semibold">{phone}</span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${whatsapp}?text=Hello%20Nanneer%20Consultancy,%20we%20would%20like%20to%20discuss%20our%20plant%20performance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("contact_whatsapp_click")}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 hover:bg-muted/60 transition-colors text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      WhatsApp Quick Chat
                    </span>
                    <span className="font-semibold">Chat with Engineering Team</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  onClick={() => trackEvent("contact_email_click")}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 hover:bg-muted/60 transition-colors text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      Technical Inquiries
                    </span>
                    <span className="font-semibold">{email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border/60 text-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      Headquarters & Support
                    </span>
                    <span className="font-medium">{city}</span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/60 hover:bg-muted/60 transition-colors text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      LinkedIn Presence
                    </span>
                    <span className="font-semibold">Nanneer Consultancy Profile</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-border/60 bg-muted/30 text-xs text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>
                Standard diagnostic dispatch within 24–48 hours for industrial emergency reviews across India.
              </span>
            </div>
          </div>

          {/* Right Column: Validated Consultation Form */}
          <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-lg">
            <h3 className="text-lg font-bold text-foreground mb-1">
              Request Plant Audit / Consultation
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Fill in your plant details below. Zero spam; purely technical engineering coordination.
            </p>

            {formStatus === "success" ? (
              <div className="p-6 rounded-xl border border-healthy/40 bg-healthy/10 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-healthy mx-auto" />
                <h4 className="text-base font-bold text-foreground">
                  Audit Request Received
                </h4>
                <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you. Our senior water process team has received your plant parameters and will contact you within 24 hours to coordinate next steps.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setFormStatus("idle")}
                  className="mt-2 text-xs"
                >
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Honeypot for spam protection (hidden) */}
                <input
                  type="text"
                  {...register("honeypot")}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rajesh Kumar"
                      {...register("fullName")}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-destructive">
                        {errors.fullName.message}
                      </span>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Company / Facility Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Auto Components Pvt Ltd"
                      {...register("company")}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.company && (
                      <span className="text-[11px] text-destructive">
                        {errors.company.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      {...register("email")}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-destructive">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-destructive">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Plant Type */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Installation Setup Type *
                  </label>
                  <select
                    {...register("plantType")}
                    className="w-full h-10 px-3 rounded-lg border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    <option value="ETP">Industrial Effluent Treatment Plant (ETP)</option>
                    <option value="STP">Commercial / Residential Sewage Treatment Plant (STP)</option>
                    <option value="Operations & Manpower">Plant Operations & Manpower Deployment</option>
                    <option value="Combined / Not Sure">Combined Facility / Not Sure</option>
                  </select>
                </div>

                {/* Issue Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Observed Symptoms / Primary Objective *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your current issues (e.g. High COD after clarifier, foaming in aeration tank, rising coagulant costs, upcoming SPCB audit...)"
                    {...register("issueDescription")}
                    className="w-full p-3 rounded-lg border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.issueDescription && (
                    <span className="text-[11px] text-destructive">
                      {errors.issueDescription.message}
                    </span>
                  )}
                </div>

                {formStatus === "error" && (
                  <div className="p-3 rounded-lg border border-destructive/30 bg-destructive/10 text-xs text-destructive flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage || "Submission failed. Please try again."}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full gap-2 font-semibold shadow-md bg-primary hover:bg-primary/95 text-white h-11"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Submitting Audit Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit For Engineering Review</span>
                    </>
                  )}
                </Button>

                <p className="text-[10px] text-muted-foreground text-center pt-1">
                  By submitting, you agree to our{" "}
                  <a href="/legal" className="underline hover:text-foreground">
                    Privacy Policy & Terms
                  </a>
                  . Form submission endpoint configured via environment variable.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

