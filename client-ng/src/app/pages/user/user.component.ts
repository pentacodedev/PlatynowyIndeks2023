import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserModel } from 'src/app/models/UserModel';
import { AuthService } from 'src/app/services/auth.service';
import { PlayerModel } from 'src/app/models/PlayerModel';
import { GroupModel } from 'src/app/models/GroupModel';
import { LocationModel } from 'src/app/models/LocationModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() Player!: PlayerModel;
  groups$ = this.api.getAll<GroupModel>("groups/your-groups");
  objectLocation$ = this.api.getAll<LocationModel>("");
constructor(protected api: ApiService){}

}
