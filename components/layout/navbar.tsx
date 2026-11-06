"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Droplets,
  Menu,
  X,
  PhoneCall,
  Activity,
  ChevronDown,
  ChevronRight,
  Waves,
  Factory,
  ArrowRight,
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"
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
  const [mounted, setMounted] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const [productsOpen, setProductsOpen] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

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
            className="inline-flex gap-1.5 sm:gap-2 font-semibold shadow-md shadow-primary/25 hover:shadow-primary/40 bg-primary hover:bg-primary/95 text-white h-9 text-xs sm:text-sm px-2.5 sm:px-4"
            onClick={() => trackEvent("navbar_cta_click", { label: "Schedule Plant Audit" })}
          >
            <a href="#contact">
              <PhoneCall className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Schedule Plant Audit</span>
              <span className="sm:hidden">Book Audit</span>
            </a>
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden h-9 w-9 border-border bg-white text-foreground hover:bg-slate-50"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Slide-over Drawer (Sheet) rendered via Portal to escape header containing block */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-[999] lg:hidden">
                {/* Full-screen Dark Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[999]"
                  aria-hidden="true"
                />

                {/* 100% Solid Opaque Slide-in Panel from Right */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 280 }}
                  style={{ backgroundColor: "#ffffff" }}
                  className="fixed inset-y-0 right-0 w-[85vw] max-w-sm h-full bg-white text-foreground shadow-2xl border-l border-border flex flex-col justify-between z-[1000] overflow-hidden"
                >
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between p-4 border-b border-border/70 bg-white">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo.png"
                        alt="Nanneer Consultancy"
                        width={130}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
                      aria-label="Close mobile navigation menu"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Drawer Navigation Links */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-1 bg-white">
                    <a
                      href="#services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      <span>Services & Advisory</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>

                    {/* Collapsible Products & Systems Accordion */}
                    <div className="rounded-xl border border-border/70 overflow-hidden bg-slate-50/60 my-2">
                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-foreground hover:bg-slate-100 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <Waves className="h-4 w-4 text-cyan-600" />
                          <span>Products & Systems</span>
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180 text-primary" : ""
                          }`}
                        />
                      </button>

                      {mobileProductsOpen && (
                        <div className="p-3 pt-1 space-y-3 bg-white border-t border-border/60">
                          {/* Water Treatment */}
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-cyan-800 uppercase tracking-wider block">
                              Water Treatment
                            </span>
                            {productCategories.waterTreatment.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs text-muted-foreground hover:text-primary py-1 pl-2 border-l border-cyan-400"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>

                          {/* Wastewater Treatment */}
                          <div className="space-y-1 pt-1 border-t border-border/50">
                            <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                              Wastewater Treatment
                            </span>
                            {productCategories.wastewaterTreatment.map((item, idx) => (
                              <a
                                key={idx}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs text-muted-foreground hover:text-primary py-1 pl-2 border-l border-emerald-400"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <a
                      href="#case-studies"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      <span>Case Studies</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>

                    <a
                      href="#outcomes"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      <span>Verified Outcomes</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>

                    <a
                      href="#about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      <span>About Nanneer</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>

                    <a
                      href="#faq"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      <span>FAQ</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      <span>Contact & Plant Audit</span>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </div>

                  {/* Drawer Footer Actions */}
                  <div className="p-4 border-t border-border/70 space-y-2.5 bg-slate-50">
                    <Button
                      asChild
                      className="w-full gap-2 font-semibold bg-primary hover:bg-primary/95 text-white h-10 shadow-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a href="#contact">
                        <PhoneCall className="h-4 w-4" />
                        <span>Schedule Plant Audit</span>
                      </a>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="w-full gap-2 border-emerald-500/50 text-emerald-700 hover:bg-emerald-50 h-10 font-semibold bg-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <a
                        href="https://wa.me/919876543210?text=Hello%20Nanneer%20Consultancy,%20we%20would%20like%20to%20consult%20on%20our%20plant."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageSquare className="h-4 w-4 text-emerald-600" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </Button>

                    <div className="pt-2 text-center">
                      <span className="text-[11px] text-muted-foreground">
                        Pan-India Diagnostic & Manpower Support
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  )
}

