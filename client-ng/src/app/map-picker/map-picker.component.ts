import { Component, EventEmitter, Output } from '@angular/core';
import { LatLng, latLng, LeafletMouseEvent, MapOptions, Marker, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map-picker',
  templateUrl: './map-picker.component.html',
  styleUrls: ['./map-picker.component.css']
})
export class MapPickerComponent {

  selectedLocation?: LatLng;
  marker?: Marker;

  @Output()
  onLocationSelected = new EventEmitter<LatLng>();

  onMapClick(ev: LeafletMouseEvent) {
    this.selectedLocation = ev.latlng;
    this.marker = marker(this.selectedLocation);
    this.onLocationSelected.emit(this.selectedLocation);
  }

  options:MapOptions = {
    maxBounds: [[-90, -180], [90, 180]],
    maxBoundsViscosity: 1,
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { bounds: [[-90, -180], [90, 180]], minZoom:3, maxZoom: 18, attribution: '...', noWrap: true })
    ],
    zoom: 7,
    center: latLng(52.2158973252085, 19.195172828836743),
  };

}
