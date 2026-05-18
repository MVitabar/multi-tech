"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";

const links = [

  { href: "/#servicos", label: "Serviços" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#contato", label: "Contato" },
  { href: "/loja", label: "Loja" },
];

const WHATSAPP = "https://wa.me/5548999002936";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 md:px-6 ${scrolled ? "glass-strong shadow-glow-sm" : "glass"
            }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/40">
              <span className="absolute inset-0 rounded-xl bg-primary/20 blur-md" />
              <span className="relative font-display text-base font-bold text-primary">M</span>
            </span>
            <div className="leading-none">
              <div className="font-display text-sm font-semibold tracking-tight">Multi-Tech</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Assistência Técnica
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 transition-colors hover:bg-surface"
              aria-label="Carrinho"
            >
              <ShoppingBag className="h-5 w-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-glow-sm">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow-sm transition-all hover:shadow-glow"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 transition-colors hover:bg-surface"
              aria-label="Carrinho"
            >
              <ShoppingBag className="h-5 w-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground shadow-glow-sm">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              aria-label="Menu"
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 overflow-hidden rounded-2xl glass-strong p-3 md:hidden"
          >
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-foreground/90 hover:bg-primary/10"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                Chamar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

