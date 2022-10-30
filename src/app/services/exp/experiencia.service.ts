import { Experiencia } from './../../models/experiencia/experiencia';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url: string = 'https://appportfoliobackendarg.herokuapp.com/experience/';

  constructor(private _http: HttpClient) {

  }

  getAllExperiences(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url + "see/all");
  }

  getExperience(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url + "see/" + id);
  }

  updateExperience(experience: Experiencia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    console.log(experience);
    return this._http.put<any>(this.url + "edit/" + experience.expId, experience);
  }

  createdExperience(experience: Experiencia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    console.log(experience);
    return this._http.post(this.url + 'new', experience)
  }

  deleteExperience(id: number): Observable<any> {
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
