export interface SignUp {
  name: string;
  email: string;
  password: string;
}
export interface Login {
  email: string;
  password: string;
}
export interface Product {
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
  description: string;
  id: string;
  quantity: undefined | number;
  productId: undefined | string;
}
export interface Cart {
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
  description: string;
  id: string | undefined;
  quantity: undefined | number;
  productId: string;
  userId: number;
}
export interface PriceSummary {
  price: number;
  discount: number;
  tax: number;
  delivery: number;
  total: number;
}
