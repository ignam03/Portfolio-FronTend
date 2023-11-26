import { Habilidad } from './../../models/habilidad/habilidad';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  url: string = `${environment.url}/skills/`;
  //url:string="http://localhost:8080/skills/";

  constructor(private _http: HttpClient) {}

  getSkills(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.url + 'see/all');
  }

  getSkill(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.url + 'see/' + id);
  }

  updateSkill(skill: Habilidad): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.put<any>(this.url + 'edit/' + skill.id, skill);
  }

  createdSkill(skill: Habilidad, idUser: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.post(this.url + 'new/' + idUser, skill);
  }

  deleteSkill(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.delete(this.url + 'delete/' + id);
  }
}
