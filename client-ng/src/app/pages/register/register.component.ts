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
    this.auth.register(data.username??"", data.password??"");
  }

  registerForm = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
  })

  constructor(private fb: FormBuilder, protected auth: AuthService) { }

  ngOnInit(): void {

  }

}
