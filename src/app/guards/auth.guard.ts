import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, of } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private toastr: ToastrService){}

  canActivate(): Observable<boolean>{
    if(this.apiService.user != null)
      return of(true);
    else
      this.toastr.error("You are not Authenticated")
      return of(false);
  }
  
}
