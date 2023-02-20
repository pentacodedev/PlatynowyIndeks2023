import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { latLng, LatLng } from 'leaflet';
import { LocationDto } from 'src/app/models/LocationDTO';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {

  constructor(private fb: FormBuilder, private api: ApiService) {}

  addLocForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    address: ['', Validators.required],
  });

  selectedLocation?: LatLng;

  onNewLocationSelected(loc: LatLng) {
    this.selectedLocation = loc;
  }

  onAddLocFormSubmit() {
    let data = this.addLocForm.value;
    data = {...data, ...{location: this.selectedLocation}}
    alert(JSON.stringify(data));

    if(!this.selectedLocation) return;

    this.api.post<any, LocationDto>("locations/add-new-location", new LocationDto(
      0,
      data.name ?? "",
      data.address ?? "",
      data.description ?? "",
      this.selectedLocation.lat,
      this.selectedLocation.lng,
      false
      )).subscribe({
        error: (err) => {alert("err: " + JSON.stringify(err))},
        next: () => {alert("complete!")},
      })
  }

}
