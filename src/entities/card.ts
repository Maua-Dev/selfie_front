export class Card{
    private id : number;
    private data : string;
    private selfie : string;
    private situacao : string;
    private motivo : string;
    private descricao : string;

    constructor(id : number ,data : string, selfie : string, situacao : string, motivo : string, descricao : string){
        this.id = id;
        this.data = data;
        this.selfie = selfie;
        this.situacao = situacao;
        this.motivo = motivo;
        this.descricao = descricao;
    }

    public getId(){
        return this.id
    }

    public setSelfie(){
        return this.selfie
    }

    public getData(){
        return this.data
    }

    public getSituacao(){
        return this.situacao
    }

    public getMotivo() : string{
        return this.motivo
    }

    public getDescricao(){
        return this.descricao
    }

}