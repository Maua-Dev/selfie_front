import { Selfie } from './selfie';

export class Student {
  constructor(
    private name: string,
    private RA: string,
    private uploadedSelfiesList: Selfie[]
  ) {}

  public GetName(): string {
    return this.name;
  }

  public SetName(newName: string): void {
    this.name = newName;
  }

  public GetRA(): string {
    return this.RA;
  }

  public SetRA(newRA: string): void {
    this.RA = newRA;
  }

  public GetImageURL(): string {
    var url = this.uploadedSelfiesList[0].imgURL;

    return url;
  }

  public GetUploadedSelfiesList(): Selfie[] {
    return this.uploadedSelfiesList;
  }

  public static InstantiateStudentFromJson(
    jsonString: any,
    selfiesList: Selfie[]
  ): Student {
    return new Student(jsonString['name'], jsonString['ra'], selfiesList);
  }

  public static FactoryStudentFromJsonAndSelfieJson(jsonString: any, selfiesList: any): Student {
    return new Student(
      jsonString['name'],
      jsonString['ra'],
      Selfie.InstantiateSelfiesListFromJson(selfiesList)
    );
  }
}
