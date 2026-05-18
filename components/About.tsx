"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import storefront from "../assets/storefront.png";

const points = [
  "Negócio local consolidado em Siderópolis",
  "Atendimento próximo, transparente e especializado",
  "Liderado por mulher empreendedora",
  "Soluções completas para celulares e computadores",
];

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative lg:col-span-6"
        >
          <div
            className="absolute -inset-6 -z-10 rounded-[40px] blur-3xl opacity-60"
            style={{ background: "radial-gradient(ellipse at 30% 30%, color-mix(in oklab, var(--glow) 35%, transparent), transparent 60%)" }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-3xl border border-border glass-strong">
            <img
              src={storefront.src}
              alt="Loja Multi-Tech em Siderópolis"
              loading="lazy"
              className="h-[520px] w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Floating glass card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 rounded-2xl glass-strong p-4 shadow-glow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/15 ring-1 ring-primary/40">
                  <span className="font-display text-sm font-bold text-primary">M</span>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">Loja física em Siderópolis</div>
                  <div className="text-xs text-muted-foreground">Ed. Masieiro · Rua Treviso, 14</div>
                </div>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary">
                  Aberto
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow-sm" />
            Sobre a empresa
          </span>
          <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-5xl">
            Referência em assistência técnica em Siderópolis
          </h2>
          <p className="mt-5 text-pretty text-muted-foreground md:text-lg">
            A Multi-Tech é referência em assistência técnica em Siderópolis, oferecendo
            soluções completas para celulares e computadores com atendimento próximo,
            transparente e especializado.
          </p>

          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface/40 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

