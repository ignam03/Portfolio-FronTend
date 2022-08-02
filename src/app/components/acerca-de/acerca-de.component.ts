import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  usuario!: Usuario;
  usuarios!: Array<Usuario>;
  constructor(private usuarioSvc: UsuarioService) {

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
