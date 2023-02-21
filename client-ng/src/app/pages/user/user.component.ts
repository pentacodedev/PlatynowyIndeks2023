import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Player } from 'src/app/models/Player';
import { Group } from 'src/app/models/Group';
import { ObjectLocation } from 'src/app/models/ObjectLocation';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  Player!: Player;
  groups$ = this.api.getAll<Group>("groups/your-groups");
  objectLocation$ = this.api.getAll<ObjectLocation>("");
constructor(protected api: ApiService){}

}
