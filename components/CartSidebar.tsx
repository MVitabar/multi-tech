"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, MessageCircle, ArrowLeft, QrCode, Copy, CheckCircle2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { generatePixPayload } from "@/lib/pix";
import { QRCodeSVG } from "qrcode.react";

const WHATSAPP = "https://wa.me/5548999002936";

// Dados do PIX
const PIX_KEY = "+5548996209954"; // Chave PIX Celular
const PIX_NAME = "Rodolfo Martin Vitabar Albornoz";
const PIX_CITY = "Sideropolis";

export function CartSidebar() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const [isCheckoutMode, setIsCheckoutMode] = useState(false);
  const [pixCode, setPixCode] = useState("");
  const [copied, setCopied] = useState(false);

  // Gera o código PIX quando entra no modo checkout ou o total muda
  useEffect(() => {
    if (isCheckoutMode && cartTotal > 0) {
      const code = generatePixPayload(PIX_KEY, PIX_NAME, PIX_CITY, cartTotal);
      setPixCode(code);
    }
  }, [isCheckoutMode, cartTotal]);

  // Reset do modo checkout ao fechar o carrinho
  useEffect(() => {
    if (!isCartOpen) {
      setTimeout(() => setIsCheckoutMode(false), 300);
    }
  }, [isCartOpen]);

  const handleCopyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSendWhatsApp = () => {
    const message = cartItems
      .map(
        (item) =>
          `${item.quantity}x ${item.product.name} - R$ ${(item.product.price * item.quantity).toFixed(2)}`
      )
      .join("\n");
    const totalMessage = `\n\nTotal Pago via PIX: R$ ${cartTotal.toFixed(2)}\n\nOlá! Acabei de realizar o pagamento do meu pedido. Segue o comprovante:`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(message + totalMessage)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 h-full w-full max-w-md overflow-y-auto glass-strong border-l border-border shadow-glow"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border p-6">
                {isCheckoutMode ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsCheckoutMode(false)}
                      className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 transition-colors hover:bg-surface"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                    <div>
                      <h2 className="font-display text-lg font-semibold">Pagamento PIX</h2>
                      <p className="text-sm text-muted-foreground">Escaneie o QR Code</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                      <ShoppingBag className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-display text-lg font-semibold">Carrinho</h2>
                      <p className="text-sm text-muted-foreground">
                        {cartCount} {cartCount === 1 ? "item" : "itens"}
                      </p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-surface/60 transition-colors hover:bg-surface"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-6">
                {isCheckoutMode ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col items-center text-center space-y-6"
                  >
                    <div className="rounded-2xl bg-white p-6 shadow-glow">
                      {pixCode && (
                        <QRCodeSVG
                          value={pixCode}
                          size={200}
                          bgColor={"#ffffff"}
                          fgColor={"#000000"}
                          level={"L"}
                        />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total a pagar</p>
                      <p className="font-display text-3xl font-bold text-primary">
                        R$ {cartTotal.toFixed(2)}
                      </p>
                    </div>

                    <div className="w-full space-y-3">
                      <Button
                        onClick={handleCopyPix}
                        variant={copied ? "default" : "outline"}
                        className="w-full gap-2"
                      >
                        {copied ? (
                          <>
                            <CheckCircle2 className="h-4 w-4" />
                            Código copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" />
                            Copiar código PIX (Copia e Cola)
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-muted-foreground">
                        Abra o app do seu banco, escolha PIX Copia e Cola e cole o código acima.
                      </p>
                    </div>

                    <div className="w-full pt-6 border-t border-border">
                      <p className="mb-4 text-sm font-medium">Já realizou o pagamento?</p>
                      <Button
                        onClick={handleSendWhatsApp}
                        className="w-full gap-2 shadow-glow-sm"
                        size="lg"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Enviar comprovante no WhatsApp
                      </Button>
                    </div>
                  </motion.div>
                ) : cartItems.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground/30" />
                    <p className="mt-4 text-muted-foreground">Seu carrinho está vazio</p>
                    <Button
                      onClick={() => setIsCartOpen(false)}
                      variant="outline"
                      className="mt-6"
                    >
                      Continuar comprando
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.product.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 rounded-2xl border border-border bg-surface/40 p-4"
                      >
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-20 w-20 rounded-xl object-cover"
                        />
                        <div className="flex flex-1 flex-col">
                          <h3 className="font-display text-sm font-semibold line-clamp-2">
                            {item.product.name}
                          </h3>
                          <p className="mt-1 text-sm font-bold text-primary">
                            R$ {item.product.price.toFixed(2)}
                          </p>

                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                                className="grid h-7 w-7 place-items-center rounded-lg border border-border bg-surface/60 transition-colors hover:bg-surface"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-8 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                                className="grid h-7 w-7 place-items-center rounded-lg border border-border bg-surface/60 transition-colors hover:bg-surface"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.product.id)}
                              className="grid h-7 w-7 place-items-center rounded-lg text-destructive transition-colors hover:bg-destructive/10"
                            >
                              <Trash2 className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {!isCheckoutMode && cartItems.length > 0 && (
                <div className="border-t border-border p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-display text-lg font-semibold">
                      R$ {cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <Button
                    onClick={() => setIsCheckoutMode(true)}
                    className="w-full gap-2 shadow-glow-sm"
                    size="lg"
                  >
                    <QrCode className="h-4 w-4" />
                    Pagar com PIX
                  </Button>

                  <Button
                    onClick={clearCart}
                    variant="ghost"
                    className="w-full text-destructive hover:text-destructive"
                  >
                    Limpar carrinho
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
