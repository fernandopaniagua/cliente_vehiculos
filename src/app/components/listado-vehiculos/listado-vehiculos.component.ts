import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { SVehiculosService } from 'src/app/services/s-vehiculos.service';

@Component({
  selector: 'app-listado-vehiculos',
  templateUrl: './listado-vehiculos.component.html',
  styleUrls: ['./listado-vehiculos.component.css']
})
export class ListadoVehiculosComponent implements OnInit {
  vehiculos:Vehiculo[] = new Array<Vehiculo>();
  constructor(private servicioVehiculos:SVehiculosService) { 
  }

  ngOnInit(): void {
    this.servicioVehiculos.getVehiculos().subscribe(
      vehiculos => {
        this.vehiculos = vehiculos;
      })
  }
}
