import { FetchStudent } from './fetch-student';
import { Student } from '../../entities/student';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchStudentMockService implements FetchStudent {
  constructor() {}

  public FetchStudent(studentRA: string): Observable<Student> {
    //Todo: por enquanto isso aqui está mockado
    return of(
      new Student(
        'Brancas',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      )
    );
  }

  public FetchStudentsList(): Observable<Student[]> {
    return of([
      new Student(
        'Brancas',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
      new Student(
        'Soller',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
      new Student(
        'Duez',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
      new Student(
        'Davi',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
      new Student(
        'Hector',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
      new Student(
        'Vilardi',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
      new Student(
        'Carolina',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
      new Student(
        'Caio',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742'
      ),
    ]);
  }
}
