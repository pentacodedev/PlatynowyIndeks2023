import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventModel } from 'src/app/models/EventModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-event-to-accept-card',
  templateUrl: './event-to-accept-card.component.html',
  styleUrls: ['./event-to-accept-card.component.css']
})
export class EventToAcceptCardComponent {
  constructor(private api: ApiService) {}



  @Input() event!: EventModel;

  @Output()
  chosen: EventEmitter<boolean> = new EventEmitter();


  acceptEvent() {
    this.api.get(`events/join-event/${this.event.id}`).subscribe(()=>this.chosen.emit(true));
  }
  denyEvent() {
    this.api.get(`events/decline-event/${this.event.id}`).subscribe(()=>this.chosen.emit(false));

  }

}
