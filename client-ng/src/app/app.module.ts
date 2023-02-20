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
import { ReactiveFormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminUsersComponent } from './pages/admin/users/users.component';
import { AdminLocationsComponent } from './pages/admin/locations/locations.component';
import { AdminGroupsComponent } from './pages/admin/groups/groups.component';
import { LocationCardComponent } from './pages/admin/locations/location-card/location-card.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { GroupCardComponent } from './pages/admin/groups/group-card/group-card.component';
import { UsersCardComponent } from './pages/admin/users/users-card/users-card.component';
import { AddLocationComponent } from './pages/add-location/add-location.component';
import { MapPickerComponent } from './map-picker/map-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MapComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{ }
