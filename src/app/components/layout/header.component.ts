import { TokenService } from './../../services/token/token.service';
import { Router } from '@angular/router';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  usuario!: Usuario;
  usuarios!: Array<Usuario>;

  constructor(private usuarioSvc: UsuarioService, private router: Router,private tokenSvc:TokenService) {
    this.usuario = new Usuario();
    this.cargarUsuario()
  }

  ngOnInit(): void {
    if(this.tokenSvc.getToken()){
      this.isLogged=true
    } else{
      this.isLogged=false;
    }
  }

  cargarUsuario() {
    this.usuarioSvc.getUsuario().subscribe(result => {
      this.usuario = new Usuario();
      Object.assign(this.usuario, result)
    })
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout(){
    this.tokenSvc.logout();
    window.location.reload();
  }
}
