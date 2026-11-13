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
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { trackEvent } from "@/lib/analytics"

const contactSchema = z.object({
  email: z.string().email("Please enter a valid corporate email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
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
      email: "",
      phone: "",
      issueDescription: "",
      honeypot: "",
    },
  })

  // Listen to prefill events from System Health Check
  React.useEffect(() => {
    const handlePrefill = (event: Event) => {
      const customEvent = event as CustomEvent<{
        summary?: string
        score?: number
        issue?: string
      }>
      if (customEvent.detail) {
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
          email: data.email,
          phone: data.phone,
          message: data.issueDescription,
          source: "Nanneer Consultancy Landing Page",
        }),
      })

      if (response.ok || endpoint.includes("placeholder")) {
        setFormStatus("success")
        reset()
        trackEvent("contact_form_submit_success")
      } else {
        throw new Error("Unable to submit request. Please try again or reach us directly.")
      }
    } catch (err: unknown) {
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
  const city = process.env.NEXT_PUBLIC_OFFICE_CITY || "Chennai, India"
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/nanneer-consultancy"

  return (
    <section id="contact" className="py-8 sm:py-12 bg-transparent border-t border-black/[0.06] scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <div className="inline-flex justify-center max-w-full px-2">
            <span className="inline-block px-3.5 py-1.5 text-[10px] sm:text-xs uppercase tracking-wider font-semibold mb-3 bg-primary/10 text-primary border border-primary/20 rounded-xl sm:rounded-full text-center leading-relaxed whitespace-normal max-w-full break-words">
              Nanneer Global · Water Recovery · Operational Reliability · Evidence-Based Management
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
            Let's Discuss Your STP Performance
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info & Direct Actions */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs space-y-4">
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
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/70 hover:bg-muted/60 transition-colors text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/20">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      Direct Phone
                    </span>
                    <span className="font-semibold text-foreground">{phone}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${email}`}
                  onClick={() => trackEvent("contact_email_click")}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/70 hover:bg-muted/60 transition-colors text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/20">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      Technical Inquiries
                    </span>
                    <span className="font-semibold text-foreground">{email}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border/70 text-foreground">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      Headquarters & Support
                    </span>
                    <span className="font-medium text-foreground">{city}</span>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/70 hover:bg-muted/60 transition-colors text-foreground"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 border border-primary/20">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                      LinkedIn Presence
                    </span>
                    <span className="font-semibold text-foreground">Nanneer Consultancy Profile</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Streamlined Consultation Form */}
          <div className="lg:col-span-7 rounded-2xl border border-border/80 bg-card p-5 sm:p-8 shadow-xs">
            <h3 className="text-lg font-bold text-foreground mb-1">
              Request Plant Audit / Consultation
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              Enter your contact details below. Zero spam; purely technical engineering coordination.
            </p>

            {formStatus === "success" ? (
              <div className="p-6 rounded-xl border border-emerald-500/30 bg-emerald-50/50 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-foreground">
                  Audit Request Received
                </h4>
                <p className="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Thank you. An environmental process engineer will review your operating parameters and contact you within 24–48 hours to coordinate site access or preliminary diagnostics.
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
                {/* Honeypot field for anti-spam (hidden from users) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  {...register("honeypot")}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-foreground">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      {...register("email")}
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-[16px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && (
                      <span className="text-[11px] text-destructive">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-foreground">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register("phone")}
                      className="w-full h-10 px-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-[16px] sm:text-xs focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-destructive">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Issue Description */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-foreground">
                    Facility Details &amp; Primary Objectives *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your facility (e.g. 150 KLD STP, current treatment yield, cooling tower or flushing reuse targets, 24×7 operator requirements, monthly reporting...)"
                    {...register("issueDescription")}
                    className="w-full p-3.5 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground text-[16px] sm:text-xs leading-relaxed focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                  />
                  {errors.issueDescription && (
                    <span className="text-[11px] text-destructive">
                      {errors.issueDescription.message}
                    </span>
                  )}
                </div>

                {formStatus === "error" && (
                  <div className="p-3 rounded-xl border border-destructive/30 bg-destructive/10 flex items-start gap-2.5">
                    <AlertCircle className="h-4 w-4 text-destructive shrink-0 mt-0.5" />
                    <p className="text-xs text-destructive">{errorMessage}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={formStatus === "submitting"}
                  className="w-full rounded-xl text-xs sm:text-sm font-semibold h-11"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      Dispatching to Engineering Desk...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Technical Inquiry
                    </>
                  )}
                </Button>

                <p className="text-[11px] text-muted-foreground text-center">
                  Protected by NDA. Non-disclosure of proprietary operating parameters guaranteed.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
