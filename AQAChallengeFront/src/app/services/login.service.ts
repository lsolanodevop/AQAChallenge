import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/login';
  constructor( private http: HttpClient ) { }

  login(username: string, password: string) : Observable<any> {
    return this.http.post(this.url, { username, password });
  }


}
