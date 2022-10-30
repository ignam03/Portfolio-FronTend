import { ToastrService } from 'ngx-toastr';
import { TokenService } from './../../services/token/token.service';
import { Experiencia } from './../../models/experiencia/experiencia';
import { ExperienciaService } from './../../services/exp/experiencia.service';
import { EducacionService } from './../../services/edu/educacion.service';
import { Educacion } from './../../models/educacion/educacion';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  eduLoad!: Educacion;
  educacion!: Educacion;
  educacionList!: Array<Educacion>;
  experience!: Experiencia;
  expLoad!: Experiencia;
  experienceList!: Array<Experiencia>;
  isLogged = false;

  constructor(private educacionSvc: EducacionService, private experienceSvc: ExperienciaService, private activatedRoute: ActivatedRoute, private tokenService: TokenService, private toastrSvc: ToastrService) {
    this.educacion = new Educacion();
    this.experience = new Experiencia();
  }

  ngOnInit(): void {
    this.cargarEducacionList();
    this.loadAllExp();
    this.activatedRoute.params.subscribe((params: any) => {
      this.loadEducation(params['id'])
      this.loadExperience(params['id'])
    })
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarEducacionList() {
    this.educacionSvc.getEduTodas().subscribe(result => {
      console.log(result);
      this.educacionList = new Array<Educacion>();
      result.forEach((element: any) => {
        this.educacion = new Educacion();
        Object.assign(this.educacion, element);
        this.educacionList.push(this.educacion);
        console.log(this.educacion)
      })
    })
  }


  loadEducation(id: number) {
    this.eduLoad = new Educacion();
    this.educacionSvc.getEducation(id).subscribe(result => {
      console.log(result);
      Object.assign(this.eduLoad, result);
      console.log(this.eduLoad)
    })
  }

  updateEducation() {
    console.log(this.eduLoad);
    this.educacionSvc.updateEducation(this.eduLoad).subscribe(result => {
      console.log("actualizado creo");
      this.toastrSvc.info("Education has update successfully");
      window.location.reload();
    })
  }

  createdEducation() {
    console.log(this.eduLoad);
    this.educacionSvc.createdEducation(this.eduLoad).subscribe(result => {
      this.toastrSvc.success("Education has created successfully");
      window.location.reload();
    })
    this.eduLoad = new Educacion();
  }

  deleteEducation(id: number) {
    this.educacionSvc.deleteEducation(id).subscribe(result => {
      this.toastrSvc.success("Education has deleted successfully");
      window.location.reload();
    })
  }

  //Method for experience


  loadAllExp() {
    this.experienceSvc.getAllExperiences().subscribe(result => {
      console.log(result);
      this.experienceList = new Array<Experiencia>();
      result.forEach((element: any) => {
        this.experience = new Experiencia();
        Object.assign(this.experience, element);
        this.experienceList.push(this.experience);
        console.log(this.experienceList);
      })
    })
  }

  loadExperience(id: number) {
    this.expLoad = new Experiencia();
    this.experienceSvc.getExperience(id).subscribe(result => {
      console.log(result);
      Object.assign(this.expLoad, result);
      console.log(this.expLoad)
    })
  }

  updateExperience() {
    console.log(this.expLoad);
    this.experienceSvc.updateExperience(this.expLoad).subscribe(result => {
      this.toastrSvc.info("Experience updated successfully");
      window.location.reload();
    })
  }

  createdExperience() {
    console.log(this.expLoad);
    this.experienceSvc.createdExperience(this.expLoad).subscribe(result => {
      this.toastrSvc.success("Experience created successfully");
      window.location.reload();
    })
    this.eduLoad = new Educacion();
  }

  deleteExperience(id: number) {
    console.log(id);
    this.experienceSvc.deleteExperience(id).subscribe(result => {
      this.toastrSvc.success("Experience deleted successfully");
      window.location.reload();
    })
  }
}
