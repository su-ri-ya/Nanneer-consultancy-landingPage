import Link from "next/link"
import { CheckCircle2, ArrowLeft, Phone, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Request Received | Nanneer Consultancy",
  description: "Thank you for reaching out to Nanneer Consultancy.",
}

export default function ThankYouPage() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-custom max-w-xl text-center space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-healthy/15 text-healthy mx-auto shadow-md">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
          Audit Request Received
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          Thank you for trusting Nanneer Consultancy. A senior ETP/STP process specialist has been notified of your plant details and will reach out within 24 hours to review your requirements.
        </p>

        <div className="rounded-2xl border border-border/80 bg-card p-6 text-left space-y-3 text-xs text-muted-foreground">
          <h2 className="font-bold text-foreground text-sm">
            What to prepare for our initial technical call:
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">1.</span>
              <span>Recent raw and treated water laboratory test reports (COD, BOD, TSS, pH).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">2.</span>
              <span>Plant design capacity (KLD / MLD) vs. average daily flow received.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">3.</span>
              <span>Current chemical consumption figures (coagulants, polymers, neutralizing agents).</span>
            </li>
          </ul>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild className="w-full sm:w-auto font-semibold gap-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              <span>Return to Homepage</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full sm:w-auto font-medium gap-2">
            <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || "+919876543210"}`}>
              <Phone className="h-4 w-4" />
              <span>Call Us Directly</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

