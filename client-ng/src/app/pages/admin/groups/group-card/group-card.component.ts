import { Component, Input } from '@angular/core';
import { Group } from 'src/app/models/Group';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {
  @Input()
  group!: Group;
}
