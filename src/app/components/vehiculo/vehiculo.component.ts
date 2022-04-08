import { Component, Input, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo.model';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  @Input() vehiculo:Vehiculo = new Vehiculo(0,"","","");
  constructor() { }

  ngOnInit(): void {
  }

}
