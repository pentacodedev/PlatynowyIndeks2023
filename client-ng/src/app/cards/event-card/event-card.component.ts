import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventModel } from 'src/app/models/EventModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent {
  constructor(private api: ApiService) {}

  @Input() event!: EventModel;

  @Output()
  leave: EventEmitter<any> = new EventEmitter()

  quitEvent() {
    this.api.get(`events/quit-event/${this.event.id}`).subscribe(()=>{this.leave.emit()})
  }
  
}
