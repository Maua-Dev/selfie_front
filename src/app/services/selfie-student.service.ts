import { Observable } from "rxjs";

export abstract class SelfieStudent {
    public abstract getSelfie(): string;
    public abstract uploadSelfie(base64Image: string): Observable<any>;
}