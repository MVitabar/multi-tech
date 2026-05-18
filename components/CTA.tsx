"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.me/5548999002936";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative isolate overflow-hidden rounded-[36px] border border-border noise"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--surface) 90%, transparent) 0%, color-mix(in oklab, var(--background) 100%, transparent) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full opacity-70 blur-3xl"
            style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--glow) 60%, transparent), transparent 60%)" }}
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" aria-hidden />

          <div className="relative px-6 py-16 text-center md:px-16 md:py-24">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mx-auto max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] text-gradient md:text-6xl"
            >
              Seu celular ou computador precisa de manutenção?
            </motion.h2>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-muted-foreground md:text-lg">
              Fale agora com a Multi-Tech e receba um atendimento rápido, transparente e profissional.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-5 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] pulse-glow md:text-lg"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <MessageCircle className="h-6 w-6" />
                CHAMAR NO WHATSAPP
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

