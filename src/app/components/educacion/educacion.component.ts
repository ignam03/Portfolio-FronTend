import { EducacionService } from './../../services/edu/educacion.service';
import { Educacion } from './../../models/educacion/educacion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacion!: Educacion;
  educacionList!: Array<Educacion>;

  constructor(private educacionSvc:EducacionService) { 

  }

  ngOnInit(): void {
    this.cargarEducacionList();

    }


  cargarEducacionList(){
    this.educacionSvc.getEduTodas().subscribe(result => {
      console.log(result);
      this.educacionList = new Array<Educacion>();
      result.forEach((element: any) => {
        this.educacion = new Educacion();
        Object.assign(this.educacion,element);
        this.educacionList.push(this.educacion);
        console.log(this.educacion)
      })
    })
  }
}
