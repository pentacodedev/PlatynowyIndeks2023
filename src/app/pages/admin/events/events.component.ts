import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/models/EventModel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events$!: Observable<EventModel[]>;
  
  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.events$ = this.admin.getAllEvents();
  }
}
