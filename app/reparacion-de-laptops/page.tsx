import type { Metadata } from "next"
import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { LaptopEmergencies } from "@/components/site/laptop-emergencies"
import { LaptopRepairs } from "@/components/site/laptop-repairs"
import { Process } from "@/components/site/process"
import { Faq } from "@/components/site/faq"
import { Contact, CtaBand } from "@/components/site/contact"
import { Footer, FloatingContact } from "@/components/site/footer"
import { LAPTOP_FAQS, LAPTOP_PAGE, PHONE_TEL, SITE_URL } from "@/lib/site"

// Pagina de destino de los anuncios de reparacion de laptops.

const title = "Reparación de laptops en Piura | Compumac"
const description =
  "Reparación de laptops HP, Lenovo, Dell, Asus, Acer y MacBook en Piura: pantalla, no prende, no carga, se mojó, lenta o con virus. Diagnóstico gratis y reparaciones con garantía."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: LAPTOP_PAGE },
  openGraph: {
    type: "website",
    url: LAPTOP_PAGE,
    siteName: "Compumac",
    locale: "es_PE",
    title,
    description: "Diagnóstico gratis, reparaciones con garantía y muchas listas el mismo día. Jr. Huánuco 804, Piura.",
    images: [{ url: "/img/og-compumac.png", width: 1200, height: 630, alt: "Compumac E.I.R.L." }],
  },
}

const NAV = [
  { href: "#fallas", label: "Fallas" },
  { href: "#emergencias", label: "Se mojó o no prende" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Reparación de laptops",
  serviceType: "Reparación de laptops",
  url: `${SITE_URL}${LAPTOP_PAGE}`,
  areaServed: { "@type": "City", name: "Piura" },
  provider: {
    "@type": "ComputerStore",
    name: "Compumac",
    url: `${SITE_URL}/`,
    telephone: PHONE_TEL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jr. Huánuco 804",
      addressLocality: "Piura",
      addressRegion: "Piura",
      addressCountry: "PE",
    },
  },
}

export default function LaptopRepairPage() {
  return (
    <div className="pb-14 sm:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header nav={NAV} homeHref="/" />
      <main id="top">
        <Hero
          title={
            <>
              Reparación de <span className="text-brand">laptops</span> en Piura
            </>
          }
          text="Pantalla rota, no prende, no carga, se mojó, lenta o con virus. Diagnóstico gratis y presupuesto antes de reparar."
          checks={["Diagnóstico gratis", "Reparaciones con garantía", "Muchas, el mismo día", "HP, Lenovo, Dell, Asus, Acer y MacBook"]}
          whatsappMessage="Hola Compumac, quiero cotizar la reparación de mi laptop."
          defaultDevice="laptop"
        />
        <LaptopEmergencies />
        <LaptopRepairs />
        <Process />
        <Faq items={LAPTOP_FAQS} title="Preguntas sobre la reparación de laptops" />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
