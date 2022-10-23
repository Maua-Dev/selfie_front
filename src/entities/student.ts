import { Selfie } from "./selfie"

export class Student{
    constructor(private name : string, private RA : string, private imageURL : string, private uploadedSelfiesList : Selfie[]){
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
      var url = this.uploadedSelfiesList.pop()?.imgURL

      return url? url : `Foto de ${this.name} está undefined`
    }


    public SetImageURL(newURL : string) : void {
        this.imageURL = newURL
    }

    public GetUploadedSelfiesList() : Selfie[]{
      return this.uploadedSelfiesList
    }

}