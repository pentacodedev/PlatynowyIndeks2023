import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupModel } from 'src/app/models/GroupModel';
import { LocationModel } from 'src/app/models/LocationModel';
import { ApiService } from 'src/app/services/api.service';

interface RegisterEventDto{
  name: string,
  description: string,
  location: LocationModel,
  isPrivate: boolean,
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  locations$ = this.api.getAll<LocationModel>("locations/accepted-locations");
  eventForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    selectedLocation: [undefined, [Validators.required]],  
    isPrivate: [false, [Validators.required]],
  })

  
  onLocationFormSubmit() {
    let data = this.eventForm.value;
    this.api.post<any,RegisterEventDto>("events",{
      name: data.name!,
      description: data.description!,
      location: data.selectedLocation!,
      isPrivate: data.isPrivate!,
    }).subscribe((event) => {
      this.router.navigateByUrl('/home')
    });   
  }
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}
}
