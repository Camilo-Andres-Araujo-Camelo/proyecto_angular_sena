import { Ruta } from './ruta';
import { Tiquete } from './tiquete';
import { Vehiculo } from './vehiculo';

export class Viaje {
  public id: number = 0;
  public ruta: Ruta = new Ruta();
  public horaSalida?: string;
  public horaLlegada?: string;
  public lat: number = 0;
  public lng: number = 0;
  public vehiculo: Vehiculo = new Vehiculo();
  public estado: 'Agendado' | 'En camino' | 'Finalizado' = 'Agendado';
  public tiquetesEmitidos: Tiquete[] = [];

  constructor(init?: Partial<Viaje>) {
    if (init) {
      Object.assign(this, {
        ...init,
        ruta: undefined,
        vehiculo: undefined,
        tiquetesEmitidos: undefined,
      });
      this.ruta = new Ruta(init?.ruta);
      this.vehiculo = new Vehiculo(init?.vehiculo);
      this.tiquetesEmitidos =
        init?.tiquetesEmitidos?.map((te) => new Tiquete(te)) || [];
    }
  }
}
