import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario!: Usuario;
  usuarios!: Array<Usuario>;

  constructor(private usuarioSvc: UsuarioService) {
    this.usuario = new Usuario();
    this.cargarUsuario()
  }

  ngOnInit(): void {
  }

  cargarUsuarios() {
    this.usuarioSvc.getUsuarios().subscribe(result => {
      this.usuarios = new Array<Usuario>();
      result.forEach((element: any) => {
        this.usuario = new Usuario()
        Object.assign(this.usuario, element)
        this.usuarios.push(this.usuario)
      })
      console.log(this.usuarios)
    }, error => {
      console.log(error)
    }
    )
  }

  cargarUsuario() {
    this.usuarioSvc.getUsuario().subscribe(result => {
      this.usuario = new Usuario();
      Object.assign(this.usuario, result)
    })

  }
}
