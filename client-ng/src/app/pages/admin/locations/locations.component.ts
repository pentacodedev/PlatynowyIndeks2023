import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { ObjectLocation } from 'src/app/models/ObjectLocation';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class AdminLocationsComponent implements OnInit{

  locationsArray$: Observable<ObjectLocation[]> = EMPTY;

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.locationsArray$ = this.admin.getAllLocations();
  }
  
}
