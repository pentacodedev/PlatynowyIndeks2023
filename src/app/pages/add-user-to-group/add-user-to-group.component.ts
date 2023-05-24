import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/app/models/GroupModel';
import { PlayerModel } from 'src/app/models/PlayerModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-user-to-group',
  templateUrl: './add-user-to-group.component.html',
  styleUrls: ['./add-user-to-group.component.css']
})
export class AddUserToGroupComponent {
  group?: GroupModel;
  users$?: Observable<PlayerModel[]>;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    route.params.subscribe(params => {
      this.api.getByName<GroupModel>("groups", params["name"]).subscribe(group =>{
        this.group = group;
        this.users$ = this.api.getAll<PlayerModel>("users/user-not-in-group/" + group.name);
      } );
    })
  }
  inviteUser(m: PlayerModel) {
    this.api.get("groups/"+ this.group?.name +"/add-user/"+ m.userName).subscribe(
      () => this.users$ = this.api.getAll<PlayerModel>("users/user-not-in-group/" + this.group?.name)
    )

  }
}
