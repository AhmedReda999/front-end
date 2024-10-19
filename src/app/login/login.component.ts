import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicess/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';  // Input bound to username field
  password: string = '';  // Input bound to password field
  loginError: string = '';  // Variable to store error messages

  constructor(private loginService: LoginService, private router: Router) {}

  // Triggered when form is submitted
  onSubmit() {
    this.loginService.login(this.username, this.password).subscribe(
      (res) => {
        if (res.success) {
          this.loginService.setToken(res.token);  // Store the JWT token
          this.router.navigate(['/dashboard']);  // Navigate to dashboard on success
        } else {
          this.loginError = res.message;  // Show error message from back-end
        }
      },
      (err) => {
        this.loginError = 'Login failed. Please try again.';  // Default error handling
      }
    );
  }
}
