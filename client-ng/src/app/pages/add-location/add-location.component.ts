import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent {

  constructor(private fb: FormBuilder) {}

  addLocForm = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
  });

  onAddLocFormSubmit() {
      alert(JSON.stringify(this.addLocForm.value));
  }

}
