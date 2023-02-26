import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  overlayGroup?: Group;

  logout() {
    this.auth.logout();
  }
  groups$ = this.api.getAll<Group>("groups/your-groups");
  constructor(protected api: ApiService, private auth: AuthService) { }

  showInfo($event: Group){
    this.overlayGroup = $event
  }

  ngOnInit(): void {
  }
}
