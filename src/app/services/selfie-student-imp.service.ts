import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SelfieStudent } from "./selfie-student.service";
@Injectable({
    providedIn: 'root'
})
export class SelfieStudentImp implements SelfieStudent {
    constructor(private http: HttpClient) {

    }
    public getSelfie(): string {
        throw new Error("Method not implemented.");
    }
    public uploadSelfie(base64Image: string): Observable<any> {
        const body = { url: base64Image }
        return this.http.post<any>('', body);
    }

}