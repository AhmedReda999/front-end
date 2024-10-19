import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../servicess/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {}

  // CanActivate checks if the user is NOT authenticated
  canActivate(): boolean {
    if (!this.loginService.isLoggedIn()) {
      return true;  // Allow route access if the user is NOT logged in
    } else {
      this.router.navigate(['/dashboard']);  // Redirect to dashboard if already authenticated
      return false;  // Block access to the route
    }
  }
}
