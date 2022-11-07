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
      new Student('Duez', '21.12306-8', 'euteamolöra@gmail.com', 'Approved', [
        new Selfie(
          0,
          '2002-01-10',
          'https://fotopaulo.com.br/public/getProductTypeImage/35742',
          'Aprovado',
          '',
          ''
        ),
      ])
    );
  }
  public FetchStudentsList(): Observable<Student[]> {
    let a: any = {
      all_students: {
        21010757: {
          name: 'Victor',
          email: 'eusousoller@gmail.com',
          status: 'APPROVED',
          selfies: [
            {
              idSelfie: 0,
              dateCreated: '2022-10-01T16:01:59.149927',
              url: 'https://i.imgur.com/0KFBHTB.jpg',
              state: 'DECLINED',
              rejectionReasons: ['COVERED_FACE'],
            },
          ],
        },
        21010758: {
          name: 'Victor',
          email: 'eusousoller@gmail.com',
          status: 'APPROVED',
          selfies: [
            {
              idSelfie: 0,
              dateCreated: '2022-10-01T16:01:59.149927',
              url: 'https://i.imgur.com/0KFBHTB.jpg',
              state: 'DECLINED',
              rejectionReasons: ['COVERED_FACE'],
            },
          ],
        },
      },
    };

    return of(a);
  }
}

// {"all_students": {"21010757": {"name": "Victor", "email": "eusousoller@gmail.com", "status": "APPROVED", "selfies": [{"idSelfie": 0, "dateCreated": "2022-10-01T16:01:59.149927", "url": "https://i.imgur.com/0KFBHTB.jpg", "state": "DECLINED", "rejectionReasons": ["COVERED_FACE"],
