import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GroupModel } from "src/app/models/GroupModel";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css'],
})
export class GroupCardComponent {
  @Input() group!: GroupModel;
  @Output() showInfoClicked = new EventEmitter<GroupModel>();
  
  onInfoClick(){
    this.showInfoClicked.emit(this.group)
  }
  onEditClick(){

  }
}
