"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const reviews = [
  { name: "Carla M.", text: "Atendimento nota 10. Trocaram a tela do meu celular no mesmo dia, ficou perfeito.", rating: 5 },
  { name: "Eduardo R.", text: "Excelente preço e muito honestidade no diagnóstico. Recomendo demais.", rating: 5 },
  { name: "Patrícia S.", text: "Equipe simpática e profissional. Meu notebook voltou a funcionar como novo.", rating: 5 },
  { name: "Marcos L.", text: "Serviço rápido e confiável. Já é minha assistência de confiança em Siderópolis.", rating: 5 },
  { name: "Juliana F.", text: "Acessórios de qualidade e bom preço. Ambiente acolhedor.", rating: 5 },
  { name: "Rafael T.", text: "Transparência total no orçamento. Saí muito satisfeito.", rating: 5 },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          subtitle="A reputação que conquistamos vem do cuidado com cada cliente."
        />

        {/* Rating block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 flex max-w-md items-center justify-center gap-6 rounded-3xl glass-strong p-6 shadow-glow-sm"
        >
          <div className="text-center">
            <div className="font-display text-5xl font-semibold text-gradient">4,9</div>
            <div className="mt-1 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
          </div>
          <div className="h-14 w-px bg-border" />
          <div>
            <div className="font-display text-2xl font-semibold">63 avaliações</div>
            <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Clientes reais
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <Quote className="h-7 w-7 text-primary/40" />
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">{r.text}</p>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-xs font-semibold text-primary ring-1 ring-primary/30">
                    {r.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <span className="text-sm font-medium">{r.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

