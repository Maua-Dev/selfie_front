import { Selfie } from 'src/entities/selfie';
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
        'Duez',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      )
    );
  }
  public FetchStudentsList(): Observable<Student[]> {
    return of([
      new Student(
        'Brancas',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
          new Selfie(
            0,
            '2002-01-10',
            'https://www.jornalopcao.com.br/wp-content/uploads/2018/09/walter-white.jpg',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
      new Student(
        'Soller',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
      new Student(
        'Duez',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
      new Student(
        'Davi',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
      new Student(
        'Hector',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
      new Student(
        'Vilardi',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
      new Student(
        'Carolina',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
      new Student(
        'Caio',
        '21.12306-8',
        'https://fotopaulo.com.br/public/getProductTypeImage/35742',
        [
          new Selfie(
            0,
            '2002-01-10',
            'https://fotopaulo.com.br/public/getProductTypeImage/35742',
            'Aprovado',
            '',
            ''
          ),
        ]
      ),
    ]);
  }
}
