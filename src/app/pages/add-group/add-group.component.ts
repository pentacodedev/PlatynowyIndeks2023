import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupModel } from 'src/app/models/GroupModel';
import { ApiService } from 'src/app/services/api.service';

interface RegisterGroupDto {
  name: string,
  description: string
}

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {

  groupForm = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
  })
  onGroupFormSubmit() {
    const data = this.groupForm.value;
    this.api.post<GroupModel,RegisterGroupDto>("groups/register-group",{
      name: data.name!,
      description: data.description!,
    }).subscribe((group) => {
      this.router.navigateByUrl('/group-profile/'+group.name)
    });   
  }
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {}
}
