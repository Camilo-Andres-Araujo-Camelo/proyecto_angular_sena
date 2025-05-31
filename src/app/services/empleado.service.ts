import { Injectable } from '@angular/core';
import {
  Empleado,
  EmpleadoResponse,
  EmpleadosResponse,
} from '../models/empleado';
import { Rol } from '../models/rol';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private apiUrl = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {}

  findAll(): Observable<EmpleadosResponse> {
    return this.http.get<EmpleadosResponse>(this.apiUrl);
  }

  createEmpleado(empleado: Empleado): Observable<EmpleadoResponse> {
    console.log(empleado);
    return this.http.post<EmpleadoResponse>(this.apiUrl, empleado);
  }

  updateEmpleado(empleado: Empleado): Observable<EmpleadoResponse> {
    return this.http.put<EmpleadoResponse>(
      `${this.apiUrl}/${empleado.id}`,
      empleado
    );
  }

  deleteEmpleado(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  //? FindAll de cuando usaba el servicio de forma local
  // findAll(): Observable<Empleado[]> {
  //   return of(this.empleados);
  // }

  // private empleados: Empleado[] = [
  //   new Empleado({
  //     id: '1062485753',
  //     tipoDocumento: 'CC',
  //     nombres: 'Victor',
  //     apellidos: 'Somosa',
  //     fechaNacimiento: '1988-04-15',
  //     sexo: 'M',
  //     direccion: 'Calle 123 #45-67',
  //     telefono: '3001234567',
  //     password: '12345',
  //     roles: [new Rol({ id: 1, nombre: 'Administrador' })],
  //     email: 'vjsomosa@gmail.com',
  //   }),
  //   new Empleado({
  //     id: '49782700',
  //     tipoDocumento: 'CC',
  //     nombres: 'Sofía',
  //     apellidos: 'Martínez',
  //     fechaNacimiento: '1990-06-10',
  //     sexo: 'F',
  //     direccion: 'Cra 50 #10-20',
  //     telefono: '3109876543',
  //     password: '12345',
  //     roles: [new Rol({ id: 2, nombre: 'Secretario/a' })],
  //     email: 'sofia@gmail.com',
  //   }),
  //   new Empleado({
  //     id: '1065820842',
  //     tipoDocumento: 'CC',
  //     nombres: 'Camilo',
  //     apellidos: 'Araujo',
  //     fechaNacimiento: '1995-11-30',
  //     sexo: 'F',
  //     direccion: 'Calle 50 #20-15',
  //     telefono: '3221112233',
  //     password: '12345',
  //     roles: [new Rol({ id: 3, nombre: 'Administrador' })],
  //     email: 'camilo@gmail.com',
  //   }),
  //   new Empleado({
  //     id: '1068741852',
  //     tipoDocumento: 'CC',
  //     nombres: 'Luis',
  //     apellidos: 'Gómez',
  //     fechaNacimiento: '1988-02-25',
  //     sexo: 'M',
  //     direccion: 'Av. Siempre Viva 742',
  //     telefono: '3155556677',
  //     password: '12345',
  //     roles: [new Rol({ id: 3, nombre: 'Conductor' })],
  //     email: 'luis@gmail.com',
  //   }),
  //   new Empleado({
  //     id: '1061753951',
  //     tipoDocumento: 'CC',
  //     nombres: 'Carlos',
  //     apellidos: 'Ramírez',
  //     fechaNacimiento: '1985-09-05',
  //     sexo: 'M',
  //     direccion: 'Calle 80 #15-30',
  //     telefono: '3189998887',
  //     password: '12345',
  //     roles: [new Rol({ id: 3, nombre: 'Conductor' })],
  //     email: 'carlos@gmail.com',
  //   }),
  //   new Empleado({
  //     id: '52839162',
  //     tipoDocumento: 'TI',
  //     nombres: 'Valentina',
  //     apellidos: 'Rojas',
  //     fechaNacimiento: '1998-01-12',
  //     sexo: 'F',
  //     direccion: 'Carrera 60 #30-10',
  //     telefono: '3156784321',
  //     password: '12345',
  //     roles: [new Rol({ id: 3, nombre: 'Conductor' })],
  //     email: 'valentina@gmail.com',
  //   }),
  //   new Empleado({
  //     id: '30987654',
  //     tipoDocumento: 'CE',
  //     nombres: 'Javier',
  //     apellidos: 'Fernández',
  //     fechaNacimiento: '1979-07-20',
  //     sexo: 'M',
  //     direccion: 'Avenida Central #5-89',
  //     telefono: '3123456789',
  //     password: '12345',
  //     roles: [new Rol({ id: 3, nombre: 'Conductor' })],
  //     email: 'javier@gmail.com',
  //   }),
  // ];
}
