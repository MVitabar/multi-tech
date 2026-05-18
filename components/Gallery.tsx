"use client";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import g1 from "../assets/gallery-1.jpg";
import g2 from "../assets/gallery-2.jpg";
import g3 from "../assets/gallery-3.jpg";
import g4 from "../assets/gallery-4.jpg";
import g5 from "../assets/gallery-5.jpg";
import storefront from "../assets/storefront.png";

const images = [
  { src: g1.src, alt: "Reparo de celular", className: "row-span-2" },
  { src: g4.src, alt: "Celulares seminovos" },
  { src: g2.src, alt: "Acessórios" },
  { src: storefront.src, alt: "Fachada Multi-Tech", className: "row-span-2" },
  { src: g3.src, alt: "Manutenção de notebook" },
  { src: g5.src, alt: "Diagnóstico técnico" },
];

export function Gallery() {
  return (
    <section id="galeria" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Galeria"
          title="Bastidores da nossa bancada"
          subtitle="Um olhar real sobre nosso espaço, equipe e dispositivos atendidos."
        />

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${img.className ?? ""}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-80" />
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: "inset 0 0 60px color-mix(in oklab, var(--glow) 40%, transparent)" }} />
              <span className="absolute bottom-3 left-3 rounded-full bg-background/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
                {img.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

