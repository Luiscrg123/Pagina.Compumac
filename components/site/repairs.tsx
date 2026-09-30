"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { ArrowRight, Check, Laptop, Monitor, Printer } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { pickDevice } from "@/components/site/quote-builder"
import { cn } from "@/lib/utils"
import { DEVICES, type DeviceKey } from "@/lib/site"

const TABS: { key: DeviceKey; icon: typeof Printer }[] = [
  { key: "impresora", icon: Printer },
  { key: "laptop", icon: Laptop },
  { key: "pc", icon: Monitor },
]

export function Repairs() {
  const [active, setActive] = useState<DeviceKey>("impresora")
  const d = DEVICES[active]

  return (
    <section id="reparaciones" className="scroll-mt-24 bg-slate-50/70 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Reparaciones" title="¿Qué le pasa a tu equipo?">
          Estas son algunas de las fallas que reparamos. Si la tuya no está en la lista, igual escríbenos.
        </SectionHeading>

        <div
          role="tablist"
          aria-label="Tipo de equipo"
          className="mx-auto mt-12 grid w-full max-w-md grid-cols-3 gap-1 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm sm:flex sm:w-fit sm:max-w-none"
        >
          {TABS.map(({ key, icon: Icon }) => {
            const on = key === active
            return (
              <button
                key={key}
                role="tab"
                id={`tab-${key}`}
                aria-selected={on}
                aria-controls="repair-panel"
                onClick={() => setActive(key)}
                className={cn(
                  "relative flex items-center justify-center gap-2 rounded-full px-2 py-2.5 text-[0.8rem] font-bold transition-colors sm:px-6 sm:text-sm",
                  on ? "text-white" : "text-slate-500 hover:text-ink",
                )}
              >
                {on && (
                  <motion.span
                    layoutId="repair-tab"
                    className="absolute inset-0 rounded-full bg-ink shadow-md"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon className="relative hidden size-4.5 sm:block" />
                <span className="relative">{DEVICES[key].title}</span>
              </button>
            )
          })}
        </div>

        <div id="repair-panel" role="tabpanel" aria-labelledby={`tab-${active}`} className="mt-10">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="grid overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_30px_70px_-35px_rgb(15_23_42/0.35)] lg:grid-cols-2"
            >
              <div className="relative min-h-[18rem] lg:min-h-[30rem]">
                <Image src={d.photo} alt={d.photoAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/0" />
                <span className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-ink shadow-lg backdrop-blur">
                  {d.brandsText}
                </span>
              </div>

              <div className="flex flex-col p-8 sm:p-11">
                <h3 className="text-3xl font-extrabold">{d.title}</h3>
                <p className="mt-2 text-slate-500">Algunas de las reparaciones que hacemos:</p>
                <ul className="mt-7 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  {d.repairs.map((r, i) => (
                    <motion.li
                      key={r}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.1 }}
                      className="flex items-start gap-3 text-[0.97rem] font-medium text-slate-700"
                    >
                      <span className="mt-0.5 grid size-5.5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {r}
                    </motion.li>
                  ))}
                </ul>
                <a
                  href="#cotizar"
                  onClick={() => pickDevice(active)}
                  className="group mt-auto inline-flex w-fit items-center gap-2 pt-10 font-bold text-brand"
                >
                  Cotizar {d.label.toLowerCase()}
                  <ArrowRight className="size-4.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
