import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/auth';  // API base URL
  private tokenKey = 'auth-token';  // Key for storing JWT token in local storage

  constructor(private http: HttpClient) {}

  // Function to send login data to the back-end
  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  // Save JWT token in local storage
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Retrieve JWT token from local storage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Check if the user is logged in by verifying if a token exists
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Log out the user by removing the token
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
