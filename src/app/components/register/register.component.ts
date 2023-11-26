import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario!:Usuario;
  constructor(private usarioSvc:UsuarioService, private toastrSvc:ToastrService, private router:Router) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  createdUsuario(){
    this.usuario.graduated=" ";
    this.usuario.biography=" ";
    console.log(this.usuario);
    this.usarioSvc.createdUsuario(this.usuario).subscribe(data => {
      this.toastrSvc.success("Usuario has been created");
      this.router.navigate(['/']);
    })
  }

}
