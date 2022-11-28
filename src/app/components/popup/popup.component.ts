import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CardSelfieComponent } from '../card-selfie/card-selfie.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  isChecked !: boolean
  isDisabled !: boolean
  controll : boolean = false
  nextPage : boolean = true 
  closePopUp !: void

  constructor(public dialogRef : MatDialogRef<CardSelfieComponent>) { 
    this.isChecked = false;
    this.isDisabled = false;
  }

  ngOnInit(): void {
  }

  changeEvent($event : any){
    this.controll = $event.checked
  }

  irParaSelfie(){
    this.closePopUp = this.dialogRef.close()
    this.nextPage = true
  }
}
