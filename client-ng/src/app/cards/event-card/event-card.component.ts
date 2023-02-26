import { Component, Input } from '@angular/core';
import { GroupEvent } from 'src/app/models/GroupEvent';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  @Input() event!: GroupEvent;
}
