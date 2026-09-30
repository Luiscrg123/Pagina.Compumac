import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { MotionProvider } from "@/components/site/motion-provider"
import { SITE_URL } from "@/lib/site"
import "./globals.css"

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const title = "Servicio técnico de laptops, PCs e impresoras en Piura | Compumac"
const description =
  "Reparación de laptops, computadoras e impresoras en Piura. Diagnóstico gratis, reparaciones con garantía y muchas listas el mismo día. Desde 2004 en Av. Loreto 461."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  icons: { icon: "/img/favicon.png", apple: "/img/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Compumac",
    locale: "es_PE",
    title: "Compumac | Servicio técnico de laptops, PCs e impresoras en Piura",
    description: "Diagnóstico gratis, reparaciones con garantía y muchas listas el mismo día. Desde 2004 en Av. Loreto 461, Piura.",
    images: [{ url: "/img/og-compumac.png", width: 1200, height: 630, alt: "Compumac E.I.R.L." }],
  },
}

export const viewport: Viewport = {
  themeColor: "#e00000",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full`}>
      <body className="min-h-full">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  )
}
