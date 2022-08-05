import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url: string = "http://localhost:8080/skills/ver/todas"

  constructor(private _http: HttpClient) {

  }

  getSkills(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url);
  }
}
