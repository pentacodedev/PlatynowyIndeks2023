import { Component, Input } from '@angular/core';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-small-player-card',
  templateUrl: './small-player-card.component.html',
  styleUrls: ['./small-player-card.component.css']
})
export class SmallPlayerCardComponent {
  @Input() player!: Player;
}
