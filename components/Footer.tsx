"use client";
import { Instagram, Music2, MessageCircle, Phone } from "lucide-react";

const WHATSAPP = "https://wa.me/5548999002936";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/40 backdrop-blur-xl">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--glow), transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[600px] -translate-x-1/2 opacity-30 blur-3xl"
        style={{ background: "radial-gradient(ellipse, var(--glow), transparent 60%)" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/40">
              <span className="font-display text-base font-bold text-primary">M</span>
            </span>
            <div>
              <div className="font-display text-base font-semibold">Multi-Tech</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Assistência Técnica
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            Assistência técnica de celulares, computadores e acessórios em Siderópolis · SC.
            Atendimento de excelência, transparência e garantia de qualidade.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/multi.techsideropolis/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/60 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@multitechsidera"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/60 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Music2 className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-surface/60 transition-colors hover:border-primary/40 hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Navegação</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#servicos" className="text-foreground/80 hover:text-primary">Serviços</a></li>
            <li><a href="#sobre" className="text-foreground/80 hover:text-primary">Sobre</a></li>
            <li><a href="#depoimentos" className="text-foreground/80 hover:text-primary">Depoimentos</a></li>
            <li><a href="#galeria" className="text-foreground/80 hover:text-primary">Galeria</a></li>
            <li><a href="#contato" className="text-foreground/80 hover:text-primary">Contato</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Contato</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="text-foreground/80">Ed. Masieiro · Rua Treviso, 14<br/>Centro · Siderópolis · SC</li>
            <li>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
                <MessageCircle className="h-4 w-4" /> (48) 99900-2936
              </a>
            </li>
            <li>
              <a href="tel:+554834787544" className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary">
                <Phone className="h-4 w-4" /> (48) 3478-7544
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Multi-Tech Assistência Técnica. Todos os direitos reservados.</div>
          <div>Siderópolis · SC · Brasil</div>
        </div>
      </div>
    </footer>
  );
}

