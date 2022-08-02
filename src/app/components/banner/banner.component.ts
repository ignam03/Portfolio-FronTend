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

  constructor(private usuarioSvc: UsuarioService) {
    this.usuario = new Usuario();
   }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario(){
    this.usuarioSvc.getUsuario().subscribe(result => {
      console.log(result)
      this.usuario = new Usuario();
      Object.assign(this.usuario, result)
      console.log(this.usuario)
    })
    
  }

}
