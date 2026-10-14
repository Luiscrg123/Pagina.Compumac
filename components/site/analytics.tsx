"use client"

import { useEffect } from "react"
import { GA_ID, GOOGLE_ADS_ID, META_PIXEL_ID, TRACKED_HOSTS, UMAMI_SRC, UMAMI_WEBSITE_ID, track } from "@/lib/analytics"

function addScript(src: string, attrs: Record<string, string> = {}) {
  const s = document.createElement("script")
  s.src = src
  s.async = true
  for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v)
  document.head.appendChild(s)
}

function loadUmami() {
  addScript(UMAMI_SRC, { "data-website-id": UMAMI_WEBSITE_ID, "data-domains": TRACKED_HOSTS.join(",") })
}

// Un solo gtag.js sirve para Analytics y para Google Ads.
function loadGoogle() {
  window.dataLayer = window.dataLayer || []
  // gtag necesita el objeto `arguments`, no un array.
  window.gtag = function () {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments)
  }
  window.gtag("js", new Date())
  if (GA_ID) window.gtag("config", GA_ID)
  if (GOOGLE_ADS_ID) window.gtag("config", GOOGLE_ADS_ID)
  addScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID || GOOGLE_ADS_ID}`)
}

function loadMeta() {
  // Cola de llamadas hasta que cargue fbevents.js (equivale al snippet oficial).
  type Fbq = ((...args: unknown[]) => void) & { callMethod?: (...a: unknown[]) => void; queue: unknown[][]; push: Fbq; loaded: boolean; version: string }
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) fbq.callMethod(...args)
    else fbq.queue.push(args)
  } as Fbq
  fbq.queue = []
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = "2.0"
  window.fbq = fbq
  ;(window as unknown as { _fbq: Fbq })._fbq = fbq
  addScript("https://connect.facebook.net/en_US/fbevents.js")
  fbq("init", META_PIXEL_ID)
  fbq("track", "PageView")
}

// Clasifica un clic en un enlace: a donde lleva y desde que parte de la pagina.
function describeClick(a: HTMLAnchorElement): { event: string; props: Record<string, string> } | null {
  const href = a.getAttribute("href") ?? ""
  const lugar =
    a.closest<HTMLElement>("[data-lugar]")?.dataset.lugar ?? a.closest("section[id]")?.id ?? "otro"
  if (href.startsWith("https://wa.me")) return { event: "whatsapp", props: { lugar } }
  if (href.startsWith("tel:")) return { event: "llamar", props: { lugar } }
  if (href.includes("google.com/maps")) return { event: "como_llegar", props: { lugar } }
  if (href.includes("facebook.com")) return { event: "redes", props: { lugar, red: "facebook" } }
  if (href.includes("instagram.com")) return { event: "redes", props: { lugar, red: "instagram" } }
  if (href.startsWith("#") && href.length > 1) return { event: "navegacion", props: { lugar, destino: href.slice(1) } }
  // Enlace a otra pagina de la web, ej. "/reparacion-de-laptops" o "/#empresas".
  if (href.startsWith("/")) return { event: "navegacion", props: { lugar, destino: href } }
  return null
}

export function Analytics() {
  useEffect(() => {
    if (TRACKED_HOSTS.includes(window.location.hostname)) {
      if (UMAMI_WEBSITE_ID) loadUmami()
      if (GA_ID || GOOGLE_ADS_ID) loadGoogle()
      if (META_PIXEL_ID) loadMeta()
    }

    // Sin las herramientas cargadas (en desarrollo) track() no hace nada.
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a")
      const click = a && describeClick(a)
      if (click) track(click.event, click.props)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return null
}
