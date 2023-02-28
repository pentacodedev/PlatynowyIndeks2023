import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { EventModel } from 'src/app/models/EventModel';
import { PlayerModel } from 'src/app/models/PlayerModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invite-to-event',
  templateUrl: './invite-to-event.component.html',
  styleUrls: ['./invite-to-event.component.css']
})
export class InviteToEventComponent implements OnInit{

  targetEvent?: EventModel;

  members$?: Observable<PlayerModel[]>;

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      console.log(params);
      this.members$ = this.api.getAll<PlayerModel>("users");
      this.api.getById<EventModel>("events",params["id"]).subscribe(ev => this.targetEvent = ev);
    })
  }
  inviteUser(m: PlayerModel) {
    this.api.get(`events/${this.targetEvent?.id}/invite/${m.userName}`).subscribe(()=>{
      this.members$ = 
      this.api.getAll<PlayerModel>("users");
    })
  }
  filterMembers(members: PlayerModel[]) {
    return members.filter(
          x=>!this.targetEvent?.invitedUsers.find(y=>y.id == x.id)
    );
  }
}





