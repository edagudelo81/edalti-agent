// Instrumentación de eventos GA4 sobre la integración gtag existente
// (index.html, ID G-HH6HM9DZFB). trackEvent envía un evento estándar;
// trackOnce garantiza un solo disparo por sesión de página (útil para scroll).

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackPageView = (path: string) => {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

export type EventName =
  | "demo_whatsapp_click"
  | "calcom_click"
  | "scroll_demo_view"
  | "scroll_pricing_view";

export function trackEvent(name: EventName, params?: Record<string, unknown>): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", name, params ?? {});
  }
}

// Se resetea con cada recarga completa de la página (estado a nivel de módulo),
// por lo que los eventos de scroll no se repiten aunque el componente se re-monte.
const firedOnce = new Set<EventName>();

export function trackOnce(name: EventName, params?: Record<string, unknown>): void {
  if (firedOnce.has(name)) return;
  firedOnce.add(name);
  trackEvent(name, params);
}
