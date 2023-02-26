import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group';
import { GroupEvent } from 'src/app/models/GroupEvent';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  overlayGroup?: Group;
  groups$ = this.api.getAll<Group>("groups/your-groups");
  events$ = this.api.getAll<GroupEvent>("events/your-events");
  invites$ = this.api.getAll<GroupEvent>("events/invites");

  constructor(protected api: ApiService, private auth: AuthService) { }

  logout() {
    this.auth.logout();
  }
  
  showInfo($event: Group){
    this.overlayGroup = $event
  }

  backArrow(){
    this.overlayGroup = undefined;
  }
}
