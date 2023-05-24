import { Component, Input } from '@angular/core';
import { PlayerModel } from 'src/app/models/PlayerModel';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent {
  @Input()
  user!: PlayerModel;
}
