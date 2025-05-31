import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root',
})
export class CiudadService {
  ciudades: Ciudad[] = [
    new Ciudad({ id: 1, nombre: 'Bogotá', lat: 4.711, lng: -74.0721 }),
    new Ciudad({ id: 2, nombre: 'Medellín', lat: 6.2442, lng: -75.5812 }),
    new Ciudad({ id: 3, nombre: 'Cali', lat: 3.4516, lng: -76.5319 }),
    new Ciudad({ id: 4, nombre: 'Barranquilla', lat: 10.9634, lng: -74.7966 }),
    new Ciudad({ id: 5, nombre: 'Cartagena', lat: 10.391, lng: -75.4793 }),
    new Ciudad({ id: 6, nombre: 'Santa Marta', lat: 11.2408, lng: -74.199 }),
    new Ciudad({ id: 7, nombre: 'Bucaramanga', lat: 7.1193, lng: -73.1198 }),
    new Ciudad({ id: 8, nombre: 'Cúcuta', lat: 7.8891, lng: -72.5071 }),
    new Ciudad({ id: 9, nombre: 'Pereira', lat: 4.8145, lng: -75.6891 }),
    new Ciudad({ id: 10, nombre: 'Manizales', lat: 5.0701, lng: -75.5136 }),
  ];
  constructor() {}

  findAll(): Observable<Ciudad[]> {
    return of(this.ciudades);
  }
}
