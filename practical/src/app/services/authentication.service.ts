import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  login(email: string, password: string, role: string) {
    return this.http.post(
      'https://lumen-lts.brainvire.dev/admin/api/v1/oauth/signin',
      {
        email: email,
        password: password,
        role: role,
      }
    );
  }
}
