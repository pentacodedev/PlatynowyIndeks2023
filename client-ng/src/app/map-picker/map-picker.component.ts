import { Component, EventEmitter, Output } from '@angular/core';
import { LatLng, latLng, LeafletMouseEvent, Marker, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.css']
})
export class MapPickerComponent {

  selectedLocation: LatLng = latLng(0,0)
  marker?: Marker;

  @Output()
  onLocationSelected = new EventEmitter<LatLng>();

  onMapClick(ev: LeafletMouseEvent) {
    this.selectedLocation = ev.latlng;
    this.marker = marker(this.selectedLocation);
    this.onLocationSelected.emit(this.selectedLocation);
  }

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...', noWrap: true}),
    ],
    zoom: 7,
    center: this.selectedLocation,
  };
}
