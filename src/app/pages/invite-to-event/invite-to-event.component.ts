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

  id = "";
  targetEvent?: EventModel;

  members$?: Observable<PlayerModel[]>;

  constructor(private route: ActivatedRoute, private api: ApiService) {
  }
  ngOnInit(){
    this.route.params.subscribe((params)=>{
      this.api.getById<EventModel>("events",params["id"]).subscribe(
      (ev) =>{
        this.id = params['id'];
        this.fetchData();
      })
  })}

  fetchData(){
    this.api.getById<EventModel>("events",this.id).subscribe(
      (ev) =>{
          this.targetEvent = ev;
          this.members$ = this.api.getAll<PlayerModel>("users")
          .pipe(map(m=>m.filter(
            x=>
              this.targetEvent?.invitedUsers.every(y => x.id !=y.id) &&
              this.targetEvent.confirmedParticipants.every(y => x.id != y.id) &&
              this.targetEvent.adminsOfEvent.every(y => x.id != y.id)
          )))
      });
  }


  inviteUser(m: PlayerModel) {
    if(this.targetEvent == undefined) return;

    this.api.get(`events/${this.targetEvent.id}/invite/${m.userName}`).subscribe(()=>{
      this.fetchData()
    })
  }

}





