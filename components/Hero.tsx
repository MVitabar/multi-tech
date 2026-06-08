"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mouse } from "lucide-react";
import heroDevices from "../assets/hero-devices.png";

const WHATSAPP = "https://wa.me/5548999002936";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[680px] w-[680px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--glow) 40%, transparent), transparent 60%)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--primary) 35%, transparent), transparent 60%)" }}
        aria-hidden
      />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, -40, -80] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              delay: (i % 6) * 0.7,
              ease: "easeInOut",
            }}
            className="absolute h-1 w-1 rounded-full bg-primary/70"
            style={{
              left: `${(i * 53) % 100}%`,
              top: `${30 + ((i * 37) % 60)}%`,
              boxShadow: "0 0 12px var(--glow)",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-primary"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Siderópolis · SC
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-balance text-5xl font-semibold leading-[1.02] text-gradient md:text-6xl lg:text-7xl"
          >
            Assistência técnica especializada em{" "}
            <span className="relative whitespace-nowrap">
              <span className="text-glow text-primary">celulares</span>
            </span>{" "}
            e computadores
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-xl text-pretty text-base text-muted-foreground md:text-lg"
          >
            Consertos, acessórios e celulares seminovos com atendimento de excelência no
            coração de Siderópolis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.02]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Ver serviços
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <div>
              <div className="font-display text-2xl font-semibold text-foreground">4,9<span className="text-primary">/5</span></div>
              <div className="mt-0.5 uppercase tracking-[0.18em]">Avaliação</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-semibold text-foreground">+63</div>
              <div className="mt-0.5 uppercase tracking-[0.18em]">Avaliações</div>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl font-semibold text-foreground">100%</div>
              <div className="mt-0.5 uppercase tracking-[0.18em]">Garantia</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:col-span-5"
        >
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-[40px] blur-3xl"
              style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--glow) 50%, transparent), transparent 60%)" }}
              aria-hidden
            />
            <div className="float-slow">
              <img
                src={heroDevices.src}
                alt="Celular e notebook flutuando"
                width={1280}
                height={1024}
                className="h-auto w-full drop-shadow-[0_30px_60px_rgba(220,38,38,0.25)]"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex"
      >
        <Mouse className="h-3.5 w-3.5" /> Scroll
      </motion.div>
    </section>
  );
}

