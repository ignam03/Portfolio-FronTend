import { SkillService } from './../../services/skill/skill.service';
import { Habilidad } from './../../models/habilidad/habilidad';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  habilidad!: Habilidad;
  habilidades!: Array<Habilidad>;

  constructor(private habilidadSvc: SkillService) {

  }

  ngOnInit(): void {
    this.cargarSkills();
  }

  cargarSkills() {
    this.habilidadSvc.getSkills().subscribe(result => {
      console.log(result);
      this.habilidades = new Array<Habilidad>();
      result.forEach((element: any) => {
        this.habilidad = new Habilidad();
        Object.assign(this.habilidad, element);
        this.habilidades.push(this.habilidad);
        console.log(this.habilidad);
      })
    })
  }

}
