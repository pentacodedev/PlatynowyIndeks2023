import { Injectable } from '@angular/core';
import { catchError, EMPTY, empty, of } from 'rxjs';
import { ObjectLocation } from '../models/ObjectLocation';
import { Player } from '../models/Player';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private api: ApiService) {
  }

  getAllUsers() { 
    return this.api.getAll<Player>("users");
  }
  getAllLocations(){
    return this.api.getAll<ObjectLocation>("locations/locations-to-accept");
  }
}
