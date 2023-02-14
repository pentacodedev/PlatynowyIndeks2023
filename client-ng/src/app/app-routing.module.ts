import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminGroupsComponent } from './pages/admin/groups/groups.component';
import { AdminLocationsComponent } from './pages/admin/locations/locations.component';
import { AdminUsersComponent } from './pages/admin/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MapComponent } from './pages/map/map.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'locations', component: AdminLocationsComponent },
      {path: 'groups', component: AdminGroupsComponent },
      {path: 'users', component: AdminUsersComponent },
      {path: '', component: HomeComponent},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'map', component: MapComponent},
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
