import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClientesResponse, ClienteResponse } from '../models/cliente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private apiUrl = 'https://api-proyecto-sena-opcr.onrender.com/api/clientes';

  constructor(private http: HttpClient) {}

  findAll(): Observable<ClientesResponse> {
    const clientesFromDb = this.http.get<ClientesResponse>(this.apiUrl);
    return clientesFromDb;
  }

  createCliente(cliente: Cliente): Observable<ClienteResponse> {
    return this.http.post<ClienteResponse>(this.apiUrl, cliente);
  }

  updateCliente(cliente: Cliente): Observable<ClienteResponse> {
    return this.http.put<ClienteResponse>(
      `${this.apiUrl}/${cliente.id}`,
      cliente
    );
  }

  deleteCliente(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  //? FindAll de cuando usaba el servicio de forma local
  // findAll(): Observable<Cliente[]> {
  //   return of(this.clientes);
  // }

  // private clientes: Cliente[] = [
  //   new Cliente({
  //     id: '1001759861',
  //     tipoDocumento: 'CC',
  //     nombres: 'Juan',
  //     apellidos: 'Pérez',
  //     fechaNacimiento: '1985-07-20',
  //     sexo: 'M',
  //     direccion: 'Calle 10 #5-30',
  //     telefono: '3001234567',
  //     email: 'juan.perez@gmail.com',
  //     fechaRegistro: '2024-01-10',
  //   }),
  //   new Cliente({
  //     id: '1002548635',
  //     tipoDocumento: 'TI',
  //     nombres: 'Sofía',
  //     apellidos: 'Gómez',
  //     fechaNacimiento: '2002-03-15',
  //     sexo: 'F',
  //     direccion: 'Carrera 15 #45-20',
  //     telefono: '3109876543',
  //     email: 'sofia.gomez@gmail.com',
  //     fechaRegistro: '2023-12-05',
  //   }),
  //   new Cliente({
  //     id: '1003759821',
  //     tipoDocumento: 'CE',
  //     nombres: 'Carlos',
  //     apellidos: 'Ramírez',
  //     fechaNacimiento: '1990-09-10',
  //     sexo: 'M',
  //     direccion: 'Avenida 50 #12-80',
  //     telefono: '3155556677',
  //     email: 'carlos.ramirez@gmail.com',
  //     fechaRegistro: '2023-11-22',
  //   }),
  //   new Cliente({
  //     id: '1004123657',
  //     tipoDocumento: 'PA',
  //     nombres: 'Ana',
  //     apellidos: 'López',
  //     fechaNacimiento: '1988-06-25',
  //     sexo: 'F',
  //     direccion: 'Calle 80 #30-10',
  //     telefono: '3189998887',
  //     email: 'ana.lopez@gmail.com',
  //     fechaRegistro: '2023-10-14',
  //   }),
  //   new Cliente({
  //     id: '1005156347',
  //     tipoDocumento: 'CC',
  //     nombres: 'Diego',
  //     apellidos: 'Martínez',
  //     fechaNacimiento: '1995-12-01',
  //     sexo: 'M',
  //     direccion: 'Calle 60 #40-15',
  //     telefono: '3221112233',
  //     email: 'diego.martinez@gmail.com',
  //     fechaRegistro: '2024-02-05',
  //   }),
  //   new Cliente({
  //     id: '1006684741',
  //     tipoDocumento: 'TI',
  //     nombres: 'Camila',
  //     apellidos: 'Fernández',
  //     fechaNacimiento: '2000-02-18',
  //     sexo: 'F',
  //     direccion: 'Carrera 25 #10-5',
  //     telefono: '3156784321',
  //     email: 'camila.fernandez@gmail.com',
  //     fechaRegistro: '2024-03-10',
  //   }),
  //   new Cliente({
  //     id: '1007476264',
  //     tipoDocumento: 'CE',
  //     nombres: 'Andrés',
  //     apellidos: 'Torres',
  //     fechaNacimiento: '1983-11-30',
  //     sexo: 'M',
  //     direccion: 'Avenida Central #75-90',
  //     telefono: '3123456789',
  //     email: 'andres.torres@gmail.com',
  //     fechaRegistro: '2023-09-30',
  //   }),
  // ];
}
