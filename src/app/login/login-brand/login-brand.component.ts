import { Component } from '@angular/core';
import { title, moto } from 'src/constants';

@Component({
  selector: 'app-login-brand',
  templateUrl: './login-brand.component.html',
  styleUrls: ['./login-brand.component.scss']
})
export class LoginBrandComponent {
  title: string = title;
  moto: string = moto;
}
