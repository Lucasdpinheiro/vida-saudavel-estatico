import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from 'src/app/dataservice/UserService';
import { User } from 'src/app/types';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [UserService]
})
export class LoginFormComponent {

  @Input() visible: boolean = false;
  @Output() closeEvent = new EventEmitter<void>();

  user: User = {
    fullName: '',
    birthDay: undefined,
    weight: 0,
    height: 0,
    sex: '',
    activityLevel: ''
  };

  warnings = {
    fullName: 'Please, enter your account name.',
    birthDay: 'Please, select your birth day.',
    weight: 'Please, enter your weight.',
    height: 'Please, enter your height.',
    sex: 'Please select your sex.',
    activityLevel: 'Please select your activity level.'
  };

  sex = [
    { display: 'Masculino', value: 'MALE' },
    { display: 'Feminino', value: 'FEMALE' }
  ];

  activityLevel = [
    { display: 'Sedentário', value: 'SEDENTARY' },
    { display: 'Levemente Ativo', value: 'LIGHTLY_ACTIVE' },
    { display: 'Moderadamente Ativo', value: 'MODERATELY_ACTIVE' },
    { display: 'Altamente Ativo', value: 'HIGHLY_ACTIVE' },
    { display: 'Profissional', value: 'PROFESSIONAL' }
  ];

  constructor(private userService: UserService) { };

  createNewUser() {
  };

  closeForm() {
    this.closeEvent.emit();
  };

};
