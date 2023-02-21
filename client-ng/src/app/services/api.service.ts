import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { Group } from '../models/Group';
import { ObjectLocation } from '../models/ObjectLocation';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl: string = "https://localhost:5001/api/";

  private _user?: User;

  public get user(): User | undefined { 
    return this._user;
  }

  public set user(val: User | undefined) { 
    if (val) {
      localStorage.setItem("user", JSON.stringify(val));
    }
    else {
      localStorage.removeItem("user");
    }
    this._user = val;
  }

  public setHttpHeaders() {
    
  }

  public removeUser() {
    this._user = undefined;
    localStorage.removeItem("user");
  }

  public onErr(err: any) {
    console.error(JSON.stringify(err));
    return EMPTY;
  }


  public getHeaders() {
    let authHeaders = {}
    let token = this._user?.token;
    if (this._user != undefined) {
      authHeaders = {
          'Bearer-Token':  `${token}`,
          'Authorization': `bearer ${token}`
      } 
    }
    return authHeaders;
  }



  public post<TValue, TBody>(relPath: string, data: TBody) {
    return this.http.post<TValue>(this.apiUrl + relPath, data, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }


  public getAll<T>(relPath: string) : Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl + relPath, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }

  public getAllLocations(): Observable<ObjectLocation[]> {
    return this.getAll<ObjectLocation>("locations");
  }

  // public getAllByUserName<T>(path: string, username: string){
  //   return this.http.get<T[]>(path + "/" + username);
  // }

  constructor(private http: HttpClient) {
    let userJson = localStorage.getItem("user");
    if (userJson != null) {
      this._user = JSON.parse(userJson);
    }
  }
}