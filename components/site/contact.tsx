import Image from "next/image"
import { Clock, MapPin, Phone } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { SectionHeading } from "@/components/site/section-heading"
import { HoursTable } from "@/components/site/hours-table"
import { WhatsAppIcon } from "@/components/site/icons"
import { ADDRESS, FACEBOOK, INSTAGRAM, MAPS_EMBED, MAPS_URL, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/site"

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-slate-50/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Contacto" title="Visítanos en Piura" />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <BlurFade inView>
            <div className="h-full rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-sm sm:p-9">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{ADDRESS}</p>
                    <a href={MAPS_URL} target="_blank" rel="noopener" className="text-sm font-semibold text-brand hover:underline">
                      Cómo llegar
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink">{PHONE_DISPLAY}</p>
                    <a href={`tel:${PHONE_TEL}`} className="text-sm font-semibold text-brand hover:underline">
                      Llamar ahora
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand">
                    <Clock className="size-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-bold text-ink">Horario</p>
                    <HoursTable />
                  </div>
                </li>
              </ul>

              <div className="mt-9 flex flex-wrap gap-2.5">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex h-11 items-center gap-2 rounded-full bg-whatsapp px-5 text-sm font-bold text-white transition-colors hover:bg-whatsapp-dark"
                >
                  <WhatsAppIcon className="size-4.5" /> WhatsApp
                </a>
                <a href={FACEBOOK} target="_blank" rel="noopener" className="inline-flex h-11 items-center rounded-full border border-slate-200 px-5 text-sm font-bold text-ink transition-colors hover:border-ink">
                  Facebook
                </a>
                <a href={INSTAGRAM} target="_blank" rel="noopener" className="inline-flex h-11 items-center rounded-full border border-slate-200 px-5 text-sm font-bold text-ink transition-colors hover:border-ink">
                  Instagram
                </a>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1}>
            <div className="h-full min-h-[24rem] overflow-hidden rounded-[2rem] border border-slate-200/80 shadow-sm">
              <iframe
                title={`Ubicación de Compumac en ${ADDRESS}`}
                src={MAPS_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[24rem] w-full border-0"
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="relative overflow-hidden">
      <Image src="/img/fotos/placa-roja.webp" alt="" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand/90 to-brand-dark/80" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 py-20 sm:py-24 lg:flex-row lg:items-center lg:justify-between">
        <BlurFade inView>
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">¿Tu equipo falló?</h2>
          <p className="mt-3 text-lg text-red-50">Tráelo a Compumac o escríbenos. El diagnóstico es gratis.</p>
        </BlurFade>
        <BlurFade inView delay={0.1} className="flex flex-wrap gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex h-13 items-center gap-2.5 rounded-full bg-white px-7 font-bold text-brand shadow-xl transition-all hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="size-5" /> Escribir por WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex h-13 items-center gap-2.5 rounded-full border border-white/60 px-7 font-bold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4.5" /> Llamar
          </a>
        </BlurFade>
      </div>
    </section>
  )
}
