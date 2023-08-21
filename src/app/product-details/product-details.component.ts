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
  constructor(
    private activeRoute: ActivatedRoute,
    private product: ProductService
  ) {}
  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        this.productData = result;
      });
  }
}
