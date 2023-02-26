import { Component, Input, OnInit } from '@angular/core';
import { FullGroupInfo } from 'src/app/models/FullGroupInfo';
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
  groupDetailInfo?: FullGroupInfo;

  ngOnInit(): void
  {
    this.groupDetailInfo = new FullGroupInfo("Jaworznia", "Bardzo powarzna wioska zamieszkiwana przez ponad 10 milionów mieszkańców mieszka tam około trzystu set mieszkańców co stanowi 95% całego społeczeństwa", true,
     [new Player(1, "Marcinek", "wp.pl", []), new Player(2, "Jacenty", "onet.pl", [])],
     [new Player(1, "Marcinek", "wp.pl", []), new Player(2, "Jacenty", "onet.pl", [])],
     []
     )
  }

  changeCard(card: string){
    this.currentCard = card;
  }
}
