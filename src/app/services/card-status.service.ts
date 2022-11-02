import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/entities/card';

@Injectable({
  providedIn: 'root'
})
export class CardStatusService {

  id : number = 0
  private readonly baseURL : string = 'https://idxd34yq6k.execute-api.us-east-1.amazonaws.com/prod/mss-student';
  private studentRA : string = '21010757'

  teste !: any
  idCard !: number
  date !: string
  situation !: string
  reason !: string
  description !: string

  constructor(private http: HttpClient) { }


  public creatingCard() : Observable<any>{
    return this.http.get<any>(
      `${this.baseURL}/get-selfies-by-ra?ra=${this.studentRA}`
    )
  }

  public getInicialCard(){
    return new Card(this.id++, '01/11/2022','','','','')
  }

  public createCards(json : any) : any{
    var list : Card[] = [];
    var motivo !: string;

    if(json['selfies'].length === 0){
      return new Card(this.id++,'Não enviado','Não enviado','Não enviado','Não enviado','Não enviado')
    }

    else{
      for(var i : number = 0; i < 2;i++){
          let data = json['selfies'][i]['dateUpload'].substring(8,10)
          let mes = json['selfies'][i]['dateUpload'].substring(5,7)
          let ano = json['selfies'][i]['dateUpload'].substring(0,4)
          
          let date = `${data}/${mes}/${ano}`
          
          // fazer enums aqui !
          if(json['selfies'][i]['rejectionReason'] === 'COVERED_FACE')
            motivo = 'Rosto coberto'
          else
            motivo = json['selfies'][i]['rejectionReason']
  
          let card = new Card(
              json['selfies'][i]['idSelfie'],
              date,       
              json['selfies'][i]['url'],
              json['selfies'][i]['state'],
              motivo,
              json['selfies'][i]['rejectionDescription']            
          )
          list.push(card)
      }
      return list
    }
  }

}
