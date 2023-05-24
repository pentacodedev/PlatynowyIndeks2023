import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GroupModel } from "src/app/models/GroupModel";
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css'],
})
export class GroupCardComponent {
  @Input() group!: GroupModel;
  @Output() showInfoClicked = new EventEmitter<GroupModel>();

  constructor(protected api: ApiService, private toastr: ToastrService) { }

  onInfoClick(){
    this.showInfoClicked.emit(this.group)
  }
  onEditClick(){
    this.toastr.warning("under construction")
  }
}
