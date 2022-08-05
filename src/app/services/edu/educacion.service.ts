import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url: string = 'http://localhost:8080/educacion/ver/todas';

  constructor(private _http: HttpClient) {

  }

  getEduTodas(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url);
  }
}
