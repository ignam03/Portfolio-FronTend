import { TokenService } from './../../services/token/token.service';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  usuario!: Usuario;
  usuarios!: Array<Usuario>;
  isLogged: boolean = false;
  constructor(
    private usuarioSvc: UsuarioService,
    private tokenService: TokenService
  ) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.cargarUsuario();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarUsuario() {
    this.usuarioSvc.getUsuario().subscribe((result) => {
      this.usuario = new Usuario();
      Object.assign(this.usuario, result);
    });
  }

  updateUsuario(usuario: Usuario): void {
    this.usuarioSvc.updateUsuario(this.usuario).subscribe((result) => {});
  }

  onNameChange($event: any) {
    null;
  }
}
