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
}
export interface Cart {
  name: string;
  price: number;
  category: string;
  color: string;
  image: string;
  description: string;
  id: number | undefined;
  quantity: undefined | number;
  productId: number;
  userId: number;
}
