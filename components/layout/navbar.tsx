"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import {
  Menu,
  X,
  PhoneCall,
  ChevronRight,
  ShieldCheck,
  Droplets,
  Repeat,
  Activity,
  FileText,
  HelpCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const NAV_LINKS = [
  { href: "#challenges", label: "Challenges", sectionId: "challenges" },
  { href: "#engine", label: "Methodology", sectionId: "engine" },
  { href: "#services", label: "Water Recovery", sectionId: "services" },
  { href: "#impact", label: "Targets", sectionId: "impact" },
  { href: "#why-nanneer", label: "Monthly Reports", sectionId: "why-nanneer" },
  { href: "#faq", label: "FAQ", sectionId: "faq" }
]

export function Navbar() {
  const [mounted, setMounted] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

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

      const sections = ["challenges", "engine", "services", "impact", "why-nanneer", "contact", "faq"]
      const current = sections.find((section) => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 140 && rect.bottom >= 140
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/[0.06] bg-white/95 backdrop-blur-md shadow-xs text-foreground"
          : "bg-white/90 backdrop-blur-md text-foreground border-b border-black/[0.04]"
      }`}
    >
      <div className="container-custom flex h-16 sm:h-[4.5rem] items-center justify-between gap-2.5 sm:gap-4 px-3 sm:px-6">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl py-1 px-0.5 sm:px-1 transition-transform"
        >
          <Image
            src="/logo.png"
            alt="Nanneer Global"
            width={160}
            height={50}
            priority
            className="h-8 sm:h-10 w-auto object-contain transition-transform group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs xl:text-sm font-medium px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* Primary CTA */}
          <Button
            asChild
            variant="default"
            size="sm"
            className="inline-flex gap-1.5 sm:gap-2 font-medium shadow-xs bg-primary hover:bg-primary/90 text-white h-9 text-xs sm:text-sm px-2.5 sm:px-4 rounded-xl transition-all glow-cyan"
            onClick={() => trackEvent("navbar_cta_click", { label: "Request STP Assessment" })}
          >
            <a href="#contact">
              <PhoneCall className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Request Assessment</span>
              <span className="sm:hidden">Assess STP</span>
            </a>
          </Button>

          {/* Mobile Hamburger Toggle Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden h-9 w-9 border-black/10 bg-white text-foreground hover:bg-slate-100 rounded-xl"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Slide-over Drawer (Sheet) rendered via Portal */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div className="fixed inset-0 z-[999] lg:hidden">
                {/* Full-screen Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs"
                />

                {/* Drawer Container */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 28, stiffness: 300 }}
                  className="fixed right-0 top-0 bottom-0 w-[84vw] max-w-sm bg-white border-l border-black/[0.08] shadow-2xl flex flex-col z-10"
                >
                  {/* Drawer Header */}
                  <div className="flex items-center justify-between p-4 border-b border-black/[0.06] bg-slate-50/50">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/logo.png"
                        alt="Nanneer Global"
                        width={130}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="h-8 w-8 rounded-full border border-black/10 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-slate-100 transition-colors"
                      aria-label="Close mobile navigation menu"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Drawer Navigation Links */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-1 bg-white">
                    {NAV_LINKS.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-foreground hover:bg-slate-100 transition-colors"
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </a>
                    ))}

                    <div className="pt-2">
                      <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-primary bg-primary/10 hover:bg-primary/15 transition-colors"
                      >
                        <span>Request STP Assessment</span>
                        <ChevronRight className="h-4 w-4 text-primary" />
                      </a>
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
