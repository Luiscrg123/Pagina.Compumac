"use client"

import { useSyncExternalStore } from "react"
import { DEVICES, type DeviceKey } from "./site"

// Equipo pedido en la URL, para que un anuncio aterrice en su contenido:
// compumacperu.com/?equipo=laptop#reparaciones abre la pestaña de laptops.
// En el HTML estatico vale null y en el cliente se lee de la URL.
const subscribe = () => () => {}

function getSnapshot(): DeviceKey | null {
  const value = new URLSearchParams(window.location.search).get("equipo")
  return value && Object.hasOwn(DEVICES, value) ? (value as DeviceKey) : null
}

const getServerSnapshot = () => null

export function useUrlDevice(): DeviceKey | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
