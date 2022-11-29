import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CardSelfieComponent } from '../card-selfie/card-selfie.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup2.component.html',
  styleUrls: ['./popup2.component.css']
})
export class PopupComponent2 implements OnInit {

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
