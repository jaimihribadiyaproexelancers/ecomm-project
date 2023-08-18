import { Component } from '@angular/core';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent {
  updateProductMessage: undefined | string;
  constructor() {}
  ngOnInit(): void {}
  submit(data: any) {}
}
