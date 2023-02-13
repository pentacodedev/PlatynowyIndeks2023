import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  onLoginSubmit() {
    let f = this.loginForm.value;

    if (f.password != null && f.username != null) {
      this.auth.login(f.username, f.password)
    }
  }



  constructor(private fb: FormBuilder, protected auth: AuthService, private router: Router) {
  }

  loginForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })

  
  ngOnInit(): void {
  }

}
