import { Component } from '@angular/core';
import { SignUp } from '../data-type';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  constructor() {}
  ngOnInit(): void {}
  signUp(data: SignUp) {}
}
