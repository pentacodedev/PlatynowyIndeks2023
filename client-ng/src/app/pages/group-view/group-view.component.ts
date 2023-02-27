import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/app/models/GroupModel';
import { LocationModel } from 'src/app/models/LocationModel';
import { PlayerModel } from 'src/app/models/PlayerModel';
import { UserModel } from 'src/app/models/UserModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent {
  group?: GroupModel;
  users$?: Observable<PlayerModel[]>;
  locations$?: Observable<LocationModel[]>;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    route.params.subscribe(params => {
      this.api.getByName<GroupModel>("groups", params["name"]).subscribe(group =>{
        this.group = group;
        this.users$ = this.api.getAll<PlayerModel>("groups/players-of-group/" + this.group?.name);
        this.locations$ = this.api.getAll<LocationModel>("groups/locations-of-group/" + this.group?.name);
      } );
    })
  }
}
