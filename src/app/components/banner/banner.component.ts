import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../../services/token/token.service';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  usuario!: Usuario;
  usuarios!: Array<Usuario>;
  isLogged = false;

  constructor(private usuarioSvc: UsuarioService, private tokenService: TokenService, private toastrSvc: ToastrService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarUsuario();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarUsuario() {
    this.usuarioSvc.getUsuario().subscribe(result => {
      this.usuario = new Usuario();
      Object.assign(this.usuario, result)
    })

  }

  updateUsuario(): void {
    this.usuarioSvc.updateUsuario(this.usuario).subscribe(result => {
      this.toastrSvc.info("Usuario updated successfully");
      window.location.reload();
    })
  }
}
