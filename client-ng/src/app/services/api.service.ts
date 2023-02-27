import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, Observable } from 'rxjs';
import { GroupModel } from '../models/GroupModel';
import { LocationModel } from '../models/LocationModel';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private toastr: ToastrService) {
    let userJson = localStorage.getItem("user");
    if (userJson != null) {
      this._user = JSON.parse(userJson);
    }
  }

  private apiUrl: string = "https://localhost:5001/api/";

  private _user?: UserModel;

  public get user(): UserModel | undefined { 
    return this._user;
  }

  public set user(val: UserModel | undefined) { 
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


  public getByName<T>(relPath: string, name: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + relPath + "/" + name, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }

  public getAll<T>(relPath: string) : Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl + relPath, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }

  public getAllLocations(): Observable<ObjectLocation[]> {
    return this.http.get<ObjectLocation[]>(this.apiUrl + "locations/accepted-locations", {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }

  public deleteLocationWithId(id: number){
    return this.http.delete(this.apiUrl + "locations/" + id, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }

  public acceptLocationWithId(id: number){
    console.log("asd")
    return this.http.get(this.apiUrl + "locations/accept-location/" + id, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr))
  }

  // public getAllByUserName<T>(path: string, username: string){
  //   return this.http.get<T[]>(path + "/" + username);
  // }

}