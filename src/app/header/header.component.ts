import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  menuType: string = 'default';
  sellerName: string = '';
  userName: string = '';
  searchResult: undefined | Product[];
  constructor(private route: Router, private product: ProductService) {}
  ngOnInit(): void {
    this.route.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          if (localStorage.getItem('seller')) {
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            this.sellerName = sellerData.email;
            this.menuType = 'seller';
          }
        } else if (localStorage.getItem('user')) {
          if (localStorage.getItem('user')) {
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore);
            this.userName = userData.email;
            this.menuType = 'user';
          }
        } else {
          this.menuType = 'default';
        }
      }
    });
  }
  logout(roll: string) {
    if (roll === 'user') {
      localStorage.removeItem('user');
      this.route.navigate(['/user-auth']);
    } else if ('seller') {
      localStorage.removeItem('seller');
      this.route.navigate(['/']);
    }
  }
  searchProduct(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;
      this.product.searchProducts(element.value).subscribe((result) => {
        this.searchResult = result;
      });
    }
  }
  hideSearch() {
    this.searchResult = undefined;
  }
  redirectToDetails(id: string) {
    this.route.navigate([`/details/${id}`]);
  }
  searchSubmit(val: string) {
    this.route.navigate([`search/${val}`]);
  }
}
