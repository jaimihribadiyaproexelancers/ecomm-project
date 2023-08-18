import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, Login } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
})
export class SellerAuthComponent {
  showLogin = false;
  authError: string = '';
  constructor(private seller: SellerService, private router: Router) {}
  ngOnInit(): void {
    this.seller.reloadSeller();
  }
  signUp(data: SignUp): void {
    this.seller.userSignUp(data);
    /* this.seller.userSignUp(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['seller-home']);
      }
    }); */
  }
  login(data: Login): void {
    this.authError = '';
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = `Email or Password is not current`;
      } else {
      }
    });
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
