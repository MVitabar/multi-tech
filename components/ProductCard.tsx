"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Plus } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/use-cart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const categoryLabels = {
    acessorios: "Acessório",
    "celulares-seminovos": "Seminovo",
    pecas: "Peça",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-3xl glass p-4 transition-all hover:-translate-y-1 glow-border"
    >
      <div
        className="pointer-events-none absolute inset-x-0 -top-32 h-64 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: "radial-gradient(ellipse at center top, color-mix(in oklab, var(--glow) 50%, transparent), transparent 60%)" }}
        aria-hidden
      />
      
      <div className="relative">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface/60">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.featured && (
            <div className="absolute top-3 left-3 rounded-full bg-primary/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground backdrop-blur">
              Destaque
            </div>
          )}
          <div className="absolute top-3 right-3 rounded-full bg-background/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground backdrop-blur">
            {categoryLabels[product.category]}
          </div>
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="font-display text-lg font-semibold leading-tight line-clamp-2">
            {product.name}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {product.description}
          </p>
          
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="font-display text-2xl font-bold text-primary">
                R$ {product.price.toFixed(2)}
              </div>
              {product.stock < 5 && (
                <div className="mt-1 text-[10px] text-destructive">
                  Apenas {product.stock} unidades
                </div>
              )}
            </div>
            
            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className="group/btn relative inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:scale-105 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Adicionar</span>
              <Plus className="h-3 w-3 transition-transform group-hover/btn:rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

