import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpService) { 

  }

  currentUser?: User;


  login(username: string, password: string) {
    
  }

  logout() {
    this.currentUser = undefined;
  }

  register(username: string, password: string) {
    
  }

}
