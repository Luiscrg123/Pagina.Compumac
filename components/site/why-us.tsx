import Image from "next/image"
import { Clock, SearchCheck, ShieldCheck } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { NumberTicker } from "@/components/ui/number-ticker"
import { SectionHeading } from "@/components/site/section-heading"
import { FOUNDED } from "@/lib/site"

const tile =
  "group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgb(15_23_42/0.25)]"

export function WhyUs() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Por qué Compumac" title="Tu equipo en manos de técnicos con experiencia">
          Te decimos qué tiene tu equipo y cuánto cuesta repararlo antes de empezar la reparación.
        </SectionHeading>

        <div className="mt-14 grid gap-5 lg:auto-rows-[minmax(15rem,auto)] lg:grid-cols-4">
          <BlurFade inView className="lg:col-span-2 lg:row-span-2">
            <div className={`${tile} flex h-full min-h-[26rem] flex-col justify-end`}>
              <Image
                src="/img/fotos/diagnostico.webp"
                alt="Interior de una laptop abierta sobre la mesa de trabajo"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/0" />
              <div className="relative p-7 sm:p-9">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/40">
                  <SearchCheck className="size-6" />
                </span>
                <h3 className="mt-5 text-3xl font-extrabold text-white">Diagnóstico gratis</h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-slate-200">
                  Revisamos tu equipo, encontramos la falla y te damos el presupuesto sin costo. Tú decides si reparamos.
                </p>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.1} className="lg:col-span-2">
            <div className={`${tile} flex h-full flex-col justify-between bg-gradient-to-br from-brand-50 via-white to-white p-7 sm:p-9`}>
              <span
                aria-hidden
                className="pointer-events-none absolute -right-4 -bottom-10 text-[9rem] leading-none font-extrabold tracking-tighter text-brand/[0.06] select-none"
              >
                {FOUNDED}
              </span>
              <p className="text-sm font-bold tracking-wide text-brand-dark uppercase">Desde {FOUNDED}</p>
              <div className="relative mt-6 flex items-end gap-3">
                <span className="text-7xl leading-none font-extrabold tracking-tighter text-ink">
                  <NumberTicker value={20} className="tracking-tighter text-ink" />+
                </span>
                <span className="pb-2 text-lg font-semibold text-slate-600">
                  años reparando
                  <br />
                  equipos en Piura
                </span>
              </div>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.15}>
            <div className={`${tile} flex h-full flex-col p-7`}>
              <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                <ShieldCheck className="size-6" />
              </span>
              <h3 className="mt-auto pt-8 text-xl font-extrabold">Con garantía</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-500">Nuestras reparaciones tienen garantía.</p>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.2}>
            <div className={`${tile} flex h-full flex-col p-7`}>
              <span className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-600">
                <Clock className="size-6" />
              </span>
              <h3 className="mt-auto pt-8 text-xl font-extrabold">El mismo día</h3>
              <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-500">Muchas reparaciones quedan listas el mismo día.</p>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
