import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-ativar-camera',
  templateUrl: './popup-ativar-camera.component.html',
  styleUrls: ['./popup-ativar-camera.component.css']
})
export class PopupAtivarCameraComponent implements OnInit {

  constructor(public dialog : MatDialogRef<PopupAtivarCameraComponent>) {
  }

  ngOnInit(): void {
  }

  sairPopup(){
    this.dialog.close()
  }

}
