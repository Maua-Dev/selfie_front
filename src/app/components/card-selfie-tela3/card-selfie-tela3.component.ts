import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-card-selfie-tela3',
  templateUrl: './card-selfie-tela3.component.html',
  styleUrls: ['./card-selfie-tela3.component.css']
})
export class CardSelfieTela3Component implements OnInit {

  dialogRef !: any;

  constructor(protected dialog : MatDialog) { }

  ngOnInit(): void {
  }

  popUp(){
    this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
    console.log(this.dialogRef.nextPage)
    if(this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }

}
