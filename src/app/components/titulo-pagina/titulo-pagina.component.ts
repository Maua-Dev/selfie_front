import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-titulo-pagina',
  templateUrl: './titulo-pagina.component.html',
  styleUrls: ['./titulo-pagina.component.css']
})
export class TituloPaginaComponent implements OnInit {

  @Input() foto!:string
  constructor() { }

  ngOnInit(): void {
  }

}
