import { Component, OnInit } from '@angular/core';
import { latLng, Marker, marker, tileLayer } from 'leaflet';
import { map, Observable } from 'rxjs';
import { ObjectLocation } from 'src/app/models/ObjectLocation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private api: ApiService) { }

  markers$!: Observable<Marker[]>;

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 7,
    center: latLng(52.2158973252085, 19.195172828836743)
  };

  ngOnInit(): void {
    this.markers$ = this.api.getAllLocations().pipe(map(x=>x.map(x=>marker([x.coordLat, x.coordLon]))));
  }

}
