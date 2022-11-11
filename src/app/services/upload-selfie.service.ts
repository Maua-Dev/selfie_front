import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UploadSelfieService {

    constructor(private http: HttpClient){ }

    public async testSendImageService(selfie:string) {
        let data = {
            'url': 'https://test-selfie-bucket.s3.amazonaws.com/', 
            'fields': <any>{
                'x-amz-meta-ra': '20010990', 
                'x-amz-meta-name': 'DAVI FERNANDES SIMOES SOARES', 
                'x-amz-meta-email': '20.01099-0@maua.br', 
                'key': '20010990/selfie-2022-11-10-20:31:35-71887.jpeg', 
                'AWSAccessKeyId': 'AKIAT26XMTD74XSJ5FPO', 
                'policy':'eyJleHBpcmF0aW9uIjogIjIwMjItMTEtMTRUMjM6MzE6MzVaIiwgImNvbmRpdGlvbnMiOiBbeyJ4LWFtei1tZXRhLXJhIjogIjIwMDEwOTkwIn0sIHsieC1hbXotbWV0YS1uYW1lIjogIkRBVkkgRkVSTkFOREVTIFNJTU9FUyBTT0FSRVMifSwgeyJ4LWFtei1tZXRhLWVtYWlsIjogIjIwLjAxMDk5LTBAbWF1YS5iciJ9LCB7ImJ1Y2tldCI6ICJ0ZXN0LXNlbGZpZS1idWNrZXQifSwgeyJrZXkiOiAiMjAwMTA5OTAvc2VsZmllLTIwMjItMTEtMTAtMjA6MzE6MzUtNzE4ODcuanBlZyJ9XX0=', 'signature': 'VkhUmndai09Ue2UYe8jEyQSnAsw='
            }
        }
  
        let base64 = selfie

        let base64Res = await fetch(base64)
        const blob = await base64Res.blob()
        const formdata = new FormData()
        for(let val in data.fields){
          formdata.append(val,data.fields[val])
        }
        formdata.append('file',blob)
        this.http.post(data.url,formdata).subscribe((res)=>{
          console.log(res)
        })
    }
}