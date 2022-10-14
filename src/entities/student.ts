export class Student{
    private name : string
    private date : string
    private status : string
    private motivo: string

    // pensar na selfie depois

    constructor(name : string, date : string, status : string, motivo : string){
        this.name = name
        this.date = date
        this.status = status
        this.motivo = motivo
    }

    public GetNome() : string {
        return this.name
    }

    public GetData() : string {
        return this.date
    }

    public GetStatus() : string{
        return this.status
    }

    public GetMotivo() : string{
        return this.motivo
    }
}