import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"



export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Nanneer Consultancy | ETP & STP Performance Experts",
  description:
    "Practical, on-ground troubleshooting for industrial ETP and commercial STP systems across India. Resolve discharge limits, reduce OPEX, and stabilize performance.",
  keywords: [
    "ETP troubleshooting",
    "STP performance",
    "water treatment consultancy India",
    "effluent treatment plant optimization",
    "sewage treatment plant consulting",
    "BOD COD reduction",
    "industrial wastewater engineering",
  ],
  authors: [{ name: "Nanneer Consultancy" }],
  creator: "Nanneer Consultancy",
  metadataBase: new URL("https://consultancy.nanneer.com"),
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", type: "image/png" }
    ],
    apple: [
      { url: "/logo.png" }
    ],
    shortcut: ["/logo.png"]
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://consultancy.nanneer.com",
    siteName: "Nanneer Consultancy",
    title: "Nanneer Consultancy | ETP & STP Performance Experts",
    description:
      "Practical on-ground ETP & STP troubleshooting. Bringing industrial and commercial water treatment plants to their intended design performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nanneer Consultancy | ETP & STP Performance Experts",
    description:
      "Practical on-ground ETP & STP troubleshooting. Bringing water treatment systems to intended design performance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // ProfessionalService & Organization JSON-LD
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Nanneer Consultancy",
    legalName: "Nanneer Consultancy",
    description:
      "Specialist ETP and STP performance troubleshooting, process optimization, and compliance engineering for industrial and commercial facilities in India.",
    url: "https://consultancy.nanneer.com",
    telephone: "+91-9876543210",
    email: "consult@nanneer.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chennai",
      addressCountry: "IN",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Nanneer Global",
      url: "https://nanneer.com",
    },
    serviceArea: {
      "@type": "Country",
      name: "India",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans min-h-screen flex flex-col bg-white text-foreground overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1 overflow-x-hidden">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
