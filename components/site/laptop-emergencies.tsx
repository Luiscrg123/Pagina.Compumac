import { Droplets, PowerOff } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { SectionHeading } from "@/components/site/section-heading"
import { WhatsAppIcon } from "@/components/site/icons"
import { cn } from "@/lib/utils"
import { whatsappLink } from "@/lib/site"

const CASES = [
  {
    lugar: "laptop_mojada",
    icon: Droplets,
    tag: "Agua, café, gaseosa…",
    title: "¿Se le cayó líquido a tu laptop?",
    text: "La reparamos. Mientras más rápido la traigas, mejor: el líquido sigue dañando la placa con el paso de las horas.",
    listTitle: "Mientras tanto:",
    list: ["Apágala de inmediato y desconecta el cargador", "No intentes prenderla para ver si funciona", "Tráela lo antes posible"],
    cta: "Se mojó mi laptop",
    message: "Hola Compumac, a mi laptop se le cayó líquido. ¿Me pueden ayudar?",
    tone: {
      card: "border-sky-400/25 from-sky-500/20",
      icon: "bg-sky-500 shadow-sky-500/40",
      tag: "text-sky-300",
      dot: "bg-sky-400",
    },
  },
  {
    lugar: "laptop_no_prende",
    icon: PowerOff,
    tag: "Sin señales de vida",
    title: "¿Tu laptop no prende para nada?",
    text: "Aunque parezca muerta, no la des por perdida. La revisamos a fondo hasta encontrar la falla y te decimos cuánto cuesta repararla.",
    listTitle: "Reparamos laptops que:",
    list: ["No prenden ninguna luz", "No cargan aunque estén enchufadas", "Se apagaron de golpe y no volvieron a prender"],
    cta: "Mi laptop no prende",
    message: "Hola Compumac, mi laptop no prende para nada. ¿Me pueden ayudar?",
    tone: {
      card: "border-red-400/25 from-brand/25",
      icon: "bg-brand shadow-brand/40",
      tag: "text-red-300",
      dot: "bg-red-400",
    },
  },
]

export function LaptopEmergencies() {
  return (
    <section id="emergencias" className="relative scroll-mt-24 overflow-hidden bg-ink py-20 sm:py-24">
      <div className="pointer-events-none absolute -top-40 -left-24 size-[34rem] rounded-full bg-sky-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-40 size-[34rem] rounded-full bg-brand/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5">
        <SectionHeading
          dark
          eyebrow="Laptops en emergencia"
          title={
            <>
              ¿Se mojó o <span className="text-red-400">no prende para nada</span>? Sí tiene solución
            </>
          }
        >
          Tráela a Compumac: te hacemos el diagnóstico gratis y te decimos cuánto cuesta antes de reparar.
        </SectionHeading>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {CASES.map((c, i) => {
            const Icon = c.icon
            return (
              <BlurFade key={c.lugar} inView delay={0.1 * i}>
                <div
                  data-lugar={c.lugar}
                  className={cn(
                    "flex h-full flex-col rounded-[2rem] border bg-gradient-to-br via-white/[0.04] to-white/[0.02] p-7 sm:p-9",
                    c.tone.card,
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className={cn("grid size-14 shrink-0 place-items-center rounded-2xl text-white shadow-lg", c.tone.icon)}>
                      <Icon className="size-7" />
                    </span>
                    <p className={cn("text-sm font-bold tracking-wide uppercase", c.tone.tag)}>{c.tag}</p>
                  </div>

                  <h3 className="mt-6 text-2xl leading-tight font-extrabold text-white sm:text-3xl">{c.title}</h3>
                  <p className="mt-3 text-[1.05rem] leading-relaxed text-slate-300">{c.text}</p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-bold text-white">{c.listTitle}</p>
                    <ul className="mt-3 space-y-2.5">
                      {c.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[0.95rem] text-slate-200">
                          <span className={cn("mt-2 size-1.5 shrink-0 rounded-full", c.tone.dot)} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={whatsappLink(c.message)}
                    target="_blank"
                    rel="noopener"
                    className="mt-8 inline-flex h-13 w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 font-bold text-ink shadow-xl transition-all hover:-translate-y-0.5 hover:bg-slate-100 sm:w-fit"
                  >
                    <WhatsAppIcon className="size-5 text-whatsapp" />
                    {c.cta}
                  </a>
                </div>
              </BlurFade>
            )
          })}
        </div>
      </div>
    </section>
  )
}
