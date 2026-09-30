"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { MapPin, Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { openStatus } from "@/lib/hours"
import { useLimaNow } from "@/lib/use-lima-now"
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site"

const NAV = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#empresas", label: "Empresas" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const now = useLimaNow()
  const status = now ? openStatus(now) : null
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <div className="bg-ink text-[0.8rem] text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 px-5 py-2 sm:justify-between">
          <span className="inline-flex items-center gap-2">
            <span className="relative flex size-2">
              {status?.open && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              )}
              <span
                className={cn(
                  "relative inline-flex size-2 rounded-full",
                  status ? (status.open ? "bg-emerald-400" : "bg-red-400") : "bg-slate-500",
                )}
              />
            </span>
            <span className={cn(status?.open && "text-white")}>
              {status?.text ?? "Lun–Vie 9:00–20:00 · Sáb 9:00–14:00"}
            </span>
          </span>
          <span className="hidden items-center gap-6 sm:flex">
            <a href="#contacto" className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <MapPin className="size-3.5" /> {ADDRESS}
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-white">
              <Phone className="size-3.5" /> {PHONE_DISPLAY}
            </a>
          </span>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-slate-200/80 bg-white/85 shadow-[0_1px_20px_rgb(15_23_42/0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/0",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3 xl:gap-8">
          <a href="#top" aria-label="Compumac, inicio" className="mr-auto flex items-center gap-3.5">
            <Image
              src="/img/logo-compumac.webp"
              alt="Compumac E.I.R.L."
              width={600}
              height={199}
              priority
              unoptimized
              className="h-10 w-auto sm:h-14"
            />
            <span className="border-l border-slate-200 pl-3.5 text-[0.62rem] lg:hidden xl:block font-bold leading-tight tracking-[0.12em] text-slate-500 uppercase sm:text-[0.68rem]">
              Servicio
              <br />
              técnico
            </span>
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[0.92rem] font-semibold whitespace-nowrap xl:px-3.5 text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#cotizar"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-bold whitespace-nowrap text-white shadow-lg shadow-brand/25 transition-all hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-xl hover:shadow-brand/30 lg:inline-flex"
          >
            Cotizar reparación
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white text-ink lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-nav"
              aria-label="Principal"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden border-t border-slate-100 lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-5 py-3">
                {NAV.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#cotizar"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 rounded-xl bg-brand px-4 py-3 text-center font-bold text-white"
                >
                  Cotizar reparación
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
