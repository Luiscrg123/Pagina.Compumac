import { MessageCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BlurFade } from "@/components/ui/blur-fade"
import { SectionHeading } from "@/components/site/section-heading"
import { FAQS, whatsappLink } from "@/lib/site"

export function Faq() {
  return (
    <section id="preguntas" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <SectionHeading align="left" eyebrow="Preguntas frecuentes" title="Lo que más nos preguntan" />
          <BlurFade inView delay={0.1}>
            <div className="mt-8 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-200/70">
              <p className="font-bold text-ink">¿Tienes otra duda?</p>
              <p className="mt-1 text-sm text-slate-500">Escríbenos y te respondemos por WhatsApp.</p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener"
                className="mt-4 inline-flex items-center gap-2 font-bold text-brand hover:underline"
              >
                <MessageCircle className="size-4.5" /> Preguntar por WhatsApp
              </a>
            </div>
          </BlurFade>
        </div>

        <BlurFade inView delay={0.1}>
          <Accordion type="single" collapsible defaultValue="item-0" className="gap-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 transition-shadow not-last:border-b data-[state=open]:shadow-[0_12px_30px_-15px_rgb(15_23_42/0.25)]"
              >
                <AccordionTrigger className="py-5 text-base font-bold text-ink hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-[0.97rem] leading-relaxed text-slate-600">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  )
}
