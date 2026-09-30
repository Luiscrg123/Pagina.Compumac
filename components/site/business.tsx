import Image from "next/image"
import { Building2, Check, ShoppingBag } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { SectionHeading } from "@/components/site/section-heading"
import { whatsappLink } from "@/lib/site"

const POINTS = [
  "Mantenimiento preventivo de computadoras e impresoras",
  "Reparaciones con diagnóstico gratis y garantía",
  "Venta de equipos, tintas y accesorios",
]

export function Business() {
  return (
    <>
      <section id="empresas" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 sm:py-28">
        <div className="pointer-events-none absolute -top-32 -left-32 size-[36rem] rounded-full bg-brand/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <SectionHeading dark align="left" eyebrow="Para empresas" title="Servicio técnico para oficinas, colegios y negocios">
              Mantenemos funcionando las computadoras e impresoras de tu empresa, para que tu equipo no se detenga.
            </SectionHeading>
            <BlurFade inView delay={0.1}>
              <ul className="mt-8 space-y-3.5">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-start gap-3 font-medium text-slate-200">
                    <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink("Hola Compumac, quiero cotizar servicio técnico para mi empresa.")}
                target="_blank"
                rel="noopener"
                className="mt-10 inline-flex h-13 items-center gap-2.5 rounded-full bg-brand px-7 font-bold text-white shadow-xl shadow-brand/30 transition-all hover:-translate-y-0.5 hover:bg-brand-dark"
              >
                <Building2 className="size-5" />
                Cotizar para mi empresa
              </a>
            </BlurFade>
          </div>

          <BlurFade inView delay={0.15} direction="left" offset={20}>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-white/10 sm:aspect-[5/4] lg:aspect-square">
                <Image
                  src="/img/fotos/empresas.webp"
                  alt="Mano usando el panel de una impresora de oficina"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-white/10 p-5 text-white shadow-2xl backdrop-blur-xl sm:left-auto sm:w-80">
                <p className="text-sm leading-relaxed text-slate-100">
                  Cuéntanos cuántos equipos tienes y qué necesitas, y te enviamos una cotización a medida.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="bg-slate-50/70 py-12">
        <BlurFade inView className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col gap-5 rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm sm:flex-row sm:items-center sm:p-8">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand">
              <ShoppingBag className="size-7" />
            </span>
            <div className="flex-1">
              <h2 className="text-xl font-extrabold">También vendemos</h2>
              <p className="mt-1 text-slate-500">
                Laptops, computadoras, impresoras, tintas y accesorios de cómputo. Pregunta por modelos y precios.
              </p>
            </div>
            <a
              href={whatsappLink("Hola Compumac, quiero consultar por un equipo.")}
              target="_blank"
              rel="noopener"
              className="inline-flex h-12 items-center justify-center rounded-full border border-slate-200 px-6 font-bold text-ink transition-colors hover:border-ink"
            >
              Consultar disponibilidad
            </a>
          </div>
        </BlurFade>
      </section>
    </>
  )
}
