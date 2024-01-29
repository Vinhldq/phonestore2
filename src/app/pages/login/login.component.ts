import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {SharedModule} from "../../modules/shared.modules";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private authService: AuthService) {
  }
  login() {
    this.authService.SignInWithGoogle();
  }
}
