import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-members-view',
  templateUrl: './members-view.component.html',
  styleUrls: ['./members-view.component.css']
})
export class MembersViewComponent {
  @Input()
  user?: Player;

  
}
