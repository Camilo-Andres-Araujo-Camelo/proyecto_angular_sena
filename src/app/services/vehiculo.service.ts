import { Injectable } from '@angular/core';
import { Vehiculo } from '../models/vehiculo';
import { Observable, of } from 'rxjs';
import { EmpleadoService } from './empleado.service';
import { Empleado, EmpleadoResponse } from '../models/empleado';

@Injectable({
  providedIn: 'root',
})
export class VehiculoService {
  private vehiculos: Vehiculo[] = [];
  constructor(private empleadoService: EmpleadoService) {
    this.empleadoService.findAll().subscribe((empleados: EmpleadoResponse) => {
      // const conductores = empleados.data((e) =>
      // e.roles.some((r) => r.nombre === 'Conductor')
      // );
      console.log(empleados.data);

      this.vehiculos = [
        // new Vehiculo({
        //   placa: 'ABC123',
        //   marca: 'Toyota',
        //   modelo: 2020,
        //   tipo: 'Automóvil',
        //   linea: 'Corolla',
        //   color: 'Blanco',
        //   capacidad: 5,
        //   conductor: conductores[0],
        // }),
        // new Vehiculo({
        //   placa: 'XYZ789',
        //   marca: 'Hyundai',
        //   modelo: 2024,
        //   tipo: 'Camioneta',
        //   linea: 'Tucson',
        //   color: 'Blanco',
        //   capacidad: 5,
        //   conductor: conductores[1],
        // }),
        // new Vehiculo({
        //   placa: 'LMN456',
        //   marca: 'Mercedes-Benz',
        //   modelo: 2021,
        //   tipo: 'Microbus',
        //   linea: 'Sprinter',
        //   color: 'Azul',
        //   capacidad: 15,
        //   conductor: conductores[2],
        // }),
        // new Vehiculo({
        //   placa: 'PQR321',
        //   marca: 'Ford',
        //   modelo: 2023,
        //   tipo: 'Camioneta',
        //   linea: 'Ranger',
        //   color: 'Gris',
        //   capacidad: 5,
        //   conductor: conductores[3],
        // }),
        // new Vehiculo({
        //   placa: 'DEF654',
        //   marca: 'Nissan',
        //   modelo: 2022,
        //   tipo: 'Camioneta',
        //   linea: 'Frontier',
        //   color: 'Gris',
        //   capacidad: 5,
        //   conductor: conductores[4],
        // }),
        // new Vehiculo({
        //   placa: 'GHI987',
        //   marca: 'Chevrolet',
        //   modelo: 2024,
        //   tipo: 'Bus',
        //   linea: 'NPR',
        //   color: 'Azul',
        //   capacidad: 30,
        //   conductor: conductores[0],
        // }),
        // new Vehiculo({
        //   placa: 'JKL258',
        //   marca: 'Volkswagen',
        //   modelo: 2021,
        //   tipo: 'Microbus',
        //   linea: 'Transporter',
        //   color: 'Azul',
        //   capacidad: 12,
        //   conductor: conductores[1],
        // }),
      ];
    });
  }
  findAll(): Observable<Vehiculo[]> {
    return of(this.vehiculos);
  }
}
