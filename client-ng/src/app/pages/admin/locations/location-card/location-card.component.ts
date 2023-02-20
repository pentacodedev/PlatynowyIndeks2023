import { Component, Input } from '@angular/core';
import { ObjectLocation } from 'src/app/models/ObjectLocation';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.css']
})
export class LocationCardComponent {
  @Input()
  location!: ObjectLocation
}
