import { Observable } from "rxjs";
import { Student } from "src/entities/student-davi";

export abstract class SelfieStudent {
    public abstract getStudent() : Observable<Student>;
    public abstract getSelfie(): string;
    public abstract uploadSelfie(base64Image: string): Observable<any>;
}