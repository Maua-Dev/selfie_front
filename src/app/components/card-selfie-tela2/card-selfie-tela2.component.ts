import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-card-selfie-tela2',
  templateUrl: './card-selfie-tela2.component.html',
  styleUrls: ['./card-selfie-tela2.component.css']
})

export class CardSelfieTela2Component implements OnInit {
  
  dialogRef !: any
  constructor(private dialog : MatDialog) { }

  ngOnInit(): void {
  }

  criarStatus(){
    // tirar foto!
  }

  popUp(){
    this.dialogRef = this.dialog.open(PopupComponent)   //invocando ele
    console.log(this.dialogRef.nextPage)
    if(this.dialogRef.nextPage === true)
      this.dialogRef.popup
  }
 
}
