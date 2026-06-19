import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  saveToken(token: string) {
    localStorage.setItem('travlr-token', token);
  }

  getToken() {
    return localStorage.getItem('travlr-token');
  }

  logout() {
    localStorage.removeItem('travlr-token');
  }

  isLoggedIn() {
    return !!this.getToken();
  }
}