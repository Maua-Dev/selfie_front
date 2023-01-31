import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/entities/card';
import { Motivos } from 'src/entities/motivos';
@Injectable({
  providedIn: 'root'
})
export class CardStatusService {

  id : number = 0
  private readonly baseURL : string | undefined = environment.BASE_URL_ESTUDANTE_DOMAIN
  private studentRA : string = '20010990' //'17090212  21010757'  

  constructor(private http: HttpClient) { }

  public gettingJson() : Observable<any>{
    return this.http.get<any>(`${this.baseURL}/get-selfies-by-ra?ra=${this.studentRA}`)
  }

  public getInicialCard(){
    return new Card(this.id, 'Não enviado ainda','','NEED_TO_SEND','','')        
  }

  list : Card[] = []
  status!:string

  public showCards(json : any) : any{
    this.list = []
    var motivo !: string
    console.log(json)
    // caso ja haja selfies no RA
    if(json['selfies'].length !==0){
      for(var i : number = 0; i < json['selfies'].length; i++){
        // pegando as datas! 
          let data = json['selfies'][i]['dateCreated'].substring(8,10)
          let mes = json['selfies'][i]['dateCreated'].substring(5,7)
          let ano = json['selfies'][i]['dateCreated'].substring(0,4)
          
          let date = `${data}/${mes}/${ano}`
          
          this.status = json['selfies'][i]['state']
          
          // fazendo o filtro dos motivos!
          if(json['selfies'][i]['rejectionReasons'] in Motivos){
            for(let j = 0; j < json['selfies'][i]['rejectionReasons'].length; j++){
              if(json['selfies'][i]['rejectionReasons'][j] === 'NOT_ALLOWED_BACKGROUND')
                motivo = Motivos.NOT_ALLOWED_BACKGROUND
              if(json['selfies'][i]['rejectionReasons'][j] === 'COVERED_FACE')
                motivo = Motivos.COVERED_FACE
              if(json['selfies'][i]['rejectionReasons'][j] === 'NO_PERSON_RECOGNIZED')
                motivo = Motivos.NO_PERSON_RECOGNIZED
              if(json['selfies'][i]['rejectionReasons'][j] === 'OTHER_REASON')
                motivo = Motivos.OTHER_REASON
              if(json['selfies'][i]['rejectionReasons'][j] === 'NONE')
                motivo = Motivos.NONE
            }
          } 
            else{
              motivo = json['selfies'][i]['rejectionReasons']
            }
            
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
      this.list.push(card)
    }
    return this.list
  }

  //inutilizado, não há necessidade!
  public createCards() : any{
    let card = new Card(this.id++,'data de hoje','selfie','Pendente','','')   //criando classe card
  }

  public getStatus(){
    return this.status
  }

}


