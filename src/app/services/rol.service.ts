import { Injectable } from '@angular/core';
import { Rol } from '../models/rol';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class rolService {
  private roles: Rol[] = [
    new Rol({ id: 1, nombre: 'Administrador' }),
    new Rol({ id: 2, nombre: 'Secretario/a' }),
    new Rol({ id: 3, nombre: 'Conductor' }),
  ];
  constructor() {}

  findAll(): Observable<Rol[]> {
    return of(this.roles);
  }
}
