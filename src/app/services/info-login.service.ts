//tentativa de unificar infos do login

export class InfoLogin{
    private ra : string = '17090212'

    constructor(ra : string){
        this.ra = ra
    }

    getRA(){
        return this.ra
    }
}