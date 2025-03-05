import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'http://localhost:3000/';

  constructor( private http: HttpClient ) { }

  getMessages() : Observable<any> {
    return this.http.get(this.url + 'messages');
  }

  postMessage(message: any) : Observable<any> {
    return this.http.post(this.url + 'message', message);
  }

}
