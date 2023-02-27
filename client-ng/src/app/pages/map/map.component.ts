import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { icon, latLng, MapOptions, Marker, marker, tileLayer } from 'leaflet';
import { map, Observable } from 'rxjs';
import { ObjectLocation } from 'src/app/models/ObjectLocation';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  selectedLocation?: ObjectLocation;
  sanitizedUrl?: SafeUrl;

  constructor(private api: ApiService, private zone: NgZone,private changeDetector: ChangeDetectorRef, private sanitizer: DomSanitizer) { }

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
    this.markers$ = this.api.getAllLocations().pipe(map(x=>x.map(this.markerToLoc.bind(this))));
  }


  markerToLoc(loc: ObjectLocation): Marker {
    let mark = marker([loc.coordLat, loc.coordLon], {
      icon: icon({iconUrl:"assets/pin.svg",iconRetinaUrl:"assets/pin.svg", iconSize:[30,30], iconAnchor:[15,30]})
    });
    mark.on("click", this.onLocationClick.bind(this,loc));
    return mark;
  }

  onLocationClick(loc: ObjectLocation) {
    this.zone.run(() => {
      this.selectedLocation = loc;
      this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl("geo:" + loc.coordLat + "," + loc.coordLon);
      this.changeDetector.detectChanges();
    })
  }

}
