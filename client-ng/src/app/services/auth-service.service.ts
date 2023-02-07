import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from '../models/LoginData';
import { RegisterData } from '../models/RegisterData';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  private apiUrl: string = "https://localhost:5001/api/account/";

  constructor(private http: HttpClient) { 

  }

  public currentUser?: User;

  
  public get isLogged() : boolean {
    return this.currentUser != undefined;
  }
  
  private catchError(err: any) {
    console.error(JSON.stringify(err));
  }


  login(username: string, password: string) {

    let loginData: LoginData = {
        username: username,
        password: password,
    }

    this.http.post<User>(this.apiUrl + "login", loginData)
    .subscribe({
      next: (user) => this.currentUser = user,
      error: this.catchError,
    })
  }

  logout() {
    this.currentUser = undefined;
  }

  register(username: string, password: string) {
    let registerData: RegisterData = {
        username: username,
        password: password,
    }

    this.http.post<User>(this.apiUrl + "register", registerData)
    .subscribe({
      next: (user) => this.currentUser = user,
      error: this.catchError,
    })
  }
}
