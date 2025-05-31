import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Ruta } from '../models/ruta';

@Injectable({
  providedIn: 'root',
})
export class RutaService {
  rutas: Ruta[] = [
    // new Ruta({ id: 1, origen: 'Bogotá', destino: 'Medellín' }),
    // new Ruta({ id: 2, origen: 'Cali', destino: 'Barranquilla' }),
    // new Ruta({ id: 3, origen: 'Cartagena', destino: 'Santa Marta' }),
    // new Ruta({ id: 4, origen: 'Bucaramanga', destino: 'Cúcuta' }),
    // new Ruta({ id: 5, origen: 'Pereira', destino: 'Manizales' }),
    // new Ruta({ id: 6, origen: 'Medellín', destino: 'Bogotá' }),
    // new Ruta({ id: 7, origen: 'Barranquilla', destino: 'Cali' }),
    // new Ruta({ id: 8, origen: 'Santa Marta', destino: 'Cartagena' }),
    // new Ruta({ id: 9, origen: 'Cúcuta', destino: 'Bucaramanga' }),
    // new Ruta({ id: 10, origen: 'Manizales', destino: 'Pereira' }),
  ];

  constructor() {}

  findAll(): Observable<Ruta[]> {
    return of(this.rutas);
  }
}
