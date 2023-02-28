import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

 
  @Input()
  isLogged?: boolean;

  constructor(public api: ApiService) { 

  }

  ngOnInit(): void {
  }

}
