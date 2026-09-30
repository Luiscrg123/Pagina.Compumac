import { SCHEDULE } from "./site"

const DAY_NAMES = ["el domingo", "el lunes", "el martes", "el miércoles", "el jueves", "el viernes", "el sábado"]

export type LimaNow = { day: number; minutes: number }

export function limaNow(date = new Date()): LimaNow {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Lima",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0"
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"))
  return { day, minutes: (parseInt(get("hour"), 10) % 24) * 60 + parseInt(get("minute"), 10) }
}

export function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  const h12 = h % 12 === 0 ? 12 : h % 12
  return `${h12}:${m < 10 ? "0" : ""}${m} ${h < 12 ? "a. m." : "p. m."}`
}

export function openStatus(now: LimaNow): { open: boolean; text: string } {
  const today = SCHEDULE[now.day]
  if (today && now.minutes >= today[0] && now.minutes < today[1]) {
    return { open: true, text: `Abierto ahora · cierra a las ${formatTime(today[1])}` }
  }
  if (today && now.minutes < today[0]) {
    return { open: false, text: `Cerrado · abre hoy a las ${formatTime(today[0])}` }
  }
  for (let i = 1; i <= 7; i++) {
    const d = (now.day + i) % 7
    const slot = SCHEDULE[d]
    if (slot) {
      return { open: false, text: `Cerrado · abre ${i === 1 ? "mañana" : DAY_NAMES[d]} a las ${formatTime(slot[0])}` }
    }
  }
  return { open: false, text: "" }
}
