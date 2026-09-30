import Image from "next/image"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/site/icons"
import { ADDRESS, FACEBOOK, FOUNDED, INSTAGRAM, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from "@/lib/site"

export function Footer() {
  return (
    <footer className="bg-ink text-sm text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-16 pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <a href="#top" aria-label="Compumac, inicio" className="inline-flex rounded-2xl bg-white px-4 py-3">
            <Image src="/img/logo-compumac.webp" alt="Compumac E.I.R.L." width={600} height={199} unoptimized className="h-11 w-auto" />
          </a>
          <p className="mt-5 max-w-xs leading-relaxed">
            Servicio técnico de laptops, computadoras e impresoras en Piura desde {FOUNDED}.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-white">Reparaciones</h3>
          <ul className="space-y-2.5">
            {["Impresoras", "Laptops", "Computadoras"].map((x) => (
              <li key={x}>
                <a href="#reparaciones" className="transition-colors hover:text-white">
                  {x}
                </a>
              </li>
            ))}
            <li>
              <a href="#empresas" className="transition-colors hover:text-white">
                Empresas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-white">Contacto</h3>
          <ul className="space-y-2.5">
            <li>{ADDRESS}</li>
            <li>
              <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-white">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              Lun–Vie 9:00–20:00
              <br />
              Sáb 9:00–14:00
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-bold text-white">Síguenos</h3>
          <ul className="space-y-2.5">
            <li>
              <a href={FACEBOOK} target="_blank" rel="noopener" className="transition-colors hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="transition-colors hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs">
          © {new Date().getFullYear()} Compumac E.I.R.L. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export function FloatingContact() {
  return (
    <>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        aria-label="Escríbenos por WhatsApp"
        className="fixed right-6 bottom-6 z-50 hidden size-15 place-items-center rounded-full bg-whatsapp text-white shadow-[0_12px_30px_-8px_rgb(37_211_102/0.6)] transition-transform hover:scale-110 sm:grid"
      >
        <WhatsAppIcon className="size-7.5" />
      </a>
      <nav
        aria-label="Contacto rápido"
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white/95 shadow-[0_-8px_24px_rgb(15_23_42/0.08)] backdrop-blur sm:hidden"
      >
        <a href={`tel:${PHONE_TEL}`} className="flex items-center justify-center gap-2 py-4 font-bold text-ink">
          <Phone className="size-4.5" /> Llamar
        </a>
        <a href={whatsappLink()} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-whatsapp py-4 font-bold text-white">
          <WhatsAppIcon className="size-5" /> WhatsApp
        </a>
      </nav>
    </>
  )
}
