import { Student } from '../../entities/student';
import { Observable } from 'rxjs';

export abstract class FetchStudent {
  abstract FetchStudent(studentRA: string): Observable<Student>;
  abstract FetchStudentsList(): Observable<Student[]>;
}
