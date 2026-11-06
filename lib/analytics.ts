/**
 * Privacy-friendly event tracking utility supporting Plausible Analytics and Google Analytics (GA4).
 */
export function trackEvent(eventName: string, props?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return

  // Plausible Analytics
  const plausible = (window as unknown as { plausible?: (event: string, options?: { props: Record<string, unknown> }) => void }).plausible
  if (typeof plausible === "function") {
    plausible(eventName, props ? { props } : undefined)
  }

  // Google Analytics 4
  const gtag = (window as unknown as { gtag?: (type: string, action: string, params?: Record<string, unknown>) => void }).gtag
  if (typeof gtag === "function") {
    gtag("event", eventName, props)
  }

  if (process.env.NODE_ENV === "development") {
    // eslint-disable-next-line no-console
    console.log(`[Analytics] ${eventName}`, props)
  }
}

