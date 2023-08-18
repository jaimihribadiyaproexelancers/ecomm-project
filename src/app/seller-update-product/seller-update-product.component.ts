import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private product: ProductService) {}
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        this.productData = data;
      });
  }
  submit(data: any) {}
}
