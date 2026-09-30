import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { Brands } from "@/components/site/brands"
import { WhyUs } from "@/components/site/why-us"
import { Repairs } from "@/components/site/repairs"
import { Process } from "@/components/site/process"
import { Business } from "@/components/site/business"
import { Faq } from "@/components/site/faq"
import { Contact, CtaBand } from "@/components/site/contact"
import { Footer, FloatingContact } from "@/components/site/footer"
import { FACEBOOK, FOUNDED, INSTAGRAM, PHONE_TEL, SITE_URL } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ComputerStore",
  name: "Compumac",
  legalName: "Compumac E.I.R.L.",
  description: `Servicio técnico de laptops, computadoras e impresoras en Piura desde ${FOUNDED}. Diagnóstico gratis y reparaciones con garantía.`,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/img/logo-compumac.webp`,
  image: `${SITE_URL}/img/og-compumac.png`,
  telephone: PHONE_TEL,
  foundingDate: String(FOUNDED),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Loreto 461",
    addressLocality: "Piura",
    addressRegion: "Piura",
    addressCountry: "PE",
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "20:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
  ],
  sameAs: [FACEBOOK, INSTAGRAM],
}

export default function Home() {
  return (
    <div className="pb-14 sm:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="top">
        <Hero />
        <Brands />
        <WhyUs />
        <Repairs />
        <Process />
        <Business />
        <Faq />
        <Contact />
        <CtaBand />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  )
}
