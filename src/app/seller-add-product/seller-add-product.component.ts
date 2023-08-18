import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent {
  addProductMessage: string | undefined;
  constructor(private product: ProductService,private router:Router) {}
  ngOnInit(): void {}

  submit(data: Product): void {
    this.product.addProduct(data).subscribe((result) => {
      if (result) {
        this.addProductMessage = 'Product has been added';
      }
      setTimeout(() => {
        this.addProductMessage = undefined;
        this.router.navigate(['seller-home']);
      }, 3000);
    });
  }
}
