import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Mail, Phone, MapPin, Linkedin, ShieldCheck, MessageSquare } from "lucide-react"

export function Footer() {
  const currentYear = 2026

  return (
    <footer className="border-t border-border bg-white/95 backdrop-blur-md text-foreground pt-16 pb-12 transition-colors relative z-20">
      <div className="container-custom">
        {/* Top Section: Brand & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-border/80">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block py-1">
              <Image
                src="/logo.png"
                alt="Nanneer Consultancy"
                width={160}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              <strong className="text-foreground font-semibold">Nanneer Consultancy</strong> works with industries and commercial facilities to resolve real-world water treatment challenges—delivering forensic troubleshooting, OPEX rationalization, and certified operations manpower.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-primary/20 bg-primary/5 text-xs text-foreground/90 font-medium">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>
                  Engineering Advisory & Diagnostic Support for ETP & STP Facilities
                </span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Core Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  ETP Troubleshooting
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  STP Performance Tuning
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Trained Operations Staffing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Forensic Plant Water Audit
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  OPEX & Chemical Cuts
                </a>
              </li>
            </ul>
          </div>

          {/* Systems Handled */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Systems Handled</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Industrial ETP Skids
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Biological STP (MBBR/SBR/MBR)
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Clarifiers & Lamella Settlers
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Media & Carbon Filtration
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Sludge Dewatering Press
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Client Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Specialists */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Reach Specialists</h3>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span className="text-foreground/90">{process.env.NEXT_PUBLIC_OFFICE_CITY || "Chennai HQ & Pan-India Deployment"}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "consult@nanneer.com"}`}
                  className="hover:underline hover:text-foreground"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "consult@nanneer.com"}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE || "+919876543210"}`}
                  className="hover:underline hover:text-foreground"
                >
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91 98765 43210"}
                </a>
              </li>
              <li className="pt-2 flex flex-col gap-2">
                <a
                  href="https://wa.me/919876543210?text=Hello%20Nanneer%20Consultancy,%20we%20would%20like%20to%20consult%20on%20our%20plant."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Connect on LinkedIn</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Nanneer Consultancy. All rights reserved. Industrial Water & Wastewater Engineers.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-foreground transition-colors">
              Privacy Policy & Terms
            </Link>
            <a href="#contact" className="hover:text-foreground transition-colors">
              Schedule Plant Audit
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
