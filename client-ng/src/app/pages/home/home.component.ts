import { Component, OnInit } from '@angular/core';
import { GroupModel } from 'src/app/models/GroupModel';
import { EventModel } from 'src/app/models/EventModel';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  overlayGroup?: GroupModel;
  groups$ = this.api.getAll<GroupModel>("groups/your-groups");
  events$ = this.api.getAll<EventModel>("events/your-events");
  invites$ = this.api.getAll<EventModel>("events/invites");

  constructor(protected api: ApiService, private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
  
  showInfo($event: GroupModel){
    this.overlayGroup = $event
  }

  backArrow(){
    this.overlayGroup = undefined;
  }
}
