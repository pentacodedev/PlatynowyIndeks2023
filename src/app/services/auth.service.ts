import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../models/LoginData';
import { RegisterData } from '../models/RegisterData';
import { UserModel } from '../models/UserModel';
import { ApiService } from './api.service';
import { PresenceService } from './presence.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private api: ApiService, private router: Router, private presence: PresenceService) {

  }

  navigateHome() {
    this.router.navigate(['/'])
  }

  logout() {
    this.api.removeUser();
    this.navigateHome();
    this.presence.stopHubConnection();
  }

  login(username: string, password: string) {
    const loginData: LoginData = {
        username: username,
        password: password,
    }

    this.api.post<UserModel,LoginData>("account/login", loginData)
    .subscribe({
      next: (user) => {
        this.api.user = user;
        this.presence.createHubConnection(user);
        this.navigateHome();
      },
    }
    )
  }
  register(registerData: RegisterData) {
    this.api.post<UserModel,RegisterData>("account/register", registerData)
    .subscribe({
      next: (user) => {
        this.api.user = user;
        this.presence.createHubConnection(user);
        this.navigateHome();
      },
    })
  }
}
