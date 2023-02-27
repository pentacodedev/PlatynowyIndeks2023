import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/models/Group';
import { GroupEvent } from 'src/app/models/GroupEvent';
import { Player } from 'src/app/models/Player';

@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent implements OnInit{

  @Input() group!: Group;
  currentCard: string = "description";

  ngOnInit(): void
  {
  }

  changeCard(card: string){
    this.currentCard = card;
  }
}
