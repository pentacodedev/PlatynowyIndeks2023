import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { matchOtherValidator } from 'src/app/validators/match-other';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onRegisterSubmit() {
    let data = this.registerForm.value;

    //TODO: Change this
    if (this.registerForm.invalid) {
      console.error("form error");
      return;
    }
    if (data.password != data.repeatPassword) {
      console.error("names dont match");
      return;
    }
    this.auth.register({
      firstName: data.firstName ?? "",
      surName: data.surName ?? "",
      password: data.password ?? "",
      email: data.email ?? "",
      username: data.username ?? "",
    });
  }

  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    surName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, protected auth: AuthService) { }

  ngOnInit(): void {

  }

}
