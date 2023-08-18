import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent {
  updateProductMessage: undefined | string;
  productData: undefined | Product;
  constructor(
    private route: ActivatedRoute,
    private product: ProductService,
    private router: Router
  ) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        this.productData = data;
      });
  }
  submit(data: Product) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.updateProductMessage = 'Product has updated';
      }
    });
    setTimeout(() => {
      this.updateProductMessage = undefined;
      this.router.navigate(['seller-home']);
    }, 3000);
  }
}
