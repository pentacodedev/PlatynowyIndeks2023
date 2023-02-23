import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { resolveTypeReferenceDirective } from 'typescript/lib/tsserverlibrary';
import { LoginData } from '../models/LoginData';
import { RegisterData } from '../models/RegisterData';
import { User } from '../models/User';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService, private router: Router) {

  }

  navigateHome() {
    this.router.navigate(['/'])
  }

  logout() {
    this.api.removeUser();
    this.navigateHome();
  }

  login(username: string, password: string) {
    let loginData: LoginData = {
        username: username,
        password: password,
    }

    this.api.post<User,LoginData>("account/login", loginData)
    .subscribe({
      next: (user) => {
        this.api.user = user;
        this.navigateHome();
      }
    })
  }
  register(username: string, password: string) {
    let registerData: RegisterData = {
        username: username,
        password: password,
    }

    this.api.post<User,RegisterData>("account/register", registerData)
    .subscribe({
      next: (user) => {
        this.api.user = user;
        this.navigateHome();
      }
    })
  }
}
