import { Component, Input } from '@angular/core';
import { PlayerModel } from 'src/app/models/PlayerModel';

@Component({
  selector: 'app-small-player-card',
  templateUrl: './small-player-card.component.html',
  styleUrls: ['./small-player-card.component.css']
})
export class SmallPlayerCardComponent {
  @Input() player!: PlayerModel;
}
