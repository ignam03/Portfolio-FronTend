import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  usuario!: Usuario;
  usuarios!: Array<Usuario>;

  constructor(private usuarioSvc: UsuarioService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.usuarioSvc.getUsuario().subscribe(result => {
      this.usuario = new Usuario();
      Object.assign(this.usuario, result)
    })

  }

}
