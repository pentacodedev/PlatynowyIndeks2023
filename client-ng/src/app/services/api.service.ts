import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = "https://localhost:5001/api/";

  user?: User;
  isLogged: boolean = false;

  public setUser(user: User) { 
    this.user = user;
    this.isLogged = this.user != undefined;
  }

  public setHttpHeaders() {
    
  }

  public removeUser() {
    this.user = undefined;
    this.isLogged = false;
  }

  public onErr(err: any) {
    console.error(JSON.stringify(err));

    return EMPTY;
  }

  public getToken(): string | undefined {
    return this.user?.token;
  }

  public getHeaders() {
    let authHeaders = {}
    if (this.isLogged) {
      authHeaders = {
          'Bearer-Token':  `${this.getToken()}`,
          'Authorization': `bearer ${this.getToken()}`
      } 
    }
    return authHeaders;
  }



  public post<TValue, TBody>(relPath: string, data: TBody) {
    return this.http.post<TValue>(this.apiUrl + relPath, data, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }


  public getAll<T>(relPath: string) {
    return this.http.get<T[]>(this.apiUrl + relPath, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }


  constructor(private http: HttpClient) {}
}