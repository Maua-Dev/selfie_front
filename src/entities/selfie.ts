import { Student } from 'src/entities/student-admin-domain';
export class Selfie {
  constructor(
    public idSelfie: number,
    public dateUpload: string,
    public imgURL: string,
    public state: string,
    public rejectionReason?: string,
    public rejectionDescription?: string,
    public student?: Student
  ) {}

  public static InstatiateSelfieFromJson(selfieJson: any) {
    return new Selfie(
      selfieJson['idSelfie'],
      selfieJson['dateCreated'],
      selfieJson['url'],
      selfieJson['state'],
      selfieJson['rejectionReasons'],
      selfieJson['rejectionDescription'],
      Student.InstantiateStudentFromJson(selfieJson['student'])
    );
  }
}
