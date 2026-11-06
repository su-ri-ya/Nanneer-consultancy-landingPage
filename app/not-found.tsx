import Link from "next/link"
import { Droplet, ArrowLeft, Home, Compass } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="py-24 md:py-32">
      <div className="container-custom max-w-lg text-center space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mx-auto shadow-sm">
          <Droplet className="h-8 w-8" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
            Error 404 · Channel Off-Route
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            The page you are looking for has been moved, re-routed, or does not exist in our system. Let&apos;s get you back to the treatment streamline.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button asChild className="gap-2 font-semibold">
            <Link href="/">
              <Home className="h-4 w-4" />
              <span>Back to Homepage</span>
            </Link>
          </Button>

          <Button asChild variant="outline" className="gap-2">
            <Link href="/#services">
              <Compass className="h-4 w-4" />
              <span>Explore Services</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

