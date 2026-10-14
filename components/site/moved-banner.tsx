import { ArrowRight, MapPin } from "lucide-react"
import { MAPS_URL } from "@/lib/site"

// Aviso de mudanza sobre el header. Quitarlo de header.tsx cuando ya no haga falta.
export function MovedBanner() {
  return (
    <div data-lugar="franja_mudanza" className="bg-brand text-white">
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener"
        className="group mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-2 text-[0.8rem] font-semibold sm:text-sm"
      >
        <MapPin className="size-4 shrink-0" />
        <span>
          <span className="font-extrabold">¡Nos mudamos!</span> Ahora estamos en{" "}
          <span className="font-extrabold">Jr. Huánuco 804</span>
          <span className="hidden sm:inline">, Piura</span>
        </span>
        <span className="inline-flex shrink-0 items-center gap-1 underline-offset-4 group-hover:underline">
          <span className="hidden sm:inline">· Cómo llegar</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>
    </div>
  )
}
