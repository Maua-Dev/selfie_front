import { TitleStrategy } from "@angular/router";

export class Card{
    private id : number;
    private data : string;
    private situacao : string;
    private motivo : string;

    constructor(id : number, data : string, situacao : string, motivo : string){
        this.id = id;
        this.data = data;
        this.situacao = situacao;
        this.motivo = motivo;
    }

    public GetId(){
        return this.id
    }

    public SetId(idNovo : number){
        this.id = idNovo
    }

    public GetData(){
        return this.data
    }

    public GetSituacao(){
        return this.situacao
    }

    public GetMotivo() : string{
        return this.motivo
    }
}