import { Component, Input } from '@angular/core';
import { Cart, Product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart-bt',
  templateUrl: './cart-bt.component.html',
  styleUrls: ['./cart-bt.component.css'],
})
export class CartBtComponent {
  @Input() productGt: any;
  removeCart: boolean = false;
  productData: undefined | Product;
  cartData: Product | undefined;
  productQuantity: number = 1;
  constructor(private product: ProductService) {}
  ngOnInit(): void {
    let productId = this.productGt.id;
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        this.productData = result;
        let cartData = localStorage.getItem('localCart');
        if (productId && cartData) {
          let items = JSON.parse(cartData);
          items = items.filter((item: Product) => productId == item.id);
          if (items.length) {
            this.removeCart = true;
          } else {
            this.removeCart = false;
          }
        }
        let user = localStorage.getItem('user');
        if (user) {
          let userId = user && JSON.parse(user).id;
          this.product.getCartList(userId);
          this.product.cartData.subscribe((result) => {
            let item = result.filter(
              (item: Product) => productId == item.productId
            );
            if (item.length) {
              this.cartData = item[0];
              this.removeCart = true;
            }
          });
        }
      });
  }
  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.product.localAddToCart(this.productData);
        this.removeCart = true;
      } else {
        let user = localStorage.getItem('user');
        let userId = user && JSON.parse(user).id;
        let cartData: Cart = {
          ...this.productData,
          userId,
          productId: this.productData.id,
        };
        delete cartData.id;
        this.product.addToCart(cartData).subscribe((result) => {
          if (result) {
            this.product.getCartList(userId);
            this.removeCart = true;
          }
        });
      }
    }
  }
  removeToCart(productId: string) {
    if (!localStorage.getItem('user')) {
      this.product.removeItemFromCart(productId);
      this.removeCart = false;
    } else {
      this.removeCart = false;
      let user = localStorage.getItem('user');
      let userId = user && JSON.parse(user).id;
      this.cartData &&
        this.product.removeToCart(this.cartData.id).subscribe((result) => {
          if (result) {
            this.product.getCartList(userId);
          }
        });
    }
  }
}
