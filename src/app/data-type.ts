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
