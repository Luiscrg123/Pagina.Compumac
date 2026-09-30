import { Marquee } from "@/components/ui/marquee"
import { BRANDS } from "@/lib/site"

export function Brands() {
  return (
    <section aria-labelledby="brands-title" className="border-y border-slate-200/70 bg-slate-50 py-10">
      <p id="brands-title" className="text-center text-xs font-bold tracking-[0.16em] text-slate-400 uppercase">
        Reparamos las marcas que usas
      </p>
      <div className="relative mx-auto mt-5 max-w-5xl">
        <Marquee pauseOnHover repeat={3} className="[--duration:32s] [--gap:3.5rem]">
          {BRANDS.map((b) => (
            <span key={b} className="text-2xl font-extrabold tracking-tight text-slate-300 transition-colors hover:text-slate-500 sm:text-3xl">
              {b}
            </span>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent" />
      </div>
    </section>
  )
}
