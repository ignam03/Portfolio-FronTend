import { ToastrService } from 'ngx-toastr';
import { Usuario } from './../../models/usuario/usuario';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { TokenService } from './../../services/token/token.service';
import { AuthService } from './../../services/auth/auth.service';
import { User } from './../../models/user/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!: User;
  username!: string
  password!: string;
  isLogged!: boolean;
  roles!: string[];
  usuario!: Usuario


  constructor(private router: Router, private authSvc: AuthService, private tokenSvc: TokenService, private UsuarioSvc: UsuarioService, private toastrSvc:ToastrService) {
    this.user = new User();
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
    if (this.tokenSvc.getToken()) {
      this.isLogged = true;
    }
  }


  login() {
    // this.username = "igna3";
    // this.password = "123root";
    console.log(this.user.username)
    console.log(this.user.password)
    this.authSvc.login(this.user.username, this.user.password).subscribe(result => {
      console.log(result.token);
      console.log(result)
      this.tokenSvc.setToken(result.token);
      console.log(result.token);
      this.isLogged = true;
      console.log(this.isLogged);
      this.toastrSvc.info("Loggin successfully");
      //this.reloadPage();
      // this.UsuarioSvc.getUsuario().subscribe(result => {
      //   console.log(result);
      //   this.usuario = new Usuario();
      //   Object.assign(this.usuario, result)
      //   console.log(this.usuario);
      //   this.router.navigate(['/'])
      // })
      this.router.navigate(['/'])
    }, err => {
      console.log(err);
    })

  }

  reloadPage(): void {
    window.location.reload();
  }
  volver() {
    this.router.navigate(['/']);
  }

  createdAccount(){
    this.router.navigate(['/register'])
  }

  createdUsuario(){
    this.usuario.titulo=" ";
    this.usuario.descripcion=" ";
    console.log(this.usuario);
    this.UsuarioSvc.createdUsuario(this.usuario).subscribe(data => {
      this.toastrSvc.success("Usuario has been created");
      this.router.navigate(['/']);
    })
  }
}
