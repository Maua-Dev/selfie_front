import { Component, OnInit,Input } from '@angular/core';
import { Card } from 'src/entities/card';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {

  cards : Card[] = [
    {id:1, data:'20/10/2022',situacao:'Reprovado',motivo:'foto com boné'},
    {id:2, data:'22/10/2022',situacao:'Reprovado',motivo:'foto com óculos'},
    {id:3, data:'23/10/2022',situacao:'Reprovado',motivo:'pouca qualidade'},
    {id:4, data:'25/10/2022',situacao:'Aprovado',motivo:''},
  ]

  constructor() { } 

  ngOnInit(): void {
  }

}
