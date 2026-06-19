import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe((result: any) => {

      if (result.token) {
        this.authService.saveToken(result.token);
        alert('Login Successful');
      }

    });
  }
}