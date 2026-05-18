import { useState, useEffect } from "react";
import { CartItem, Product } from "@/types/product";

const CART_STORAGE_KEY = "multitech-cart";

// Global state outside the hook to share across all components
let globalCartItems: CartItem[] = [];
let globalIsCartOpen = false;
let initialized = false;

const listeners = new Set<() => void>();

function notify() {
  if (typeof window !== "undefined") {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(globalCartItems));
  }
  listeners.forEach((l) => l());
}

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(globalCartItems);
  const [isCartOpen, setIsCartOpen] = useState(globalIsCartOpen);

  useEffect(() => {
    if (!initialized && typeof window !== "undefined") {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        try {
          globalCartItems = JSON.parse(saved);
        } catch (error) {
          console.error("Failed to parse cart from localStorage:", error);
        }
      }
      initialized = true;
      setCartItems(globalCartItems);
    }

    const listener = () => {
      setCartItems(globalCartItems);
      setIsCartOpen(globalIsCartOpen);
    };
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const addToCart = (product: Product, quantity: number = 1) => {
    const existingItem = globalCartItems.find((item) => item.product.id === product.id);
    if (existingItem) {
      globalCartItems = globalCartItems.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      globalCartItems = [...globalCartItems, { product, quantity }];
    }
    globalIsCartOpen = true;
    notify();
  };

  const removeFromCart = (productId: string) => {
    globalCartItems = globalCartItems.filter((item) => item.product.id !== productId);
    notify();
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    globalCartItems = globalCartItems.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    notify();
  };

  const clearCart = () => {
    globalCartItems = [];
    notify();
  };

  const setOpen = (isOpen: boolean) => {
    globalIsCartOpen = isOpen;
    notify();
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isCartOpen,
    setIsCartOpen: setOpen,
  };
}
