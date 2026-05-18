export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "acessorios" | "celulares-seminovos" | "pecas";
  image: string;
  stock: number;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = "acessorios" | "celulares-seminovos" | "pecas" | "todos";
