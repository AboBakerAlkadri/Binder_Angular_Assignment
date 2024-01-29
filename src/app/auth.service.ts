import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { userData } from '../api/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): { token: string } | null {
    const user = userData.find(u => u.name === username && u.password === password);
    if (user) {
      return { token: user.token };
    } else {
      return null;
    }
  }
}
