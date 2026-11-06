import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Legal Terms & Privacy Policy | Nanneer Consultancy",
  description: "Privacy policy, data protection, and service terms for Nanneer Consultancy clients.",
}

export default function LegalPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container-custom max-w-4xl space-y-12">
        <div className="space-y-4">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-primary text-xs font-mono uppercase tracking-wider font-semibold">
            <Shield className="h-4 w-4" />
            <span>Governance & Confidentiality</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Privacy Policy & Terms of Service
          </h1>
          <p className="text-xs text-muted-foreground">
            Effective Date: January 1, 2026 · Nanneer Consultancy (Sister brand of Nanneer Global)
          </p>
        </div>

        {/* Section 1: Privacy Policy */}
        <section className="space-y-4 rounded-2xl border border-border/80 bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            1. Privacy & Client Data Protection
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              At <strong>Nanneer Consultancy</strong>, we respect the confidentiality of industrial process data, plant capacities, laboratory test results, and operational documentation shared by our clients.
            </p>
            <h3 className="font-semibold text-foreground text-sm pt-2">Information We Collect:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact details provided via the audit request form (name, email, phone number, company name).</li>
              <li>Self-reported plant characteristics (ETP/STP type, operational symptoms, discharge challenges) submitted through our System Health Check tool.</li>
              <li>Technical parameters gathered during on-site or virtual audits (flow rates, lab reports, equipment ratings).</li>
            </ul>

            <h3 className="font-semibold text-foreground text-sm pt-2">How We Use Information:</h3>
            <p>
              Client information is used exclusively to evaluate treatment plant performance, prepare engineering diagnostic proposals, and coordinate field visits. We never sell, rent, or trade client operational data to third parties.
            </p>

            <h3 className="font-semibold text-foreground text-sm pt-2">Non-Disclosure Agreements (NDAs):</h3>
            <p>
              Prior to accessing sensitive manufacturing facilities or proprietary chemical effluent formulations, Nanneer Consultancy enters into standard bilateral Non-Disclosure Agreements with enterprise clients.
            </p>
          </div>
        </section>

        {/* Section 2: Terms of Service */}
        <section className="space-y-4 rounded-2xl border border-border/80 bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            2. Professional Advisory Terms
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
            <p>
              Nanneer Consultancy provides process troubleshooting, root-cause diagnostics, and optimization guidance. Our recommendations are formulated based on physical principles, on-ground measurements, and operational best practices.
            </p>

            <h3 className="font-semibold text-foreground text-sm pt-2">Engineering Scope & Responsibilities:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Independent Evaluation:</strong> Our audits provide independent technical evaluations of existing equipment, chemical dosages, and hydraulic loading.
              </li>
              <li>
                <strong>Client Execution:</strong> Unless explicitly engaged for turnkey stabilization under contract, the physical execution of maintenance changes, chemical handling, and equipment adjustments remains under the operational control of the facility&apos;s designated plant management or O&M team.
              </li>
              <li>
                <strong>Regulatory Compliance:</strong> While our process interventions aim to bring parameters within statutory consent thresholds, the statutory responsibility for regulatory filings and compliance submissions remains with the facility owner.
              </li>
            </ul>

            <h3 className="font-semibold text-foreground text-sm pt-2">Intellectual Property Notice:</h3>
            <p>
              All trademarks, site designs, methodologies, and engineering frameworks are the property of Nanneer Consultancy.
            </p>
          </div>
        </section>

        {/* Contact info */}
        <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 text-xs text-muted-foreground space-y-2">
          <h3 className="font-bold text-foreground">Inquiries Regarding Legal & Privacy</h3>
          <p>
            For legal inquiries or to execute a preliminary Non-Disclosure Agreement prior to sharing plant drawings, please contact:{" "}
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "consult@nanneer.com"}`}
              className="text-primary underline font-medium"
            >
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "consult@nanneer.com"}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

