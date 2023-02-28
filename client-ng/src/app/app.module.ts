import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminUsersComponent } from './pages/admin/users/users.component';
import { AdminLocationsComponent } from './pages/admin/locations/locations.component';
import { AdminGroupsComponent } from './pages/admin/groups/groups.component';
import { LocationCardComponent } from './pages/admin/locations/location-card/location-card.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { GroupCardComponent } from './cards/group-card/group-card.component';
import { UsersCardComponent } from './pages/admin/users/users-card/users-card.component';
import { AddLocationComponent } from './pages/add-location/add-location.component';
import { MapPickerComponent } from './map-picker/map-picker.component';
import { UserComponent } from './pages/user/user.component';
import { NgIconsModule, provideIcons } from '@ng-icons/core';
import { matHome, matAdminPanelSettings, matInfo, matEdit, matArrowCircleRight, matBuild, matCancel } from '@ng-icons/material-icons/baseline';
import { GroupsDetailComponent } from './cards/groups-detail/groups-detail.component';
import { SmallPlayerCardComponent } from './cards/small-player-card/small-player-card.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventCardComponent } from './cards/event-card/event-card.component';
import { EventToAcceptCardComponent } from './cards/event-to-accept-card/event-to-accept-card.component';
import { GroupViewComponent } from './pages/group-view/group-view.component';
import { MembersViewComponent } from './pages/group-view/members-view/members-view.component';
import { LocationViewComponent } from './pages/group-view/location-view/location-view.component';
import { EventsComponent } from './pages/admin/events/events.component';
import { AddGroupComponent } from './pages/add-group/add-group.component';
import { GroupCardAdminComponent } from './cards/group-card-admin/group-card-admin.component';
import { InviteToEventComponent } from './pages/invite-to-event/invite-to-event.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { AddUserToGroupComponent } from './pages/add-user-to-group/add-user-to-group.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
    AddGroupComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    AdminUsersComponent,
    AdminLocationsComponent,
    AdminGroupsComponent,
    LocationCardComponent,
    LogoutComponent,
    GroupCardComponent,
    UsersCardComponent,
    AddLocationComponent,
    MapPickerComponent,
    UserComponent,
    GroupsDetailComponent,
    SmallPlayerCardComponent,
    EventCardComponent,
    EventToAcceptCardComponent,
    GroupViewComponent,
    MembersViewComponent,
    LocationViewComponent,
    EventsComponent,
    GroupCardAdminComponent,
    InviteToEventComponent,
    AddEventComponent,
    AddUserToGroupComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LeafletModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [provideIcons({matHome, matAdminPanelSettings, matInfo, matEdit, matArrowCircleRight, matBuild, matCancel})],
  bootstrap: [AppComponent]
})
export class AppModule
{ }
