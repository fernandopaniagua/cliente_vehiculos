import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevoVehiculoComponent } from './formulario-nuevo-vehiculo.component';

describe('FormularioNuevoVehiculoComponent', () => {
  let component: FormularioNuevoVehiculoComponent;
  let fixture: ComponentFixture<FormularioNuevoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNuevoVehiculoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNuevoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
