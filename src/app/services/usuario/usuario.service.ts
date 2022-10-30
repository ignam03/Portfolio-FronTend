import { Usuario } from './../../models/usuario/usuario';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = "http://localhost:8080/portfolio/see/user"
  constructor(private _http: HttpClient) {

  }

  getUsuarios(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url);
  }

  getUsuario(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    return this._http.get(this.url + "/" + 1);
  }

  updateUsuario(usuario: Usuario): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    console.log(usuario.userId);
    console.log(usuario);
    return this._http.put<any>("http://localhost:8080/portfolio/edit/" + usuario.userId, usuario);
  }

  createdUsuario(usuario:Usuario) {
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    }
    console.log(usuario);
    return this._http.post<any>("http://localhost:8080/portfolio/new/",usuario);
  }
}
