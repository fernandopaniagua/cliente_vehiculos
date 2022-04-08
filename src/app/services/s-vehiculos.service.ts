import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SVehiculosService {
  vehiculos:Observable<Vehiculo[]>=new Observable();
  constructor(private clienteHttp: HttpClient) {
  }
  getVehiculos(): Observable<Vehiculo[]> {
    console.log("Obteniendo productos del WS");
    this.vehiculos = this.clienteHttp.get<Vehiculo[]>("http://localhost:8080/vehiculos") 
    return this.vehiculos;
  }
}
