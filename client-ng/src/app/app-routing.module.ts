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
import { AuthGuard } from './guards/auth.guard';
import { GroupViewComponent } from './pages/group-view/group-view.component';
import { EventsComponent } from './pages/admin/events/events.component';
import { AddGroupComponent } from './pages/add-group/add-group.component';
import { InviteToEventComponent } from './pages/invite-to-event/invite-to-event.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: "home"},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'admin', component: AdminComponent,
        children: [
          {path: 'locations', component: AdminLocationsComponent },
          {path: 'groups', component: AdminGroupsComponent },
          {path: 'users', component: AdminUsersComponent },
          {path: 'events', component:  EventsComponent},
          {path: '', pathMatch:"prefix", redirectTo: 'locations'},
        ],
      },
      {path: 'add-location', component: AddLocationComponent},
      {path: 'invite-to-event/:id', component: InviteToEventComponent},
      {path: 'add-group', component: AddGroupComponent},
      {path: 'group-profile/:name', component: GroupViewComponent},
      {path: 'map', component: MapComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'user', component: UserComponent},
      {path: '', pathMatch:'full', redirectTo: "home"},
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent },
  {path: '**', pathMatch:'full', redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
