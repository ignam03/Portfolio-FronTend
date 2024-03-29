import { Experiencia } from './../../models/experiencia/experiencia';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  url: string = `${environment.url}/experience/`;
  //url:string="http://localhost:8080/experience/"
  constructor(private _http: HttpClient) {}

  getAllExperiences(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.url + 'see/all');
  }

  getExperience(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.url + 'see/' + id);
  }

  updateExperience(experience: Experiencia): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    console.log(experience);
    return this._http.put<any>(this.url + 'edit/' + experience.id, experience);
  }

  createdExperience(experience: Experiencia, idUser: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.post(this.url + 'new/' + idUser, experience);
  }

  deleteExperience(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    console.log(id);
    return this._http.delete(this.url + 'delete/' + id);
  }
}
