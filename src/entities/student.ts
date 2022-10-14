export class Student{
    constructor(private name : string, private RA : string, private imageURL : string){
        this.name = name
        this.RA = RA
        this.imageURL = imageURL
    }

    public GetName() : string {
        return this.name
    }

    public SetName(newName : string) : void {
        this.name = newName
    }

    public GetRA() : string {
        return this.RA
    }

    public SetRA(newRA : string) : void {
        this.RA = newRA
    }

    public GetImageURL() : string {
        return this.imageURL
    }

    public SetImageURL(newURL : string) : void {
        this.imageURL = newURL
    }

}