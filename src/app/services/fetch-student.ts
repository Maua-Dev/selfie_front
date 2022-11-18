import { Student } from '../../entities/student-admin-domain';
import { Observable } from 'rxjs';

export abstract class FetchStudent {
  abstract FetchStudent(studentRA: string): Observable<Student>;
  abstract FetchStudentsList(): Observable<Student[]>;
}
