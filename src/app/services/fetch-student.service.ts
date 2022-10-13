import { Student } from './../../entities/student';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchStudentService {

  constructor() { }

  public FetchStudent(studentRA : string) : Student{ //Todo: por enquanto isso aqui está mockado
    return new Student("Brancas", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742")
  }

  public FetchStudentsList() : Student[]{
    return [new Student("Brancas", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742"), new Student("Soller", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742"), new Student("Duez", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742"), new Student("Davi", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742"), new Student("Hector", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742"), new Student("Vilardi", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742"), new Student("Carolina", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742"), new Student("Caio", "21.12306-8", "https://fotopaulo.com.br/public/getProductTypeImage/35742")]
  }

}
