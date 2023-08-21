import { Component } from '@angular/core';
import { Cart, Login, Product, SignUp } from '../data-type';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  showLogin: boolean = true;
  authError: string = '';
  constructor(private user: UserService) {}
  ngOnInit(): void {
    this.user.userAuthReload();
  }
  signUp(data: SignUp) {
    this.user.userSignUp(data);
  }
  login(data: Login) {
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result) => {
      console.warn(result);
      if (result) {
        this.authError = 'User not found';
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
