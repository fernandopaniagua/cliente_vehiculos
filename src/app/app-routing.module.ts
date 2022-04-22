import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioNuevoVehiculoComponent } from './components/formulario-nuevo-vehiculo/formulario-nuevo-vehiculo.component';
import { ListadoVehiculosComponent } from './components/listado-vehiculos/listado-vehiculos.component';

const routes: Routes = [
  { path: 'crear', component: FormularioNuevoVehiculoComponent },
  { path: 'listado', component: ListadoVehiculosComponent },
  { path: '', component: ListadoVehiculosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
