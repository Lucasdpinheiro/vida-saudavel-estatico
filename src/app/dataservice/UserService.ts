import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly API = 'http://localhost:8080/users/';

  constructor(private httpClient: HttpClient) {}

  signIn(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.API}` + userId);
  }

  createAccount() {
  }
}
