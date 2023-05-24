import { Component, Input } from '@angular/core';
import { GroupModel } from 'src/app/models/GroupModel';
import { PlayerModel } from 'src/app/models/PlayerModel';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-groups-detail',
  templateUrl: './groups-detail.component.html',
  styleUrls: ['./groups-detail.component.css']
})
export class GroupsDetailComponent{

  @Input() group!: GroupModel;

  players$?: Observable<PlayerModel[]>;
  currentCard = "description";

  constructor(public api: ApiService){}

  changeCard(card: string){
    this.players$ = this.api.getAll<PlayerModel>("groups/players-of-group/" + this.group.name)
    this.currentCard = card;
  }
}
