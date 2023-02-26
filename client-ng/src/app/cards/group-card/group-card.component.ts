import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Group } from "src/app/models/Group";

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css'],
})
export class GroupCardComponent {
  @Input() group!: Group;
  @Output() showInfoClicked = new EventEmitter<Group>();
  
  onInfoClick(){
    this.showInfoClicked.emit(this.group)
  }
  onEditClick(){

  }
}
