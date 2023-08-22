import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, Product } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartData = new EventEmitter<Product[] | []>();
  constructor(private http: HttpClient, private router: Router) {}
  addProduct(data: Product) {
    return this.http.post(`http://localhost:3000/products`, data);
  }
  productList() {
    return this.http.get<Product[]>(`http://localhost:3000/products`);
  }
  deleteProduct(id: string | number) {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
  getProduct(id: string) {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product: Product) {
    return this.http.put<Product>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  popularProducts() {
    return this.http.get<Product[]>(`http://localhost:3000/products?_limit=2`);
  }
  trendyProducts() {
    return this.http.get<Product[]>(`http://localhost:3000/products?_limit=6`);
  }
  searchProducts(query: string) {
    return this.http.get<Product[]>(
      `http://localhost:3000/products?_limit=5&q=${query}`
    );
  }
  localAddToCart(data: Product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }
  removeItemFromCart(productId: number | string) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Product[] = JSON.parse(cartData);
      items = items.filter((item: Product) => productId !== item.id);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  }
  addToCart(cartData: Cart) {
    return this.http.post(`http://localhost:3000/cart`, cartData);
  }
  getCartList(userId: number) {
    return this.http
      .get<Product[]>(`http://localhost:3000/cart?usersId=${userId}`, {
        observe: 'response',
      })
      .subscribe((result) => {
        if (result && result.body) {
          this.cartData.emit(result.body);
        }
      });
  }
}
