import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/models/Group';
import { AdminService } from 'src/app/services/admin.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})


export class AdminGroupsComponent implements OnInit {
  groups$!: Observable<Group[]>;

  constructor(private admin: AdminService) {}


  ngOnInit(): void {
    this.groups$ = this.admin.getAllGroups();
  }

}
