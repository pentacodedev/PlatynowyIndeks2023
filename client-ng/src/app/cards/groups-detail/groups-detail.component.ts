import { Component, Input, OnInit } from '@angular/core';
import { GroupModel } from 'src/app/models/GroupModel';
import { EventModel } from 'src/app/models/EventModel';
import { PlayerModel } from 'src/app/models/PlayerModel';

@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent implements OnInit{

  @Input() group!: GroupModel;
  currentCard: string = "description";

  ngOnInit(): void
  {
  }

  changeCard(card: string){
    this.currentCard = card;
  }
}
