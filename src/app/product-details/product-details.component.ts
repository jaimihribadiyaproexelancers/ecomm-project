import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  productData: undefined | Product;
  productQuantity: number = 1;
  removeCart = false;
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
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
      });
  }
  handleQuantity(val: string) {
    if (val === 'plus') {
      this.productQuantity += 1;
    }
    if (val === 'min' && this.productQuantity > 1) {
      this.productQuantity -= 1;
    }
  }
  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (!localStorage.getItem('user')) {
        this.product.localAddToCart(this.productData);
        this.removeCart = true;
      }
    }
  }
  removeToCart(productId: string) {
    this.product.removeItemFromCart(productId);
    this.removeCart = false;
  }
}
