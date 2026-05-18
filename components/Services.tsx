"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Smartphone, Laptop, Headphones, Recycle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const WHATSAPP = "https://wa.me/5548999002936";

const services = [
  {
    icon: Smartphone,
    title: "Assistência para celulares",
    desc: "Troca de tela, bateria, conector de carga, placa e mais — todas as marcas.",
    tags: ["Tela", "Bateria", "Placa"],
  },
  {
    icon: Laptop,
    title: "Assistência para computadores",
    desc: "Manutenção, formatação, upgrades de SSD e RAM, limpeza e diagnóstico.",
    tags: ["Notebooks", "Desktops", "Upgrades"],
  },
  {
    icon: Headphones,
    title: "Venda de acessórios",
    desc: "Capas, películas, carregadores, cabos e fones com curadoria de qualidade.",
    tags: ["Capas", "Cabos", "Fones"],
  },
  {
    icon: Recycle,
    title: "Celulares seminovos",
    desc: "Aparelhos revisados, testados e com garantia. Custo-benefício real.",
    tags: ["Revisados", "Garantia", "Testados"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Serviços"
          title="Tudo o que seu dispositivo precisa"
          subtitle="Quatro frentes para manter você sempre conectado, sem complicações."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:-translate-y-1.5 glow-border"
            >
              <div
                className="pointer-events-none absolute inset-x-0 -top-32 h-64 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                style={{ background: "radial-gradient(ellipse at center top, color-mix(in oklab, var(--glow) 50%, transparent), transparent 60%)" }}
                aria-hidden
              />
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between">
                  <div className="inline-grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 ring-1 ring-primary/30 transition-all group-hover:scale-110 group-hover:ring-primary/60">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:rotate-12" />
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {s.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Solicitar orçamento
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

