import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { LocationModel } from 'src/app/models/LocationModel';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class AdminLocationsComponent implements OnInit{

  locationsArray$: Observable<LocationModel[]> = EMPTY;

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.locationsArray$ = this.admin.getAllLocations();
  }
  updateLocations(_:any){
    this.locationsArray$ = this.admin.getAllLocations();
  }
}
