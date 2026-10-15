import { Cable, Droplets, Laptop, MapPin, MessageCircle, Printer, Star, Store } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"
import { DotPattern } from "@/components/ui/dot-pattern"
import { SectionHeading } from "@/components/site/section-heading"
import { WhatsAppIcon } from "@/components/site/icons"
import { cn } from "@/lib/utils"
import {
  ADDRESS,
  GOOGLE_PROFILE_URL,
  GOOGLE_RATING,
  GOOGLE_REVIEWS,
  MAPS_URL,
  STORE_CATEGORIES,
  whatsappLink,
} from "@/lib/site"

// Secciones de la pagina /tienda (venta de equipos, tintas y accesorios).

const ICONS = { laptops: Laptop, impresoras: Printer, tintas: Droplets, accesorios: Cable }

export function StoreHero() {
  return (
    <section data-lugar="inicio" className="relative -mt-[4.5rem] overflow-hidden pt-[4.5rem] sm:-mt-20 sm:pt-20">
      <DotPattern
        width={22}
        height={22}
        cr={1.1}
        className="text-slate-300/70 [mask-image:radial-gradient(ellipse_70%_60%_at_40%_30%,black,transparent)]"
      />
      <div className="pointer-events-none absolute -top-40 right-[-10%] size-[42rem] rounded-full bg-brand/6 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 pt-12 pb-16 text-center lg:pt-20 lg:pb-20">
        <div className="hero-in flex flex-wrap justify-center gap-2" style={{ "--delay": "0.05s" } as React.CSSProperties}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3.5 py-1.5 text-[0.8rem] font-bold text-brand-dark shadow-sm backdrop-blur"
          >
            <MapPin className="size-3.5" />
            Nuevo local: {ADDRESS}
          </a>
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

        <h1
          className="hero-in mt-6 text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.035em] sm:text-6xl"
          style={{ "--delay": "0.15s" } as React.CSSProperties}
        >
          Venta de <span className="text-brand">laptops y computadoras</span> en Piura
        </h1>

        <p
          className="hero-in mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
          style={{ "--delay": "0.25s" } as React.CSSProperties}
        >
          También impresoras, tintas, cartuchos y accesorios de cómputo. Consulta modelos, precios y disponibilidad por WhatsApp, o visítanos
          en nuestro nuevo local.
        </p>

        <div className="hero-in mt-9 flex flex-wrap justify-center gap-3" style={{ "--delay": "0.35s" } as React.CSSProperties}>
          <a
            href={whatsappLink("Hola Compumac, quiero consultar precios de un equipo.")}
            target="_blank"
            rel="noopener"
            className="inline-flex h-13 items-center gap-2.5 rounded-full bg-whatsapp px-7 font-bold text-white shadow-xl shadow-whatsapp/25 transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark"
          >
            <WhatsAppIcon className="size-5" />
            Consultar por WhatsApp
          </a>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex h-13 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-7 font-bold text-ink shadow-sm transition-all hover:-translate-y-0.5 hover:border-slate-300"
          >
            <MapPin className="size-4.5" />
            Cómo llegar
          </a>
        </div>
      </div>
    </section>
  )
}

export function StoreCategories() {
  return (
    <section id="productos" className="scroll-mt-24 bg-slate-50/70 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Productos" title="¿Qué estás buscando?">
          Escríbenos y te enviamos los modelos y precios que tenemos disponibles.
        </SectionHeading>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {STORE_CATEGORIES.map((c, i) => {
            const Icon = ICONS[c.key]
            const main = i === 0
            return (
              <BlurFade key={c.key} inView delay={0.05 * i} className={cn(main && "md:col-span-2")}>
                <div
                  data-lugar={`tienda_${c.key}`}
                  className={cn(
                    "flex h-full flex-col gap-6 rounded-[2rem] border p-7 sm:p-9",
                    main
                      ? "border-transparent bg-ink text-white md:flex-row md:items-center md:justify-between"
                      : "border-slate-200/80 bg-white shadow-sm",
                  )}
                >
                  <div className={cn("flex gap-5", main ? "md:max-w-2xl" : "flex-col")}>
                    <span
                      className={cn(
                        "grid size-14 shrink-0 place-items-center rounded-2xl",
                        main ? "bg-brand text-white shadow-lg shadow-brand/40" : "bg-brand-50 text-brand",
                      )}
                    >
                      <Icon className="size-7" />
                    </span>
                    <div>
                      <h2 className={cn("font-extrabold", main ? "text-3xl text-white" : "text-2xl")}>{c.title}</h2>
                      <p className={cn("mt-2 leading-relaxed", main ? "text-lg text-slate-300" : "text-slate-500")}>{c.text}</p>
                    </div>
                  </div>
                  <a
                    href={whatsappLink(c.message)}
                    target="_blank"
                    rel="noopener"
                    className={cn(
                      "inline-flex h-12 w-fit shrink-0 items-center gap-2.5 rounded-full px-6 font-bold transition-all hover:-translate-y-0.5",
                      main ? "bg-white text-ink hover:bg-slate-100" : "mt-auto bg-whatsapp text-white hover:bg-whatsapp-dark",
                    )}
                  >
                    <WhatsAppIcon className={cn("size-5", main && "text-whatsapp")} />
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

const STEPS = [
  { icon: MessageCircle, title: "Escríbenos", text: "Cuéntanos qué buscas por WhatsApp: el equipo, para qué lo usarás o el modelo de tu impresora." },
  { icon: Laptop, title: "Te enviamos opciones", text: "Te respondemos con los modelos, precios y disponibilidad." },
  { icon: Store, title: "Recógelo en el local", text: `Te esperamos en nuestro nuevo local de ${ADDRESS}.` },
]

export function StoreSteps() {
  return (
    <section id="como-comprar" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Cómo comprar" title="Comprar en Compumac, en 3 pasos" />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <BlurFade inView delay={0.1 * i} className="h-full rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm">
                <span className="relative grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand">
                  <Icon className="size-6" />
                  <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-brand text-xs font-extrabold text-white ring-4 ring-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-extrabold">{title}</h3>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-500">{text}</p>
              </BlurFade>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
