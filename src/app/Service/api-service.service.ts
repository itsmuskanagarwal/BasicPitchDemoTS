import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  httpHeaders= new HttpHeaders().set("Content-type","application/json");
  constructor(
    // private _httpClient: HttpClient
    ) {}

  convertAudio(audioFile: File) {
    const formData = new FormData();
    formData.append('audioFile', audioFile);
  
    // return this._httpClient.get('http://localhost:3000/convertAudio', { responseType: 'json' });
  }
  
}
