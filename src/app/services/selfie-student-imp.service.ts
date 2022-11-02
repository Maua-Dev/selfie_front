import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Student } from "src/entities/student";
import { SelfieStudent } from "./selfie-student.service";
@Injectable({
    providedIn: 'root'
})
export class SelfieStudentImp implements SelfieStudent {

    private readonly baseURL : string = 'https://idxd34yq6k.execute-api.us-east-1.amazonaws.com/prod/mss-student';
    private studentRA : string = '21010757'

    constructor(private http: HttpClient) {}
    
    public getStudent(): Observable<Student> {
        return this.http.get<Student>(
            `${this.baseURL}/get-student?ra=${this.studentRA}`
        )
    }

    public getSelfie(): string {
        throw new Error("Method not implemented.");
    }
    
    public uploadSelfie(base64Image: string): Observable<any> {
        console.log('ta utilizando aq?')
        const body = { url: base64Image }
        return this.http.post<any>('', body);
    }

}