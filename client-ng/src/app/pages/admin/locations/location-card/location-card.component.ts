import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjectLocation } from 'src/app/models/ObjectLocation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  @Input() location!: ObjectLocation
  @Output() updateLocations = new EventEmitter();

  constructor(private api: ApiService){}

  decline(){
    this.api.deleteLocationWithId(this.location.id).subscribe({
      next: () => this.updateLocations.emit()
    })
    
  }
  accept(){
    this.api.acceptLocationWithId(this.location.id).subscribe({
      next: () => this.updateLocations.emit()
    })
  }
}
