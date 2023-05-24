import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  onLoginSubmit() {
    const f = this.loginForm.value;

    if (f.password != null && f.username != null) {
      this.auth.login(f.username, f.password)
    }
  }

  constructor(private fb: FormBuilder, protected auth: AuthService) {
  }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

}
