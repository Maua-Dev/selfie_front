import { FetchSelfieService } from 'src/app/services/fetch-selfie.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Selfie } from 'src/entities/selfie';

@Injectable({
  providedIn: 'root',
})
export class FetchSelfieMockService implements FetchSelfieService {
  constructor() {}
  FetchAllSelfies(): Observable<Selfie[]> {
    let a: any = {
      all_selfies: [
        {
          idSelfie: 0,
          dateCreated: '2022-10-01T16:01:59.149927',
          url: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
          state: 'SELFIE_REJECTED',
          rejectionReasons: ['COVERED_FACE'],
          rejectionDescription: 'Balaclava',
          student: {
            ra: '21010757',
            email: 'eusousoller@gmail.com',
            name: 'Victor',
          },
        },
        {
          idSelfie: 1,
          dateCreated: '2022-10-01T16:01:59.149927',
          url: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
          state: 'SELFIE_REJECTED',
          rejectionReasons: ['COVERED_FACE'],
          rejectionDescription: 'Balaclava',
          student: {
            ra: '21010757',
            email: 'eusousoller@gmail.com',
            name: 'Victor',
          },
        },
        {
          idSelfie: 0,
          dateCreated: '2022-10-01T16:01:59.149927',
          url: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
          state: 'SELFIE_REJECTED',
          rejectionReasons: ['COVERED_FACE'],
          rejectionDescription: 'Balaclava',
          student: {
            ra: '21010757',
            email: 'eusousoller@gmail.com',
            name: 'Victor',
          },
        },
        {
          idSelfie: 0,
          dateCreated: '2022-10-01T16:01:59.149927',
          url: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg',
          state: 'APPROVED',
          rejectionReasons: ['COVERED_FACE'],
          rejectionDescription: 'Balaclava',
          student: {
            ra: '21010757',
            email: 'eusousoller@gmail.com',
            name: 'Victor',
          },
        },
      ],
    };

    return of(a);
  }
}

// {"all_selfies": [{"idSelfie": 0, "dateCreated": "2022-10-01T16:01:59.149927", "url": "https://i.imgur.com/0KFBHTB.jpg", "state": "DECLINED", "rejectionReasons": ["COVERED_FACE"], "rejectionDescription": "Balaclava", "student": {"ra": "21010757", "email": "eusousoller@gmail.com", "name": "Victor"}
