import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
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

  constructor(protected auth: AuthService) { }

  user?: User;

  ngOnInit(): void {
    this.user = this.auth.currentUser;
  }

}
