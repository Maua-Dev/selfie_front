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
  private studentRA : string = '21010757' //'17090212  21010757'  

  constructor(private http: HttpClient) { }

  // FAZ A REQUISICAO HTTP GET INFORMACOES DA SELFIE
  public gettingJson() : Observable<any>{
    return this.http.get<any>(`${this.baseURL}/get-selfies-by-ra?ra=${this.studentRA}`)
  }

  // PEGA O CARD INICIAL 
  public getInicialCard(){
    return new Card(this.id, 'Não enviado ainda','','NEED_TO_SEND','','')        
  }

  list : Card[] = []

  public showCards(json : any) : any{
    var motivo !: string
    
    // caso ja haja selfies no RA
    if(json['selfies'].length !==0){
      for(var i : number = 0; i < json['selfies'].length; i++){
        // pegando as datas! 
          let data = json['selfies'][i]['dateUpload'].substring(8,10)
          let mes = json['selfies'][i]['dateUpload'].substring(5,7)
          let ano = json['selfies'][i]['dateUpload'].substring(0,4)
          
          let date = `${data}/${mes}/${ano}`
          
          // fazendo o filtro dos motivos! --> fazer enums!!
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
          this.list.push(card)   //vai puxar na lista para ver ocasioes anteriores, senão ele pula para o proximo
      }
    }

    // caso não haja selfies no RA
    if(json['selfies'].length === 0){
      let card = this.getInicialCard()
      console.log(card)
      this.list.push(card)
    }

    console.log(this.list)
    return this.list
  }

  public createCards() : any{

    //vai criar um card no momento em que ele tira a foto, e nesse momento, cria-se uma classe Card e uma requisicao post

    let card = new Card(this.id++,'data de hoje','selfie','','','')   //criando classe card
    this.list.push(card)


  }

}


