import { UsuarioService } from './../../services/usuario/usuario.service';
import { Usuario } from './../../models/usuario/usuario';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from './../../services/token/token.service';
import { ToastrService } from 'ngx-toastr';
import { SkillService } from './../../services/skill/skill.service';
import { Habilidad } from './../../models/habilidad/habilidad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  
  skillLoad!: Habilidad;
  habilidad!: Habilidad;
  habilidades!: Array<Habilidad>;
  isLogged!: boolean;
  usuario!: Usuario;

  constructor(private habilidadSvc: SkillService, private toastrSvc: ToastrService, private tokenService: TokenService, private activatedRoute:ActivatedRoute
    ,private usuarioSvc: UsuarioService) {
    this.skillLoad = new Habilidad();
    this.habilidad = new Habilidad();
    this.isLogged = false;
  }

  ngOnInit(): void {
    this.cargarUsuario();
    this.cargarSkills();
    this.activatedRoute.params.subscribe((params: any) => {
      this.loadSkill(params['id'])
    })
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

  cargarSkills() {
    this.habilidadSvc.getSkills().subscribe(result => {
      this.habilidades = new Array<Habilidad>();
      result.forEach((element: any) => {
        this.habilidad = new Habilidad();
        Object.assign(this.habilidad, element);
        this.habilidades.push(this.habilidad);
      })
    })
  }

  loadSkill(id: number) {
    this.skillLoad = new Habilidad();
    if (this.tokenService.getToken()) {
      this.habilidadSvc.getSkill(id).subscribe(result => {
        Object.assign(this.skillLoad, result);
      })
    }
  }

  updateSkill() {
    console.log(this.skillLoad);
    this.habilidadSvc.updateSkill(this.skillLoad).subscribe(result => {
      this.toastrSvc.info("Skill has update successfully");
      window.location.reload();
    })
  }

  createdSkill() {
    console.log(this.skillLoad);
    this.habilidadSvc.createdSkill(this.skillLoad,this.usuario.userId).subscribe(result => {
      this.toastrSvc.success("Skill has created successfully");
      window.location.reload();
    })
    this.skillLoad = new Habilidad();
  }

  deleteSkill(id: number) {
    this.habilidadSvc.deleteSkill(id).subscribe(result => {
      this.toastrSvc.success("Skill has deleted successfully");
      window.location.reload();
    })
  }

}
