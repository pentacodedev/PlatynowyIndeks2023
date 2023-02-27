import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from 'src/app/models/Group';
import { ObjectLocation } from 'src/app/models/ObjectLocation';
import { Player } from 'src/app/models/Player';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-group-view',
  templateUrl: './group-view.component.html',
  styleUrls: ['./group-view.component.css']
})
export class GroupViewComponent {
  group?: Group;
  users$?: Observable<Player[]>;
  locations$?: Observable<ObjectLocation[]>;
  constructor(private route: ActivatedRoute, private api: ApiService) {
    route.params.subscribe(params => {
      this.api.getByName<Group>("groups", params["name"]).subscribe(group =>{
        this.group = group;
        this.users$ = this.api.getAll<Player>("groups/players-of-group/" + this.group?.name);
        this.locations$ = this.api.getAll<ObjectLocation>("groups/locations-of-group/" + this.group?.name);
      } );
    })
  }
}
