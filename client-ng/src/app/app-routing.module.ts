import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminGroupsComponent } from './pages/admin/groups/groups.component';
import { AdminLocationsComponent } from './pages/admin/locations/locations.component';
import { AdminUsersComponent } from './pages/admin/users/users.component';
import { AddLocationComponent } from './pages/add-location/add-location.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { MapComponent } from './pages/map/map.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {path: 'map', component: MapComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'locations', component: AdminLocationsComponent },
      {path: 'groups', component: AdminGroupsComponent },
      {path: 'users', component: AdminUsersComponent },

      {path: '', pathMatch:"prefix", redirectTo: 'locations'},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add-location', component: AddLocationComponent},
  {path: 'map', component: MapComponent},
  {path: 'logout', component: LogoutComponent },
  {path: 'home', component: HomeComponent },
  {path: 'user', component: UserComponent },
  {path: '', pathMatch:'full', redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
