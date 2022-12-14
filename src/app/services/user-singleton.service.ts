import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserSingletonService {
  private userName: string = ''
  private userRA: string = ''
  private userEmail: string = ''  

  constructor() { }

  public InitializerUser(userName: string, userRA: string, userEmail: string): void{
    this.userName = userName
    this.userRA = userRA
    this.userEmail = userEmail
  }

  public GetUserInfos(){
    return {
      userName: this.userName,
      userRA: this.userRA,
      userEmail: this.userEmail
    }
  }
}
