import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';
import { faTrash,faFilePen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent {
  productList: undefined | Product[];
  productMessage: undefined | string;
  iconTr=faTrash;
  iconUp=faFilePen;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.pList();
  }
  
  deleteProduct(id: string | number) {
    console.log(id);
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';
        this.pList();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  pList() {
    this.product.productList().subscribe((result) => {
      this.productList = result;
    });
  }
}
