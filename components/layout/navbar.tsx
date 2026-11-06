"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Droplets,
  Menu,
  PhoneCall,
  Activity,
  ChevronDown,
  Waves,
  Factory,
  ArrowRight,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { trackEvent } from "@/lib/analytics"

export const productCategories = {
  waterTreatment: [
    { name: "Pressure Sand & Dual Media Filters", href: "#products", desc: "Turbidity & suspended solids removal" },
    { name: "Activated Carbon Filters (ACF)", href: "#products", desc: "Color, odor & organic compound adsorption" },
    { name: "Industrial Water Softeners", href: "#products", desc: "Total hardness & boiler scale mitigation" },
    { name: "Reverse Osmosis (RO) & Demineralization", href: "#products", desc: "High purity process & utility water" },
    { name: "Ultrafiltration & UV / Ozonation", href: "#products", desc: "Microbial sterilization & virus barrier" }
  ],
  wastewaterTreatment: [
    { name: "Industrial Effluent Treatment (ETP)", href: "#products", desc: "Heavy COD/BOD & chemical load reduction" },
    { name: "Sewage Treatment Plants (STP)", href: "#products", desc: "ASP, MBBR, SBR & MBR biological recovery" },
    { name: "Clarifiers & Lamella Settlers", href: "#products", desc: "High-rate floc settling & zero carryover" },
    { name: "Sludge Dewatering & Filter Press", href: "#products", desc: "Plate & membrane high cake solids output" },
    { name: "Water Recycling & ZLD Systems", href: "#products", desc: "Tertiary polishing for non-potable reuse" }
  ]
}

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const [productsOpen, setProductsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ["services", "products", "case-studies", "about", "contact"]
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 140 && rect.bottom >= 140
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white/95 backdrop-blur-md shadow-xs"
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <div className="container-custom flex h-18 items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg py-1"
        >
          <Image
            src="/logo.png"
            alt="Nanneer Consultancy"
            width={160}
            height={50}
            priority
            className="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <a
            href="#services"
            className={`text-xs xl:text-sm font-medium px-2.5 py-1.5 rounded-lg transition-colors ${
              activeSection === "services"
                ? "text-primary font-semibold bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            Services
          </a>

          {/* Products & Systems Dropdown (Grundfos Reference) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className={`flex items-center gap-1.5 text-xs xl:text-sm font-medium px-2.5 py-1.5 rounded-lg transition-colors focus:outline-none ${
                activeSection === "products" || productsOpen
                  ? "text-primary font-semibold bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
              aria-expanded={productsOpen}
            >
              <span>Products & Systems</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180 text-primary" : "text-muted-foreground"
                }`}
              />
            </button>

            {/* Mega Dropdown Panel - Responsive width */}
            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[92vw] max-w-[660px] rounded-2xl border border-border bg-white p-5 shadow-xl transition-all duration-200 z-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  {/* Column 1: Water Treatment */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-border/70">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                        <Waves className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-900">
                          Water Treatment
                        </h4>
                        <span className="text-[10px] text-muted-foreground">Raw, Process & Utility Systems</span>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {productCategories.waterTreatment.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={item.href}
                            onClick={() => setProductsOpen(false)}
                            className="block p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                              {item.name}
                              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                            </span>
                            <span className="text-[11px] text-muted-foreground block line-clamp-1">
                              {item.desc}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Wastewater Treatment */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 pb-2 border-b border-border/70">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                        <Factory className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                          Wastewater Treatment
                        </h4>
                        <span className="text-[10px] text-muted-foreground">ETP, STP, Sludge & Recycling</span>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {productCategories.wastewaterTreatment.map((item, idx) => (
                        <li key={idx}>
                          <a
                            href={item.href}
                            onClick={() => setProductsOpen(false)}
                            className="block p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                          >
                            <span className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                              {item.name}
                              <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                            </span>
                            <span className="text-[11px] text-muted-foreground block line-clamp-1">
                              {item.desc}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Dropdown Bottom Banner */}
                <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between bg-slate-50/80 -mx-5 -mb-5 px-5 py-3 rounded-b-2xl">
                  <span className="text-[11px] text-muted-foreground">
                    Looking for custom system design or capacity expansion?
                  </span>
                  <a
                    href="#contact"
                    onClick={() => setProductsOpen(false)}
                    className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Consult Our Engineers</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="#case-studies"
            className={`text-xs xl:text-sm font-medium px-2.5 py-1.5 rounded-lg transition-colors ${
              activeSection === "case-studies"
                ? "text-primary font-semibold bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            Case Studies
          </a>

          <a
            href="#about"
            className={`text-xs xl:text-sm font-medium px-2.5 py-1.5 rounded-lg transition-colors ${
              activeSection === "about"
                ? "text-primary font-semibold bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            About Us
          </a>

          <a
            href="#contact"
            className={`text-xs xl:text-sm font-medium px-2.5 py-1.5 rounded-lg transition-colors ${
              activeSection === "contact"
                ? "text-primary font-semibold bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* WhatsApp Direct Chat */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="hidden sm:inline-flex gap-1.5 font-medium border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 h-9"
          >
            <a
              href="https://wa.me/919876543210?text=Hello%20Nanneer%20Consultancy,%20we%20would%20like%20to%20consult%20on%20our%20plant."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
              <span>Chat with Us</span>
            </a>
          </Button>

          {/* Primary CTA */}
          <Button
            asChild
            variant="default"
            size="sm"
            className="inline-flex gap-2 font-semibold shadow-md shadow-primary/25 hover:shadow-primary/40 bg-primary hover:bg-primary/95 text-white h-9 text-xs sm:text-sm px-3 sm:px-4"
            onClick={() => trackEvent("navbar_cta_click", { label: "Schedule Plant Audit" })}
          >
            <a href="#contact">
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Schedule Plant Audit</span>
            </a>
          </Button>

          {/* Mobile Menu (Radix Dialog) */}
          <div className="lg:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-9 w-9 border-border"
                  aria-label="Open mobile navigation menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xs sm:max-w-sm rounded-2xl max-h-[85vh] overflow-y-auto">
                <DialogHeader className="border-b border-border/60 pb-3">
                  <DialogTitle className="flex items-center gap-2 text-left">
                    <Droplets className="h-5 w-5 text-primary" />
                    <span>Nanneer Consultancy</span>
                  </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col gap-1 py-3">
                  <DialogClose asChild>
                    <a
                      href="#services"
                      className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                    >
                      Services
                    </a>
                  </DialogClose>

                  {/* Mobile Products Subsections */}
                  <div className="py-2 px-3 space-y-2 border-y border-border/50 my-1 bg-slate-50/70 rounded-lg">
                    <span className="text-xs font-bold text-foreground block">
                      Products & Systems
                    </span>
                    
                    <div className="space-y-1 pl-2 border-l-2 border-cyan-500">
                      <span className="text-[11px] font-semibold text-cyan-800 uppercase tracking-wide block">
                        Water Treatment
                      </span>
                      {productCategories.waterTreatment.map((item, idx) => (
                        <DialogClose asChild key={idx}>
                          <a
                            href={item.href}
                            className="block text-xs text-muted-foreground hover:text-foreground py-0.5"
                          >
                            • {item.name}
                          </a>
                        </DialogClose>
                      ))}
                    </div>

                    <div className="space-y-1 pl-2 border-l-2 border-emerald-500 pt-2">
                      <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide block">
                        Wastewater Treatment
                      </span>
                      {productCategories.wastewaterTreatment.map((item, idx) => (
                        <DialogClose asChild key={idx}>
                          <a
                            href={item.href}
                            className="block text-xs text-muted-foreground hover:text-foreground py-0.5"
                          >
                            • {item.name}
                          </a>
                        </DialogClose>
                      ))}
                    </div>
                  </div>

                  <DialogClose asChild>
                    <a
                      href="#case-studies"
                      className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                    >
                      Case Studies
                    </a>
                  </DialogClose>
                  <DialogClose asChild>
                    <a
                      href="#about"
                      className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                    >
                      About Us
                    </a>
                  </DialogClose>
                  <DialogClose asChild>
                    <a
                      href="#contact"
                      className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                    >
                      Contact
                    </a>
                  </DialogClose>
                </div>

                <div className="border-t border-border/60 pt-3 flex flex-col gap-2.5">
                  <DialogClose asChild>
                    <Button asChild className="w-full gap-2">
                      <a href="#contact">
                        <PhoneCall className="h-4 w-4" />
                        Schedule a Water Audit
                      </a>
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button asChild variant="outline" className="w-full gap-2">
                      <a href="#health-check">
                        <Activity className="h-4 w-4 text-aqua" />
                        Run Plant Health Check
                      </a>
                    </Button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  )
}

