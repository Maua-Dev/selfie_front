export class Selfie {
  constructor(
    private _idSelfie: number,
    private _dateUpload: string,
    private _imgURL: string,
    private _state: string,
    private _rejectionReason?: string,
    private _rejectionDescription?: string
  ) {}

  public get rejectionReason(): string {
    return this.rejectionReason;
  }

  public get state(): string {
    return this._state;
  }
  public set state(value: string) {
    this._state = value;
  }
  public get imgURL(): string {
    return this._imgURL;
  }
  public set imgURL(value: string) {
    this._imgURL = value;
  }
  public get dateUpload(): string {
    return this._dateUpload;
  }
  public set dateUpload(value: string) {
    this._dateUpload = value;
  }
  public get idSelfie(): number {
    return this._idSelfie;
  }
  public set idSelfie(value: number) {
    this._idSelfie = value;
  }

  public static InstantiateSelfieFromJson(jsonString: any): Selfie {
    return new Selfie(
      jsonString['idSelfie'],
      jsonString['dateUpload'],
      jsonString['url'],
      jsonString['state'],
      jsonString['rejectionReason'],
      jsonString['rejectionDescription']
    );
  }

  public static InstantiateSelfiesListFromJson(jsonString: any[]): Selfie[] {
    let selfiesList: Selfie[] = [];

    jsonString.forEach((selfie: any) => {
      selfiesList.push(this.InstantiateSelfieFromJson(selfie));
    });

    return selfiesList;
  }
}
