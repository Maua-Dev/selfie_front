import { Observable } from "rxjs";
import { Student } from "src/entities/student";

export abstract class SelfieStudent {
    public abstract getName() : Observable<Student>;
    public abstract getSelfie(): string;
    public abstract uploadSelfie(base64Image: string): Observable<any>;
}