import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/dataservice/UserService';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  openCreateNewUserModal = false;

  fullName?: string;
  userId?: string;

  fullNameWarn: string = '';
  idWarn: string = '';

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  signInValidation() {
    if (this.fullName && this.userId) {
      this.userService
      .signIn(Number.parseInt(this.userId))
      .subscribe(user => { console.log(user) })
    }
    this.fullNameWarn = this.fullName? '': 'Please, enter your account name.';
    this.idWarn = this.userId? '': 'Please, enter your account id.';
  };
  
  createNewAccount() {
    this.openCreateNewUserModal = true;
  }

  closeNewAccountModal() {
    this.openCreateNewUserModal = false;
  }
};
