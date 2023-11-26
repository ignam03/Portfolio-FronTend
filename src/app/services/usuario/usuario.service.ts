import { Usuario } from './../../models/usuario/usuario';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  //url: string = "http://localhost:8080"
  url: string = `${environment.url}`;
  constructor(private _http: HttpClient) {}

  getUsuarios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.url + '/portfolio/see/all');
  }

  getUsuario(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.get(this.url + '/portfolio/see/user/' + 1);
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    console.log(usuario);
    return this._http.put<any>(
      this.url + '/portfolio/edit/' + usuario.id,
      usuario
    );
  }

  createdUsuario(usuario: Usuario) {
    const httpOptions = {
      headers: new HttpHeaders({}),
      params: new HttpParams({}),
    };
    return this._http.post<any>(this.url + '/portfolio/new', usuario);
  }
}
