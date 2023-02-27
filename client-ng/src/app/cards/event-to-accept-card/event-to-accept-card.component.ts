import { Component, Input } from '@angular/core';
import { EventModel } from 'src/app/models/EventModel';

@Component({
  selector: 'app-event-to-accept-card',
  templateUrl: './event-to-accept-card.component.html',
  styleUrls: ['./event-to-accept-card.component.css']
})
export class EventToAcceptCardComponent {
  @Input() event!: EventModel;
}
