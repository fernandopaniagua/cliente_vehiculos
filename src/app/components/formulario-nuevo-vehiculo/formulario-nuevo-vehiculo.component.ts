import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SVehiculosService } from 'src/app/services/s-vehiculos.service';

@Component({
  selector: 'app-formulario-nuevo-vehiculo',
  templateUrl: './formulario-nuevo-vehiculo.component.html',
  styleUrls: ['./formulario-nuevo-vehiculo.component.css']
})
export class FormularioNuevoVehiculoComponent implements OnInit {
  formulario:FormGroup;//Variable que va a contener la información del formulario
  constructor(private servicioVehiculos:SVehiculosService, private router:Router) { 
    this.formulario = new FormGroup({
      nombre: new FormControl("", [Validators.required]),
      descripcion: new FormControl(),
      imagen:new FormControl()
    })

  }

  ngOnInit(): void {
  }

  crearVehiculo(){
    if (!this.formulario.invalid){
      this.servicioVehiculos.save(this.formulario.value).subscribe(
        respuesta => {
          this.procesarRespuesta(respuesta);
        })
    }
  }
  procesarRespuesta(respuesta:any){
    console.log("Insertado...");
    //this.formulario.controls["nombre"].setValue("");
    this.formulario.reset();
    this.router.navigate(['listado']);
  }

}
