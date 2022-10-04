import { Component, OnInit } from '@angular/core';
import { Student } from 'src/entities/student';

@Component({
  selector: 'app-visualizar-foto-aluno',
  templateUrl: './visualizar-foto-aluno.component.html',
  styleUrls: ['./visualizar-foto-aluno.component.css']
})
export class VisualizarFotoAlunoComponent implements OnInit {
  student : Student

  constructor() {
    this.student = new Student("Brancas", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742")
   }

  ngOnInit(): void {
  }

}
