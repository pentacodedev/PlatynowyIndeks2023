import { Component, Input } from '@angular/core';
import { LocationModel } from 'src/app/models/LocationModel';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent {
  @Input()
  location?: LocationModel;
}
