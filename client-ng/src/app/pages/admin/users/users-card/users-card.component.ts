import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/Player';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent {
  @Input()
  user!: Player;
}
