import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, empty, of } from 'rxjs';
import { Player } from '../models/Player';
import { User } from '../models/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl: string = "https://localhost:5001/api/";

  constructor(private http: HttpClient, private auth: AuthService) {

  }

  handleError(error: any) {
    alert(`An error occured!\n${JSON.stringify(error)}`);
    return EMPTY;
  }

  getAllUsers() { 
    return this.http.get<Player[]>(this.apiUrl + "users", {
        headers: new HttpHeaders({
          'Bearer-Token':  `${this.auth.currentUser?.token}`,
          'Authorization': `bearer ${this.auth.currentUser?.token}`
        })
    })
    .pipe(catchError(this.handleError));
  }
}
