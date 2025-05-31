import { Empleado } from './empleado';

export class Vehiculo {
  public placa: string = '';
  public marca: string = '';
  public modelo: number = 0;
  public tipo: 'Bus' | 'Microbus' | 'Camioneta' | 'Automóvil' = 'Bus';
  public linea: string = '';
  public color: 'Blanco' | 'Gris' | 'Azul' = 'Blanco';
  public capacidad: number = 0;
  public conductor: Empleado = new Empleado();

  constructor(init?: Partial<Vehiculo>) {
    if (init) {
      Object.assign(this, { ...init, conductor: undefined });
      this.conductor = new Empleado(init.conductor);
    }
  }
}
