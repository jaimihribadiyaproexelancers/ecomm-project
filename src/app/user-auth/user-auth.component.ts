import { Component } from '@angular/core';
import { Cart, Login, Product, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  showLogin = true;
  constructor(private user: UserService) {}
  ngOnInit(): void {}
  signUp(data: SignUp) {
    this.user.userSignUp(data);
  }
  login(data: Login) {
    
  }
  openLogin() {
    this.showLogin = true;
  }
  openSignUp() {
    this.showLogin = false;
  }
}
