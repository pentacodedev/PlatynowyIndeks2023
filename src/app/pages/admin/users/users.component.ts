import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class AdminUsersComponent {
  users$;
  constructor(protected admin: AdminService) {
    this.users$ = admin.getAllUsers();
  }
}
