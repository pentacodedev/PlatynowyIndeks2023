import { Component, Input } from '@angular/core';
import { PlayerModel } from 'src/app/models/PlayerModel';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-members-view',
  templateUrl: './members-view.component.html',
  styleUrls: ['./members-view.component.css']
})
export class MembersViewComponent {
  @Input()
  user?: PlayerModel;

  
}
