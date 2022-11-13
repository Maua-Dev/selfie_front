import { Selfie } from './selfie';

export class Student {
  constructor(
    public name: string,
    public ra: string,
    public email: string,
    public status?:string,
    public uploadedSelfiesList?: Selfie[]
  ) {}

  public static InstantiateStudentFromJson(studentJson : any){
    return new Student(studentJson['name'], studentJson['ra'], studentJson['email'])
  }
 
}
