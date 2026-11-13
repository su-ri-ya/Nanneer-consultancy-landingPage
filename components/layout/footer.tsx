"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = 2026

  return (
    <footer className="border-t border-black/[0.06] bg-white/85 backdrop-blur-md text-foreground pt-10 pb-8 transition-colors relative z-20">
      <div className="container mx-auto px-4">
        {/* Top Section: Navigation Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 pb-8 border-b border-black/[0.06]">
          {/* Core Capabilities */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">STP O&amp;M Service</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#challenges" className="hover:text-primary transition-colors">
                  Facility Challenges &amp; Accountability
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-primary transition-colors">
                  Monitoring &amp; Methodology
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Water Recovery Solutions
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-primary transition-colors">
                  Operational Targets (≥99%)
                </a>
              </li>
              <li>
                <a href="#why-nanneer" className="hover:text-primary transition-colors">
                  Monthly Reports &amp; Evidence
                </a>
              </li>
            </ul>
          </div>

          {/* Water Recovery & Destinations */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Water Recovery</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Cooling Tower Makeup (40%)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Toilet Flushing Reuse (40%)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Gardening &amp; Landscaping (20%)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Daily Water Balance
                </a>
              </li>
              <li>
                <a href="#engine" className="hover:text-primary transition-colors">
                  Digital Shift Tracking
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  Operations FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Specialists */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-primary">Contact Specialists</h3>
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
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Logo & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link href="/" className="inline-block py-0.5">
              <Image
                src="/logo.png"
                alt="Nanneer Global"
                width={140}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
              />
            </Link>
            <span className="text-muted-foreground/40 hidden sm:inline">|</span>
            <p>© {currentYear} Nanneer Global. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/legal" className="hover:text-foreground transition-colors">
              Legal &amp; Privacy
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
