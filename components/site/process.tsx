"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"
import { ClipboardCheck, MessageCircle, SearchCheck, Wrench } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { BlurFade } from "@/components/ui/blur-fade"

const STEPS = [
  { icon: MessageCircle, title: "Escríbenos o ven", text: "Cuéntanos la falla por WhatsApp o trae tu equipo a Av. Loreto 461." },
  { icon: SearchCheck, title: "Diagnóstico gratis", text: "Revisamos el equipo y encontramos la falla, sin costo." },
  { icon: ClipboardCheck, title: "Tú decides", text: "Te damos el presupuesto y reparamos solo si estás de acuerdo." },
  { icon: Wrench, title: "Listo, con garantía", text: "Muchas reparaciones quedan listas el mismo día, y tu reparación lleva garantía." },
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <section id="proceso" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Cómo funciona" title="Reparar tu equipo, en 4 pasos" />

        <div ref={ref} className="relative mt-16">
          {/* Linea de progreso: horizontal en escritorio, vertical en celular */}
          <div aria-hidden className="absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-slate-200 lg:block">
            <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-brand" />
          </div>
          <div aria-hidden className="absolute top-7 bottom-7 left-7 w-0.5 bg-slate-200 lg:hidden">
            <motion.div style={{ scaleY: progress }} className="h-full w-full origin-top bg-brand" />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
            {STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <BlurFade inView delay={0.1 * i} className="flex gap-5 lg:flex-col lg:items-center lg:text-center">
                  <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white text-ink shadow-[0_8px_24px_-12px_rgb(15_23_42/0.35)]">
                    <Icon className="size-6" />
                    <span className="absolute -top-2 -right-2 grid size-6 place-items-center rounded-full bg-brand text-xs font-extrabold text-white ring-4 ring-white">
                      {i + 1}
                    </span>
                  </span>
                  <div className="lg:mt-6">
                    <h3 className="text-lg font-extrabold">{title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-slate-500 lg:mx-auto lg:max-w-[15rem]">{text}</p>
                  </div>
                </BlurFade>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
