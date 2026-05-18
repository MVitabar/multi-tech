"use client";
import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  HandCoins,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  { icon: Award, title: "Atendimento com excelência", desc: "Atenção personalizada do diagnóstico à entrega." },
  { icon: HandCoins, title: "Preço justo", desc: "Orçamento transparente, sem surpresas." },
  { icon: Zap, title: "Serviço rápido", desc: "Reparos ágeis sem comprometer a qualidade." },
  { icon: BadgeCheck, title: "Técnicos especializados", desc: "Profissionais com experiência comprovada." },
  { icon: Sparkles, title: "Transparência", desc: "Honestidade em cada etapa do processo." },
  { icon: ShieldCheck, title: "Garantia de qualidade", desc: "Peças originais e garantia em todos os serviços." },
];

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Por que Multi-Tech"
          title="Tecnologia, confiança e cuidado"
          subtitle="Combinamos atendimento próximo com padrões técnicos de uma marca premium."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow-sm glow-border"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--glow) 60%, transparent), transparent 60%)" }}
                aria-hidden
              />
              <div className="relative">
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 ring-1 ring-primary/30 transition-all group-hover:bg-primary/20 group-hover:ring-primary/60">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

