import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const result = this.authService.login(this.username, this.password);
    if (result) {
      localStorage.setItem('token', result.token); // Store the token
      alert('Login Successful');
      this.router.navigate(['/homepage']);
    } else {
      this.errorMessage = 'Invalid credentials';
      // Handle login failure
    }
  }
}
