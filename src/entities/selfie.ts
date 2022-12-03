import { Student } from 'src/entities/student-admin-domain';
import { AutomaticReview } from './automatic-review';
export class Selfie {
  constructor(
    public idSelfie: number,
    public dateUpload: string,
    public imgURL: string,
    public state: string,
    public rejectionReason?: string,
    public rejectionDescription?: string,
    public automaticReview?: AutomaticReview,
    public student?: Student,
  ) {}

  public static InstatiateSelfieFromJson(selfieJson: any) {
    return new Selfie(
      selfieJson['idSelfie'],
      selfieJson['dateCreated'],
      selfieJson['url'],
      selfieJson['state'],
      selfieJson['rejectionReasons'],
      selfieJson['rejectionDescription'],
      selfieJson['automaticReview'],
      Student.InstantiateStudentFromJson(selfieJson['student'])
    );
  }
}
