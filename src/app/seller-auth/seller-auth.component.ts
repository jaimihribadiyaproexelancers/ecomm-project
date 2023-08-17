import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  constructor(private seller: SellerService) {}
  ngOnInit(): void {}
  signUp(data: object): void {    
    this.seller.userSignUp(data).subscribe((result) => {
      console.warn(result);
    });
  }
}
