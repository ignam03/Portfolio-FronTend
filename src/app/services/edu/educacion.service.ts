import { Educacion } from './../../models/educacion/educacion';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url: string = 'http://localhost:8080/education/';

  constructor(private _http: HttpClient) {

  }

  getEduTodas(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url + "see/all");
  }

  getEducation(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url + "see/" + id);
  }

  updateEducation(educacion: Educacion): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    console.log(educacion);
    return this._http.put<any>(this.url + "edit/" + educacion.eduId, educacion);
  }

  createdEducation(educacion: Educacion): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    console.log(educacion);
    return this._http.post(this.url + 'new', educacion)
  }

  deleteEducation(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    console.log(id);
    return this._http.delete(this.url + "delete/" + id)
  }
}
