import { Component, OnInit } from '@angular/core';
import { CardStatusService } from 'src/app/services/card-status.service';
import { SelfieStudent } from 'src/app/services/selfie-student.service';
import { Card } from 'src/entities/card';

@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  styleUrls: ['./titulo-pagina.component.css']
})
export class TituloPaginaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
