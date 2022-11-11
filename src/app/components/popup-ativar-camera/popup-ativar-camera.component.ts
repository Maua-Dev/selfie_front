import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-popup-ativar-camera',
  templateUrl: './popup-ativar-camera.component.html',
  styleUrls: ['./popup-ativar-camera.component.css']
})
export class PopupAtivarCameraComponent implements OnInit {

  constructor() { }

  @Output() event : EventEmitter<boolean> = new EventEmitter()

  ngOnInit(): void {
  }

  sairPopup(){
    console.log('ola')
    this.event.emit()
    //vai emitir evento para a classe pai, dizendo que é para dar um close no dialog
  }

}
