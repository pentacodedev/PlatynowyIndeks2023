import { Component, Input } from '@angular/core';
import { ObjectLocation } from 'src/app/models/ObjectLocation';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent {
  @Input()
  location?: ObjectLocation;
}
