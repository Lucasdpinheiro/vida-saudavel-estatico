import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor(private httpClient: HttpClient) {}

  signIn () {}
  createAccount () {}   
}