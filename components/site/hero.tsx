import { ArrowRight, Check, Droplets, Phone, Star } from "lucide-react"
import { DotPattern } from "@/components/ui/dot-pattern"
import { WhatsAppIcon } from "@/components/site/icons"
import { QuoteBuilder } from "@/components/site/quote-builder"
import {
  FOUNDED,
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  PHONE_DISPLAY,
  PHONE_TEL,
  whatsappLink,
  type DeviceKey,
} from "@/lib/site"

const CHECKS = ["Diagnóstico gratis", "Reparaciones con garantía", "Muchas, el mismo día", `Técnicos desde ${FOUNDED}`]

// La portada usa los textos por defecto; la pagina de un servicio pasa los suyos.
export function Hero({
  title = (
    <>
      Reparamos tu <span className="text-brand">laptop, PC o impresora</span> en Piura
    </>
  ),
  text = "Diagnóstico gratis, presupuesto antes de reparar y reparaciones con garantía. Muchas quedan listas el mismo día.",
  checks = CHECKS,
  whatsappMessage = "Hola Compumac, quiero cotizar una reparación.",
  defaultDevice,
}: {
  title?: React.ReactNode
  text?: string
  checks?: string[]
  whatsappMessage?: string
  defaultDevice?: DeviceKey
}) {
  return (
    <section data-lugar="inicio" className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem] sm:-mt-20 sm:pt-20">
      {/* Fondo: puntos que se desvanecen y un brillo rojo suave */}
      <DotPattern
        width={22}
        height={22}
        cr={1.1}
        className="text-slate-300/70 [mask-image:radial-gradient(ellipse_70%_60%_at_40%_30%,black,transparent)]"
      />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-brand/6 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-gradient-to-b from-transparent to-white" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pt-12 pb-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:pt-20 lg:pb-28">
        <div>
          <div className="hero-in" style={{ "--delay": "0.05s" } as React.CSSProperties}>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3.5 py-1.5 text-[0.8rem] font-bold text-brand-dark shadow-sm backdrop-blur">
                <span className="size-1.5 rounded-full bg-brand" />
                Servicio técnico en Piura desde {FOUNDED}
              </span>
              <a
                href={GOOGLE_PROFILE_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-white/80 px-3.5 py-1.5 text-[0.8rem] font-bold text-ink shadow-sm backdrop-blur transition-colors hover:border-amber-300"
              >
                <Star className="size-3.5 fill-amber-400 text-amber-400" />
                {GOOGLE_RATING} en Google
                <span className="font-semibold text-slate-500">· {GOOGLE_REVIEWS} reseñas</span>
              </a>
            </div>
          </div>

          <div className="hero-in" style={{ "--delay": "0.15s" } as React.CSSProperties}>
            <h1 className="mt-6 text-[2.6rem] leading-[1.05] font-extrabold tracking-[-0.035em] sm:text-6xl lg:text-[4.1rem]">
              {title}
            </h1>
          </div>

          <div className="hero-in" style={{ "--delay": "0.25s" } as React.CSSProperties}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{text}</p>
          </div>

          <div className="hero-in" style={{ "--delay": "0.35s" } as React.CSSProperties}>
            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2 sm:max-w-lg">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-2.5 font-semibold text-ink">
                  <span className="grid size-5.5 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="hero-in" style={{ "--delay": "0.45s" } as React.CSSProperties}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={whatsappLink(whatsappMessage)}
                target="_blank"
                rel="noopener"
                className="inline-flex h-13 items-center gap-2.5 rounded-full bg-brand px-7 font-bold text-white shadow-xl shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <WhatsAppIcon className="size-5" />
                Escríbenos por WhatsApp
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex h-13 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-7 font-bold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300"
              >
                <Phone className="size-4.5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="hero-in" style={{ "--delay": "0.55s" } as React.CSSProperties}>
            <a
              href="#emergencias"
              className="group mt-7 flex w-fit items-center gap-3 rounded-2xl border border-sky-200 bg-sky-50/80 py-2.5 pr-4 pl-2.5 text-[0.95rem] font-semibold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-sky-500 text-white">
                <Droplets className="size-5" />
              </span>
              <span>
                ¿Se mojó tu laptop o no prende para nada? <span className="font-extrabold text-brand">Sí la reparamos</span>
              </span>
              <ArrowRight className="size-4.5 shrink-0 text-slate-400 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="hero-in" style={{ "--delay": "0.3s" } as React.CSSProperties}>
          <QuoteBuilder defaultDevice={defaultDevice} />
        </div>
      </div>
    </section>
  )
}
