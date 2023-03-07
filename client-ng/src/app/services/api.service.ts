import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { catchError, EMPTY, Observable } from 'rxjs';
import { GroupModel } from '../models/GroupModel';
import { LocationModel } from '../models/LocationModel';
import { UserModel } from '../models/UserModel';
import { PresenceService } from './presence.service';

interface ToastrError {
  status: number;
  statusText: string,
  error: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private toastr: ToastrService, private presence: PresenceService) {
    let userJson = localStorage.getItem("user");
    if (userJson != null) {
      this._user = JSON.parse(userJson);
      this.presence.createHubConnection(this._user!);
    }
  }

  private apiUrl: string = "http://localhost:5000/api/";

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

  public removeUser() {
    this._user = undefined;
    localStorage.removeItem("user");
  }



  public onErr(err: ToastrError) {
    this.toastr.error(err.error,err.statusText);
    return EMPTY;
  }


  public getHeaders() {
    let authHeaders = {}
    let token = this._user?.token;
    if (this._user != undefined) {
      authHeaders = {
          'Bearer-Token':  `${token}`,
          'Authorization': `bearer ${token}`,
      } 

    }
    return authHeaders;
  }

  public post<TValue, TBody>(relPath: string, data: TBody) {
    return this.http.post<TValue>(this.apiUrl + relPath, data, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public put<TValue, TBody>(relPath: string, data: TBody) {
    return this.http.put<TValue>(this.apiUrl + relPath, data, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public delete(relPath: string) {
    return this.http.delete(this.apiUrl + relPath, {headers: this.getHeaders()})
    .pipe(catchError(this.onErr.bind(this)))
  }


  public getByName<T>(relPath: string, name: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + relPath + "/" + name, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }
  public getById<T>(relPath: string, id: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + relPath + "/" + id, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }
  public get<T>(relPath: string): Observable<T> {
    return this.http.get<T>(this.apiUrl + relPath, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public getEmpty(relPath: string) {
    return this.http.get(this.apiUrl + relPath, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public getAll<T>(relPath: string) : Observable<T[]> {
    return this.http.get<T[]>(this.apiUrl + relPath, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public getAllLocations(): Observable<LocationModel[]> {
    return this.http.get<LocationModel[]>(this.apiUrl + "locations/accepted-locations", {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public deleteLocationWithId(id: number){
    return this.http.delete(this.apiUrl + "locations/" + id, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public acceptLocationWithId(id: number){
    return this.http.get(this.apiUrl + "locations/accept-location/" + id, {
      headers: this.getHeaders(),
    }).pipe(catchError(this.onErr.bind(this)))
  }

  public uploadFile(file: File){
    const fd = new FormData();
    fd.append('image', file, file.name);
    return this.http.post(this.apiUrl + "users/add-photo", fd, {
      headers: this.getHeaders(),
    })
  }

}

