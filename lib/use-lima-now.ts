"use client"

import { useSyncExternalStore } from "react"
import { limaNow, type LimaNow } from "./hours"

// La hora solo existe en el navegador: en el HTML estatico vale null
// (se muestra el horario generico) y en el cliente se actualiza cada minuto.
function subscribe(onChange: () => void) {
  const id = setInterval(onChange, 30_000)
  return () => clearInterval(id)
}

const getSnapshot = () => Math.floor(Date.now() / 60_000)
const getServerSnapshot = () => null

export function useLimaNow(): LimaNow | null {
  const minute = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return minute === null ? null : limaNow(new Date(minute * 60_000))
}
