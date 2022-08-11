import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:8080/auth/";

  constructor(private _http: HttpClient) {

  }

  login(username: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    let body = JSON.stringify({ username: username, password: password })
    console.log(body);
    return this._http.post(this.url + 'signin', body, httpOptions);
  }

}
