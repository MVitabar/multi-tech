"use client";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { CartSidebar } from "@/components/CartSidebar";

// Show up to 4 featured products; fall back to first 4 if none are featured
const previewProducts = (() => {
  const featured = products.filter((p) => p.featured);
  return featured.length > 0 ? featured.slice(0, 4) : products.slice(0, 4);
})();

export function StorePreview() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--glow) 80%, transparent), transparent 60%)",
        }}
        aria-hidden
      />

      <CartSidebar />

      <div className="mx-auto max-w-7xl px-4">
        {/* Heading + link */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Nossa Loja"
            title="Produtos em destaque"
            subtitle="Acessórios, celulares seminovos e peças selecionadas para você."
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="shrink-0"
          >
            <Link
              href="/loja"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
            >
              <ShoppingBag className="h-4 w-4" />
              Ver loja completa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Product grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-12 overflow-hidden rounded-[28px] border border-border noise px-8 py-8 text-center md:py-10"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in oklab, var(--surface) 85%, transparent) 0%, color-mix(in oklab, var(--background) 100%, transparent) 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--glow) 70%, transparent), transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative">
            <p className="font-display text-xl font-semibold text-gradient md:text-2xl">
              Quer ver todos os produtos disponíveis?
            </p>
            <p className="mx-auto mt-2 max-w-lg text-sm text-muted-foreground md:text-base">
              Acesse nossa loja e explore todas as categorias — acessórios,
              celulares seminovos e peças.
            </p>
            <Link
              href="/loja"
              className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <ShoppingBag className="h-4 w-4" />
              Ir para a Loja
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
