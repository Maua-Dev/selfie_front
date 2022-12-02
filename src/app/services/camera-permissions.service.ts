import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class CameraPermissions{
    
    stream:any = null;

    constructor(){}

    turnOnCamera(){
        this.stream = navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'user'
          },
        }).then((response) => {
          this.stream = response
        }).catch(err => {
          this.stream = err
        })  
    }

    getStream(){
        return this.stream
    }

    turnOffCamera(stream:any){
        stream.getTracks().forEach(function(track:any) {
            if (track.readyState == 'live' && track.kind === 'video') {
                track.stop();
            }
        });
    }   

}