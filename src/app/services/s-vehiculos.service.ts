import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SVehiculosService {
  vehiculos:Observable<Vehiculo[]>=new Observable();
  constructor(private clienteHttp: HttpClient) {
  }
  getVehiculos(): Observable<Vehiculo[]> {
    console.log("Obteniendo productos del WS");
    this.vehiculos = this.clienteHttp.get<Vehiculo[]>("http://localhost:8080/vehiculos");
    return this.vehiculos;
  }

  save(vehiculo:any):Observable<any>{
    console.log("Guardando..." + vehiculo);
    const body = {};
    const parametros = new HttpParams()
            .append('nombre', vehiculo.nombre)
            .append('descripcion', vehiculo.descripcion)
            .append('imagen', vehiculo.imagen);
    const retorno = this.clienteHttp.post<any>("http://localhost:8080/vehiculos", body, {params:parametros});
    return retorno;
  }
}
