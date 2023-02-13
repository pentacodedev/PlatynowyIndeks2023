import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { resolveTypeReferenceDirective } from 'typescript/lib/tsserverlibrary';
import { LoginData } from '../models/LoginData';
import { RegisterData } from '../models/RegisterData';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private apiUrl: string = "https://localhost:5001/api/account/";

  constructor(private http: HttpClient, private router: Router) { 
    let userJson = localStorage.getItem("user");
    if (userJson != null) {
      this.currentUser = JSON.parse(userJson);
    }
  }

  public currentUser?: User;
  
  public get isLogged() : boolean {
    return this.currentUser != undefined;
  }
  
  private catchError(err: any) {
    console.error(JSON.stringify(err));
  }


  navigateHome() {
    this.router.navigate(['/'])
  }


  login(username: string, password: string) {

    let loginData: LoginData = {
        username: username,
        password: password,
    }

    this.http.post<User>(this.apiUrl + "login", loginData)
    .subscribe({
      next: (user) => {
        this.currentUser = user;
        localStorage.setItem("user", JSON.stringify(user));
        this.navigateHome();
      },
      error: this.catchError,
    })
  }

  logout() {
    this.currentUser = undefined;
    localStorage.removeItem("user");
    this.navigateHome();
  }

  register(username: string, password: string) {
    let registerData: RegisterData = {
        username: username,
        password: password,
    }

    this.http.post<User>(this.apiUrl + "register", registerData)
    .subscribe({
      next: (user) => {
        this.currentUser = user;
        localStorage.setItem("user", JSON.stringify(user));
        this.navigateHome();
      },
      error: this.catchError,
    })
  }
}
