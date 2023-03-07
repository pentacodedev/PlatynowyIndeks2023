import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.css']
})
export class EditPhotoComponent {

  
  @Output()
  updatePhoto: EventEmitter<any> = new EventEmitter()
  
  constructor(private api: ApiService){}

  files: File[] = [];

  onSelect(event: any) {
    this.files.pop()
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  sendPhoto(){
    if(this.files.length > 0)
      this.api.uploadFile(this.files.pop()!).subscribe({
        next: () => {
          alert("Zdjęcie zostało wysłane"); this.updatePhoto.emit()
        },
      })
  }
}

