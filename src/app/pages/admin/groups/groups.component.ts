import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupModel } from 'src/app/models/GroupModel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})


export class AdminGroupsComponent implements OnInit {
  groups$!: Observable<GroupModel[]>;
  overlayGroup?: GroupModel;

  constructor(private admin: AdminService) {}


  ngOnInit(): void {
    this.groups$ = this.admin.getAllGroups();
  }

  showInfo($event: GroupModel){
    this.overlayGroup = $event
  }
}
