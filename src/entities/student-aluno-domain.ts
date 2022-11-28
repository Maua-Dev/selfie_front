export class Student{
    private name : string
    private ra: string
    private email: string

    // pensar na selfie depois

    constructor(name : string, ra : string, email : string){
        this.name = name  
        this.ra = ra
        this.email = email
    }

    public getNome() : string {
        return this.name
    }

    public getRa() : string {
        return this.ra
    }

    public getEmail() : string {
        return this.email
    }

    public static createStudent(json : any){
        return new Student(
            json['name'],
            json['ra'],
            json['email']
        )
    }

}