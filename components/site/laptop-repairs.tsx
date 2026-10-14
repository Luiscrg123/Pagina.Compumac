import Image from "next/image"
import { Check } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { SectionHeading } from "@/components/site/section-heading"
import { WhatsAppIcon } from "@/components/site/icons"
import { DEVICES, whatsappLink } from "@/lib/site"

const laptop = DEVICES.laptop

// Fallas y marcas de laptops, para la pagina /reparacion-de-laptops.
export function LaptopRepairs() {
  return (
    <section id="fallas" className="scroll-mt-24 bg-slate-50/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Fallas que reparamos" title="¿Qué le pasa a tu laptop?">
          Si tu falla no está en la lista, igual escríbenos: la revisamos sin costo.
        </SectionHeading>

        <BlurFade inView delay={0.1}>
          <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_70px_-35px_rgb(15_23_42/0.35)] lg:grid-cols-2">
            <div className="relative min-h-[18rem] lg:min-h-[30rem]">
              <Image src={laptop.photo} alt={laptop.photoAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            </div>

            <div className="flex flex-col p-8 sm:p-11">
              <ul className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {laptop.repairs.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-[0.97rem] font-medium text-slate-700">
                    <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>

              <p className="mt-9 text-sm font-bold tracking-wide text-slate-400 uppercase">Marcas</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {laptop.brands.map((b) => (
                  <li key={b} className="rounded-full border border-slate-200 px-3.5 py-1.5 text-sm font-bold text-ink">
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink("Hola Compumac, quiero cotizar la reparación de mi laptop.")}
                target="_blank"
                rel="noopener"
                className="mt-10 inline-flex h-13 w-fit items-center gap-2.5 rounded-full bg-whatsapp px-7 font-bold text-white shadow-lg shadow-whatsapp/25 transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark"
              >
                <WhatsAppIcon className="size-5" />
                Cotizar mi laptop
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}
