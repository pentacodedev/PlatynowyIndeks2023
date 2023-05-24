import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  onRegisterSubmit() {
    const data = this.registerForm.value;

    if (this.registerForm.invalid) {
      this.toastr.error("form error");
      return;
    }
    if (data.password != data.repeatPassword) {
      this.toastr.error("names dont match");
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

  constructor(private fb: FormBuilder, protected auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {

  }

}
