import type { Metadata } from "next"
import { Header } from "@/components/site/header"
import { StoreCategories, StoreHero, StoreSteps } from "@/components/site/store"
import { Contact } from "@/components/site/contact"
import { Footer, FloatingContact } from "@/components/site/footer"
import { PHONE_TEL, SITE_URL, STORE_PAGE } from "@/lib/site"

// Pagina de destino de los anuncios de venta (Google Ads no permite anunciar reparaciones).

const title = "Venta de laptops, computadoras e impresoras en Piura | Compumac"
const description =
  "Laptops, computadoras, impresoras, tintas, cartuchos y accesorios de cómputo en Piura. Consulta modelos y precios por WhatsApp o visita nuestro nuevo local en Jr. Huánuco 804."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: STORE_PAGE },
  openGraph: {
    type: "website",
    url: STORE_PAGE,
    siteName: "Compumac",
    locale: "es_PE",
    title,
    description: "Laptops, computadoras, impresoras, tintas y accesorios. Nuevo local en Jr. Huánuco 804, Piura.",
    images: [{ url: "/img/og-compumac.png", width: 1200, height: 630, alt: "Compumac E.I.R.L." }],
  },
}

const NAV = [
  { href: "#productos", label: "Productos" },
  { href: "#como-comprar", label: "Cómo comprar" },
  { href: "#contacto", label: "Ubicación" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  name: "Compumac",
  url: `${SITE_URL}${STORE_PAGE}`,
  telephone: PHONE_TEL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jr. Huánuco 804",
    addressLocality: "Piura",
    addressRegion: "Piura",
    addressCountry: "PE",
  },
}

export default function StorePage() {
  return (
    <div className="pb-14 sm:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header nav={NAV} homeHref="/" cta={{ href: "#productos", label: "Ver productos" }} tagline={["Tienda de", "cómputo"]} />
      <main id="top">
        <StoreHero />
        <StoreCategories />
        <StoreSteps />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
