"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const WHATSAPP = "https://wa.me/5548999002936";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Rua+Treviso+14+Centro+Sider%C3%B3polis+SC";
const MAPS_EMBED =
  "https://www.google.com/maps?q=Rua+Treviso+14+Centro+Sider%C3%B3polis+SC&z=16&output=embed";

const items = [
  { icon: MapPin, label: "Endereço", value: "Ed. Masieiro · Rua Treviso, 14 — Centro\nSiderópolis · SC · 88860-000" },
  { icon: MessageCircle, label: "WhatsApp", value: "(48) 99900-2936", href: WHATSAPP },
  { icon: Phone, label: "Telefone", value: "(48) 3478-7544", href: "tel:+554834787544" },
  { icon: Clock, label: "Horários", value: "Seg–Sex · 09:00 às 18:00\nSábado · Consulte pelo WhatsApp" },
];

export function Contact() {
  return (
    <section id="contato" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Contato"
          title="Estamos no centro de Siderópolis"
          subtitle="Venha nos visitar ou fale com a gente em poucos cliques."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3 lg:col-span-5"
          >
            {items.map((it) => {
              const Wrap = (it.href ? "a" : "div") as React.ElementType;
              return (
                <Wrap
                  key={it.label}
                  {...(it.href ? { href: it.href, target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex items-start gap-4 rounded-2xl glass p-5 transition-all hover:-translate-y-0.5 hover:shadow-glow-sm"
                >
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/30 transition-colors group-hover:bg-primary/20">
                    <it.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="mt-1 whitespace-pre-line text-sm font-medium leading-relaxed">
                      {it.value}
                    </div>
                  </div>
                </Wrap>
              );
            })}

            <a
              href={MAPS}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Abrir no Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-3xl border border-border lg:col-span-7"
          >
            <div
              className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-40"
              style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--glow) 40%, transparent), transparent 60%)" }}
              aria-hidden
            />
            <iframe
              title="Mapa Multi-Tech Siderópolis"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[480px] w-full border-0 grayscale-[0.4] contrast-[1.1]"
              style={{ filter: "invert(0.92) hue-rotate(180deg) saturate(1.2)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

