import { Injectable } from '@angular/core';
import { catchError, EMPTY, empty, of } from 'rxjs';
import { EventModel } from '../models/EventModel';
import { GroupModel } from '../models/GroupModel';
import { LocationModel } from '../models/LocationModel';
import { PlayerModel } from '../models/PlayerModel';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private api: ApiService) {
  }

  getAllUsers() { 
    return this.api.getAll<PlayerModel>("users");
  }
  getAllLocations(){
    return this.api.getAll<LocationModel>("locations/locations-to-accept");
  }

  getAllGroups() {
    return this.api.getAll<GroupModel>("groups");
  }
  getAllEvents() {
    return this.api.getAll<EventModel>("events");
  }
}
