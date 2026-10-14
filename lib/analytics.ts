// Estadisticas (Umami, panel privado) y etiquetas de anuncios (Google y Meta).
// Un ID vacio = esa herramienta no se carga. No son secretos: van en el HTML de todas formas.

export const UMAMI_SRC = "https://panel.compumacperu.com/script.js"
export const UMAMI_WEBSITE_ID = "03d41ee6-ca61-48fa-b5fd-df91f25bd660"
export const GA_ID = "G-W2ZJC9P5N2" // Google Analytics 4
export const META_PIXEL_ID = "" // Pixel de Meta, solo numeros

// Solo se mide en la web publicada, no en desarrollo.
export const TRACKED_HOSTS = ["compumacperu.com", "www.compumacperu.com"]

type Props = Record<string, string | number>

declare global {
  interface Window {
    umami?: { track: (event: string, data?: Props) => void }
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

// Eventos de Meta que Facebook Ads entiende como contacto o cliente potencial.
const META_STANDARD: Record<string, string> = { whatsapp: "Contact", llamar: "Contact", cotizacion: "Lead" }

export function track(event: string, props: Props = {}) {
  window.umami?.track(event, props)
  window.gtag?.("event", event, props)
  const standard = META_STANDARD[event]
  if (standard) window.fbq?.("track", standard, props)
  else window.fbq?.("trackCustom", event, props)
}
