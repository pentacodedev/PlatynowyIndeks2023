import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PlayerModel } from 'src/app/models/PlayerModel';
import { GroupModel } from 'src/app/models/GroupModel';
import { LocationModel } from 'src/app/models/LocationModel';
import { EventModel } from 'src/app/models/EventModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(protected api: ApiService, private router: Router){}

  leaveGroup(g: GroupModel) {
  }

  refreshLocations() {
    this.objectLocation$ = this.api.getAll<LocationModel>("locations/get-your-locations");
  }
  deleteLocation(loc: LocationModel) {
    this.api.delete(`locations/${loc.id}`).subscribe();
    this.refreshLocations();
  }
  openInviteMenu(ev: EventModel){
    this.router.navigate(["/invite-to-event", ev.id])
  }

  groups$ = this.api.getAll<GroupModel>("groups/your-groups");
  events$ = this.api.getAll<EventModel>("events/owned");
  player$ = this.api.getByName<PlayerModel>("users" , this.api.user!.username);

  objectLocation$ = this.api.getAll<LocationModel>("locations/get-your-locations");

  refresh(){
    this.player$ = this.api.getByName<PlayerModel>("users" , this.api.user!.username);
  }


}
