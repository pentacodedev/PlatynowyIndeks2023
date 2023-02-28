import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GroupModel } from 'src/app/models/GroupModel';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-group-card-admin',
  templateUrl: './group-card-admin.component.html',
  styleUrls: ['./group-card-admin.component.css']
})
export class GroupCardAdminComponent {
  @Input() group!: GroupModel;
  @Output() showInfoClicked = new EventEmitter<GroupModel>();

  constructor(protected api: ApiService) { }
  
  onInfoClick(){
    this.showInfoClicked.emit(this.group)
  }
  onEditClick(){

  }
}
