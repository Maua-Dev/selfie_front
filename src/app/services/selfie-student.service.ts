import { Observable } from 'rxjs';
import { Student } from 'src/entities/student-aluno-domain';

export abstract class SelfieStudent {
  public abstract getStudent(): Observable<Student>;
  public abstract getStudentAndSelfie(): Observable<any>;
  public abstract getSelfie(): string;
  public abstract uploadSelfie(base64Image: string): Observable<any>;
  public abstract cuttingPhoto(base64Image:string) : any;
}
