import { Component, Input, OnInit } from '@angular/core';
import { latLng, MapOptions, Marker, marker, tileLayer } from 'leaflet';
import { map, Observable } from 'rxjs';
import { ObjectLocation } from 'src/app/models/ObjectLocation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  onMarkerClick(marker: Marker<any>) {
    alert('oop');
  }

  constructor(private api: ApiService) { }

  markers$!: Observable<Marker[]>;


  options:MapOptions = {
    maxBounds: [[-90, -180], [90, 180]],
    maxBoundsViscosity: 1,
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { bounds: [[-90, -180], [90, 180]], minZoom:3, maxZoom: 18, attribution: '...', noWrap: true })
    ],
    zoom: 7,
    center: latLng(52.2158973252085, 19.195172828836743),
    
  };

  ngOnInit(): void {
    this.markers$ = this.api.getAllLocations().pipe(map(x=>x.map(x=>marker([x.coordLat, x.coordLon]))));
  }

}
