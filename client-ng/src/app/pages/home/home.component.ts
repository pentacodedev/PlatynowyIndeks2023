import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logout() {
    this.auth.logout();
  }

  constructor(protected api: ApiService, private auth: AuthService) { }

  ngOnInit(): void {
  }
}
