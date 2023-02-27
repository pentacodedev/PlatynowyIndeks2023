import { Component, Input } from '@angular/core';
import { LocationModel } from 'src/app/models/LocationModel';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  @Input()
  location!: LocationModel
}
