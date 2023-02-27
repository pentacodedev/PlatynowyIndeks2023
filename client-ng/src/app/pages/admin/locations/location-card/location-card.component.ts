import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LocationModel } from 'src/app/models/LocationModel';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  @Input() location!: LocationModel
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
