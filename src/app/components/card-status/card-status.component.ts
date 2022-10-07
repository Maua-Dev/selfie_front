import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {
  count = 0
  @Input() status!:string
  //implementar contador a cada instancia

  constructor() { } 

  ngOnInit(): void {
  }

}
