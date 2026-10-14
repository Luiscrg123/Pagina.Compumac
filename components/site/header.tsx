"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { highlightQuote } from "@/components/site/quote-builder"
import { MovedBanner } from "@/components/site/moved-banner"

const NAV = [
  { href: "#reparaciones", label: "Reparaciones" },
  { href: "#proceso", label: "Cómo funciona" },
  { href: "#empresas", label: "Empresas" },
  { href: "#preguntas", label: "Preguntas" },
  { href: "#contacto", label: "Contacto" },
]

type NavItem = { href: string; label: string }

// `nav` son anclas de la misma pagina; `homeHref` es a donde lleva el logo.
export function Header({ nav = NAV, homeHref = "#top" }: { nav?: NavItem[]; homeHref?: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pendingHref = useRef<string | null>(null)

  // Cerrar el menú cambia la altura del header y corta el scroll suave,
  // así que se navega cuando el menú termina de cerrarse.
  const goFromMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    pendingHref.current = e.currentTarget.getAttribute("href")
    setMenuOpen(false)
  }

  const scrollToPending = () => {
    const href = pendingHref.current
    pendingHref.current = null
    if (!href) return
    history.pushState(null, "", href)
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    if (href === "#cotizar") highlightQuote()
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <MovedBanner />
      <header
        data-lugar="menu"
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "border-b border-slate-200/80 bg-white/85 shadow-[0_1px_20px_rgb(15_23_42/0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/0",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-3 xl:gap-8">
          <Link href={homeHref} aria-label="Compumac, inicio" className="mr-auto flex items-center gap-3.5">
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
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
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
            onClick={highlightQuote}
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

        <AnimatePresence onExitComplete={scrollToPending}>
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
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={goFromMenu}
                    className="rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#cotizar"
                  onClick={goFromMenu}
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
