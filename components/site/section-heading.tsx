import { cn } from "@/lib/utils"
import { BlurFade } from "@/components/ui/blur-fade"

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  dark = false,
}: {
  eyebrow: string
  title: React.ReactNode
  children?: React.ReactNode
  align?: "center" | "left"
  dark?: boolean
}) {
  return (
    <BlurFade inView className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("text-xs font-extrabold tracking-[0.18em] uppercase", dark ? "text-red-300" : "text-brand")}>
        {eyebrow}
      </p>
      <h2 className={cn("mt-3 text-3xl leading-tight font-extrabold tracking-[-0.03em] sm:text-[2.6rem]", dark && "text-white")}>
        {title}
      </h2>
      {children && <div className={cn("mt-4 text-lg leading-relaxed", dark ? "text-slate-300" : "text-slate-500")}>{children}</div>}
    </BlurFade>
  )
}
