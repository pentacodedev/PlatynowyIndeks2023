import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { latLng, LatLng } from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { LocationModel } from 'src/app/models/LocationModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {

  constructor(private fb: FormBuilder, private api: ApiService, private toastr: ToastrService) {}

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

    if(!this.selectedLocation) return;

    this.api.post<any, LocationModel>("locations/add-new-location", new LocationModel(
      0,
      data.name ?? "",
      data.address ?? "",
      data.description ?? "",
      this.selectedLocation.lat,
      this.selectedLocation.lng,
      false
      )).subscribe({
        error: (err) => {this.toastr.error("err: " + JSON.stringify(err))},
        next: () => {this.toastr.success("complete!")},
      })
  }

}
