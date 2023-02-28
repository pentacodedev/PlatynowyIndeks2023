import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupModel } from 'src/app/models/GroupModel';
import { LocationModel } from 'src/app/models/LocationModel';
import { ApiService } from 'src/app/services/api.service';

interface RegisterEventDto{
  name: string;
  description: string;
}

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  locations$ = this.api.getAll<LocationModel[]>("locations/accepted-locations");
  groupForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })


  onGroupFormSubmit() {
    let data = this.groupForm.value;
    this.api.post<GroupModel,RegisterEventDto>("groups/register-group",{
      name: data.name!,
      description: data.description!,
    }).subscribe((group) => {
      this.router.navigateByUrl('/group-profile/'+group.name)
    });   
  }
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}
}
