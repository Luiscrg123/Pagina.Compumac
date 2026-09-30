"use client"

import { cn } from "@/lib/utils"
import { useLimaNow } from "@/lib/use-lima-now"
import { HOURS_ROWS } from "@/lib/site"

export function HoursTable() {
  const today = useLimaNow()?.day ?? null

  return (
    <table className="mt-2 w-full text-sm">
      <tbody>
        {HOURS_ROWS.map((row) => {
          const isToday = today !== null && row.days.includes(today)
          return (
            <tr key={row.label} className={cn(isToday ? "font-bold text-ink" : "text-slate-500")}>
              <td className="py-1 pr-4">
                {row.label}
                {isToday && <span className="ml-2 rounded-full bg-brand-50 px-2 py-0.5 text-[0.7rem] font-bold text-brand">Hoy</span>}
              </td>
              <td className="py-1 text-right">{row.value}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
