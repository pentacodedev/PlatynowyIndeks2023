import { Component, Input } from '@angular/core';
import { GroupEvent } from 'src/app/models/GroupEvent';

@Component({
  selector: 'app-event-to-accept-card',
  templateUrl: './event-to-accept-card.component.html',
  styleUrls: ['./event-to-accept-card.component.css']
})
export class EventToAcceptCardComponent {
  @Input() event!: GroupEvent;
}
