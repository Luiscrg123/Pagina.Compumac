"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Laptop, Monitor, Printer } from "lucide-react"
import { BorderBeam } from "@/components/ui/border-beam"
import { WhatsAppIcon } from "@/components/site/icons"
import { cn } from "@/lib/utils"
import { DEVICES, whatsappLink, type DeviceKey } from "@/lib/site"

export const PICK_DEVICE_EVENT = "compumac:pick-device"

export function pickDevice(device: DeviceKey) {
  window.dispatchEvent(new CustomEvent<DeviceKey>(PICK_DEVICE_EVENT, { detail: device }))
}

const DEVICE_ICONS: Record<DeviceKey, typeof Printer> = { impresora: Printer, laptop: Laptop, pc: Monitor }

function StepLabel({ n, children, muted }: { n: number; children: React.ReactNode; muted?: boolean }) {
  return (
    <p className={cn("mb-2.5 flex items-center gap-2 text-sm font-bold text-ink transition-opacity", muted && "opacity-45")}>
      <span className="grid size-5.5 place-items-center rounded-full bg-ink text-[0.7rem] text-white">{n}</span>
      {children}
    </p>
  )
}

export function QuoteBuilder() {
  const [device, setDevice] = useState<DeviceKey | null>(null)
  const [problems, setProblems] = useState<string[]>([])
  const [brand, setBrand] = useState("")
  const [model, setModel] = useState("")

  const choose = (key: DeviceKey) => {
    setDevice(key)
    setProblems([])
    setBrand("")
  }

  useEffect(() => {
    const onPick = (e: Event) => {
      setDevice((e as CustomEvent<DeviceKey>).detail)
      setProblems([])
      setBrand("")
    }
    window.addEventListener(PICK_DEVICE_EVENT, onPick)
    return () => window.removeEventListener(PICK_DEVICE_EVENT, onPick)
  }, [])

  const toggleProblem = (p: string) =>
    setProblems((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const lines = ["Hola Compumac, quiero cotizar una reparación."]
    if (device) {
      const equipo = [DEVICES[device].label, brand, model.trim()].filter(Boolean).join(" ")
      lines.push(`Equipo: ${equipo}`)
      if (problems.length) lines.push(`Falla: ${problems.join(", ")}`)
    }
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener")
  }

  const d = device ? DEVICES[device] : null

  return (
    <form
      id="cotizar"
      onSubmit={submit}
      aria-labelledby="quote-title"
      className="relative scroll-mt-28 overflow-hidden rounded-[1.75rem] bg-white p-6 shadow-[0_30px_80px_-20px_rgb(15_23_42/0.25)] ring-1 ring-slate-200/80 sm:p-7"
    >
      <BorderBeam size={140} duration={9} colorFrom="#e00000" colorTo="#ff9b9b" borderWidth={2} />
      <div className="mb-5">
        <h2 id="quote-title" className="text-xl font-extrabold">
          Cotiza tu reparación
        </h2>
        <p className="mt-1 text-sm text-slate-500">Elige tu equipo y la falla. Te respondemos por WhatsApp.</p>
      </div>

      <StepLabel n={1}>¿Qué equipo es?</StepLabel>
      <div className="grid grid-cols-3 gap-2.5" role="group" aria-label="Tipo de equipo">
        {(Object.keys(DEVICES) as DeviceKey[]).map((key) => {
          const Icon = DEVICE_ICONS[key]
          const active = device === key
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => choose(key)}
              className={cn(
                "relative flex flex-col items-center gap-2 rounded-2xl border-2 px-2 py-4 text-sm font-bold transition-colors",
                active ? "border-brand text-brand-dark" : "border-slate-200 text-ink hover:border-slate-300",
              )}
            >
              {active && (
                <motion.span
                  layoutId="device-bg"
                  className="absolute inset-0 rounded-[0.85rem] bg-brand-50"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <Icon className="relative size-7" strokeWidth={1.6} />
              <span className="relative">{DEVICES[key].label}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-5">
        <StepLabel n={2} muted={!d}>
          ¿Qué le pasa?
        </StepLabel>
        <div className="min-h-[2.5rem]">
          <AnimatePresence mode="wait" initial={false}>
            {d ? (
              <motion.div
                key={device}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18 }}
                className="flex flex-wrap gap-2"
              >
                {d.quickProblems.map((p) => {
                  const on = problems.includes(p)
                  return (
                    <button
                      key={p}
                      type="button"
                      aria-pressed={on}
                      onClick={() => toggleProblem(p)}
                      className={cn(
                        "rounded-full border px-3.5 py-2 text-[0.82rem] font-semibold transition-all",
                        on
                          ? "border-ink bg-ink text-white shadow-md"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-ink",
                      )}
                    >
                      {p}
                    </button>
                  )
                })}
              </motion.div>
            ) : (
              <motion.p key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pt-2 text-sm text-slate-400">
                Primero elige tu equipo.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-5">
        <StepLabel n={3} muted={!d}>
          Marca y modelo <span className="font-medium text-slate-400">(opcional)</span>
        </StepLabel>
        <div className="grid gap-2.5 sm:grid-cols-2">
          <select
            aria-label="Marca"
            value={brand}
            disabled={!d}
            onChange={(e) => setBrand(e.target.value)}
            className="h-12 rounded-xl border border-slate-200 bg-white px-3.5 text-[0.95rem] font-medium text-ink outline-none transition-colors focus:border-brand disabled:opacity-45"
          >
            <option value="">Marca</option>
            {d?.brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
            {d && <option value="Otra marca">Otra marca</option>}
          </select>
          <input
            aria-label="Modelo"
            value={model}
            disabled={!d}
            onChange={(e) => setModel(e.target.value)}
            placeholder={d?.modelPlaceholder ?? "Modelo"}
            autoComplete="off"
            className="h-12 rounded-xl border border-slate-200 bg-white px-3.5 text-[0.95rem] font-medium text-ink outline-none transition-colors placeholder:text-slate-400 focus:border-brand disabled:opacity-45"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-whatsapp text-base font-bold text-white shadow-lg shadow-whatsapp/25 transition-all hover:-translate-y-0.5 hover:bg-whatsapp-dark"
      >
        <WhatsAppIcon className="size-5" />
        Enviar por WhatsApp
      </button>
      <p className="mt-3 text-center text-xs font-medium text-slate-400">Diagnóstico gratis · Sin compromiso</p>
    </form>
  )
}
