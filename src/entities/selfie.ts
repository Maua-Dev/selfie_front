class Selfie {
  constructor(
    private _idSelfie: number,
    private _dateUpload: string,
    private _imgURL: string,
    private _state: string,
    private _rejectionReason: string,
    private _rejectionDescription: string
  ) {}

  public get rejectionDescription(): string {
    return this._rejectionDescription;
  }
  public set rejectionDescription(value: string) {
    this._rejectionDescription = value;
  }
  public get rejectionReason(): string {
    return this._rejectionReason;
  }
  public set rejectionReason(value: string) {
    this._rejectionReason = value;
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
}
