import { Component, ViewChild, ElementRef} from '@angular/core';
import { ChuckService } from '../chuck.service';


@Component({
  selector: 'app-chiste',
  templateUrl: './chiste.component.html',
  styleUrls: ['./chiste.component.css']
})
export class ChisteComponent {
  informacionRecibida:any

  constructor(private variableServicio : ChuckService){
    this.variableServicio.obtenerChisteRandom().subscribe((data)=>{
      this.informacionRecibida = data
    })

  }

  obtenerChisteDelServicio(){
    this.variableServicio.obtenerChisteRandom().subscribe((data)=>{
      this.informacionRecibida = data
    })
  }

}

