"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CartSidebar } from "@/components/CartSidebar";
import { SectionHeading } from "@/components/SectionHeading";
import { products } from "@/data/products";
import { Category } from "@/types/product";
import { Button } from "@/components/ui/button";

export default function Loja() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("todos");

  const categories: { value: Category; label: string }[] = [
    { value: "todos", label: "Todos" },
    { value: "acessorios", label: "Acessórios" },
    { value: "celulares-seminovos", label: "Celulares Seminovos" },
    { value: "pecas", label: "Peças" },
  ];

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <CartSidebar />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading
              eyebrow="Nossa Loja"
              title="Produtos de qualidade para você"
              subtitle="Encontre acessórios, celulares seminovos e peças com a garantia Multi-Tech."
            />
          </div>
        </section>

        {/* Category Filters */}
        <section className="relative py-8">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  variant={selectedCategory === cat.value ? "default" : "outline"}
                  className={
                    selectedCategory === cat.value
                      ? "bg-primary text-primary-foreground shadow-glow-sm"
                      : ""
                  }
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        {selectedCategory === "todos" && featuredProducts.length > 0 && (
          <section className="relative py-8">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-6 font-display text-2xl font-semibold text-gradient">
                Destaques
              </h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Products */}
        <section className="relative py-8 pb-24">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="mb-6 font-display text-2xl font-semibold text-gradient">
              {selectedCategory === "todos" ? "Todos os Produtos" : categories.find((c) => c.value === selectedCategory)?.label}
            </h2>
            {filteredProducts.length === 0 ? (
              <div className="flex min-h-[300px] items-center justify-center rounded-3xl glass p-12 text-center">
                <div>
                  <p className="text-lg text-muted-foreground">
                    Nenhum produto encontrado nesta categoria.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
